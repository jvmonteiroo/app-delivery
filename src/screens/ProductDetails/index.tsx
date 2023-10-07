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
            <View style={styles.parteDeCimaPorCima}>
                <Image source={images.produto}/>
                <Text>
                    Ao Molho
                </Text>
                <Text>
                    Macarrão ao molho branco, fughi e cheiro verde das montanhas.
                </Text>
                <Text>
                    R$ 19,90
                </Text>
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
        borderWidth:10,
        padding: 20,
    },    
    parteDeCimaPorBaixo: {
        borderWidth:10,
        justifyContent: 'space-between',
        flexDirection: 'row',
        height:200
    },
    parteDeCimaPorCima: {
        borderWidth:1
    },
    Adicionais: {
        borderWidth:1
    },
})