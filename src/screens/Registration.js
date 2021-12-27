import React, { useState } from 'react';


import Background from '../component/Background';
import Paragraph from '../component/Paragraph';
import Header from '../component/Header';
import TextInput from '../component/TextInput';
import CustomButton  from '../component/CustomButton';

import { emailValidator, passwordValidator, nameValidator } from '../validators/Validate';

import { Alert } from 'react-native';
;

export default function Registration({navigation}) {
 const [name, setName] = useState({value: '', error: ''})
 const [email, setEmail] = useState({value: '', error:''})
 const [password, setPassword] = useState({value:'', error:''})


 const onRedirectionConfirmation = () =>
    Alert.alert(
      "Success",
      "You have registered successfully!!",
      [
        { text: "OK", onPress: () => navigation.reset({index:0,  routes: [{ name: 'LoginScreen' }],})}
      ]
    );

 const onClickRegistration = () => {
  const emailError = emailValidator(email.value)
  const passwordError = passwordValidator(password.value)
  const nameError = nameValidator(name.value)
  if (emailError || passwordError || nameError) {
    setEmail({ ...email, error: emailError })
    setPassword({ ...password, error: passwordError })
    setName({ ...name, error: nameError })
    return
  }
  onRedirectionConfirmation()
}


  return (
   <Background>
 
     <Header></Header>

    <Paragraph>Registration</Paragraph>
    <TextInput
        label="Name"
        returnKeyType="next"
        value={name.value}
        onChangeText={(text) => setName({ value: text, error: '' })}
        error={!!name.error}
        errorText={name.error}
      />
     <TextInput
        label="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={(text) => setEmail({ value: text, error: '' })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />
    <TextInput
        label="Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={(text) => setPassword({ value: text, error: '' })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />
      <CustomButton
        mode="contained"
        onPress= {onClickRegistration }
      >
        Register
      </CustomButton>
   </Background>
  );
}
