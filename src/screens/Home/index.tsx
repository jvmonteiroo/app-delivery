import { Image, ScrollView, Text, View } from "react-native"
import { StyleSheet } from "react-native"
import { images } from "../../../images"

export default function Home (){

    const products: any[] = [
        {
            title: "Ao molho", 
            description: "Macarrão ao molho branco fughi e cheiro verde das montanhas",
            price: "19,90"
        },
        {
            title: "Veggie",
            description: "Macarrão com pimentão, ervilha e ervas finas colhidas no imalaia",
            price: "29,90"
        },
        {
            title: "Veggie",
            description: "Macarrão com pimentão, ervilha e ervas finas colhidas no imalaia",
            price: "29,90"
        }
    ]

    return (
       <View style={styles.container}>
        <View style={styles.header}></View>
        <View style={styles.content}>
        <View style={styles.section}>
            <Text style={styles.sectionTitle}>Categorias</Text>
            <ScrollView horizontal={true} style={styles.categoryBox}>
                <View style={styles.categoryIcon}>
                    <Image source={images.group} resizeMode="contain" resizeMethod="resize" style={styles.categoryIconImage} />
                </View>
                <View style={styles.categoryIcon}>
                    <Image source={images.pizza} resizeMode="contain" resizeMethod="resize" style={styles.categoryIconImage} />
                </View>
                <View style={styles.categoryIcon}>
                    <Image source={images.carnes} resizeMode="contain" resizeMethod="resize" style={styles.categoryIconImage} />
                </View>
            </ScrollView>
        </View>
        <View style={styles.section}>
            <Text style={styles.sectionTitle}>Pratos</Text>
            <View style={styles.sectionContent}>
            
            { products.map(item => (
                <View style={styles.productItem}>
                    <View style={styles.productBackground}>
                        <Image source={images.produto} resizeMode="contain" resizeMethod="resize"/>
                    </View>
                    <View style={styles.textBox}>
                        <Text style={styles.textBoxTitle}>{item.title}</Text>
                        <Text style={styles.textBoxDescription}>{item.description}</Text>
                        <Text style={styles.textBoxPrice}>R$ {item.price}</Text>
                    </View>
                </View>
            ))}

            </View>
        </View>
        </View>
       </View>
    )
}

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            backgroundColor:"white",
        },
        header: {
            backgroundColor:"#c72828",
            height:150,
        },
        content: {
            paddingHorizontal:15,
        },
        section: {
            paddingVertical: 15,
        },
        sectionTitle: {
            fontWeight: "bold",
            fontSize: 24,
            color: "#999",
            marginBottom:12,
        },
        categoryBox: {

        },
        categoryIcon: {
            width: 120,
            height: 120,
            marginHorizontal: 12,
            justifyContent:"center",
            alignItems: "center",
            borderRadius: 20,
            backgroundColor: "#f0f0f5"
        },
        categoryIconImage: {
            width: 50,
            height: 50,
        },
        sectionContent: {
            borderColor:"red",
        },
        productItem: {
            height: 120,
            borderRadius:8,
            backgroundColor: "#f0f0f5",
            justifyContent:"space-between",
            flexDirection:"row",
            marginBottom:10,
        },
        productBackground: {
            backgroundColor:"#ffb84d",
            flex:1,
            justifyContent:"center",
            alignItems:"center",
            borderTopLeftRadius:8,
            borderBottomLeftRadius:8,
        },
        textBox: {
            flex:2,
            paddingHorizontal: 14,
            padding: 14,
            justifyContent:"center",
        },
        textBoxTitle: {
            fontWeight: "bold",
            color:"#3d3d4d",
            fontSize: 18,
        },
        textBoxDescription: {
            color:"#3d3d4d",
            fontSize:16,
        },
        textBoxPrice: {
            fontSize:24,
            color:"#39b100",
            fontWeight:"bold",
        }

    }
)