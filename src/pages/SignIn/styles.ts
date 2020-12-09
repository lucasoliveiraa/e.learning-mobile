import { Platform } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 0 30px;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-family: Rubik-Regular;
  font-size: 36px;
  color: #EDEBF5;
  margin: 40px 0 20px;
`;

export const CreateAccountButton = styled.TouchableOpacity`
  width: 100%;
  margin-top: 5px;
  padding: 10px 0;

  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const CreateAccountButtonText = styled.Text`
  color: #FF6680;
  font-size: 16px;
  font-family: 'Roboto';
  margin-left: 16px;
`;
