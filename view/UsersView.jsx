import { View, Text, StyleSheet } from "react-native";

const UsersView = () => {
  return (
    <View style={styles.contentView}>
      <Text style={styles.header}>Users View</Text>
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

export default UsersView;
