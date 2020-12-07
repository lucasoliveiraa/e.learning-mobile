import React from 'react';

import { Container, ImageBackground, Image, Title, SubTitle, Button, TextButton } from './styles';

import eLearning from '../../assets/e.learning.png';
import landingImage from '../../assets/landing-image.png';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const Landing: React.FC = () => {
  const navigation = useNavigation();

  const handleSignIn = () => {
    navigation.navigate('SignIn');
  }

  return (
    <>
      <ImageBackground source={eLearning}>
        <Container>
          <Image source={landingImage} />
          <Title>Aprenda da melhor forma</Title>
          <SubTitle>Entre na plataforma e acesse cursos de diversas áreas de conhecimento.</SubTitle>
          <Button onPress={handleSignIn}>
            <TextButton>Começar os estudos</TextButton>
          </Button>

        </Container>
      </ImageBackground>
    </>
  );
}

export default Landing;
