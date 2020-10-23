import React, { memo } from 'react';
import {
  View,
  Text,
  StyleProp,
  ViewStyle,
  TouchableOpacity,
  TouchableWithoutFeedbackProps
} from 'react-native';
import debounce from 'lodash.debounce';

interface ButtonProps {
  title?: string;
  isLoading?: boolean;
  style?: StyleProp<ViewStyle>;
  styleText?: StyleProp<ViewStyle>;
  icon?: JSX.Element;
  disabled?: boolean;
  onPress: () => void;
  children?: any;
}

const ButtonComponent = React.memo(({ onPress, ...props }: ButtonProps & TouchableWithoutFeedbackProps) => {
  const debouncedOnPress = () => {
    onPress && onPress();
  };

  const onPressAction = debounce(debouncedOnPress, 300, {
    leading: true,
    trailing: false
  });

  return <TouchableOpacity {...props} onPress={onPressAction} children={props.children} />;
});

export default ButtonComponent;
