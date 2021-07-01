import React from 'react';
import { View, Button } from 'react-native';
import * as SecureStore from 'expo-secure-store';
import styled from 'styled-components/native';

const SignOutButton = styled.TouchableOpacity`
  background: #0077cc;
  width: 90%;
  padding: 8px;
  margin-top: 16px;
`;

const ButtonText = styled.Text`
  text-align: center;
  color: #fff;
  font-weight: bold;
  font-size: 18px;
`;

const Settings = (props) => {
  const signOut = () => {
    SecureStore.deleteItemAsync('token').then(
      props.navigation.navigate('Auth')
    );
  };
  return (
    <View style={{ display: 'flex', alignItems: 'center' }}>
      <SignOutButton onPress={signOut}>
        <ButtonText>Sign Out</ButtonText>
      </SignOutButton>
    </View>
  );
};

Settings.navigationOptions = {
  title: 'Settings',
};

export default Settings;
