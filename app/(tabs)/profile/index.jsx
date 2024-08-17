import CustomBottomSheet from "@/components/modals/CustomBottomSheet";
import CustomBottomSheetModal from "@/components/modals/CustomBottomSheetModal";
import TestModal from "@/components/modals/TestModal";
import ScreenWrapper, {
  ScreenWrapperScroll,
} from "@/components/wrappers/ScreenWrapper";
import { Link, router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect, useRef, useState } from "react";
import { View, Text, Button, Pressable } from "react-native";

export default function TabTwoScreen() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalVariantOpen, setIsModalVariantOpen] = useState(false);
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);
  const [isBottomSheetModalOpen, setIsBottomSheetModalOpen] = useState(false);

  return (
    <ScreenWrapperScroll style="p-4">
      {/* <Stack.Screen options={{ headerShown: true }} /> */}
      <View className="flex-row gap-4 items-center justify-between mb-4">
        <Text className="text-4xl">Profile</Text>
        <Link href="/profile/edit-profile" className="" asChild>
          <Text className="text-xl text-blue-500">edit</Text>
        </Link>
      </View>
      <View className="flex-row gap-4 items-center">
        <Pressable
          className="w-28 h-28 rounded-full bg-green-600 items-center justify-center"
          onPress={() => router.navigate("/profile/upload")}>
          <Text>---</Text>
        </Pressable>
        <View className="">
          <Text className="text-xl font-bold mb-2">John Doe</Text>
          <Text className="opacity-80">FL_Jone</Text>
        </View>
      </View>
      {/* Open Modals */}

      <View className="gap-4 my-6 px-6">
        <Button
          title="Open Ads Modal"
          onPress={() => setIsModalOpen((prev) => !prev)}
        />
        <Text>---+</Text>
        <Button
          title="Open Modal Variant"
          onPress={() => setIsModalVariantOpen((prev) => !prev)}
        />
        <Text>---+</Text>
        <Button
          title="Open Bottom Sheet"
          onPress={() => setIsBottomSheetOpen((prev) => !prev)}
        />
        <Text>---+</Text>
        <Button
          title="Open Bottom Sheet Modal"
          onPress={() => setIsBottomSheetModalOpen((prev) => !prev)}
        />
        <Text>---+</Text>
        <View className="bg-green-400 h-40" />
      </View>
      {/* // Modals */}
      <ModalSetup isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
      <ModalSetupVariant
        isOpen={isModalVariantOpen}
        setIsOpen={setIsModalVariantOpen}
        position={"top"}
      />
      {/* // Bottom Sheet */}
      <BottomSheetMain
        isOpen={isBottomSheetOpen}
        setIsOpen={setIsBottomSheetOpen}
      />
      {/* <BottomSheetModal
        isOpen={isBottomSheetModalOpen}
        setIsOpen={setIsBottomSheetModalOpen}
      /> */}
    </ScreenWrapperScroll>
  );
}

const BottomSheetModal = ({ isOpen, setIsOpen }) => {
  const sheetRef = useRef(null);
  useEffect(() => {
    if (isOpen) sheetRef.current?.present();
  }, [isOpen]);
  return (
    isOpen && (
      <CustomBottomSheetModal
        ref={sheetRef}
        handleClose={() => setIsOpen((prev) => !prev)}>
        <View className="p-4">
          <View className="mb-4">
            <Text className="text-xl font-bold text-white mb-1">
              Modal Title
            </Text>
            <Text className="text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
              nihil?
            </Text>
          </View>
          <Button title="Close" onPress={() => setIsOpen((prev) => !prev)} />
        </View>
      </CustomBottomSheetModal>
    )
  );
};
const BottomSheetMain = ({ isOpen, setIsOpen }) => {
  return (
    isOpen && (
      <CustomBottomSheet handleClose={() => setIsOpen((prev) => !prev)}>
        <View className="p-4">
          <View className="mb-4">
            <Text className="text-xl font-bold text-white mb-1">
              Modal Title
            </Text>
            <Text className="text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
              nihil?
            </Text>
          </View>
          <Button title="Close" onPress={() => setIsOpen((prev) => !prev)} />
        </View>
      </CustomBottomSheet>
    )
  );
};

const ModalSetupVariant = ({ isOpen, setIsOpen, position }) => {
  const setupContentPosition = (position) =>
    position == "center"
      ? "justify-center"
      : position == "bottom"
      ? "justify-end"
      : position == "top"
      ? "pt-10"
      : "justify-center";

  return (
    isOpen && (
      <>
        <TestModal>
          {/* <ScreenWrapper isStatusBar={false}> */}
          <View className={`flex-1 relative ${setupContentPosition(position)}`}>
            <Pressable
              className="absolute top-0 left-0 right-0 bottom-0 bg-black/40 pointer-events-auto"
              onPress={() => setIsOpen((prev) => !prev)}
            />
            <View className="p-6 bg-white m-4 rounded-lg">
              <View className="mb-4">
                <Text className="text-xl font-bold mb-1">Modal Title</Text>
                <Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Placeat, nihil?
                </Text>
              </View>
              <Button
                title="Close"
                onPress={() => setIsOpen((prev) => !prev)}
              />
            </View>
          </View>
          {/* </ScreenWrapper> */}
        </TestModal>
        <StatusBar hidden backgroundColor="transparent" />
      </>
    )
  );
};
const ModalSetup = ({ isOpen, setIsOpen }) => {
  return (
    isOpen && (
      <>
        <TestModal>
          <View className="flex-1 bg-yellow-500">
            <View className="h-36 relative bg-green-600">
              <Pressable
                className="w-12 h-12 absolute rounded-full bg-white text-black items-center justify-center right-6 top-14"
                onPress={() => setIsOpen((prev) => !prev)}>
                <Text className="text-2xl font-bold">X</Text>
              </Pressable>
            </View>
            <View className="p-6">
              <View className="">
                <Text>Modal</Text>
              </View>
              <Button
                title="Close"
                onPress={() => setIsOpen((prev) => !prev)}
              />
            </View>
          </View>
        </TestModal>
        <StatusBar style="dark" />
      </>
    )
  );
};
