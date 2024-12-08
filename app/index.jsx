import { Image, ScrollView, Text, View } from "react-native";
import { Link, Redirect, router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "@/constants";
import CustomButton from "@/components/CustomButton";

export default function Index() {
  return (
    <SafeAreaView className="bg-primary h-full px-5 pt-5">
      <ScrollView contentContainerStyle= {{ height:'100%' }}>
        <View className="w-full justify-center items-center min-h-[85vh] px-4">
          <Image source={images.logo} className="w-[250px] h-[50px]" resizeMode="contain"/>
          <Image source={images.cards} className="max-w-[465px] w-full h-[370px]" resizeMode="contain"/>
          <View className="relative">
            <Text className="text-3xl text-color3 font-bold text-center font-psemibold">Discover Endless Possibilities with Myrayoo</Text>
          </View>
          <Text className="text-color4 text-base font-pregular mt-7 text-center">Get Ready For Your New Cuddly Buddy. Find Your perfect Forever Friend.</Text>
          <CustomButton
          title="Continue with Email"
          handlePress={() => {router.push('/Signin')}}
          containerStyles="w-full mt-7"
          />
        </View>
      </ScrollView>
      <StatusBar backgroundColor='primary'
      style='dark'/>
    </SafeAreaView>
  );
}