import SuccessIcon from '@/assets/images/success.png';
import { Button } from '@/components/ui/button';
import { Header } from '@/components/ui/header';
import { router } from 'expo-router';
import React from 'react';
import { Image, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

function SuccessScreen() {
  return (
    <SafeAreaView className="flex-1 px-6 py-4">
      <Header
        showNotificationButton={false}
        title="Success"
        onBack={() => {
          router.back();
        }}
      />
      <View className="flex-1 justify-center items-center gap-8 px-6">
        <Image
          source={SuccessIcon}
          className="h-48 w-48"
          resizeMode="contain"
          accessibilityLabel="Success"
        />
        <Text className="text-4xl font-bold text-primary">Success!</Text>
        <Text className="text-tertiary italic text-center text-lg font-medium">
          Verification successful. Please click the button below to exploe the
          app.
        </Text>
        <Button onClick={() => {}} variant="outline" className="w-full mt-6">
          Explore the app
        </Button>
      </View>
    </SafeAreaView>
  );
}

export default SuccessScreen;
