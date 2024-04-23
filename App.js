import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import PostsView from "./view/PostsView";
import UsersView from "./view/UsersView";
import AlbumsView from "./view/AlbumsView";
import TodosView from "./view/TodosView";
import PhotosView from "./view/PhotosView";
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
    zIndex: 2,
  },
  navbar: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    height: 70,
    paddingHorizontal: 10,
    backgroundColor: "#007bff",
    zIndex: 11,
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
