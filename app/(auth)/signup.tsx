import React from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import InputField from '@/components/ui/input-fields';
import Button from '@/components/ui/button';

function Signup() {
  return (
    <SafeAreaView className="flex-1">
      <View className=" flex justify-center items-center px-10">
        <Text className="text-5xl text-center font-arthaus text-primary"
        >
          Get Started Now
        </Text>
        <InputField placeholder="First Name"/>
      </View>
    </SafeAreaView>
  );
}

export default Signup;
