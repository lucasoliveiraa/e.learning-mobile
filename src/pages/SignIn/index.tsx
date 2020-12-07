import React from 'react';
import { Image } from 'react-native';

import Input from '../../components/Input';
import Button from '../../components/Button';

import landingImage from '../../assets/landing-image.png';
import { useNavigation } from '@react-navigation/native';

import { Container, Title } from './styles';

const SignIn: React.FC = () => {
  // const navigation = useNavigation();

  // const handleSignIn = () => {
  //   navigation.navigate('SignIn');
  // }

  return (
    <Container>
      <Image source={landingImage} />
      <Title>Faça seu Logon</Title>

      <Input name="email" icon="mail" placeholder="E-mail" />

      <Input name="password" icon="lock" placeholder="Senha" />

      <Button onPress={() => {}}>
        Entrar
      </Button>
    </Container>
  );
}

export default SignIn;
