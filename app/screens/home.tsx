import { Button, Text, View } from "react-native";
import React, { Component } from "react";
import { useAuth } from "@clerk/clerk-expo";

export default function Home() {
  const { isLoaded, signOut } = useAuth();
  return (
    <View>
      <Button title="SignOut" onPress={() => signOut()} />
      <Text>home</Text>
    </View>
  );
}
