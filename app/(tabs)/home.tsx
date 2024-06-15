import {
  Text,
  View,
  SafeAreaView,
  Image,
  Button,
  StyleSheet,
  ScrollView,
  DrawerLayoutAndroid,
} from "react-native";
import tw from "twrnc";
import Categories from "@/components/Categories";
import Header from "@/components/Header";
import { useRef } from "react";
import { XMarkIcon } from "react-native-heroicons/outline";

export default function tabNew() {
  const drawer = useRef<DrawerLayoutAndroid>(null);

  const navigationView = () => (
    <View
      style={tw`flex flex-col flex-1 items-end justify-start bg-[#f9f7f7] pt-4`}
    >
      <View
        style={tw`w-full flex-row justify-between items-center border-b border-gray-300 p-2`}
      >
        <XMarkIcon
          size={30}
          color="#000"
          fontWeight="bold"
          onPress={() => drawer.current?.closeDrawer()}
        />
        <View style={tw`flex-row gap-2 items-center`}>
          <View style={tw`flex flex-col gap-1`}>
            <Text>آسن</Text>
            <Text>Assen</Text>
          </View>
          <Image
            source={require("@/assets/icons/mobile-logo.png")}
            style={tw``}
          />
        </View>
      </View>
      <View style={tw`w-full border-b-2 border-gray-300 p-4`}>
        <Text>Get Data from API</Text>
      </View>
      <View style={tw`w-full border-b-2 border-gray-300 p-4`}>
        <Text>انتخاب واحد پولی</Text>
      </View>
      <View style={tw`w-full flex flex-col gap-4 p-4`}>
        <Text>بلاگ</Text>
        <Text>درباره ما</Text>
        <Text>تماس با ما</Text>
      </View>
    </View>
  );
  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={300}
      drawerPosition={"right"}
      renderNavigationView={navigationView}
    >
      <SafeAreaView style={tw`bg-[#F9F7F7] pt-5`}>
        {/* Header */}
        <Header drawer={drawer} />
        {/* body */}
        <ScrollView
          style={tw`bg-gray-100`}
          contentContainerStyle={{
            paddingBottom: 100,
          }}
        >
          {/* banner */}
          <Categories />
          {/* table */}
          {/* consultation-request */}
        </ScrollView>
      </SafeAreaView>
    </DrawerLayoutAndroid>
  );
}

const styles = StyleSheet.create({});
