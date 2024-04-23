import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import axios from "axios";

/// DO NAPRAWY :D

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
  const [albumTitle, setAlbumTitle] = useState("");

  useEffect(() => {
    if (albumId) {
      setLoading(true);
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
    }
  }, [albumId]);

  const renderPhoto = ({ item }) => <PhotoItem key={item.id} {...item} />;

  return (
    <View style={styles.contentView}>
      {loading ? (
        <ActivityIndicator size="small" color="#0000ff" />
      ) : (
        <>
          <Text style={styles.header}>{"Photos for Album: " + albumTitle}</Text>
          {photos.length > 0 ? (
            <FlatList
              data={photos}
              renderItem={renderPhoto}
              keyExtractor={(item) => item.id}
            />
          ) : (
            <Text>No photos found for this album.</Text>
          )}
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
    padding: 50,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
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
