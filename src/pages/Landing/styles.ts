import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const ImageBackground = styled.ImageBackground`
  width: 467px;
  height: 506px;
  flex: 1;
  border: 4px solid #5E4399;
`;

export const Image = styled.Image`
  width: 203px;
  height: 304px;
`;

export const Container = styled.View`
  flex: 1;
  margin: 0 35px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
`;

export const Title = styled.Text`
  width: 230px;
  margin-top: 40px;

  font-family: Rubik-Regular;
  font-size: 36px;
  color: #FF6680;
`;

export const SubTitle = styled.Text`
  width: 217px;
  margin-top: 16px;

  font-family: Roboto;
  font-size: 15px;
  line-height: 25px;
  color: #EDEBF5;
`;

export const Button = styled(RectButton)`
  justify-content: center;
  align-items: center;

  width: 303px;
  height: 56px;
  margin-top: 40px;
  margin-bottom: 10px;
  background: #FF6680;
  border-radius: 100px;
`;

export const TextButton = styled.Text`
  font-family: Roboto;
  font-size: 15px;
  color: #FFFFFF;
`;
