import {
  View,
  Text,
  SafeAreaView,
  Button,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import tw from "twrnc";
import { useNavigation } from "expo-router";
import { useRoute } from "@react-navigation/native";
import {
  ArrowLeftIcon,
  ClockIcon,
  FunnelIcon,
  InformationCircleIcon,
} from "react-native-heroicons/outline";
import ParallaxScrollView from "@/components/ParallaxScrollView";

export default function CategoryScreen() {
  const [data, setData] = useState<any>();
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  const {
    //@ts-ignore
    params: { id, images, text, slug },
  } = useRoute();

  const fetchData = async (
    factory_slug = null,
    size_slug = null,
    sort_type = null
  ) => {
    const res = await fetch(
      `https://app.assen.ir/api/v1/category/${slug}?${
        factory_slug && `factory_slug=${factory_slug}`
      }&${size_slug && `size_slug=${size_slug}`}&${
        sort_type && `sort_type=${sort_type}`
      }`
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
  }, [data]);

  return (
    <SafeAreaView style={tw`bg-[#F9F7F7] pt-5`}>
      <View>
        <View style={tw`px-4 pt-2 flex-row justify-between items-center`}>
          <TouchableOpacity
            onPress={navigation.goBack}
            style={tw`p-2 rounded-full`}
          >
            <ArrowLeftIcon size={20} color="#960b0b" />
          </TouchableOpacity>
          <Text style={[styles.font, tw`text-2xl pt-4`]}>{text}</Text>
        </View>
        <View style={tw`w-full px-4 items-end py-2`}>
          <FunnelIcon size={20} color="#960b0b" />
        </View>
      </View>

      <ScrollView
        style={tw`bg-gray-100`}
        contentContainerStyle={{
          paddingBottom: 100,
        }}
      >
        <Image style={tw`w-full h-56 bg-gray-300 p-4`} source={images} />
        <View style={tw`bg-white`}>
          <View style={tw`flex flex-col gap-4 w-full h-full`}>
            {loading ? (
              <View style={tw`w-full h-[400px] items-center justify-center`}>
                <Text>Loading ...</Text>
              </View>
            ) : (
              data?.data.map((item: any) => (
                <View
                  key={item.factory_slug}
                  style={tw`flex flex-col w-full px-2 py-3 rounded-lg bg-white`}
                >
                  <View
                    style={tw`bg-[#23395b] text-white flex-row justify-between px-2 py-4 rounded-t-lg`}
                  >
                    <View style={tw`flex flex-col items-end gap-2 w-full`}>
                      <Text style={[styles.font, tw`text-[14px] text-white`]}>
                        {item.factory_title}
                      </Text>
                      <View style={tw`gap-2 w-full items-end`}>
                        <View style={tw`flex-row items-center gap-1`}>
                          <Text style={[styles.font, tw`text-white`]}>
                            آخرین بروزرسانی:{item.products[0].updated_at}
                          </Text>
                          <ClockIcon size={20} color="white" />
                        </View>
                        <View style={tw`flex-row items-center gap-1`}>
                          <Text
                            style={[styles.font, tw`text-[12px] text-white`]}
                          >
                            قیمت ها با احتساب 10 درصد مالیات بر ارزش افزوده
                            می‌باشند.
                          </Text>
                          <InformationCircleIcon size={20} color="white" />
                        </View>
                      </View>
                    </View>
                    <View style={tw`flex-row items-center gap-4`}></View>
                  </View>
                </View>
              ))
            )}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  font: {
    fontFamily: "IranSans",
  },
});
