import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { useMutation } from "@apollo/client";
import { CREATE_USER } from "../../graphql/mutation";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [createUser] = useMutation(CREATE_USER);
  const navigation = useNavigation(); 

  const handleLogin = async () => {
    try {
      const { data } = await createUser({
        variables: {
          input: {
            username,
            email,
          },
        },
      });
      console.log('user created', data);
      if (data && data.createUser) {
        navigation.navigate("Products", { userId: data.createUser.id });
      }  
    } catch (error) {
      console.log(error);
    }
  };

  const handleChangeUsername = (text) => {
    setUsername(text);
  };

  const handleChangeEmail = (text) => {
    setEmail(text);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Username:</Text>
      <TextInput
        style={styles.input}
        value={username}
        onChangeText={handleChangeUsername}
        placeholder="Enter username"
      />
      <Text style={styles.label}>Email:</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={handleChangeEmail}
        placeholder="Enter Email"
        keyboardType="email-address"
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Create Account</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 15,
    paddingLeft: 10,
    borderRadius: 5,
    width: "100%",
  },
  button: {
    backgroundColor: "#007BFF",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
  },
});

export default Login;
