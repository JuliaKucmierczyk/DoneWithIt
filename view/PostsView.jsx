import { View, Text, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import axios from "axios";

const PostItem = ({ title, body }) => {
  return (
    <View style={styles.postContainer}>
      <Text style={styles.postTitle}>{title}</Text>
      <Text style={styles.postBody}>{body}</Text>
    </View>
  );
};

const PostsView = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

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

  return (
    <View style={styles.header}>
      <Text>Posts View</Text>
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <View>
          {posts.map((post) => (
            <PostItem key={post.id} title={post.title} body={post.body} />
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  postContainer: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    margin: 10,
    top: 140, // check that later
  },
  postTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  postBody: {
    fontSize: 16,
  },
});

export default PostsView;
