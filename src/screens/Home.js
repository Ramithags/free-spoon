import React from 'react';
import Background from '../component/Background';
import Logo from '../component/Logo';
import Header from '../component/Header';


export default function HomeScreen(){
    return(
        <Background>
        <Logo/>
        <Header>Hola you are at home page!!</Header>
      </Background>
);
}