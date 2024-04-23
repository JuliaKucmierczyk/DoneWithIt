import { View, Text, StyleSheet } from "react-native";

const TodosView = () => {
  return (
    <View style={styles.contentView}>
      <Text style={styles.header}>Todos View</Text>
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

export default TodosView;
