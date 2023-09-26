import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button, Icon } from 'react-native-elements';

const Tela1 = () => {
  return (
    <View style={styles.container}>
      <Button
        icon={
          <Icon
            name="article"
            type="material"
            color="white"
            size={70}

          />
        }

        buttonStyle={styles.button}
        titleStyle={styles.buttonText}
        title="Modificar"
      />

      <Button
        icon={
          <Icon
            name="checkbox-multiple-outline"
            type="material-community"
            color="white"
            size={70}

          />
        }

        buttonStyle={styles.button}
        titleStyle={styles.buttonText}
        title="Coletar Dados"
      />
      <Button
        icon={
          <Icon
            name="reload"
            type="material-community"
            color="white"
            size={70}

          />
        }

        buttonStyle={styles.button}
        titleStyle={styles.buttonText}
        title="Coletar Dados"
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
    width: 150,
    height: 150,
    borderRadius: 10,
    marginBottom: 20,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 25,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

});

export default Tela1; 