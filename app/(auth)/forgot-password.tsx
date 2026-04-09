import { Button } from '@/components/ui/button';
import { Header } from '@/components/ui/header';
import { InputField } from "@/components/ui/input-fields";
import { router } from 'expo-router';
import { ArrowLeft, UserIcon } from "lucide-react-native";
import React from "react";
import { Image, Text, View } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';

const iconGray = '#9ca3af';
const iconPrimary = '#0E4C32';

const handleBackToLogin = () => {
  router.push('/(auth)/login');
}

const handleSendOTP = () => {
  router.push('/(auth)/email-verification?type=reset');
};

export default function ForgotPassword() {
  return (
      <SafeAreaView className="flex-1 px-6 py-10 bg-white">
       <Header showNotificationButton={false} title="adulThing" onBack={() => {router.back()}}/>
        <View className=" flex justify-center px-6 items-center gap-5">
            <View className="flex justify-center items-center mt-20 gap-2">
              <Image
                source={require('../../assets/images/LogoGreen.png')}
                style={{
                  width: 130,
                  height: 130,
                  resizeMode: 'contain',
                }}
              />
               <Text className="text-[36px] text-center font-arthaus text-primary">
                  Forgot Password
              </Text>
              </View>
                <View className="flex justify-start items-start mb-6 mt-6">
                  <View className="flex justify-start items-start">
                    <InputField
                    placeholder="Email"
                    style={{ fontStyle: 'italic' }}
                    leftIcon={<UserIcon size={16} color={iconPrimary} />}
                    />
                  </View>
              </View>
            <Button onClick={handleSendOTP} variant="primary" className="w-full">
              send OTP
            </Button>
            <Button
              onClick={handleBackToLogin}
              variant="outline"
              className="w-full flex-row justify-center items-center"
            >
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                <ArrowLeft size={18} color={iconPrimary} />
                <Text className="text-primary">Back to Login</Text>
              </View>
            </Button>
        </View>
      </SafeAreaView>
  );
}
