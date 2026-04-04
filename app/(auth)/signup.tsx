import { Button } from '@/components/ui/button';
import { InputField } from '@/components/ui/input-fields';
import { Seperator } from '@/components/ui/seperator';
import { router } from 'expo-router';
import { Eye, EyeClosed } from 'lucide-react-native';
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const iconGray = '#9ca3af';

const handleSignup = () => {
  router.push('/(auth)/email-verification');
}

function Signup() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  return (
    <SafeAreaView className="flex-1 px-6 py-10">
      <View className=" flex justify-center px-6 items-center gap-10">
        <View className="flex justify-center items-center gap-2">
          <Text className="text-[36px] text-center font-arthaus text-primary">
            Get Started Now
          </Text>
          <Text className="text-sm text-center text-tertiary font-medium">
            Create your account to get started
          </Text>
        </View>
        <View className="flex justify-start items-start gap-4 mt-6">
          <View className="flex justify-start items-start">
            <Text className="text-sm text-left text-primary font-bold">
              First Name
            </Text>
            <InputField placeholder="John" />
          </View>
          <View className="flex justify-start items-start ">
            <Text className="text-sm text-left text-primary font-bold">
              Last Name
            </Text>
            <InputField placeholder="Doe" />
          </View>
          <View className="flex justify-start items-start">
            <Text className="text-sm text-left text-primary font-bold">
              Email
            </Text>
            <InputField placeholder="johndoe@email.com" />
          </View>
          <View className="flex justify-start items-start">
            <Text className="text-sm text-left text-primary font-bold">
              Password
            </Text>
            <InputField
              placeholder="Password"
              type="password"
              secureTextEntry={!passwordVisible}
              rightIcon={
                passwordVisible ? (
                  <Eye size={20} color={iconGray} />
                ) : (
                  <EyeClosed size={20} color={iconGray} />
                )
              }
              onRightIconPress={() => setPasswordVisible((v) => !v)}
              rightIconAccessibilityLabel={
                passwordVisible ? 'Hide password' : 'Show password'
              }
            />
          </View>
          <View className="flex justify-start items-start">
            <Text className="text-sm text-left text-primary font-bold">
              Confirm Password
            </Text>
            <InputField
              placeholder=" Retype Password"
              type="password"
              secureTextEntry={!confirmPasswordVisible}
              rightIcon={
                confirmPasswordVisible ? (
                  <Eye size={20} color={iconGray} />
                ) : (
                  <EyeClosed size={20} color={iconGray} />
                )
              }
              onRightIconPress={() => setConfirmPasswordVisible((v) => !v)}
              rightIconAccessibilityLabel={
                confirmPasswordVisible ? 'Hide password' : 'Show password'
              }
            />
          </View>
        </View>
        <Button onClick={handleSignup} variant="primary" className="w-full">
          Sign Up
        </Button>
        <View className="w-full flex-row items-center gap-3">
          <Seperator inline className="min-w-0 flex-1" />
          <Text className="shrink-0 text-sm text-center leading-none text-tertiary">
            Or
          </Text>
          <Seperator inline className="min-w-0 flex-1" />
        </View>
        <View className="flex justify-center items-center">
          <Text className="text-sm text-center text-tertiary font-medium">
            Already have an account?{' '}
            <Text
              className="text-primary font-bold"
              onPress={() => router.push('/(auth)/login')}
            >
              Login
            </Text>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Signup;
