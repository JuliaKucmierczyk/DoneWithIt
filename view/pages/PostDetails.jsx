import React, { useState, useEffect } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import axios from "axios";

const PostDetails = ({ selectedPost }) => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/comments?postId=${selectedPost}`
        );
        setComments(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };

    fetchComments();
  }, [selectedPost]);

  const renderComment = ({ item }) => (
    <View style={styles.commentContainer}>
      <Text style={styles.commentName}>{item.email}</Text>
      <Text style={styles.commentName}>{item.name}</Text>
      <Text style={styles.commentBody}>{item.body}</Text>
    </View>
  );

  return (
    <View style={styles.contentView}>
      <FlatList
        data={comments}
        renderItem={renderComment}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  contentView: {
    flex: 1,
    paddingHorizontal: 15,
  },
  noComments: {
    fontSize: 16,
    marginBottom: 15,
    color: "#aaa",
  },
  commentContainer: {
    padding: 15,
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
  commentName: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 5,
  },
  commentBody: {
    fontSize: 14,
  },
});

export default PostDetails;
