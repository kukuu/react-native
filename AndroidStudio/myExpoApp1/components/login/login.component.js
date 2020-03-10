import React, { useState } from 'react';
import { inject, observer } from 'mobx-react';
import {
  Alert,
  Image,
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { BLACK, LIGHT_GRAY } from 'color.constants';
import InputWithLabel from 'input-with-label.component';

import styles from './login.style';

const inputStyles = StyleSheet.create({
  container: {
    paddingHorizontal: 0,
  },
  input: {
    alignSelf: 'stretch',
    borderColor: LIGHT_GRAY,
    borderRadius: 10,
    borderWidth: 2,
    color: BLACK,
    flexDirection: 'row',
    fontSize: 16,
    marginBottom: 23,
    padding: 10,
  },
  inputContainer: {
    borderBottomWidth: 0,
    flexDirection: 'column',
    paddingBottom: 0,
  },
  label: {
    color: BLACK,
    fontSize: 13,
    marginBottom: 8,
  },
});

const Login = inject('loginStore')(observer(({ loginStore, navigation: { navigate } }) => {
  const [username, setUsername] = useState('me@me.com');
  const [password, setPassword] = useState('bike');
  const [switchValue, setSwitchValue] = useState(true);

  const onChangeEmail = (email) => {
    setUsername(email);
    loginStore.setEmail(email);
  };

  const onChangePassword = (password) => {
    setPassword(password);
    loginStore.setPassword(password);
  };

  const onValueChange = () => {
    setSwitchValue(!switchValue);
  }

  const validateEmail = (email) => {
    const expression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;

    return expression.test(String(email).toLowerCase())
  };

  const validatePassword = password => password.length > 0;

  const login = async () => {
    const { error, login } = loginStore;


    if (!validateEmail(username)) {
      Alert.alert('Invalid Email', 'Please insert a valid email address');
      return;
    }
    if (!validatePassword(password)) {
      Alert.alert('Invalid Password', 'Your password is invalid');
      return;
    }

    loginStore.setPassword(password);

    await login();

    if (!error) {
      navigate('DashboardTabs');
    }
  };

  return (
    <ScrollView keyboardShouldPersistTaps={'handled'}>
      <View style={styles.container} >
        <KeyboardAvoidingView behavior="position" >
          <SafeAreaView>
            <View style={styles.imageContainer}>
              <Image
                source={require('assets/images/nissan-logo.png')}
                style={styles.loginImage}
              />
            </View>
            <InputWithLabel
              clearButton={false}
              containerStyle={inputStyles.container}
              inputContainerStyle={inputStyles.inputContainer}
              inputStyle={{ ...inputStyles.input, ...styles.input }}
              labelStyle={inputStyles.label}
              labelText={'Username'}
              onChangeHandler={onChangeEmail}
              value={username}
            />

            <InputWithLabel
              clearButton={false}
              containerStyle={inputStyles.container}
              inputContainerStyle={inputStyles.inputContainer}
              inputStyle={{ ...inputStyles.input, ...styles.input }}
              inputType={'password'}
              labelStyle={inputStyles.label}
              labelText={'Password'}
              onChangeHandler={onChangePassword}
              value={password}
            />

            <View style={styles.switchContainer}>
              <Text style={styles.label}>Remember me</Text>
              <Switch style={styles.switch} value={switchValue} onValueChange = {onValueChange}/>
            </View>

            <TouchableOpacity
              style={styles.button}
              onPress={login}
            >
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>

          </SafeAreaView>
        </KeyboardAvoidingView>
      </View>
    </ScrollView>
  )
}));

export default Login;
