import { View, Text, FlatList, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import axios from "axios";

const TodoItem = ({ title, completed }) => {
  return (
    <View style={styles.todoContainer}>
      <Text style={styles.todoTitle}>{title}</Text>
      {completed && <Text style={styles.completed}>Completed</Text>}
    </View>
  );
};

const TodosView = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/todos"
        );
        setTodos(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching todos:", error);
      }
    };

    fetchTodos();
  }, []);

  const renderTodo = ({ item }) => (
    <TodoItem key={item.id} title={item.title} completed={item.completed} />
  );

  return (
    <View style={styles.contentView}>
      <Text style={styles.header}>Todos View</Text>
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <FlatList
          data={todos}
          renderItem={renderTodo}
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
  todoContainer: {
    borderWidth: 1,
    backgroundColor: "#fff",
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    margin: 10,
  },
  todoTitle: {
    fontSize: 18,
  },
  completed: {
    fontSize: 12,
    color: "#aaa",
  },
});

export default TodosView;
