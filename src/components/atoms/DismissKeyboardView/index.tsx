import React from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleProp,
  TouchableWithoutFeedback,
  ViewStyle,
} from 'react-native';

const DismissKeyboardView: React.FC<{
  style?: StyleProp<ViewStyle>;
  children: React.ReactNode;
}> = ({children, ...props}) => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <KeyboardAvoidingView
        {...props}
        style={props.style}
        behavior={Platform.OS === 'android' ? 'position' : 'padding'}>
        {children}
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default DismissKeyboardView;
