import { Button } from '@/components/ui/button';
import { InputField } from '@/components/ui/input-fields';
import { Seperator } from '@/components/ui/seperator';
import Checkbox from 'expo-checkbox';
import { router } from 'expo-router';
import { Eye, EyeClosed, LockIcon, UserIcon } from 'lucide-react-native';
import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const iconGray = '#9ca3af';
const iconPrimary = '#0E4C32';

/*const handleLogin = () => {
  router.push('/(auth)/');
}*/

function Login() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  return (
    <SafeAreaView className="flex-1 px-6 py-10 bg-white">
      <View className=" flex justify-center px-6 items-center gap-5">
       <View className="flex justify-center items-center mt-20 gap-2">
        <Image
          source={require('../../assets/images/LogoGreen.png')}
          style={{
            width: 75,
            height: 75,
            resizeMode: 'contain',
          }}
        />
        <Text className="text-[36px] text-center font-arthaus text-primary">
          Login
        </Text>
      </View>
        <View className="flex justify-start items-start gap-5 mt-6">
          <View className="flex justify-start items-start">
            <InputField
            placeholder="Email"
            style={{ fontStyle: 'italic' }}
            leftIcon={<UserIcon size={16} color={iconPrimary} />}
            />
          </View>
          <View className="flex justify-start items-start">
            <InputField
              placeholder="Password"
              type="password"
              style={{ fontStyle: 'italic' }}
              secureTextEntry={!passwordVisible}
              leftIcon={<LockIcon size={15} color={iconPrimary} />} 
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
            <View className="w-full flex-row justify-between items-center">
               <View className="flex-row items-center">
                <TouchableOpacity
                  className="flex-row items-center"
                  onPress={() => setIsChecked(!isChecked)} // toggle checkbox on text or box press
                >
                  <Checkbox
                    value={isChecked}
                    onValueChange={setIsChecked}
                    color={isChecked ? iconPrimary : undefined}
                    style={{
                      width: 12,
                      height: 12,
                      marginLeft: 10,
                      marginRight: 5,
                      borderRadius: 2,
                      borderColor: iconPrimary,
                      borderWidth: 1,
                    }}
                  />
                  <Text className="text-md text-tertiary font-medium">
                    Remember me
                  </Text>
                </TouchableOpacity>
                </View>
                <Text className="italic text-md text-primary mr-2 ">
                  Forgot password?
                </Text>
              </View>
            </View>
            <Button onClick={() => {}} variant="primary" className="w-full">
              Login
            </Button>
        <View className="w-full flex-row items-center gap-3">
          <Seperator inline className="min-w-0 flex-1" />
          <Text className="italic shrink-0 text-sm text-center leading-none text-tertiary">
            or
          </Text>
          <Seperator inline className="min-w-0 flex-1" />
        </View>
            <Button 
              onClick={() => {}} 
              variant="secondary" 
              className="w-full flex-row justify-center items-center"
            >
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                <Image
                  source={require('../../assets/images/google.png')}
                  style={{
                    width: 20,
                    height: 20,
                    resizeMode: 'contain',
                  }}
                />
                <Text>Sign in with Google</Text>
              </View>
            </Button>
            <Button 
              onClick={() => {}} 
              variant="secondary" 
              className="w-full flex-row justify-center items-center"
            >
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                <Image
                  source={require('../../assets/images/facebook.png')}
                  style={{
                    width: 20,
                    height: 20,
                    resizeMode: 'contain',
                  }}
                />
                <Text>Sign in with Facebook</Text>
              </View>
            </Button>
        <View className="flex justify-center items-center">
          <Text className="italic text-md text-center text-tertiary">
            Need an account?{' '}
            <Text
              className="text-primary font-bold"
              onPress={() => router.push('/(auth)/signup')}
            >
              Signup
            </Text>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Login;