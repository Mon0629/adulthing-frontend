import React from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import InputField from '@/components/ui/input-fields';
import Button from '@/components/ui/button';
import { Seperator } from '@/components/ui/seperator';

function Signup() {
  return (
    <SafeAreaView className="flex-1">
      <View className=" flex justify-center items-center px-14 py-10 gap-10">

        <View className="flex justify-center items-center gap-2">
        <Text className="text-[36px] text-center font-arthaus text-primary"
        >
          Get Started Now
        </Text>
        <Text className="text-sm text-center text-tertiary">Create your account to get started</Text>
        </View>
        <View className="flex justify-start items-start gap-4 mt-6">
          <View className="flex justify-start items-start">
            <Text className="text-sm text-left text-tertiary font-bold">First Name</Text>
            <InputField placeholder="John"/>
          </View>
          <View className="flex justify-start items-start ">
            <Text className="text-sm text-left text-tertiary font-bold">Last Name</Text>
            <InputField placeholder="Doe"/>
          </View>
          <View className="flex justify-start items-start">
            <Text className="text-sm text-left text-tertiary font-bold">Email</Text>
            <InputField placeholder="johndoe@email.com"/>
          </View>
          <View className="flex justify-start items-start">
            <Text className="text-sm text-left text-tertiary font-bold">Password</Text>
            <InputField placeholder="Password" type="password" />
          </View>
          <View className="flex justify-start items-start">
            <Text className="text-sm text-left text-tertiary font-bold">Confirm Password</Text>
            <InputField placeholder=" Retype Password" type="password" />
          </View>
        </View>
        <Button onClick={() => {}} variant="primary" className="w-full">
            Sign Up
        </Button>
        <View>
        <Seperator /> or <Seperator />
        </View>

      </View>
    </SafeAreaView>
  );
}

export default Signup;
