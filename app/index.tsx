import { useRouter } from "expo-router";
import { useState } from "react";
import { View, Text, Button, TextInput } from "react-native";

export default function Screen2() {
    const router = useRouter();
    const [name, setName] = useState(''); 7
    const [age, setAge] = useState('');
    const [tel, setTel] = useState('');

    return (
        <View>
            <Text>Hello World</Text>
            <Text>Esta es la primera pantalla </Text>
            <TextInput placeholder="Ingresa tu nombre" value={name} onChangeText={setName} />
            <TextInput placeholder="Ingresa tu edad" value={age} onChangeText={setAge} keyboardType="number-pad" />
            <TextInput placeholder="Ingresa tu telefóno" value={tel} onChangeText={setTel} keyboardType="phone-pad" />
            <Button title="Screen 2" onPress={() => router.push(`/screen2?name=${encodeURIComponent(name && age && tel)}`)} />
        </View>
    )
}