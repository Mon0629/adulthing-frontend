import React from 'react';
import {
  Pressable,
  TextInput,
  type TextInputProps,
  View,
  type ViewStyle,
} from 'react-native';

export type InputFieldProps = Omit<TextInputProps, 'className'> & {
  type?: 'text' | 'password';
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  /** When set, the right icon is tappable (e.g. toggle `secureTextEntry` from the parent). */
  onRightIconPress?: () => void;
  rightIconAccessibilityLabel?: string;
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
  type = 'text',
  leftIcon,
  rightIcon,
  onRightIconPress,
  rightIconAccessibilityLabel,
  className,
  containerClassName,
  containerStyle,
  style,
  secureTextEntry,
  ...textInputProps
}: InputFieldProps) {
  const pad = inputPaddingClasses(leftIcon, rightIcon);
  const resolvedSecureTextEntry = secureTextEntry ?? type === 'password';

  return (
    <View
      className={[
        'flex-row items-stretch min-h-12 min-w-full overflow-hidden rounded-full border border-gray-300 bg-white',
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
        secureTextEntry={resolvedSecureTextEntry}
        {...textInputProps}
      />
      {rightIcon != null ? (
        onRightIconPress != null ? (
          <Pressable
            accessibilityLabel={rightIconAccessibilityLabel}
            accessibilityRole="button"
            className="justify-center pr-6"
            hitSlop={8}
            onPress={onRightIconPress}
          >
            {rightIcon}
          </Pressable>
        ) : (
          <View className="justify-center pr-6">{rightIcon}</View>
        )
      ) : null}
    </View>
  );
}

