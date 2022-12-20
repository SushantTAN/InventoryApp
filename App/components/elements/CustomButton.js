import React from "react";
import { Image, TouchableOpacity, View, Text, StyleSheet } from "react-native";

export default CustomButton = (props) => {
  return (
    <TouchableOpacity style={[styles.container, props.style]} onPress={props.onPress}>
      <Text style={styles.text}>{props.title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#b82727',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: 'center'
  },

  text: {
    color: 'white',
    fontSize: 16,
  }
});