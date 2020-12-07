import styled from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  width: 100%;
  height: 56px;
  padding: 0 16px;
  background: #FFFFFF;
  border-radius: 100px;
  margin-bottom: 8px;

  flex-direction: row;
  align-items: center;
`;

export const TextInput = styled.TextInput`
  flex: 1;
  font-size: 15px;
  color: #C4C4D1;
`;

export const Icon = styled(FeatherIcon)`
  margin-right: 16px;
`;
