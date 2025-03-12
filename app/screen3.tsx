import { useRouter } from "expo-router";
import { useState } from "react";
import { View, Text, Button, TextInput } from "react-native";

export default function Screen3() {
    const router = useRouter();
    const [form, setForm] = useState({
        name: "",
        age: "",
        tel: "",
    });
    const handleForm = (data: object) => {
        setForm((prev)=>({...prev, ...data}))
    }

return (
    <View>
        <Text>Hello World</Text>
        <Text>Esta es la tercera pantalla </Text>
        <TextInput placeholder="Ingresa tu nombre" value={form.name} onChangeText={((text)=>handleForm({name: text}))} />
        <TextInput placeholder="Ingresa tu edad" value={form.age} onChangeText={((text)=>handleForm({age: text}))} keyboardType="number-pad" />
        <TextInput placeholder="Ingresa tu telefóno" value={form.tel} onChangeText={((text)=>handleForm({tel: text}))} keyboardType="phone-pad" />
        <Button title="Screen 4" onPress={() => router.push({
            pathname: "./screen4",
            params: form,
        })} />
    </View>
)
}