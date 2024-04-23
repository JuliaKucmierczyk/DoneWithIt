import React from "react";
import { View, Text, StyleSheet } from "react-native";

const UserDetails = ({ user }) => {
  return (
    <View style={styles.detailsContainer}>
      <Text style={styles.detailTitle}>User Details</Text>
      <Text style={styles.detailText}>Name: {user.name}</Text>
      <Text style={styles.detailText}>Username: {user.username}</Text>
      <Text style={styles.detailText}>Email: {user.email}</Text>
      <Text style={styles.detailText}>Phone: {user.phone}</Text>
      <Text style={styles.detailText}>Website: {user.website}</Text>
      <Text style={styles.detailText}>Company: {user.company.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
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
});

export default UserDetails;
