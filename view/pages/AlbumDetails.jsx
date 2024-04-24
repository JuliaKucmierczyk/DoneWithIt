import { View, Text, FlatList, Image, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import axios from "axios";

const PhotoItem = ({ url, title }) => {
  return (
    <View style={styles.photoContainer}>
      <Text style={styles.photoTitle}>{title}</Text>
      <Image source={{ uri: url }} style={styles.photo} />
    </View>
  );
};

const AlbumDetails = ({ albumId }) => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`
        );
        setPhotos(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching photos:", error);
      }
    };

    fetchPhotos();
  }, [albumId]);

  const renderPhoto = ({ item }) => <PhotoItem key={item.id} {...item} />;

  return (
    <View style={styles.contentView}>
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <FlatList
          data={photos}
          renderItem={renderPhoto}
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
    backgroundColor: "#f5f5f5",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    margin: 10,
    color: "#333",
  },
  photoContainer: {
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 10,
    marginHorizontal: 30,
    marginBottom: 20,
    backgroundColor: "#fff",
  },
  photo: {
    width: 250,
    height: 250,
    margin: 20,
    resizeMode: "stretch",
  },
  photoTitle: {
    fontSize: 18,
  },
});

export default AlbumDetails;
