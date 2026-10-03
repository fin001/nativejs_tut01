import { Link } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { images } from "../../constants/images";

export default function OnboardingScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View className="flex-1 pt-px pb-5">
        <View className="flex-row items-center justify-center gap-2">
          <Image source={images.mascotLogo} resizeMode="contain" className="h-12 w-12" />
          <Text className="type-h2 text-primary">lingua</Text>
        </View>

        <View className="mt-9 px-9">
          <Text className="type-h1 leading-tight">
            Your AI language{"\n"}
            <Text className="text-lingua-purple">teacher</Text>.
          </Text>
          <Text className="type-body-large mt-3 text-secondary">
            Real conversations, personalized lessons, anytime, anywhere.
          </Text>
        </View>

        <View className="relative mt-4 w-full flex-1 items-center justify-center">
          <View className="absolute left-[11%] top-[13%] rounded-[20px] bg-blue-50 px-5 py-3">
            <Text className="text-xl text-primary">Hello!</Text>
          </View>
          <View className="absolute right-[12%] top-[8%] rotate-6 rounded-[20px] bg-violet-50 px-5 py-3">
            <Text className="text-xl font-semibold text-lingua-purple">{`\u00a1Hola!`}</Text>
          </View>
          <View className="absolute right-[8%] top-[37%] -rotate-6 rounded-[20px] bg-orange-50 px-5 py-3">
            <Text className="text-xl font-semibold text-orange-500">{`\u4f60\u597d!`}</Text>
          </View>
          <Image
            source={images.mascotWelcome}
            resizeMode="contain"
            className="h-[84%] w-[84%]"
            accessibilityLabel="Lingua fox mascot waving with a backpack"
          />
        </View>

        <Link href="/" asChild>
          <TouchableOpacity
            className="relative mx-7 mt-3 h-[76px] flex-row items-center justify-center rounded-3xl bg-lingua-deep-purple"
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

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
});
