import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView } from 'react-native-reanimated/lib/typescript/Animated'
import { images } from '@/constants'

const Home = () => {
  return (
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView contentContainerStyle={{ height:'100%' }}>
        <View className='w-full justify-center items-center h-full px-4'>
          <Image 
          source={images.logo}
          className="w-[130px] h-[84px]"
          resizeMode="contain"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home