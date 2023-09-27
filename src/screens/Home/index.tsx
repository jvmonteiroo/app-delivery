import { Image, ScrollView, Text, View } from "react-native"
import { StyleSheet } from "react-native"
import { images } from "../../../images"

export default function Home (){
    return(
       <View style={styles.container}>
        <View style={styles.section}>
            <Text style={styles.sectionTitle}>Categorias</Text>
            <ScrollView horizontal={true} style={styles.categoryBox}>
                <View style={styles.categoryIcon}>
                    <Image source={images.group} resizeMode="contain" resizeMethod="resize" style={styles.categoryIconImage} />
                </View>
                <View style={styles.categoryIcon}></View>
                <View style={styles.categoryIcon}></View>
            </ScrollView>
        </View>
        <View style={styles.section}>
            <Text style={styles.sectionTitle}>Pratos</Text>
            <View style={styles.sectionContent}>
                <View style={styles.productItem}>
                    <View style={styles.productBackground}></View>
                    <View style={styles.textBox}></View>
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
            justifyContent:"center",
        },
        section: {
            borderWidth: 1,
            paddingVertical: 15,
        },
        sectionTitle: {
            fontWeight: "bold",
            fontSize: 24,
            color: "#999",
        },
        categoryBox: {
            borderWidth: 1,
        },
        categoryIcon: {
            width: 150,
            height: 150,
            backgroundColor: "#eee",
            marginHorizontal: 12,
            justifyContent:"center",
            alignItems: "center",
            borderRadius: 20,

        },
        categoryIconImage: {
            width: 80,
            height: 80,
        }

    }
)