import {
  FormEvent,
  PropsWithChildren,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  Image,
  Modal,
  View,
  Button,
  Text,
  ScrollView,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { FunnelIcon, XMarkIcon } from "react-native-heroicons/outline";
import { FunnelIcon as SolidFunnelIcon } from "react-native-heroicons/solid";
import tw from "twrnc";

export function BottomDrawer({
  children,
  title,
}: PropsWithChildren & { title: string }) {
  let modalRef = useRef<any>();

  // We need to get the height of the phone and use it relatively,
  // This is because height of phones vary
  const windowHeight = Dimensions.get("window").height;

  // This state would determine if the drawer sheet is visible or not
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);

  // Function to open the bottom sheet
  const handleOpenBottomSheet = () => {
    setIsBottomSheetOpen(true);
  };

  // Function to close the bottom sheet
  const handleCloseBottomSheet = () => {
    setIsBottomSheetOpen(false);
  };

  // useEffect(() => {
  //   let handler: any = (e: FormEvent<HTMLDivElement>) => {
  //     if (modalRef?.current && !modalRef.current.contains(e.target)) {
  //       setIsBottomSheetOpen(false);
  //     }
  //   };
  //   document.addEventListener("mousedown", handler);
  //   return () => {
  //     document.removeEventListener("mousedown", handler);
  //   };
  // }, [modalRef, isBottomSheetOpen]);

  return (
    <View>
      <Modal
        ref={modalRef}
        animationType="slide"
        transparent={true}
        // We use the state here to toggle visibility of Bottom Sheet
        visible={isBottomSheetOpen}
        // We pass our function as default function to close the Modal
        onRequestClose={handleCloseBottomSheet}
      >
        <TouchableOpacity
          style={tw`flex-1 bg-black bg-opacity-60`}
          activeOpacity={1}
          onPressOut={handleCloseBottomSheet}
        >
          <TouchableOpacity
            activeOpacity={1}
            style={[
              { height: windowHeight * 0.6 },
              tw`border-gray-300 absolute left-0 right-0 justify-start items-end bg-white rounded-t-md py-4 bottom-0 border w-full opacity-100`,
            ]}
          >
            <View
              style={tw`w-full flex-row items-end justify-between gap-4 w-full border-b pb-4 border-gray-200`}
            >
              <TouchableOpacity
                onPress={handleCloseBottomSheet}
                style={tw`w-full items-start px-2`}
              >
                <XMarkIcon size={20} color="#000" />
              </TouchableOpacity>
            </View>
            <ScrollView
              contentContainerStyle={{
                paddingBottom: 100,
                alignItems: "flex-end",
              }}
              style={tw`w-full px-2 py-4`}
            >
              {children}
            </ScrollView>
          </TouchableOpacity>
        </TouchableOpacity>
      </Modal>
      <View style={tw``}>
        <TouchableOpacity
          onPress={handleOpenBottomSheet}
          style={tw`w-full px-4 items-end py-2`}
        >
          {isBottomSheetOpen ? (
            <SolidFunnelIcon size={20} color="#960b0b" />
          ) : (
            <FunnelIcon size={20} color="#960b0b" />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
}
