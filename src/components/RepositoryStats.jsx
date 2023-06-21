import React from 'react';
import StyledText from './StyledText';
import { View } from 'react-native';
const RepositoryStats = props =>{
    return(
        <View style = {{flexDirection: 'row', justifyContent: 'space-around'}}>
            <View>
                <StyledText align ='center' fontWeight = 'bold'>Telefono:</StyledText>
                <StyledText align ='center' fontWeight = 'bold'>{props.telefono}</StyledText>
            </View>
            <View>
                <StyledText align ='center' fontWeight = 'bold'>Electrodomestico:</StyledText>
                <StyledText align ='center' fontWeight = 'bold'>{props.electrodomestico}</StyledText>
            </View>
        </View>
        
    )
}
export default RepositoryStats