import { StatusBar, Text, View } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Azizaru</Text>
      <Link href="/profile" style={{color: 'blue'}}> Go To Your Profile </Link>
    </View>
  );
}
