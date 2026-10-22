import { Link } from "expo-router";
import { Image, Text, TouchableOpacity, useWindowDimensions, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { images } from "../../constants/images";

export default function OnboardingScreen() {
  const { width, height } = useWindowDimensions();
  const mascotSize = Math.min(width * 0.9, height * 0.4, 360);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff" }}>
      <View className="flex-1 px-5 pb-5 pt-4">
        <View className="flex-row items-center justify-center gap-2">
          <Image source={images.mascotLogo} resizeMode="contain" style={{ width: 48, height: 48 }} />
          <Text className="type-h2 text-primary">lingua</Text>
        </View>

        <View className="mt-12 px-2">
          <Text className="type-h1 leading-tight">
            Your AI language{"\n"}
            <Text className="text-lingua-purple">teacher</Text>.
          </Text>
          <Text className="type-body-large mt-3 text-secondary">
            Real conversations, personalized lessons, anytime, anywhere.
          </Text>
        </View>

        <View className="relative mt-3 min-h-0 w-full flex-1 items-center justify-center">
          <View className="absolute left-[4%] top-[14%] z-10 rotate-[-6deg] rounded-[20px] bg-blue-50 px-5 py-3">
            <Text className="text-xl text-primary">Hello!</Text>
          </View>
          <View className="absolute right-[7%] top-[9%] z-10 rotate-6 rounded-[20px] bg-violet-50 px-5 py-3">
            <Text className="text-xl font-semibold text-lingua-purple">{`\u00a1Hola!`}</Text>
          </View>
          <View className="absolute right-[1%] top-[33%] z-10 -rotate-6 rounded-[20px] bg-orange-50 px-5 py-3">
            <Text className="text-xl font-semibold text-orange-500">{`\u4f60\u597d!`}</Text>
          </View>
          <Image
            source={images.mascotWelcome}
            resizeMode="contain"
            style={{ width: mascotSize, height: mascotSize }}
            accessibilityLabel="Lingua fox mascot waving with a backpack"
          />
        </View>

        <View className="mb-6 mt-2 flex-row items-center justify-center gap-4" accessibilityLabel="Onboarding page 1 of 4">
          <View className="h-4 w-4 rounded-full bg-lingua-purple" />
          <View className="h-4 w-4 rounded-full bg-slate-200" />
          <View className="h-4 w-4 rounded-full bg-slate-200" />
          <View className="h-4 w-4 rounded-full bg-slate-200" />
        </View>

        <Link href="/sign-up" asChild>
          <TouchableOpacity
            className="relative h-[76px] flex-row items-center justify-center rounded-3xl bg-lingua-deep-purple"
            activeOpacity={0.85}
          >
            <Text className="font-poppins-semibold text-lg text-white">Get Started</Text>
            <Text className="absolute right-[34px] text-3xl text-white">{`\u203a`}</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </SafeAreaView>
  );
}
