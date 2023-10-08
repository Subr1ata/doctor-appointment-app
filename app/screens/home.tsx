import { Button, Text, View } from "react-native";
import React, { Component } from "react";
import { useAuth } from "@clerk/clerk-expo";
import Header from "../components/home/header";
import SearchBar from "../components/home/search-bar";

export default function Home() {
  const { isLoaded, signOut } = useAuth();
  return (
    <View style={{ padding: 20, marginTop: 20 }}>
      <Header />
      <SearchBar setSearchText={(value) => console.log(value)} />
      {/* <Button title="SignOut" onPress={() => signOut()} /> */}
    </View>
  );
}
