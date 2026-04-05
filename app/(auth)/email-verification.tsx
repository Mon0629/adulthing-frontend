import { Button } from '@/components/ui/button';
import { Header } from '@/components/ui/header';
import React, { useRef, useState } from 'react';
import {
  Text,
  TextInput,
  View,
  type NativeSyntheticEvent,
  type TextInputKeyPressEventData,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';

const CODE_LENGTH = 6;

export default function EmailVerification() {
  const [digits, setDigits] = useState<string[]>(() =>
    Array.from({ length: CODE_LENGTH }, () => ''),
  );
  const inputRefs = useRef<(TextInput | null)[]>([]);

  const handleChange = (text: string, index: number) => {
    const numeric = text.replace(/\D/g, '');
    if (numeric.length > 1) {
      const chars = numeric.slice(0, CODE_LENGTH).split('');
      setDigits((prev) => {
        const next = [...prev];
        for (let i = 0; i < chars.length && index + i < CODE_LENGTH; i++) {
          next[index + i] = chars[i]!;
        }
        return next;
      });
      const focusAt = Math.min(index + chars.length - 1, CODE_LENGTH - 1);
      inputRefs.current[focusAt]?.focus();
      return;
    }
    const digit = numeric.slice(-1);
    setDigits((prev) => {
      const next = [...prev];
      next[index] = digit;
      return next;
    });
    if (digit && index < CODE_LENGTH - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  //automatic next input when the user presses the next input
  const handleKeyPress = (
    e: NativeSyntheticEvent<TextInputKeyPressEventData>,
    index: number,
  ) => {
    if (e.nativeEvent.key === 'Backspace' && !digits[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

//verify the code
const handleVerify = () => {
  router.push('/(auth)/success');
};


  return (
    <SafeAreaView className="flex-1 px-6 py-4">
      <Header showNotificationButton={false} title="Verification" onBack={() => {router.back()}}/>
      <View className="flex h-full justify-center items-center gap-12 px-6">
        <View className="flex justify-center items-center gap-6">
          <Text className=" text-4xl font-arthaus text-primary">
            Verify your email
          </Text>
          <Text className="text-md text-center text-tertiary font-medium">
            Enter the 6 digit verification code we sent to{' '}
            <Text className="text-primary font-bold">example@gmail.com</Text>
          </Text>
        </View>
        <View className="mt-6 mb-8 flex-row justify-center gap-1">
          {Array.from({ length: CODE_LENGTH }, (_, index) => (
            <TextInput
              key={index}
              ref={(el) => {
                inputRefs.current[index] = el;
              }}
              className="h-28 w-14 rounded-2xl border text-4xl border-gray-300 bg-white text-center text-gray-900"
              placeholderTextColor="#d1d5db"
              keyboardType="number-pad"
              maxLength={CODE_LENGTH}
              value={digits[index]}
              onChangeText={(text) => handleChange(text, index)}
              onKeyPress={(e) => handleKeyPress(e, index)}
              selectTextOnFocus
              onFocus={() => {
                inputRefs.current[index]?.focus();
              }}
            />
          ))}
        </View>
        <Button onClick={handleVerify} variant="primary" className="w-full">
          Verify
        </Button>

        <Text>
          Didn't receive the code?{' '}
          <Text className="text-primary font-bold">Resend</Text>
        </Text>
      </View>
    </SafeAreaView>
  );
}
