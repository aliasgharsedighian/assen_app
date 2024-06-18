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
import { BottomDrawer } from "@/components/BottomDrawer";
import { Collapsible } from "@/components/Collapsible";

const styles = require("@/app/style");

export default function CategoryScreen() {
  const [data, setData] = useState<any>();
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  const {
    //@ts-ignore
    params: { id, images, text, slug },
  } = useRoute();

  const fetchData = async (
    factory_slug: null | string = null,
    size_slug = null,
    sort_type: null | string = null
  ) => {
    setLoading(true);
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
          <Text style={[styles.regularFont, tw`text-2xl pt-4`]}>{text}</Text>
        </View>
        <BottomDrawer title="فیلتر">
          <View style={tw`w-full gap-6`}>
            <Collapsible title="کارخانه" defaultOpen={true}>
              <View style={tw`flex flex-col gap-4 pr-2`}>
                {data?.factories.map((item: any, index: number) => (
                  <View key={index}>
                    <Text style={[tw``, styles.regularFont]}>{item.title}</Text>
                  </View>
                ))}
              </View>
            </Collapsible>
            <Collapsible title="سایز" defaultOpen={false}>
              <View style={tw`flex flex-col gap-4 pr-2`}>
                {data?.sizes.map((item: any, index: number) => (
                  <View key={index}>
                    <Text style={[tw``, styles.regularFont]}>{item.title}</Text>
                  </View>
                ))}
              </View>
            </Collapsible>
          </View>
        </BottomDrawer>
      </View>

      <ScrollView
        style={tw`bg-[#f9f7f7]`}
        contentContainerStyle={{
          paddingBottom: 100,
        }}
      >
        <Image style={tw`w-full h-56 bg-gray-300 p-4`} source={images} />
        <View style={tw`bg-[#f9f7f7]`}>
          <View style={tw`flex flex-col gap-4 w-full h-full`}>
            {loading ? (
              <View style={tw`w-full h-[400px] items-center justify-center`}>
                <Text>Loading ...</Text>
              </View>
            ) : (
              data?.data.map((item: any, index: number) => (
                <View
                  key={index}
                  style={tw`flex flex-col w-full px-2 py-3 rounded-lg bg-white`}
                >
                  <View
                    style={tw`bg-[#23395b] text-white flex-row justify-between px-2 py-4 rounded-t-lg`}
                  >
                    <View style={tw`flex flex-col items-end gap-2 w-full`}>
                      <Text
                        style={[styles.regularFont, tw`text-[14px] text-white`]}
                      >
                        {item.factory_title}
                      </Text>
                      <View style={tw`gap-2 w-full items-end`}>
                        <View style={tw`flex-row items-center gap-1`}>
                          <Text style={[styles.regularFont, tw`text-white`]}>
                            آخرین بروزرسانی:{item.products[0].updated_at}
                          </Text>
                          <ClockIcon size={20} color="white" />
                        </View>
                        <View style={tw`flex-row items-center gap-1`}>
                          <Text
                            style={[
                              styles.regularFont,
                              tw`text-[12px] text-white`,
                            ]}
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
                  <View
                    style={tw`bg-[#960b0b] flex-row items-center py-4 px-2 justify-between`}
                  >
                    <Text
                      style={[
                        styles.regularFont,
                        tw`text-[12px] w-[12%] text-center text-white`,
                      ]}
                    >
                      نوسانات
                    </Text>
                    <Text
                      style={[
                        styles.regularFont,
                        tw`text-[12px] w-[18%] text-center text-white`,
                      ]}
                    >
                      قیمت
                    </Text>
                    <Text
                      style={[
                        styles.regularFont,
                        tw`text-[12px] w-[12%] text-center text-white`,
                      ]}
                    >
                      واحد
                    </Text>
                    <Text
                      style={[
                        styles.regularFont,
                        tw`text-[12px] w-[18%] text-center text-white`,
                      ]}
                    >
                      محل تحویل
                    </Text>
                    <Text
                      style={[
                        styles.regularFont,
                        tw`text-[12px] w-[12%] text-center text-white`,
                      ]}
                    >
                      سایز
                    </Text>
                    <Text
                      style={[
                        styles.regularFont,
                        tw`text-[12px] w-[28%] text-center text-white`,
                      ]}
                    >
                      برند
                    </Text>
                  </View>
                  <View style={tw`flex flex-col`}>
                    {item?.products.map((item: any, index: number) => (
                      <View
                        key={index}
                        style={tw`flex-row items-center py-4 px-2 justify-between ${
                          index % 2 === 0 ? "bg-[#f9f7f7]" : "bg-white"
                        }`}
                      >
                        <Text
                          style={[
                            styles.regularFont,
                            tw`text-[12px] w-[12%] text-center ${
                              item.fluctuation_pric >= 0
                                ? "text-green-800"
                                : "text-red-800"
                            }`,
                          ]}
                        >
                          {item.fluctuation_pric} %
                        </Text>
                        <Text
                          style={[
                            styles.regularFont,
                            tw`text-[12px] w-[18%] text-center`,
                          ]}
                        >
                          {Number(item.price).toLocaleString()}
                        </Text>
                        <Text
                          style={[
                            styles.regularFont,
                            tw`text-[12px] w-[12%] text-center`,
                          ]}
                        >
                          کیلوگرم
                        </Text>
                        <Text
                          style={[
                            styles.regularFont,
                            tw`text-[12px] w-[18%] text-center`,
                          ]}
                        >
                          {item.place_of_delivery}
                        </Text>
                        <Text
                          style={[
                            styles.regularFont,
                            tw`text-[12px] w-[12%] text-center`,
                          ]}
                        >
                          {item.size_title.match(/\d+/)[0]}
                        </Text>
                        <Text
                          style={[
                            styles.regularFont,
                            tw`text-[12px] w-[28%] text-center`,
                          ]}
                        >
                          {item.factory_title}
                        </Text>
                      </View>
                    ))}
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
