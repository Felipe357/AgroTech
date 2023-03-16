import { Image, Text, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { TextInput } from 'react-native';
import { useState, useEffect } from 'react';
import { Swipeable } from 'react-native-gesture-handler';

import OpComponent from '../../components/operacao'

export default function telaOperacao({ navigation }) {

  const [op, setOp] = useState([])
  const [at, setAt] = useState()

  useEffect(() => {
    const options = { method: 'GET' }

    fetch('http://localhost:3000/readOperacao', options)
      .then(response => response.json())
      .then(resp => {
        setOp(resp)
      })


  }, [at])

  const finalizar = (id) => {

    var date = new Date(Date.now())

    var data = {
      "data_retorno": date
    }

    const options = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    };
    fetch('http://localhost:3000/updateOperacao/' + id, options)
      .then(response => response.json())
      .then(response => {
        console.log(response);
        if (response.id !== undefined) {
          const options = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: '{"disponivel":true}'
          }

          fetch('http://localhost:3000/updateVeiculo/' + response.veiculo_id, options)
            .then(response => response.json())
            .then(response2 => {
              if (response2.id !== undefined) {
                const options = {
                  method: 'PUT',
                  headers: { 'Content-Type': 'application/json' },
                  body: '{"disponivel":true}'
                }

                fetch('http://localhost:3000/updateMotorista/' + response.motorista_id, options)
                  .then(response => response.json())
                  .then(response3 => {
                    if (response3.id !== undefined) {
                      setAt(id)
                    }
                  })

              }
            })
        }

      })
  }

  const SwipeableListItem = () => {
    const renderRightActions = (idOp) => (
      <View style={{ marginTop: 10, borderRadius: 10, backgroundColor: 'red', height: 140, width: 150, justifyContent: 'center', alignItems: 'center', }}>
        <TouchableOpacity onPress={() => { finalizar(idOp) }}><Text style={{ color: "#fff", fontSize: 18, letterSpacing: 3, fontWeight: 700 }}>Finalizar</Text></TouchableOpacity>
      </View>
    );

    return (

      <ScrollView style={styles.sv}>

        {
          op.reverse().map((op, index) => {
            var date = new Date(op.data_saida)
            var dt = date.toLocaleDateString('pt-BR', { timeZone: 'UTC' })
            var dt2
            if (op.data_retorno !== null) {
              var date2 = new Date(op.data_retorno)
              dt2 = date2.toLocaleDateString('pt-BR', { timeZone: 'UTC' })
              return (

                <OpComponent key={index} placa={op.veiculo.placa} nome={op.motorista.nome} dataSaida={dt} dataRetorno={dt2} valor={op.valor} des={op.descricao} tipo={op.veiculo.tipo}></OpComponent>

              )
            } else {
              dt2 = "Ainda em operação"
              return (
                <Swipeable key={index} renderRightActions={() => renderRightActions(op.id)}>

                  <OpComponent placa={op.veiculo.placa} nome={op.motorista.nome} dataSaida={dt} dataRetorno={dt2} valor={op.valor} des={op.descricao} tipo={op.veiculo.tipo}></OpComponent>

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