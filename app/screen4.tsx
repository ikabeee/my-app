import { useLocalSearchParams, useRouter } from "expo-router";
import { View, Text, Button } from "react-native";

export default function Screen4() {
    const router = useRouter();
    const params = useLocalSearchParams()
    const {name, age, tel} = params;

    return (
        <View>
            <Text>Esta es la cuarta pantalla</Text>
            <Text> {name ? `Mi nombre es ${name}` : "No recibí un nombre"}</Text>
            <Text> {age ? `Mi nombre es ${age}` : "No recibí una edad"}</Text>
            <Text> {tel ? `Mi nombre es ${tel}` : "No recibí un telefóno"}</Text>
            <Button title="Screen 3" onPress={() => router.back()} />
        </View>
    )
}