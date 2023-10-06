import { Text, View, StyleSheet, Image } from "react-native";
import { images } from '../../../images';


export default function ProductDetails (){
    return(
        <View style={styles.container}>
            <View style={styles.parteDeCimaPorBaixo}>
                <Image source={images.Voltar}/>
                <Text>
                    Prato - Massas
                </Text>
                <Image source={images.Favoritos}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderWidth:10,
        padding: 30,

    },    
    parteDeCimaPorBaixo: {
        borderWidth:10,
        justifyContent: 'space-between',
        flexDirection: 'row'
    }
})