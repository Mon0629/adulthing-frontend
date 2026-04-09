import { ArrowLeft, Bell } from 'lucide-react-native';
import React from 'react';
import { Pressable, Text, View } from 'react-native';

interface HeaderProps {
  title?: string;
  onBack?: () => void;
  onNotification?: () => void;
  showBackButton?: boolean;
  showNotificationButton?: boolean;
}

const iconColor = '#0E4C32';

export function Header({
  title = 'Notifications',
  showNotificationButton = true,
  showBackButton = true,
  onBack,
  onNotification,
}: HeaderProps) {
  return (
    <View className="relative w-full min-h-12 flex-row items-center">
      <View className="z-10 min-w-12 flex-1 flex-row items-center justify-start pl-1">
        {showBackButton ? (
          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Go back"
            hitSlop={12}
            onPress={onBack}
          >
            <ArrowLeft size={20} color={iconColor} />
          </Pressable>
        ) : null}
      </View>

      <View
        className="absolute bottom-0 left-0 right-0 top-0 items-center justify-center px-12"
        pointerEvents="none"
      >
        <Text
          className="text-center font-arthaus text-2xl text-primary"
          numberOfLines={1}
        >
          {title}
        </Text>
      </View>

      <View className="z-10 min-w-12 flex-1 flex-row items-center justify-end pr-1">
        {showNotificationButton ? (
          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Notifications"
            hitSlop={12}
            onPress={onNotification}
          >
            <Bell size={20} color={iconColor} />
          </Pressable>
        ) : null}
      </View>
    </View>
  );
}
