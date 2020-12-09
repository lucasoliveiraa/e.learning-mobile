import React, { useCallback } from 'react';
import { Image, View, KeyboardAvoidingView, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { Form } from '@unform/mobile';

import Input from '../../components/Input';
import Button from '../../components/Button';
import { useNavigation } from '@react-navigation/native';

import { Container, Title, ButtonBack } from './styles';
import { ScrollView } from 'react-native-gesture-handler';

const SignUp: React.FC = () => {
  const navigation = useNavigation();

  const handleSignUp = useCallback((data: object) => {
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
          <ButtonBack onPress={() => navigation.goBack()}>
            <Icon name="arrow-left" size={25} color="#FF6680" style={{ paddingLeft: 30, paddingTop: 20}} />
          </ButtonBack>

          <Container>
            {/* <Image source={landingImage} /> */}

            <View>
              <Title>Crie sua conta</Title>
            </View>
            <Form onSubmit={handleSignUp}>
              <Input name="nome" icon="user" placeholder="Nome" />

              <Input name="email" icon="mail" placeholder="E-mail" />

              <Input name="password" icon="lock" placeholder="Senha" />

              <Button onPress={() => {}}>
                Entrar
              </Button>
            </Form>

          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default SignUp;
