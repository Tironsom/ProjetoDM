import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button, Icon } from 'react-native-elements';

const Coleta = () => {
  return (

    <View style={styles.container}>
      <View style={styles.textContainer}>

        <Text style={styles.txt}> O que você achou do Carnaval 2024?</Text>

      </View>




      <Button
        icon={
          <Icon
            name="emoticon-confused-outline"
            type="material-community"
            color="red"
            size={50}

          />
        }

        buttonStyle={styles.button}
        titleStyle={styles.buttonText}
        title="Péssimo"
      />

      <Button
        icon={
          <Icon
            name="emoticon-sad-outline"
            type="material-community"
            color="orange"
            size={50}

          />
        }

        buttonStyle={styles.button}
        titleStyle={styles.buttonText}
        title="Ruim"
      />
      <Button
        icon={
          <Icon
            name="emoticon-neutral-outline"
            type="material-community"
            color="yellow"
            size={50}

          />
        }

        buttonStyle={styles.button}
        titleStyle={styles.buttonText}
        title="Neutro"
      />
      <Button
        icon={
          <Icon
            name="emoticon-happy-outline"
            type="material-community"
            color="#7fffd4"
            size={50}

          />
        }

        buttonStyle={styles.button}
        titleStyle={styles.buttonText}
        title="Bom"
      />
      <Button
        icon={
          <Icon
            name="emoticon-excited-outline"
            type="material-community"
            color="#50cf01"
            size={50}

          />
        }

        buttonStyle={styles.button}
        titleStyle={styles.buttonText}
        title="Excelente"
      />

    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3c1a7d',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#533D8B',
    width: 80,
    height: 80,
    borderRadius: 80,
    marginBottom: 20,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 15,
    marginTop: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txt: {
    color: 'white',
    fontSize: 20,

  },
  textContainer: {
    marginBottom: 20,
  },

});

export default Coleta; 
