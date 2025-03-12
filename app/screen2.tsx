import { useLocalSearchParams, useRouter } from "expo-router";
import { View, Button, Text } from "react-native";

export default function Screen2() {
     const router = useRouter();
     const {name, age, tel} = useLocalSearchParams();
    return (
        <View>
            <Text>Esta es la seginda pantalla</Text>
            <Text> {name ? `Mi nombre es ${name}` : "No recibí un nombre"}</Text>
            <Text> {age ? `Mi nombre es ${age}` : "No recibí una edad"}</Text>
            <Text> {tel ? `Mi nombre es ${tel}` : "No recibí un telefóno"}</Text>
            <Button title="Screen 1" onPress={() => router.back()} />
        </View>
    )
}