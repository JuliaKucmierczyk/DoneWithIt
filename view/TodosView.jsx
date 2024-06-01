import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import axios from "axios";

const TodoItem = ({ title, completed, onPress }) => {
  const textDecorationLine = completed ? "line-through" : "none";

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.todoContainer}>
        <Text
          style={[styles.todoTitle, { textDecorationLine }]}
          numberOfLines={1}
        >
          {title}
        </Text>
      </View>
    </TouchableOpacity>
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

  const toggleTodoCompletion = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const renderTodo = ({ item }) => (
    <TodoItem
      key={item.id}
      title={item.title}
      completed={item.completed}
      onPress={() => toggleTodoCompletion(item.id)}
    />
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
    marginHorizontal: 20,
    marginBottom: 15,
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