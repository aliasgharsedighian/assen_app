import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { HomeCategoryData } from "@/mock-data/HomeBannerData";
import tw from "twrnc";
import { useNavigation } from "expo-router";

interface PageProps {
  item: HomeCategoryData;
}

export default function CategoryCard({ item }: PageProps) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => {
        // @ts-ignore
        navigation.navigate("CategoryScreen", {
          id: item.id,
          text: item.text,
          images: item.images,
          slug: item.slug,
        });
      }}
      style={tw`relative mr-2`}
    >
      <Image style={tw`h-30 w-40 rounded`} source={item.images} />
      <Text style={tw`absolute bottom-1 left-1 font-bold`}>{item.text}</Text>
    </TouchableOpacity>
  );
}
