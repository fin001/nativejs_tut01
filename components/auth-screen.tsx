import { router } from "expo-router";
import { SymbolView } from "expo-symbols";
import { useState } from "react";
import {
    Alert,
    Image,
    KeyboardAvoidingView,
    Modal,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { images } from "../constants/images";

type AuthMode = "sign-up" | "sign-in";
type AuthScreenProps = { mode: AuthMode };
type SocialProvider = "Google" | "Facebook" | "Apple";

const providers: SocialProvider[] = ["Google", "Facebook", "Apple"];

export function AuthScreen({ mode }: AuthScreenProps) {
  const isSignUp = mode === "sign-up";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [verificationVisible, setVerificationVisible] = useState(false);
  const [verificationCode, setVerificationCode] = useState("");

  function openVerification() {
    setVerificationCode("");
    setVerificationVisible(true);
  }

  function handleVerificationCodeChange(value: string) {
    const nextCode = value.replace(/\D/g, "").slice(0, 6);
    setVerificationCode(nextCode);

    if (nextCode.length === 6) {
      setVerificationVisible(false);
      router.replace("/");
    }
  }

  function showSocialNotice(provider: SocialProvider) {
    Alert.alert(`${provider} sign-in`, "This sign-in option is not connected yet.");
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        className="flex-1"
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
      >
        <TouchableOpacity
          accessibilityLabel="Go back"
          className="h-10 w-10 items-center justify-center self-start"
          onPress={() => router.back()}
          activeOpacity={0.7}
        >
          <Text className="font-poppins-regular text-4xl leading-[40px] text-primary">‹</Text>
        </TouchableOpacity>

        <View className="mt-5">
          <Text className="font-poppins-semibold text-[26px] leading-9 text-primary">
            {isSignUp ? "Create your account" : "Welcome back"}
          </Text>
          <Text className="mt-1 font-poppins-regular text-base leading-6 text-secondary">
            {isSignUp ? "Start your language journey today ✨" : "Continue your language journey ✨"}
          </Text>
        </View>

        <Image
          source={images.mascotAuth}
          resizeMode="contain"
          className="mt-2 h-36 w-40 self-center"
          accessibilityLabel="Lingua fox mascot waving"
        />

        <View className="gap-3">
          <View className="h-[78px] justify-center rounded-2xl border border-divider px-4">
            <Text className="font-poppins-regular text-sm text-secondary">Email</Text>
            <TextInput
              value={email}
              onChangeText={setEmail}
              placeholder="alex@gmail.com"
              placeholderTextColor="#0d132b"
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              textContentType="emailAddress"
              style={styles.fieldInput}
              accessibilityLabel="Email address"
            />
          </View>

          {isSignUp ? (
            <View className="h-[78px] flex-row items-center rounded-2xl border border-divider px-4">
              <View className="flex-1 justify-center">
                <Text className="font-poppins-regular text-sm text-secondary">Password</Text>
                <TextInput
                  value={password}
                  onChangeText={setPassword}
                  placeholder="••••••••"
                  placeholderTextColor="#0d132b"
                  secureTextEntry={!passwordVisible}
                  autoCapitalize="none"
                  style={styles.fieldInput}
                  accessibilityLabel="Password"
                />
              </View>
              <TouchableOpacity
                accessibilityLabel={passwordVisible ? "Hide password" : "Show password"}
                className="h-10 w-10 items-center justify-center"
                onPress={() => setPasswordVisible((visible) => !visible)}
                activeOpacity={0.7}
              >
                <View className="h-[14px] w-[21px] items-center justify-center rounded-full border border-secondary">
                  <View className="h-[6px] w-[6px] rounded-full bg-secondary" />
                </View>
              </TouchableOpacity>
            </View>
          ) : null}
        </View>

        <TouchableOpacity
          className="mt-5 h-[58px] items-center justify-center rounded-2xl bg-lingua-deep-purple"
          onPress={openVerification}
          activeOpacity={0.85}
        >
          <Text className="font-poppins-semibold text-lg text-white">
            {isSignUp ? "Sign Up" : "Sign In"}
          </Text>
        </TouchableOpacity>

        <View className="my-5 flex-row items-center gap-4">
          <View className="h-px flex-1 bg-gray-200" />
          <Text className="font-poppins-regular text-base text-secondary">or continue with</Text>
          <View className="h-px flex-1 bg-gray-200" />
        </View>

        <View className="gap-2">
          {providers.map((provider) => (
            <TouchableOpacity
              key={provider}
              accessibilityRole="button"
              onPress={() => showSocialNotice(provider)}
              activeOpacity={0.75}
              className="h-[54px] flex-row items-center justify-center rounded-2xl border border-gray-100"
            >
              <View className="absolute left-9 w-7 items-center justify-center">
                {provider === "Google" ? (
                  <Text className="font-poppins-bold text-[23px] text-[#4285f4]">G</Text>
                ) : provider === "Facebook" ? (
                  <Text className="font-poppins-bold text-[27px] leading-8 text-[#1877f2]">f</Text>
                ) : (
                  <SymbolView
                    name={{ ios: "apple.logo", android: "nutrition", web: "nutrition" }}
                    tintColor="#0d132b"
                    size={25}
                  />
                )}
              </View>
              <Text className="font-poppins-medium text-base text-primary">
                Continue with {provider}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <View className="mt-auto flex-row flex-wrap items-center justify-center pt-10">
          <Text className="font-poppins-regular text-base text-secondary">
            {isSignUp ? "Already have an account? " : "Don't have an account? "}
          </Text>
          <TouchableOpacity
            accessibilityRole="link"
            onPress={() => router.replace(isSignUp ? "/sign-in" : "/sign-up")}
            activeOpacity={0.7}
          >
            <Text className="font-poppins-medium text-base text-lingua-purple">
              {isSignUp ? "Log in" : "Sign up"}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <Modal
        visible={verificationVisible}
        transparent
        animationType="fade"
        statusBarTranslucent
        onRequestClose={() => setVerificationVisible(false)}
      >
        <KeyboardAvoidingView
          style={styles.modalRoot}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <View style={styles.modalBackdrop}>
            <View style={styles.verificationPanel}>
              <TouchableOpacity
                accessibilityLabel="Close verification"
                className="absolute right-3 top-3 h-10 w-10 items-center justify-center"
                onPress={() => setVerificationVisible(false)}
                activeOpacity={0.7}
              >
                <Text className="font-poppins-regular text-2xl text-secondary">×</Text>
              </TouchableOpacity>
              <Text className="font-poppins-semibold text-2xl text-primary">Enter verification code</Text>
              <Text className="mt-2 text-center font-poppins-regular text-sm leading-6 text-secondary">
                Enter any 6-digit code to complete this mock verification.
              </Text>
              {email.trim() ? (
                <Text className="mt-1 font-poppins-medium text-sm text-primary">{email.trim()}</Text>
              ) : null}

              <View className="relative mt-7 flex-row justify-center gap-2">
                {Array.from({ length: 6 }, (_, index) => (
                  <View
                    key={index}
                    className={`h-[52px] w-[42px] items-center justify-center rounded-xl border ${
                      index === verificationCode.length ? "border-lingua-purple" : "border-divider"
                    }`}
                  >
                    <Text className="font-poppins-semibold text-xl text-primary">
                      {verificationCode[index] ?? ""}
                    </Text>
                  </View>
                ))}
                <TextInput
                  autoFocus
                  value={verificationCode}
                  onChangeText={handleVerificationCodeChange}
                  keyboardType="number-pad"
                  maxLength={6}
                  textContentType="oneTimeCode"
                  autoComplete="sms-otp"
                  style={styles.codeInput}
                  accessibilityLabel="Verification code"
                />
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 28,
    paddingTop: 8,
    paddingBottom: 20,
  },
  fieldInput: {
    color: "#0d132b",
    fontFamily: "Poppins-Regular",
    fontSize: 16,
    lineHeight: 24,
    padding: 0,
    marginTop: 2,
  },
  modalRoot: {
    flex: 1,
  },
  modalBackdrop: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 24,
    backgroundColor: "rgba(13, 19, 43, 0.38)",
  },
  verificationPanel: {
    alignItems: "center",
    borderRadius: 24,
    paddingHorizontal: 22,
    paddingTop: 36,
    paddingBottom: 28,
    backgroundColor: "#ffffff",
  },
  codeInput: {
    ...StyleSheet.absoluteFill,
    opacity: 0.02,
    color: "transparent",
  },
});