import { View, TouchableOpacity, Text, Image } from "react-native";
import { images } from "../../../images";
import { StyleSheet } from "react-native";

export default function ButtonGreen () {
    return(
        <View style={styles.buttonBox}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>
                            Confirmar pedido
                        </Text>
                        <View style={styles.iconBox}>
                            <Image source={images.check}/>
                        </View>
                    </TouchableOpacity>
                </View>
    )
}

const styles = StyleSheet.create({
    buttonBox: {
        backgroundColor:"#39b100",
        height: 50,
        borderRadius: 10,
    },
    button: {
        flexDirection: "row",
        justifyContent:"space-between",
        alignItems: "center"
    },
    buttonText:{
        flex:5,
        fontSize: 16,
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
    },
    iconBox: {
        flex:1,
        backgroundColor: "#41c900",
        height: 50,
        justifyContent:"center",
        alignItems: "center",
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
    }
})