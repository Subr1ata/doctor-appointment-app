import { StatusBar } from "expo-status-bar";
import Login from "./app/screens/login";
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import { SafeAreaView, Text, StyleSheet } from "react-native";
import SignInWithOAuth from "./app/components/SignInWithOAuth";
import Home from "./app/screens/home";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigation from "./app/navigations/tab-navigation";

export default function App() {
  return (
    <ClerkProvider
      publishableKey={
        "pk_test_cHJvbXB0LXRvbWNhdC00OS5jbGVyay5hY2NvdW50cy5kZXYk"
      }
    >
      <SafeAreaView style={styles.container}>
        <StatusBar hidden />
        <SignedIn>
          <NavigationContainer>
            <TabNavigation />
          </NavigationContainer>
        </SignedIn>
        <SignedOut>
          <Login />
        </SignedOut>
      </SafeAreaView>
    </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
