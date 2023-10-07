import { StatusBar } from "expo-status-bar";
import Login from "./app/screens/login";
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import { SafeAreaView, Text, StyleSheet } from "react-native";
import SignInWithOAuth from "./app/components/SignInWithOAuth";
import Home from "./app/screens/home";

export default function App() {
  return (
    <ClerkProvider
      publishableKey={
        "pk_test_cHJvbXB0LXRvbWNhdC00OS5jbGVyay5hY2NvdW50cy5kZXYk"
      }
    >
      <SafeAreaView style={styles.container}>
        <SignedIn>
          <Home />
        </SignedIn>
        <SignedOut>
          <SignInWithOAuth />
        </SignedOut>
      </SafeAreaView>
    </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
