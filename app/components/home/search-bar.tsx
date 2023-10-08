import { View, TextInput } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

interface SearchBarProps {
  setSearchText: (text: string) => void;
}

export default function SearchBar({ setSearchText }: SearchBarProps) {
  const [searchInput, setSearchInput] = useState("");
  return (
    <View style={{ marginTop: 15 }}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 5,
          alignItems: "center",
          borderWidth: 0.7,
          borderColor: "gray",
          padding: 10,
          borderRadius: 8,
        }}
      >
        <Ionicons name="ios-search-outline" size={24} color="blue" />
        <TextInput
          placeholder="Search"
          onChangeText={(value) => setSearchInput(value)}
          style={{ width: "100%" }}
          onSubmitEditing={() => setSearchText(searchInput)}
        />
      </View>
    </View>
  );
}
