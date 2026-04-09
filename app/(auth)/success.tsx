import { default as PasswordIcon, default as SuccessIcon } from '@/assets/images/success.png';
import { Button } from '@/components/ui/button';
import { Header } from '@/components/ui/header';
import { router, useLocalSearchParams } from 'expo-router';
import React from 'react';
import { Image, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

type SuccessType = 'verification' | 'password';

const SUCCESS_CONFIG = {
  verification: {
    title: 'adulThing',
    heading: 'Success!',
    description:
      'Verification Successful! Please click the button below to explore the app',
    buttonText: 'Explore App',
    icon: SuccessIcon,
    onPress: () => router.replace('/(tabs)'),
  },
  password: {
    title: 'adulThing',
    heading: 'Password Changed!',
    description:
      'Your password has been changed successfully. You may now log in safely.',
    buttonText: 'Go to Login',
    icon: PasswordIcon,
    onPress: () => router.replace('/(auth)/login'),
  },
};

function SuccessScreen() {
  const { type } = useLocalSearchParams<{ type?: SuccessType }>();

  const config = SUCCESS_CONFIG[type || 'verification'];

  return (
    <SafeAreaView className="flex-1 px-6 py-4 bg-white">
      <Header
        showNotificationButton={false}
        title={config.title}
        onBack={() => router.back()}
      />

      <View className="flex-1 justify-center items-center gap-8 px-6">
        <Image
          source={config.icon}
          className="h-48 w-48"
          resizeMode="contain"
        />

        <Text className="text-4xl font-bold text-primary">
          {config.heading}
        </Text>

        <Text className="text-tertiary italic text-center text-lg font-medium">
          {config.description}
        </Text>

        <Button
          onClick={config.onPress}
          variant="outline"
          className="w-full mt-6"
        >
          {config.buttonText}
        </Button>
      </View>
    </SafeAreaView>
  );
}

export default SuccessScreen;