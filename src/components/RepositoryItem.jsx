import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import StyledText from './StyledText.jsx';
import RepositoryStats from './RepositoryStats.jsx';
import theme from '../theme.js';

const RepositoryItemHeader = (props) => (
  <View style={{ flexDirection: "row", paddingBottom: 2 }}>
    <View style = {{paddingRight : 10}}>
        <Image style={styles.image} source={{ uri: props.imagen }} />
    </View>
    {/* Flex 1 es para que se acomode el texto en el view */}
    <View style = {{flex: 1}}>
      <StyledText fontSize="subheading" fontWeight="bold">
        id: {props.id}
      </StyledText>
      <StyledText small>Nombre: {props.nombre}</StyledText>
      <StyledText blue>Primer Apellido: {props.primerApellido}</StyledText>
      <StyledText blue>Segundo Apellido: {props.segundoApellido}</StyledText>
      <StyledText style={styles.colonia}>Colonia {props.colonia}</StyledText>
    </View>
  </View>
);

const RepositoryItem = (props) => (
  <View key={props.id} style={styles.container}>
    <RepositoryItemHeader {...props} />
    <RepositoryStats {...props} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 5,
    paddingTop: 5,
  },
  strong: {
    color: "#09f",
    fontWeight: "bold",
    marginBottom: 5,
  },
  colonia: {
    padding: 4,
    color: theme.colors.white,
    backgroundColor: theme.colors.primary,
    alignSelf: "flex-start",
    borderRadius: 4,
    overflow: "hidden",
  },
  image: {
    width: 48,
    height: 48,
    borderRadius: 4,
  },
});

export default RepositoryItem;
