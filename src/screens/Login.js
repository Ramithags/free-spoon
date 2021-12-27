import Background from '../component/Background';
import Logo from '../component/Logo';
import Header from '../component/Header';
import TextInput from '../component/TextInput';
import { useState } from 'react';
import CustomButton from '../component/CustomButton';
import { emailValidator, passwordValidator } from '../validators/Validate';

export default function LoginScreen({navigation}) {
  //Init the the variales for the textInput layouts to use states
  const [ email, setEmail] = useState ({value: '', error: '' })
  const [ password, setPassword] = useState ({value: '', error: '' })

  const onClickLogin= () =>{
    const emailError = emailValidator(email.value)
    const passwordError = passwordValidator(password.value)
    if (emailError || passwordError) {
      setEmail({ ...email, error: emailError })
      setPassword({ ...password, error: passwordError })
      return
    }
    navigation.reset({
      index: 0,
      routes: [{ name: 'HomeScreen' }],
    })
  }
  return (
    <Background>
    <Logo />
    <Header>Welcome to login.</Header>
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
      <CustomButton mode="contained" onPress={onClickLogin}>
        Login
      </CustomButton>
  </Background>

  );
}