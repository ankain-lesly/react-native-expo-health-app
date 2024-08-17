import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button, FlatList } from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";
// import { AsyncStorage } from "react-native";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  useEffect(() => {
    loadTodos();
  }, []);

  const loadTodos = async () => {
    try {
      const storedTodos = await AsyncStorage.getItem("todos");
      if (storedTodos) {
        setTodos(JSON.parse(storedTodos));
      }
    } catch (error) {
      console.error("Error loading todos:", error);
    }
  };

  const saveTodos = async () => {
    try {
      await AsyncStorage.setItem("todos", JSON.stringify(todos));
    } catch (error) {
      console.error("Error saving todos:", error);
    }
  };

  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, { text: newTodo, completed: false }]);

      setNewTodo("");

      saveTodos();
    }
  };

  const handleToggleCompleted = (index) => {
    const updatedTodos = [...todos];

    updatedTodos[index].completed = !updatedTodos[index].completed;

    setTodos(updatedTodos);

    saveTodos();
  };

  const handleDeleteTodo = (index) => {
    const updatedTodos = [...todos];

    updatedTodos.splice(index, 1);

    setTodos(updatedTodos);

    saveTodos();
  };

  return (
    <View>
      <TextInput
        value={newTodo}
        onChangeText={(text) => setNewTodo(text)}
        placeholder="Enter new todo"
        className="border m-2 px-4 py-2 rounded-full"
        // onKeyPress={(e) => console.log(e)}
      />

      <Button title="Add Todo" onPress={handleAddTodo} />

      <FlatList
        data={todos}
        renderItem={({ item, index }) => (
          <View>
            <Text
              style={{
                textDecorationLine: item.completed ? "line-through" : "none",
              }}>
              {item.text}
            </Text>

            <Button
              title={item.completed ? "Uncomplete" : "Complete"}
              onPress={() => handleToggleCompleted(index)}
            />

            <Button title="Delete" onPress={() => handleDeleteTodo(index)} />
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default TodoApp;
