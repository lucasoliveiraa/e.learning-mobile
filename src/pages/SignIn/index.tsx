import React, { useCallback } from 'react';
import { Image, View, KeyboardAvoidingView, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { Form } from '@unform/mobile';

import Input from '../../components/Input';
import Button from '../../components/Button';

import landingImage from '../../assets/landing-image.png';
import { useNavigation } from '@react-navigation/native';

import { Container, Title, CreateAccountButton, CreateAccountButtonText } from './styles';
import { ScrollView } from 'react-native-gesture-handler';

const SignIn: React.FC = () => {
  const navigation = useNavigation();

  const handleSignIn = useCallback((data: object) => {
    console.log(data);
  }, []);

  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled
      >
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ flex: 1 }}
        >
          <Container>
            <Image source={landingImage} />

            <View>
              <Title>Faça seu Logon</Title>
            </View>
            <Form onSubmit={handleSignIn}>
              <Input name="email" icon="mail" placeholder="E-mail" />

              <Input name="password" icon="lock" placeholder="Senha" />

              <Button onPress={() => {}}>
                Entrar
              </Button>
            </Form>

            <CreateAccountButton onPress={() => navigation.navigate('SignUp')}>
              <Icon name="log-in" size={20} color="#FF6680" />
              <CreateAccountButtonText>Criar sua conta</CreateAccountButtonText>
            </CreateAccountButton>
          </Container>
        </ScrollView>

      </KeyboardAvoidingView>
    </>
  );
};

export default SignIn;
