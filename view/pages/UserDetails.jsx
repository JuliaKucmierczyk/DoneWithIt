import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const UserDetails = ({ user }) => {
  const renderAlbums = ({ item }) => (
    <Text style={styles.albumItem}>{item.title}</Text>
  );

  const renderPosts = ({ item }) => (
    <Text style={styles.postItem}>{item.title}</Text>
  );

  return (
    <View style={styles.detailsContainer}>
      <Text style={styles.detailTitle}>User Details</Text>
      <View style={styles.userInfo}>
        <Text style={styles.detailText}>Name: {user.name}</Text>
        <Text style={styles.detailText}>Username: {user.username}</Text>
        <Text style={styles.detailText}>Email: {user.email}</Text>
        <Text style={styles.detailText}>Phone: {user.phone}</Text>
        <Text style={styles.detailText}>Website: {user.website}</Text>
        <Text style={styles.detailText}>Company: {user.company.name}</Text>
      </View>
      {user.posts && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Posts:</Text>
          <FlatList data={user.posts} renderItem={renderPosts} />
        </View>
      )}
      {user.albums && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Albums:</Text>
          <FlatList data={user.albums} renderItem={renderAlbums} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  detailsContainer: {
    flex: 1,
    padding: 20,
  },
  userInfo: {
    marginBottom: 20,
  },
  detailTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  detailText: {
    fontSize: 16,
    marginBottom: 5,
  },
  section: {
    flex: 1,
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  albumItem: {
    backgroundColor: "#fff",
    padding: 5,
    margin: 5,
    borderRadius: 10,
  },
  postItem: {
    backgroundColor: "#fff",
    padding: 5,
    margin: 5,
    borderRadius: 10,
  },
});

export default UserDetails;
