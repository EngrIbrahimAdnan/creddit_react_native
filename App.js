import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import { getAllPostsMethod } from "./api/postMethods";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  const [posts, setPosts] = useState([]); // Initialize as an array

  async function getAllPost() {
    try {
      const response = await getAllPostsMethod(); // Call the async function
      setPosts(response); // Set the fetched data to state
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  }
  useEffect(() => {
    getAllPost();
  }, []);
  const handleView = (id) => {
    console.log(`View item with ID: ${id}`);
  };

  const handleDelete = (id) => {
    console.log(`Delete item with ID: ${id}`);
  };

  // const onChangeText = () => {
  //   console.log("ors");
  // };

  const [searchText, setSearchText] = useState("");
  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={setSearchText}
        value={searchText}
        placeholder="Search by Title"
      />
      <ScrollView>
        {posts.map((post) => {
          if (post.title.toLowerCase().includes(searchText.toLowerCase())) {
            return (
              <View style={styles.itemContainer} key={post.id}>
                <View style={styles.textContainer}>
                  <Text style={styles.title}>{post.title}</Text>
                  <Text style={styles.description}>{post.description}</Text>
                </View>
                <View style={styles.buttonContainer}>
                  <TouchableOpacity
                    style={[styles.button, styles.viewButton]}
                    onPress={() => handleView(post.id)}
                  >
                    <Text style={styles.buttonText}>View</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[styles.button, styles.deleteButton]}
                    onPress={() => handleDelete(post.id)}
                  >
                    <Text style={styles.buttonText}>Delete</Text>
                  </TouchableOpacity>
                </View>
              </View>
            );
          }
        })}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f0f0f0",
  },

  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },

  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  textContainer: {
    flex: 2,
    padding: 10,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    marginBottom: 5,
  },
  button: {
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  viewButton: {
    backgroundColor: "#4caf50",
  },
  deleteButton: {
    backgroundColor: "#f44336",
  },
  buttonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
});
