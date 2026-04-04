import { Button } from '@/components/ui/button';
import { InputField } from '@/components/ui/input-fields';
import { toast } from '@/components/ui/toast';
import { router } from 'expo-router';
import { Eye, EyeClosed } from 'lucide-react-native';
import React, { useState } from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Seperator } from '@/components/ui/seperator';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleLogin = () => {
    if (!email || !password) {
      toast.success('Please fill in all fields');
      return;
    }

    if (email === 'test@gmail.com' && password === '123456') {
      toast.success('Success');
    } else {
      toast.info('Invalid credentials');
    }
  };

  const handleSignup = () => {
    router.push('/(auth)/signup');
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 20,
        backgroundColor: '#ffffff',
      }}
    >
      <Image
        source={require('../../assets/images/LogoGreen.png')}
        style={{
          width: 70,
          height: 80,
          marginBottom: 15,
          alignSelf: 'center',
        }}
        resizeMode="contain"
      />
      <Text
        style={{
          fontFamily: 'Arthaus-Bold',
          fontSize: 40,
          marginBottom: 80,
          textAlign: 'center',
          color: '#0E4C32',
        }}
      >
        Login
      </Text>

      <TextInput
        style={{
          height: 48,
          borderWidth: 1,
          borderColor: '#d1d5db',
          borderRadius: 50,
          paddingHorizontal: 16,
          marginBottom: 16,
          backgroundColor: 'white',
        }}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={{
          height: 48,
          borderWidth: 1,
          borderColor: '#d1d5db',
          borderRadius: 50,
          paddingHorizontal: 16,
          marginBottom: 16,
          backgroundColor: 'white',
        }}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity
        style={{
          backgroundColor: '#0E4C32',
          paddingVertical: 16,
          borderRadius: 50,
          alignItems: 'center',
        }}
        onPress={handleLogin}
      >
        <Text style={{ color: 'white', fontSize: 12, fontWeight: 'light' }}>
          Login
        </Text>
      </TouchableOpacity>

      <Text style={{ marginTop: 20, textAlign: 'center', color: '#9ca3af' }}>
        Don't have an account?{' '}
        <Text
          onPress={handleSignup}
          className=""
        >
          Sign up
        </Text>
      </Text>
      <InputField placeholder="Email" />
      <InputField
        placeholder="Password"
        type="password"
        secureTextEntry={!passwordVisible}
        rightIcon={
          passwordVisible ? (
            <Eye size={20} color="#9ca3af" />
          ) : (
            <EyeClosed size={20} color="#9ca3af" />
          )
        }
        onRightIconPress={() => setPasswordVisible((v) => !v)}
        rightIconAccessibilityLabel={
          passwordVisible ? 'Hide password' : 'Show password'
        }
      />
      <Button onClick={handleLogin} variant="primary" className="w-full">
        Login
      </Button>
    </View>
  );
}
