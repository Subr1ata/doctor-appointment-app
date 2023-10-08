import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";
import app from "./../../assets/images/app.png";
import { Colors } from "react-native/Libraries/NewAppScreen";
import SignInWithOAuth from "../components/SignInWithOAuth";

export default function Login() {
  return (
    <View style={{ alignItems: "center" }}>
      <Image source={app} style={styles.appImage} />
      <View
        style={{
          backgroundColor: Colors.white,
          padding: 25,
          alignItems: "center",
          marginTop: -50,
          elevation: 2,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        }}
      >
        <Text style={styles.heading}>Your Ultimate Doctor</Text>
        <Text style={styles.heading}>Appointment Booking</Text>
        <Text style={{ textAlign: "center", marginTop: 20 }}>
          Book Appointment Effortlessly and manage your health journey
        </Text>
        <SignInWithOAuth />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appImage: {
    width: 300,
    height: 500,
    objectFit: "contain",
    marginTop: 50,
    borderRadius: 20,
    borderWidth: 6,
    borderColor: "#000",
  },
  heading: {
    fontSize: 28,
    fontWeight: "bold",
  },
});
