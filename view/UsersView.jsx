import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import axios from "axios";
import UserDetails from "../view/pages/UserDetails";

const UserItem = ({ name, email, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.userContainer}>
        <Text style={styles.userName}>{name}</Text>
        <Text style={styles.userEmail}>{email}</Text>
      </View>
    </TouchableOpacity>
  );
};

const UsersView = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setUsers(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  const fetchUserDetails = async (userId) => {
    const albumsResponse = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${userId}/albums`
    );
    const postsResponse = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${userId}/posts`
    );

    return { albums: albumsResponse.data, posts: postsResponse.data };
  };

  const renderUser = ({ item }) => (
    <UserItem
      key={item.id}
      name={item.name}
      email={item.email}
      onPress={() => {
        setSelectedUser(item);
        fetchUserDetails(item.id).then((userDetails) =>
          setSelectedUser({ ...item, ...userDetails })
        );
      }}
    />
  );

  return (
    <View style={styles.contentView}>
      <Text style={styles.header}>Users View</Text>
      {loading ? (
        <Text>Loading...</Text>
      ) : selectedUser ? (
        <UserDetails user={selectedUser} />
      ) : (
        <FlatList
          data={users}
          renderItem={renderUser}
          keyExtractor={(item) => item.id}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  contentView: {
    flex: 1,
    alignItems: "center",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    margin: 10,
    color: "#333",
    textAlign: "center",
  },
  userContainer: {
    flexDirection: "column",
    alignItems: "center",
    width: 350,
    padding: 10,
    margin: 10,
    borderRadius: 10,
    backgroundColor: "#fff",
    shadowColor: "#ccc",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
  },
  userName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  userEmail: {
    fontSize: 16,
    color: "#aaa",
  },
});

export default UsersView;
