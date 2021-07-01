import React, { Fragment } from 'react';
import { Text } from 'react-native';
import * as SecureStore from 'expo-secure-store';
import { gql, useMutation } from '@apollo/client';

import UserForm from '../components/UserForm';
import Loading from '../components/Loading';

const SIGNIN_USER = gql`
  mutation signIn($email: String, $password: String!) {
    signIn(email: $email, password: $password)
  }
`;

const SignIn = (props) => {
  const storeToken = (token) => {
    SecureStore.setItemAsync('token', token).then(
      props.navigation.navigate('App')
    );
  };

  const [signIn, { loading, error }] = useMutation(SIGNIN_USER, {
    onCompleted: (data) => {
      storeToken(data.signIn);
    },
  });

  if (loading) return <Loading />;
  return (
    <Fragment>
      {error && <Text>Error Signing In</Text>}
      <UserForm
        action={signIn}
        formType="signIn"
        navigation={props.navigation}
      />
    </Fragment>
  );
};

SignIn.navigationOptions = {
  title: 'Sign In',
};

export default SignIn;
