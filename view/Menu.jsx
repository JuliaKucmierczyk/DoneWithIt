import React from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Menu = ({ onPress, menuVisible, toggleMenu }) => {
  return (
    <View style={styles.menuContainer}>
      <View style={styles.navbar}>
        <TouchableOpacity onPress={toggleMenu}>
          <Ionicons
            name={menuVisible ? "close" : "menu"}
            size={32}
            color="#fff"
          />
        </TouchableOpacity>
      </View>
      {menuVisible && (
        <View style={styles.menu}>
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
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  menuContainer: {
    position: "absolute",
    top: 60,
    left: 0,
    backgroundColor: "#fff",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
    zIndex: 1,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    backgroundColor: "#007bff",
  },
  menuItem: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  menuText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
});

export default Menu;
