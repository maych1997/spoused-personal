import React, { useRef, useState } from "react";
import { TextInput, View, StyleSheet } from "react-native";
import * as Animatable from "react-native-animatable";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { COLOR } from "../utils/colors";

const OtpInput = ({ length = 6, onChangeOtp }) => {
  const [otp, setOtp] = useState(Array(length).fill(""));
  const inputs = useRef([]);

  const handleChange = (text, index) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    // Auto next focus
    if (text && index < length - 1) {
      inputs.current[index + 1]?.focus();
    }

    onChangeOtp && onChangeOtp(newOtp.join(""));
  };

  const handleKeyPress = (e, index) => {
    if (e.nativeEvent.key === "Backspace") {
      const newOtp = [...otp];

      if (otp[index] === "") {
        // Agar current empty hai → peeche jump
        if (index > 0) {
          newOtp[index - 1] = "";
          setOtp(newOtp);
          inputs.current[index - 1]?.focus();
        }
      } else {
        // Agar current filled hai → clear karo aur peeche jump bhi karao
        newOtp[index] = "";
        setOtp(newOtp);
        if (index > 0) {
          inputs.current[index - 1]?.focus();
        }
      }

      onChangeOtp && onChangeOtp(newOtp.join(""));
    }
  };
  return (
    <Animatable.View
      animation="fadeInUp"
      delay={200}
      style={styles.container}
    >
      {otp.map((digit, index) => (
        <TextInput
          cursorColor={COLOR.primary}
          key={index}
          ref={(ref) => (inputs.current[index] = ref)}
          value={digit}
          onChangeText={(text) => handleChange(text, index)}
          onKeyPress={(e) => handleKeyPress(e, index)}
          placeholder="-"
          placeholderTextColor="#77838F"
          style={[
            styles.input,
            digit ? styles.filledInput : styles.emptyInput, // 🔥 conditional style
          ]}
          maxLength={1}
          keyboardType="numeric"
        />
      ))}
    </Animatable.View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: hp("1%"),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 49.84,
    width: 49.84,
    borderRadius: hp("1%"),
    textAlign: "center",
    fontSize: 18,
    fontWeight: "600",
    color: "#000",
  },
  emptyInput: {
    backgroundColor: "#FAFAFA",
  },
  filledInput: {
    backgroundColor: COLOR.primary, // ✅ filled hone pe greenish shade
    fontSize:hp('3%'),
    fontWeight:'400'
  },
});

export default OtpInput;
