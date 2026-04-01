import { useFonts } from "expo-font";
import { Stack } from "expo-router";

export default function AuthLayout() {
  const [loaded] = useFonts({
    "Arthaus-Bold": require("../../assets/fonts/Arthaus-Bold.ttf"),
  });

  if (!loaded) return null;
  return <Stack screenOptions={{ headerShown: false }} />;
}