import React from 'react';
import {
  TextInput,
  type TextInputProps,
  View,
  type ViewStyle,
} from 'react-native';

export type InputFieldProps = Omit<TextInputProps, 'className'> & {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  containerClassName?: string;
  containerStyle?: ViewStyle;
  className?: string;
};

function inputPaddingClasses(
  leftIcon: React.ReactNode | undefined,
  rightIcon: React.ReactNode | undefined,
) {
  if (leftIcon != null && rightIcon != null) return 'pl-3 pr-3';
  if (leftIcon != null) return 'pl-3 pr-4';
  if (rightIcon != null) return 'pl-8 pr-2';
  return 'px-8';
}

export function InputField({
  leftIcon,
  rightIcon,
  className,
  containerClassName,
  containerStyle,
  style,
  ...textInputProps
}: InputFieldProps) {
  const pad = inputPaddingClasses(leftIcon, rightIcon);

  return (
    <View
      className={[
        'flex-row items-stretch min-h-14 overflow-hidden rounded-full border border-gray-300 bg-white',
        containerClassName,
      ]
        .filter(Boolean)
        .join(' ')}
      style={containerStyle}
    >
      {leftIcon != null ? (
        <View className="justify-center pl-6">{leftIcon}</View>
      ) : null}
      <TextInput
        className={[
          'flex-1 self-stretch py-0 text-base text-gray-900 text-lg',
          'placeholder:text-gray-400',
          pad,
          className,
        ]
          .filter(Boolean)
          .join(' ')}
        style={style}
        placeholderTextColor="#9ca3af"
        {...textInputProps}
      />
      {rightIcon != null ? (
        <View className="justify-center pr-6">{rightIcon}</View>
      ) : null}
    </View>
  );
}

export default InputField;
