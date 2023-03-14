
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { TextInput } from 'react-native-web';
import { useState } from 'react';
import CryptoJS from "react-native-crypto-js";

import AsyncStorage from '@react-native-async-storage/async-storage';

export default function telaLogin({ navigation }) {

    var AES = require("react-native-crypto-js").AES;

    const [usuario, setUsuario] = useState("")
    const [senha, setSenha] = useState("")
    const [at, setAt] = useState(false)
    const [info] = useState([])
    const [secretKey] = "123456789";

    const storeData = async () => {
        
        try {
            await AsyncStorage.setItem('Info', JSON.stringify(info))
        } catch (e) {
            // saving error
        }
    }

    const verificar = async () => {

        var encrypted = await CryptoJS.AES.encrypt(senha, secretKey).toString();

        const options = {
            method: 'POST',
            body: JSON.stringify({
                "email": usuario,
                "senha": encrypted
            })
          };

          console.log(options)
          
          fetch('http://localhost:3000/loginUsuario', options)
            .then(response => response.json())
            .then(response => {
                console.log(response);
                if (response.tipo === "gerente") {
                    navigation.navigate("Gerencial")
                }
            })
    }

    return (
        <View style={styles.v}>

            <View style={styles.Logo}>
                <Text style={styles.titulo}>AgroTech</Text>
                <Text style={styles.sub}>Gerenciamento da Frota</Text>
            </View>

            <TextInput style={{ ...styles.inp1, borderBottomWidth: at ? 4 : 2, borderColor: at ? "red" : "#259ffa" }} placeholder="Usuario" onChangeText={(usuario) => { setUsuario(usuario) }} />
            <TextInput secureTextEntry={true} style={styles.inp2} placeholder="Senha" onChangeText={(senha) => { setSenha(senha) }} />

            <TouchableOpacity style={styles.btn} onPress={verificar}><Text style={styles.t}>Login</Text></TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    v: {
        height: "100%",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#c3d9e4"
    },
    titulo: {
        fontSize: 40,
        fontWeight: 700
    },
    sub: {
        fontSize: 18,
        fontWeight: 500
    },
    Logo: {
        width: 250,
        height: 150,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    inp1: {
        height: 40,
        width: 300,
        backgroundColor: "#f1f6fa",
        borderRadius: 5,
        paddingLeft: 10,
    },
    inp2: {
        height: 40,
        width: 300,
        backgroundColor: "#fff",
        borderRadius: 5,
        borderBottomWidth: 2,
        borderColor: "#259ffa",
        marginTop: 20,
        paddingLeft: 10
    },
    btn: {
        height: 40,
        width: 300,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#259ffa",
        marginTop: 20,
        borderRadius: 5
    },
    t: {
        fontWeight: "bold",
        color: "#fff",
        fontSize: 18
    }
});