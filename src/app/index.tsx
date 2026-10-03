import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="type-h2 text-center color-lingua-purple">Lingua</Text>
      <Link href="/onboarding" className="mt-4 rounded-xl bg-lingua-purple px-6 py-3">
        <Text className="font-poppins-semibold text-white">Open onboarding</Text>
      </Link>
    </View>
  );
}
