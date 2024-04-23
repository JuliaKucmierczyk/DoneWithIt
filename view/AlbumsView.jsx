import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import axios from "axios";
import AlbumDetails from "./pages/AlbumDetails";

const AlbumItem = ({ title, onPress }) => (
  <TouchableOpacity style={styles.albumContainer} onPress={onPress}>
    <Text style={styles.albumTitle}>{title}</Text>
  </TouchableOpacity>
);

const Separator = () => {
  return <View style={styles.separator} />;
};

const AlbumsView = () => {
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedAlbumId, setSelectedAlbumId] = useState(null);

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/albums"
        );
        setAlbums(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching albums:", error);
      }
    };

    fetchAlbums();
  }, []);

  const renderAlbum = ({ item }) => (
    <AlbumItem
      key={item.id}
      title={item.title}
      onPress={() => setSelectedAlbumId(item.id)}
    />
  );

  return (
    <View style={styles.contentView}>
      <Text style={styles.header}>Albums</Text>
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <FlatList
          data={albums}
          renderItem={renderAlbum}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={Separator}
        />
      )}
      {selectedAlbumId && (
        <AlbumDetails style={styles.details} albumId={selectedAlbumId} />
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
  albumContainer: {
    padding: 15,
    margin: 10,
    borderRadius: 10,
    backgroundColor: "#fff",
    shadowColor: "#ccc",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  albumTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  separator: {
    height: 1,
    backgroundColor: "#ddd",
  },
  details: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
});

export default AlbumsView;
