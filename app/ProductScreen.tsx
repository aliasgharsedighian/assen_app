import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useRoute } from "@react-navigation/native";
import tw from "twrnc";
import { BottomDrawer } from "@/components/BottomDrawer";
import { ArrowLeftIcon } from "react-native-heroicons/outline";
import { useNavigation } from "expo-router";
// @ts-ignore
import { API_ADDRESS } from "@env";

const styles = require("@/app/style");

export default function ProductScreen() {
  const [data, setData] = useState<any>();
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  const {
    //@ts-ignore
    params: { title, slug },
  } = useRoute();

  const fetchData = async (exchange_price: null | string = null) => {
    setLoading(true);
    const res = await fetch(
      `${API_ADDRESS}product-show/${slug}?exchange_price=${exchange_price}`
    );
    const result = await res.json();
    try {
      if (res.status === 200) {
        setData(result.data);
        setLoading(false);
      }
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <SafeAreaView style={tw`bg-[#F9F7F7] pt-5`}>
      <View>
        <View style={tw`px-4 pt-2 flex-row justify-between items-center`}>
          <TouchableOpacity
            onPress={navigation.goBack}
            style={tw` rounded-full`}
          >
            <ArrowLeftIcon size={20} color="#960b0b" />
          </TouchableOpacity>
          <Text style={[styles.regularFont, tw`text-2xl pt-4`]}>{title}</Text>
        </View>
        <BottomDrawer title="فیلتر"></BottomDrawer>
      </View>
      <ScrollView
        style={tw`bg-[#f9f7f7]`}
        contentContainerStyle={{
          paddingBottom: 100,
        }}
      >
        <View style={tw`bg-[#f9f7f7]`}>
          <View style={tw`flex flex-col gap-4 w-full h-full`}>
            {loading ? (
              <View style={tw`w-full h-[400px] items-center justify-center`}>
                <Text>Loading ...</Text>
              </View>
            ) : (
              <View style={tw`w-full flex flex-col gap-2`}>
                <Image
                  style={tw`w-full h-56 bg-white p-4`}
                  source={{
                    uri: data?.image_path,
                  }}
                />
                <View style={tw`px-2 flex-row gap-2`}>
                  <View
                    style={tw`bg-[#23395b] flex-1 rounded-xl flex items-center justify-center`}
                  >
                    <Text style={[styles.regularFont, tw`text-white`]}>
                      {data.price.toLocaleString()}
                    </Text>
                  </View>
                  <Image
                    source={require("@/assets/icons/call-me.png")}
                    style={tw`w-12 h-12`}
                  />
                </View>
                <View style={tw`bg-white p-4 mx-2 rounded-md`}>
                  <Text
                    style={[
                      styles.boldFont,
                      tw`border-b border-gray-300 pb-2 text-[18px]`,
                    ]}
                  >
                    {data.title}
                  </Text>
                  <View style={tw`gap-2 pt-2`}>
                    <Text style={[styles.regularFont, tw`text-[16px]`]}>
                      کد کالا : {data.id}
                    </Text>
                    <Text style={[styles.regularFont, tw`text-[16px]`]}>
                      کارخانه: {data.factory_title}
                    </Text>
                    <Text style={[styles.regularFont, tw`text-[16px]`]}>
                      سایز: {data.size_title}
                    </Text>
                    <Text style={[styles.regularFont, tw`text-[16px]`]}>
                      استاندارد: {data.standard_title}
                    </Text>
                    <Text style={[styles.regularFont, tw`text-[16px]`]}>
                      نوسانات:{" "}
                      <Text
                        style={[
                          styles.boldFont,
                          tw`text-[12px] ${
                            data.fluctuation_pric > 0
                              ? "text-green-800"
                              : "text-red-800"
                          }`,
                        ]}
                      >
                        {data.fluctuation_pric}%
                      </Text>
                    </Text>
                    <Text style={[styles.regularFont, tw`text-[16px]`]}>
                      واحد فروش: {"کیلوگرم"}
                    </Text>
                    <Text style={[styles.regularFont, tw`text-[16px]`]}>
                      محل تحویل: {data.place_of_delivery}
                    </Text>
                    <Text style={[styles.regularFont, tw`text-[16px]`]}>
                      تاریخ بروزرسانی: {data.updated_at}
                    </Text>
                  </View>
                </View>
              </View>
            )}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
