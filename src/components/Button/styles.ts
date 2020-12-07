import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled(RectButton)`
  width: 100%;
  height: 56px;
  background: #FF6680;
  border-radius: 100px;

  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  font-family: 'Roboto';
  font-size: 18px;
  color: #FFFFFF;
`;
