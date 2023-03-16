import { Image, Text, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { TextInput } from 'react-native';
import { useState, useEffect } from 'react';
import { Swipeable } from 'react-native-gesture-handler';

// import AsyncStorage from '@react-native-async-storage/async-storage';

import ManuComponent from '../../components/manutencao'

export default function telaManutencao({ navigation }) {

    const [manu, setManu] = useState([])
    const [at, setAt] = useState()

    useEffect(() => {
        const options = { method: 'GET' }

        fetch('http://localhost:3000/readManutencao', options)
            .then(response => response.json())
            .then(resp => {
                setManu(resp)
            })


    }, [at])

    const finalizar = (id) => {
        console.log(id);
        var date = new Date(Date.now())

        var data = {
            "data_fim": date
        }

        const options = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        };


        fetch('http://localhost:3000/updateManutencao/' + id, options)
            .then(response => response.json())
            .then(response => {
                if (response.id !== undefined) {
                    const options = {
                        method: 'PUT',
                        headers: { 'Content-Type': 'application/json' },
                        body: '{"disponivel":true}'
                    };

                    fetch('http://localhost:3000/updateVeiculo/' + response.veiculo_id, options)
                        .then(response => response.json())
                        .then(response => {
                            if (response.id !== undefined) {
                                setAt(id)
                            }
                        })
                }

            })
    }

    const SwipeableListItem = () => {
        const renderRightActions = (idManu) => (
            <View style={{ marginTop: 10, borderRadius: 10, backgroundColor: 'red', height: 140, width: 150, justifyContent: 'center', alignItems: 'center', }}>
                <TouchableOpacity onPress={() => { finalizar(idManu) }}><Text style={{ color: "#fff", fontSize: 18, letterSpacing: 3, fontWeight: 700 }}>Finalizar</Text></TouchableOpacity>
            </View>
        );

        return (

            <ScrollView style={styles.sv}>

                {
                    manu.reverse().map((manu, index) => {
                        var date = new Date(manu.data_inicio)
                        var dt = date.toLocaleDateString('pt-BR', { timeZone: 'UTC' })
                        var dt2
                        if (manu.data_fim !== null) {
                            var date2 = new Date(manu.data_fim)
                            dt2 = date2.toLocaleDateString('pt-BR', { timeZone: 'UTC' })
                            return (

                                <ManuComponent key={index} placa={manu.veiculo.placa} dataInicio={dt} dataFim={dt2} valor={manu.valor} des={manu.descricao} tipo={manu.veiculo.tipo}></ManuComponent>

                            )
                        } else {
                            dt2 = "Ainda em manutenção"
                            return (
                                <Swipeable key={index} renderRightActions={() => renderRightActions(manu.id)}>

                                    <ManuComponent placa={manu.veiculo.placa} dataInicio={dt} dataFim={dt2} valor={manu.valor} des={manu.descricao} tipo={manu.veiculo.tipo}></ManuComponent>

                                </Swipeable>
                            )
                        }

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