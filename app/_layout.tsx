import React from "react";
import { View, Text, Pressable } from "react-native";
import { Slot, Link } from "expo-router";
import tw from "../components/tailwind";
import { useDeviceContext } from "twrnc";
import LinkButton from "../components/LinkButton";

const RootLayout: React.FC = () => {
  useDeviceContext(tw);

  return (
    <View style={tw`flex-1`}>
      <View style={tw`flex-1`}>
        <Slot />
      </View>

      <View style={tw`flex-row bg-gray-900 p-4 justify-between`}>
        <LinkButton href="/gallery" label="Galerie Photo" />

        <Link href="/photographer" asChild>
          <Pressable
            style={tw`flex-1 justify-center items-center bg-blue-500 rounded p-2 mx-1`}
          >
            <Text style={tw`text-md`}>Appareil photo</Text>
          </Pressable>
        </Link>
      </View>
    </View>
  );
};

export default RootLayout;
