import React, {useCallback, useState} from 'react';
import {
  NativeSyntheticEvent,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TextInputChangeEventData,
  View,
} from 'react-native';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const canGoNext = email && password;
  const onChangeEmail = useCallback(
    (event: NativeSyntheticEvent<TextInputChangeEventData>) => {
      setEmail(event.nativeEvent.text);
    },
    [],
  );
  const onChangePassword = useCallback(
    (event: NativeSyntheticEvent<TextInputChangeEventData>) => {
      setPassword(event.nativeEvent.text);
    },
    [],
  );
  const onSubmit = useCallback(() => {
    console.log('login');
  }, []);

  return (
    <View>
      <View style={styles.inputWrapper}>
        <Text style={styles.label}>이메일</Text>
        <TextInput
          style={styles.textInput}
          placeholder="이메일을 입력해주세요"
          value={email}
          onChange={event => onChangeEmail(event)}
          importantForAutofill="yes"
          autoComplete="email"
          textContentType="emailAddress"
        />
      </View>
      <View style={styles.inputWrapper}>
        <Text style={styles.label}>비밀번호</Text>
        <TextInput
          style={styles.textInput}
          placeholder="비밀번호를 입력해주세요"
          value={password}
          onChange={event => onChangePassword(event)}
          secureTextEntry
        />
      </View>
      <View style={styles.buttonZoom}>
        <Pressable
          onPress={onSubmit}
          style={
            !canGoNext
              ? styles.loginButton
              : [styles.loginButton, styles.loginButtonActive]
          }
          disabled={!canGoNext}>
          <Text style={styles.loginButtonText}>로그인</Text>
        </Pressable>
        <Pressable>
          <Text>회원가입</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonZoom: {
    alignItems: 'center',
  },
  loginButton: {
    marginTop: 5,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    backgroundColor: 'gray',
  },
  loginButtonText: {
    color: '#fff',
  },
  loginButtonActive: {
    backgroundColor: 'lightblue',
  },
  label: {
    marginBottom: 20,
    fontSize: 16,
    fontWeight: 'bold',
  },
  textInput: {
    padding: 5,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  inputWrapper: {
    padding: 20,
  },
});

export default SignIn;
