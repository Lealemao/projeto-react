import {View, StyleSheet} from 'react-native';

import Botao from "./src/components/Botao";

export default function App() {
  return (
    <View style={estilos.container}>
      <View style={estilos.botoes}>
       <Botao label="7" />
       <Botao label="8" />
       <Botao label="9" />
       <Botao label="*" />
       <Botao label="4" />
       <Botao label="5" />
       <Botao label="6" />
       <Botao label="-" />
       <Botao label="1" />
       <Botao label="2" />
       <Botao label="3" />
       <Botao label="+" />
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'

  },

  botoes: {
    flexDirection: 'row',
    flexWrap: "wrap"
  }
});