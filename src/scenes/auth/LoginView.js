import React, {useState} from 'react';
import {View, TouchableOpacity, StatusBar} from 'react-native';
import Logo from '../../components/Logo';
import TextInput from '../../components/TextInput';
import Text from '../../components/Text';
import Button from '../../components/Button';
import ActivityIndicator from '../../components/ActivityIndicator';
import styles from '../../styles/auth/styles';
import colors from '../../styles/colors';

import {useMutation} from '@apollo/client';
import CUSTOMER_ACCESS_TOKEN from '../../graphql/mutations/CUSTOMER_ACCESS_TOKEN_CREATE';

const LoginView = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const [customerAccessTokenFunc, customerAccessTokenData] = useMutation(
    CUSTOMER_ACCESS_TOKEN,
    {
      onCompleted: data => {
        console.log(data);
        if (data.customerAccessTokenCreate) {
          alert(data.customerAccessTokenCreate.customerAccessToken.accessToken);
        }
        setLoading(false);
      },
      onError: err => {
        console.log(err);
        setLoading(false);
      },
    },
  );

  const forgotPasswordClicked = () => {
    alert('Forgot Password');
  };
  const loginButtonClicked = () => {
    setLoading(true);
    customerAccessTokenFunc({
      variables: {
        input: {
          email: email,
          password: password,
        },
      },
    });
  };
  const signUpButtonClicked = () => {
    props.navigation.navigate('RegisterView');
  };
  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'} />
      {loading && <ActivityIndicator />}
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <Logo />
        </View>
        <Text
          color={colors.white}
          fontFamily="Ubuntu-Bold"
          fontSize={16}
          lineHeight={18}>
          LOGIN
        </Text>
      </View>
      <View style={styles.body}>
        <View style={styles.textInputContainer}>
          <TextInput
            value={email}
            setValue={setEmail}
            keyboardType={'email-address'}
            placeholder={'Email Adresss'}
            autoCapitalize={'none'}
          />
        </View>
        <View style={styles.textInputContainer}>
          <TextInput
            value={password}
            setValue={setPassword}
            keyboardType="default"
            placeholder={'Password'}
            secureTextEntry={true}
          />
        </View>
        <TouchableOpacity
          style={styles.forgotPasswordButton}
          onPress={forgotPasswordClicked}>
          <Text
            color={colors.black}
            fontFamily="Ubuntu-Bold"
            fontSize={10}
            lineHeight={12}>
            Forgot Password?
          </Text>
        </TouchableOpacity>
        <View style={styles.buttonContainer}>
          <Button bgColor={colors.blue} onPress={loginButtonClicked}>
            <Text
              color={colors.white}
              fontFamily="Ubuntu-Bold"
              fontSize={16}
              lineHeight={18}>
              Login
            </Text>
          </Button>
        </View>
        <View style={styles.buttonContainer}>
          <Button bgColor={colors.lightBlue} onPress={signUpButtonClicked}>
            <Text
              color={colors.white}
              fontFamily="Ubuntu-Bold"
              fontSize={16}
              lineHeight={18}>
              Sign Up
            </Text>
          </Button>
        </View>
      </View>
    </View>
  );
};

export default LoginView;
