import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

export default function ManutencaoModel({ placa, dataInicio, dataFim, valor, des, tipo }) {

    return (
        <View style={styles.container} >
            <View style={styles.content}>
                <View style={styles.textContainer}>
                    <Text style={styles.info}>Placa: <Text style={styles.value}>{placa}</Text></Text>
                    <Text style={styles.info}>Início: <Text style={styles.value}>{dataInicio}</Text></Text>
                    <Text style={styles.info}>Fim: <Text style={styles.value}>{dataFim}</Text></Text>
                    <Text style={styles.info}>Valor: <Text style={styles.value}>{valor}</Text></Text>
                    <Text style={styles.info}>Descrição: <Text style={styles.value}>{des}</Text></Text>
                </View>
                <View style={styles.imageContainer}>
                    <Image source={require('../../assets/carga.png')} style={styles.image} />
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
