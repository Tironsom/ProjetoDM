import React from "react";
import { Button, View, StyleSheet } from "react-native";

const But = ({ label, color, size }) => {
  const buttonStyles = {
    backgroundColor: color,
    fontSize: size === "small" ? 16 : 20,
  };

  return (
    <View style={styles.buttonContainer}>
      <Button title={label} color={color} style={buttonStyles} />
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    marginVertical: 10,
  },
});

export default But;
