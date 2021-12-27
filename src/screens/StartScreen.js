import React from 'react';
import Background from '../component/Background';
import Logo from '../component/Logo';
import Header from '../component/Header';
import CustomButton from '../component/CustomButton';
import Paragraph from '../component/Paragraph';


export default function StartScreen({navigation}) {
  return (
   <Background>
     <Logo/>
     <Header></Header>
     <Paragraph>
       Login Demo
     </Paragraph>
     <CustomButton
        mode="contained"
        onPress={() => navigation.navigate('LoginScreen')}
      >
        Login
      </CustomButton>
      <CustomButton
        mode="contained"
        onPress={() => navigation.navigate('Registration')}
      >
        Sign Up
      </CustomButton>
   </Background>
  );
}

