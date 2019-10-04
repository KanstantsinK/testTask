import React, {useRef, useCallback, useState, useEffect} from 'react';
import {
  SafeAreaView,
  TextInput,
  View,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import Logo from '../../assets/logo';
import {scale} from 'react-native-size-matters/extend';
import {Link, Text, Button} from '../common';
import {colors} from '../../config';
import {styles} from './styles';

const login = ({navigation}) => {
  const passwordRef = useRef(null);
  const [email, setEmail] = useState({value: '', error: false});
  const [password, setPassword] = useState({value: '', error: false});

  const focusPassword = useCallback(() => passwordRef.current.focus());

  const validatePassword = password => {
    const re = /(?=.*\d)(?=.*[a-z]).{8,}/i;
    return re.test(password);
  };

  const validateEmail = email => {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(email);
  };

  const checkEmail = useCallback(() => {
    setEmail({...email, error: !validateEmail(email.value)});
  });

  const checkPassword = useCallback(() => {
    setPassword({
      ...password,
      error: !validatePassword(password.value),
    });
  });

  const tryNavigate = useCallback(() => {
    checkPassword();
    checkEmail();
    if (!email.error && email.value && !password.error && password.value) {
      setTimeout(() => navigation.navigate('Portfolio'), 3000);
      navigation.navigate('Loading');
    }
  }, [checkEmail, checkPassword, email, navigation, password]);

  return (
    <KeyboardAvoidingView style={styles.flexWrapper} behavior="padding" enabled>
      <SafeAreaView styles={styles.flexWrapper}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.wrapper}>
            <Logo style={styles.logo} width={scale(150)} />
            <TextInput
              style={styles.input}
              selectionColor={colors.link.color}
              placeholder={'Email'}
              autoCompleteType="email"
              keyboardType="email-address"
              placeholderTextColor={colors.input.placeholderText}
              returnKeyType={'next'}
              onSubmitEditing={focusPassword}
              blurOnSubmit={false}
              value={email.value}
              onChangeText={newEmail => setEmail({...email, value: newEmail})}
              onBlur={checkEmail}
            />
            <TextInput
              style={styles.input}
              selectionColor={colors.link.color}
              autoCompleteType="password"
              secureTextEntry={true}
              placeholder={'Password'}
              placeholderTextColor={colors.input.placeholderText}
              ref={passwordRef}
              returnKeyType={'done'}
              value={password.value}
              onChangeText={newPassword =>
                setPassword({...password, value: newPassword})
              }
              onBlur={checkPassword}
            />
            <View style={styles.forgotWrapper}>
              <Text>Forgot </Text>
              <Link text="Email" />
              <Text> or </Text>
              <Link text="Password" />
              <Text>?</Text>
            </View>
            <Button
              style={styles.loginButton}
              text="Log In"
              onPress={tryNavigate}
            />
            <View style={styles.signInWrapper}>
              <Text>Don't Have An Account? </Text>
              <Link text="Sign In" />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default login;
