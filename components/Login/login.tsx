import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import React, { useState } from "react";

export default function Login() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const access = () => {
    console.log('User:', user);
    console.log('Password:', password);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      
      <View style={styles.formContainer}>
        <Text style={styles.label}>username</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your name"
          placeholderTextColor="#888"
          value={user}
          onChangeText={(text) => setUser(text)}
        />
        
        <Text style={styles.label}>password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          placeholderTextColor="#888"
          value={password}
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
        />
        
        <TouchableOpacity style={styles.button} onPress={access}>
          <Text style={styles.buttonText}>Access</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 300,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  formContainer: {
    width: "100%",
  },
  label: {
    marginBottom: 8,
    fontSize: 14,
  },
  input: {
    width: "100%",
    backgroundColor: "#e0e0e0",
    padding: 12,
    marginBottom: 16,
    borderRadius: 2,
  },
  button: {
    width: "100%",
    backgroundColor: "#1a237e",
    padding: 14,
    alignItems: "center",
    marginTop: 8,
  },
  buttonText: {
    color: "white",
    fontWeight: "500",
  },
});