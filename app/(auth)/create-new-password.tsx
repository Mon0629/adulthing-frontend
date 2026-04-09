import { Button } from '@/components/ui/button';
import { Header } from '@/components/ui/header';
import { InputField } from "@/components/ui/input-fields";
import { router } from 'expo-router';
import { CheckCircle2, Circle, Eye, EyeClosed, LockIcon } from "lucide-react-native";
import React, { useState } from 'react';
import { Image, Text, View } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';

const iconGray = '#9ca3af';
const iconPrimary = '#0E4C32';

const handleBackToLogin = () => {
  router.push('/(auth)/login');
}

const handleContinue = () => {
  router.push('/(auth)/success?type=password');
}

const passwordRules = [
  { label: 'At least 8 characters', test: (pw: string) => pw.length >= 8 },
  { label: 'One uppercase letter',  test: (pw: string) => /[A-Z]/.test(pw) },
  { label: 'One number',            test: (pw: string) => /[0-9]/.test(pw) },
  { label: 'One special character', test: (pw: string) => /[^A-Za-z0-9]/.test(pw) },
];

function CreateNewPassword() {
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  return (
    <SafeAreaView className="flex-1 px-6 py-10 bg-white">
      <Header showNotificationButton={false} title="adulThing" onBack={() => { router.back() }} />
      <View className="flex justify-center px-6 items-center gap-5">
        <View className="flex justify-center items-center mt-20 gap-2">
          <Image
            source={require('../../assets/images/LogoGreen.png')}
            style={{ width: 75, height: 75, resizeMode: 'contain' }}
          />
          <Text className="text-[36px] text-center font-arthaus text-primary">
            Create New Password
          </Text>
        </View>

        <View className="flex justify-start items-start gap-4 mt-4"></View>

        <View className="flex justify-start items-start">
          <InputField
            placeholder="Create New Password"
            leftIcon={<LockIcon size={15} color={iconPrimary} />}
            type="password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!passwordVisible}
            rightIcon={
              passwordVisible
                ? <Eye size={20} color={iconGray} />
                : <EyeClosed size={20} color={iconGray} />
            }
            onRightIconPress={() => setPasswordVisible((v) => !v)}
            rightIconAccessibilityLabel={passwordVisible ? 'Hide password' : 'Show password'}
          />
        </View>

        <View className="flex justify-start items-start">
          <InputField
            placeholder="Confirm Password"
            leftIcon={<LockIcon size={15} color={iconPrimary} />}
            type="password"
            secureTextEntry={!confirmPasswordVisible}
            rightIcon={
              confirmPasswordVisible
                ? <Eye size={20} color={iconGray} />
                : <EyeClosed size={20} color={iconGray} />
            }
            onRightIconPress={() => setConfirmPasswordVisible((v) => !v)}
            rightIconAccessibilityLabel={confirmPasswordVisible ? 'Hide password' : 'Show password'}
          />
        </View>

        <View className="w-full rounded-xl px-4 py-3">
          <Text className="text-md font-bold text-tertiary mb-1">
            Password must contain:
          </Text>
          {passwordRules.map((rule) => {
            const passed = rule.test(password);
            return (
              <View key={rule.label} className="flex-row items-center gap-2">
                {passed
                  ? <CheckCircle2 size={12} color="#0E4C32" />
                  : <Circle size={12} color="#9ca3af" />
                }
                <Text className={`text-sm ${passed ? 'text-[#0E4C32]' : 'text-gray-400'}`}>
                  {rule.label}
                </Text>
              </View>
            );
          })}
        </View>

        <Button onClick={handleContinue} variant="primary" className="w-full">
          Continue
        </Button>
        <Button onClick={handleBackToLogin} variant="outline" className="w-full">
          Cancel
        </Button>
      </View>
    </SafeAreaView>
  );
}

export default CreateNewPassword;