import {View, Text, TextInput, Pressable} from 'react-native';
import React from 'react';

const SignUp = () => {
  return (
    <View>
      <View>
        <Text>이름</Text>
        <TextInput placeholder="이름을 입력해주세요." />
      </View>
      <View>
        <Text>이메일</Text>
        <TextInput placeholder="이메일을 입력해주세요." />
      </View>
      <View>
        <Text>비밀번호</Text>
        <TextInput placeholder="비밀번호를 입력해주세요." />
      </View>
      <View>
        <Text>비밀번호 확인</Text>
        <TextInput placeholder="비밀번호을 입력해주세요." />
      </View>
      <View>
        <Text>약관</Text>
        <TextInput placeholder="약관에 동의하시겠습니까?" />
      </View>
      <View>
        <Pressable>
          <Text>회원가입</Text>
        </Pressable>
        <Pressable>
          <Text>로그인</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default SignUp;
