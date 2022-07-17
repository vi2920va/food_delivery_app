import {RootStackParamList} from '@src/App';
import React, {useCallback, useRef, useState} from 'react';
import {
  NativeSyntheticEvent,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TextInputChangeEventData,
  View,
} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

type SignInScreenProps = NativeStackScreenProps<RootStackParamList, 'SignIn'>;

const SignIn = ({navigation}: SignInScreenProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const emailRef = useRef<TextInput | null>(null);
  const passwordRef = useRef<TextInput | null>(null);
  const canGoNext = email && password;
  const onChangeEmail = useCallback(
    (event: NativeSyntheticEvent<TextInputChangeEventData>) => {
      setEmail(event.nativeEvent.text.trim());
    },
    [],
  );
  const onChangePassword = useCallback(
    (event: NativeSyntheticEvent<TextInputChangeEventData>) => {
      setPassword(event.nativeEvent.text.trim());
    },
    [],
  );
  const onSubmit = useCallback(() => {
    console.log('login');
  }, []);

  const toSignUp = useCallback(() => {
    navigation.navigate('SignUp');
  }, [navigation]);

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
          keyboardType="email-address"
          returnKeyType="next"
          onSubmitEditing={() => emailRef.current?.focus()}
          blurOnSubmit={false}
          ref={emailRef}
          clearButtonMode="while-editing"
        />
      </View>
      <View style={styles.inputWrapper}>
        <Text style={styles.label}>비밀번호</Text>
        <TextInput
          style={styles.textInput}
          placeholder="비밀번호를 입력해주세요"
          value={password}
          onChange={event => onChangePassword(event)}
          importantForAutofill="yes"
          autoComplete="password"
          textContentType="password"
          secureTextEntry
          ref={passwordRef}
          onSubmitEditing={() => passwordRef.current?.focus()}
          blurOnSubmit={false}
          clearButtonMode="while-editing"
        />
      </View>
      <View style={styles.buttonZoom}>
        <Pressable
          onPress={onSubmit}
          style={
            !canGoNext
              ? styles.button
              : [styles.button, styles.loginButtonActive]
          }
          disabled={!canGoNext}>
          <Text style={styles.buttonText}>로그인</Text>
        </Pressable>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText} onPress={toSignUp}>
            회원가입
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonZoom: {
    alignItems: 'center',
  },
  button: {
    width: 90,
    marginTop: 5,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    backgroundColor: 'gray',
    alignItems: 'center',
  },
  buttonText: {
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
