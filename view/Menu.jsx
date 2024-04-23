import React from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";

const Menu = ({ onPress }) => {
  return (
    <View style={styles.menuContainer}>
      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => onPress("posts")}
      >
        <Text style={styles.menuText}>Posts</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => onPress("users")}
      >
        <Text style={styles.menuText}>Users</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => onPress("albums")}
      >
        <Text style={styles.menuText}>Albums</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => onPress("photos")}
      >
        <Text style={styles.menuText}>Photos</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => onPress("todos")}
      >
        <Text style={styles.menuText}>Todos</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  menuContainer: {
    position: "absolute",
    top: 70,
    left: 0,
    backgroundColor: "#fff",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
    zIndex: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    backgroundColor: "#007bff",
  },
  menuItem: {
    paddingHorizontal: 30,
    paddingVertical: 10,
  },
  menuText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
});

export default Menu;
