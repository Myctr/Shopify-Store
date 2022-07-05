import React, {useState} from 'react';
import {
  View,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import Logo from '../../components/Logo';
import TextInput from '../../components/TextInput';
import Text from '../../components/Text';
import Button from '../../components/Button';
import ActivityIndicator from '../../components/ActivityIndicator';
import styles from '../../styles/auth/styles';
import colors from '../../styles/colors';

import {useMutation} from '@apollo/client';
import CUSTOMER_CREATE from '../../graphql/mutations/CUSTOMER_CREATE';

const LoginView = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [loading, setLoading] = useState(false);

  const [customerCreateFunc, customerCreateData] = useMutation(
    CUSTOMER_CREATE,
    {
      onCompleted: data => {
        if (data.customerCreate.customer) {
          setLoading(false);
          alert('Sign up successful you are redirected');
          props.navigation.navigate('LoginView');
        } else {
          setLoading(false);
          data.customerCreate.customerUserErrors.map(err => {
            alert(err.message);
          });
        }
      },
    },
  );

  const haveAccountClicked = () => {
    props.navigation.navigate('LoginView');
  };
  const signUpButtonClicked = () => {
    setLoading(true);
    customerCreateFunc({
      variables: {
        input: {
          email: email,
          firstName: firstName,
          lastName: lastName,
          password: password,
        },
      },
    });
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
          REGISTER
        </Text>
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.body}>
        <ScrollView>
          <View style={styles.textInputContainer}>
            <TextInput
              value={firstName}
              setValue={setFirstName}
              keyboardType={'default'}
              placeholder={'Firstname'}
              autoCapitalize={'sentences'}
            />
          </View>
          <View style={styles.textInputContainer}>
            <TextInput
              value={lastName}
              setValue={setLastName}
              keyboardType={'default'}
              placeholder={'Lastname'}
              autoCapitalize={'sentences'}
            />
          </View>
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
          <View style={styles.buttonContainer}>
            <Button bgColor={colors.blue} onPress={signUpButtonClicked}>
              <Text
                color={colors.white}
                fontFamily="Ubuntu-Bold"
                fontSize={16}
                lineHeight={18}>
                Login
              </Text>
            </Button>
          </View>
          <TouchableOpacity
            style={styles.forgotPasswordButton}
            onPress={haveAccountClicked}>
            <Text
              color={colors.black}
              fontFamily="Ubuntu-Bold"
              fontSize={10}
              lineHeight={12}>
              Already have an account?
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

export default LoginView;
