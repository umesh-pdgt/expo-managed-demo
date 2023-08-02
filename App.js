import { Text, View } from "react-native";
import { Blurhash } from "react-native-blurhash";

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <Text>Hi, Welcome to Expo app!</Text>
      <Blurhash blurhash="LGFFaXYk^6#M@-5c,1J5@[or[Q6." style={{ flex: 1 }} />
    </View>
  );
}
