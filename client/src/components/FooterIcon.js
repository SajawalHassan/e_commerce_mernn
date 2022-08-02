import { TouchableOpacity } from "react-native";
import React from "react";

export default function FooterIcon({ Icon, isActive = false }) {
  return (
    <TouchableOpacity>
      <Icon size={25} color={isActive ? "#5956E9" : "#000"} />
    </TouchableOpacity>
  );
}
