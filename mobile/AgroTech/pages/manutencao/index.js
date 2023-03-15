import { Image, Text, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { TextInput } from 'react-native';
import { useState, useEffect } from 'react';
import { Swipeable } from 'react-native-gesture-handler';

// import AsyncStorage from '@react-native-async-storage/async-storage';

import ManuComponent from '../../components/manutencao'

export default function telaManutencao({ navigation }) {

    const [manu, setManu] = useState([])

    useEffect(() => {
            const options = { method: 'GET' }

            fetch('http://localhost:3000/readManutencao', options)
                .then(response => response.json())
                .then(resp => {
                    setManu(resp)
                })

        
    }, [])

    const SwipeableListItem = () => {
        const renderRightActions = () => (
            <View style={{ marginTop: 10, borderRadius: 10, backgroundColor: 'red', height: 140, width: 150, justifyContent: 'center', alignItems: 'center', }}>
                <Text style={{ color: 'white' }}>Finalizar</Text>
            </View>
        );

        return (

            <ScrollView style={styles.sv}>

                {
                    manu.map((manu, index) => {
                        var date = new Date(manu.data_inicio)
                        var dt = date.toLocaleDateString('pt-BR', { timeZone: 'UTC' })
                        var date2 = new Date(manu.data_fim)
                        var dt2 = date2.toLocaleDateString('pt-BR', { timeZone: 'UTC' })
                        return (
                            <Swipeable key={index} renderRightActions={renderRightActions}>
                                <TouchableOpacity key={index} onPress={() => { navigation.navigate("Comentarios", { idPost: e.id }) }}>
                                    <ManuComponent placa={manu.veiculo.placa} dataInicio={dt} dataFim={dt2} valor={manu.valor} des={manu.descricao} tipo={manu.veiculo.tipo}></ManuComponent>
                                </TouchableOpacity>
                            </Swipeable>
                        )
                    })
                }

            </ScrollView>

        );
    };

    return (
        <View style={styles.v}>

            <SwipeableListItem />

        </View>
    )
}

const styles = StyleSheet.create({
    v: {
        height: "100%",
        backgroundColor: "#c3d9e4",
        width: "100%"
    },
    sv: {
        height: "100%",
        backgroundColor: "#c3d9e4",
        width: "100%"
    },

});