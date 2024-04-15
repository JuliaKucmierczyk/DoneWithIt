import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import PostsView from "./view/PostsView";
import UsersView from "./view/UsersView";
import AlbumsView from "./view/AlbumsView";
import PhotosView from "./view/PhotosView";
import TodosView from "./view/TodosView";
import Menu from "./view/Menu";

const App = () => {
  const [view, setView] = useState(null);
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const renderView = () => {
    switch (view) {
      case "posts":
        return <PostsView />;
      case "users":
        return <UsersView />;
      case "albums":
        return <AlbumsView />;
      case "photos":
        return <PhotosView />;
      case "todos":
        return <TodosView />;
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
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
        <Menu
          onPress={(selectedView) => {
            setView(selectedView);
            setMenuVisible(false);
          }}
        />
      )}
      <View style={styles.contentContainer}>{renderView()}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  navbar: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    height: 60,
    paddingHorizontal: 20,
    backgroundColor: "#007bff",
  },

  contentContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  contentView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
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

export default App;
