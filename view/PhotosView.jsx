import { View, Text, StyleSheet } from "react-native";

const PhotosView = () => {
  return (
    <View style={styles.contentView}>
      <Text style={styles.header}>Photos View</Text>
    </View>
  );
};

const styles = StyleSheet.create({
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
});

export default PhotosView;
