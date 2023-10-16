import { Text, View, StyleSheet, Image } from "react-native";
import { images } from '../../../images';


export default function ProductDetails (){
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={images.Voltar}/>
                <Text>
                    Prato - Massas
                </Text>
                <Image source={images.Favoritos}/>
            </View>
            <View style={styles.headerDetails}>
                <View style={styles.headerDetailsBackground}>
                    <Image source={images.produto} style={styles.image} resizeMethod="resize" resizeMode="cover"/>
                </View>
            <View style={styles.headerDetailsText}>
                <Text style={styles.title}>
                    Ao Molho
                </Text>
                <Text style={styles.details}>
                    Macarrão ao molho branco, fughi e cheiro verde das montanhas.
                </Text>
                <Text style={styles.price}>
                    R$ 19,90
                </Text>
            </View>
                <View style={styles.Adicionais}>
                    <Text>
                        Adicionais
                    </Text>
                    <Text>
                        Bacon + -
                    </Text>
                    <Text>
                        Limão siciliano
                    </Text>
                    <Text>
                        Tomate
                    </Text>
                    <Text>
                        Molho branco
                    </Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },    
    header: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        height:200,
        backgroundColor:'#c72828',
    },
    headerDetails: {
        marginHorizontal: "5%",
        position:"absolute",
        top: 150,
        width: "90%"       
    },
    Adicionais: {
    },
    headerDetailsBackground: {
        backgroundColor:'#ffb84d',
        alignItems: "center",
        justifyContent: "flex-end",
        height: 200,
    },
    headerDetailsText: {
        backgroundColor: '#f0f0f5',
        flexDirection: "column",
        justifyContent: "space-between",
        paddingVertical: 15,
        paddingHorizontal: 22,
        gap: 10,
    },
    title: {
        fontWeight:"bold",
        fontSize: 20,
        color: "#3d3d4d"
    },
    details: {
        color:"#3d3d4d",
        fontSize: 15,
    },
    price: {
        color:"#6c6c80",
        fontSize:24,       
    },
    image: {
        width: "80%",
        height: 300,
        marginBottom: -130,
    }
})