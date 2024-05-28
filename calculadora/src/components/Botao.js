import { Text, TouchableHighlight, StyleSheet, Dimensions } from "react-native"

const{width, height} = Dimensions.get("window")

export default props => {
    return(
        <TouchableHighlight>
            <Text style={estilos.botao}>{props.label}</Text>
        </TouchableHighlight>
    )
}

const estilos = StyleSheet.create({
    botao: {
        fontSize: 40,
        width: width / 4,
        height: width / 4,
        padding: 10,
        textAlign: 'center',
        borderWidth: 1,
        borderColor: "#888",
        backgroundColor: "#f0f0f0"
    }
})