import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

export default function ManutencaoModel({ placa, nome, dataSaida, dataRetorno, des, tipo }) {

    return (
        <View style={styles.container} >
            <View style={styles.content}>
                <View style={styles.textContainer}>
                    <Text style={styles.info}>Nome: <Text style={styles.value}>{nome}</Text></Text>
                    <Text style={styles.info}>Placa: <Text style={styles.value}>{placa}</Text></Text>
                    <Text style={styles.info}>Saída: <Text style={styles.value}>{dataSaida}</Text></Text>
                    <Text style={styles.info}>Retorno: <Text style={styles.value}>{dataRetorno}</Text></Text>
                    <Text style={styles.info}>Descrição: <Text style={styles.value}>{des}</Text></Text>
                </View>
                <View style={styles.imageContainer}>
                    <Image source={require('../../../../frontEnd/areaGerencial/imgs/' + tipo + '.png')} style={styles.image} />
                </View>
            </View>
        </View>
    );
}

const styles = {
    container: {
        width: '100%',
        padding: 10,
    },
    content: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 10,
    },
    textContainer: {
        flex: 1,
        marginRight: 10
    },
    info: {
        fontSize: 18
    },
    value: {
        fontWeight: '600',
        fontSize: 15
    },
    imageContainer: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: '#f2f2f2',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 60,
        height: 60,
    }

};
