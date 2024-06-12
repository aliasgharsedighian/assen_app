import { View, Text, ScrollView } from "react-native";
import React from "react";
import CategoryCard from "./CategoryCard";
import { BannerData } from "@/mock-data/HomeBannerData";

export default function Categories() {
  return (
    <ScrollView
      horizontal
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
    >
      {BannerData.homeCategory.map((item) => (
        <CategoryCard key={item.id} item={item} />
      ))}
    </ScrollView>
  );
}
