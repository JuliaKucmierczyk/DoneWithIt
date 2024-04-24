import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import axios from "axios";
import PostDetails from "./pages/PostDetails";

const PostItem = ({ title, body, onPress }) => {
  return (
    <TouchableOpacity style={styles.postContainer} onPress={onPress}>
      <Text style={styles.postTitle}>{title}</Text>
      <Text style={styles.postBody}>{body}</Text>
    </TouchableOpacity>
  );
};

const PostsView = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        setPosts(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  const renderPost = ({ item }) => (
    <PostItem
      key={item.id}
      title={item.title}
      body={item.body}
      onPress={() => setSelectedPost(item.id)}
    />
  );

  return (
    <View style={styles.contentView}>
      {selectedPost ? (
        <>
          <Text style={styles.header}>Comments</Text>
          <PostDetails selectedPost={selectedPost} />
        </>
      ) : (
        <>
          <Text style={styles.header}>Posts</Text>
          <FlatList
            data={posts}
            renderItem={renderPost}
            keyExtractor={(item) => item.id}
          />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  contentView: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    margin: 10,
    color: "#333",
  },
  postContainer: {
    padding: 15,
    marginHorizontal: 20,
    marginTop: 15,
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
  postTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  postBody: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default PostsView;
