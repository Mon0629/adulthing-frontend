import React from 'react';
import {
  ActivityIndicator,
  TouchableOpacity,
  type TouchableOpacityProps,
  Text,
} from 'react-native';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'destructive' | 'ghost';

export type ButtonProps = Omit<TouchableOpacityProps, 'children' | 'onPress'> & {
  children: React.ReactNode;
  /**
   * Backwards compatible with the prop name you used in the initial component.
   * Prefer `onPress` (React Native naming).
   */
  onClick?: () => void;
  onPress?: () => void;
  disabled?: boolean;
  loading?: boolean;
  variant?: ButtonVariant;
  className?: string;
};

const variantStyles: Record<ButtonVariant, { container: string; text: string; spinner: string }> = {
  primary: { container: 'bg-[#0E4C32]', text: 'text-white', spinner: '#ffffff' },
  secondary: { container: 'bg-gray-200', text: 'text-gray-900', spinner: '#111827' },
  outline: { container: 'bg-white border border-[#0E4C32]', text: 'text-[#0E4C32]', spinner: '#0E4C32' },
  destructive: { container: 'bg-red-400', text: 'text-white', spinner: '#ffffff' },
  ghost: { container: 'bg-transparent', text: 'text-[#0E4C32]', spinner: '#0E4C32' },
};

export function Button({
  children,
  onClick,
  onPress,
  disabled,
  loading,
  variant = 'primary',
  className,
  ...touchableProps
}: ButtonProps) {
  const styles = variantStyles[variant];
  const handlePress = onPress ?? onClick;
  const isDisabled = disabled || loading || handlePress == null;

  return (
    <TouchableOpacity
      accessibilityRole="button"
      onPress={handlePress}
      disabled={isDisabled}
      className={[
        'h-16 min-h-14 rounded-full px-6 items-center justify-center',
        styles.container,
        loading || disabled ? 'opacity-50' : '',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      {...touchableProps}
    >
      {loading ? (
        <ActivityIndicator size="small" color={styles.spinner} />
      ) : (
        <Text className={['text-base text-lg', styles.text].join(' ')}>
          {children}
        </Text>
      )}
    </TouchableOpacity>
  );
}