
import { DarkTheme } from '@react-navigation/native';
import React from 'react';
import { StyleSheet } from 'react-native'; 
import { Button as PaperButton } from 'react-native-paper';
import { theme } from './Theme';

export default function CustomButton({mode, style, ...props}){
    return(
        <PaperButton
        style={[
            styles.button,
            mode === 'outlined',
            style,
          ]}
          labelStyle={styles.text}
          mode={mode}
          {...props}
        />
    )
}

export function BackButton({backButton}){
  return(
    <TouchableOpacity onPress={backButton} style={styles.container}>
      <Image
        style={styles.image}
        source={require('../icons/back.png')}
      />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    button: {
      width: '100%',
      marginVertical: 10,
      paddingVertical: 2,
      backgroundColor: theme.colors.primary
    },
    text: {
      fontWeight: 'bold',
      fontSize: 15,
      lineHeight: 26,
    },
  })
  
