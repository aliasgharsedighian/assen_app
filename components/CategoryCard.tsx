import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { HomeCategoryData } from "@/mock-data/HomeBannerData";
import tw from "twrnc";

interface PageProps {
  item: HomeCategoryData;
}

export default function CategoryCard({ item }: PageProps) {
  return (
    <TouchableOpacity style={tw`relative mr-2`}>
      <Image
        style={tw`h-30 w-40 rounded`}
        source={require("@/assets/images/milgerd-category.png")}
      />
      <Text style={tw`absolute bottom-1 left-1 font-bold`}>{item.text}</Text>
    </TouchableOpacity>
  );
}
