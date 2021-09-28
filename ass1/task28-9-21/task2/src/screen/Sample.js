import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Entypo';

const Sample = () => {
    return (
        <View style={{ flex: 1, }}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Financeiro</Text>
            </View>
            <View style={{ flex: 10, backgroundColor: '#f2f2f2' }}>
                <View style={styles.nextSection}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.saldoText}>Saldo Disponivel</Text>
                        <Icon
                            name="dots-three-vertical"
                            color='#000'
                            size={20}
                            style={{ paddingLeft: '42%', paddingRight: 10 }}
                        >
                        </Icon>
                    </View>
                    <Text style={{ color: '#8f8f8f' }}>Hoie,18 de june</Text>
                    <Text style={styles.rs}>R$ <Text style={{ fontSize: 42, color: '#000' }}>302,36</Text></Text>
                </View>
                <View style={{ flex: 10, margin: 20 }}>
                    <View style={{ flex: 2, flexDirection: 'row' }}>
                        <View style={styles.cards}>
                            <Image source={require('../images/i1.png')} style={styles.cardImg}></Image>
                            <Text style={{ color: '#8f8f8f', paddingTop: 10 }}>FATURAMLNTOS</Text>
                        </View>
                        <View style={styles.cards}>
                            <Image source={require('../images/i2.png')} style={styles.cardImg}></Image>
                            <Text style={{ color: '#8f8f8f', paddingTop: 10 }}>CADKA</Text>
                        </View>
                    </View>
                    <View style={{ flex: 2, flexDirection: 'row' }}>
                        <View style={styles.cards}>
                            <Image source={require('../images/i3.png')} style={styles.cardImg}></Image>
                            <Text style={{ color: '#8f8f8f', paddingTop: 10 }}>EXTRATOS</Text>
                        </View>
                        <View style={styles.cards}>
                            <Image source={require('../images/i4.png')} style={styles.cardImg}></Image>
                            <Text style={{ color: '#8f8f8f', paddingTop: 10 }}>TRANGHCH OFFLINE</Text>
                        </View>
                    </View>
                    <View style={{ flex: 2, flexDirection: 'row' }}>
                        <View style={styles.cards}>
                            <Image source={require('../images/i5.png')} style={styles.cardImg}></Image>
                            <Text style={{ color: '#8f8f8f', paddingTop: 10 }}>VALORES RECEIVER</Text>
                        </View>
                        <View style={styles.cards}>
                            <Image source={require('../images/i6.png')} style={styles.cardImg}></Image>
                            <Text style={{ color: '#8f8f8f', paddingTop: 10 }}>PAGER CONTAS</Text>
                        </View>
                    </View>
                </View>
            </View>

        </View>
    )
}
const styles = StyleSheet.create(
    {
        header: {
            flex: 1,
            backgroundColor: '#fd7907',
            paddingHorizontal: 20,
            justifyContent: 'flex-end',
            paddingVertical: 20
        },
        headerText: {
            color: '#fff', 
            fontWeight: 'bold', 
            fontSize: 20
        },
        nextSection:{ 
            flex: 3,
            backgroundColor: '#fff', 
            margin: 20, 
            borderRadius: 10, 
            padding: 20, 
            elevation: 8 
        },
        saldoText:{ 
            color: '#fd7907', 
            fontWeight: 'bold', 
            fontSize: 20 
        },
        rs:{ 
            fontSize: 18, 
            marginVertical: 10, 
            color: '#8f8f8f' 
        },
        cards:{ 
            flex: 1, 
            margin: 5, 
            borderRadius: 10, 
            backgroundColor: '#fff', 
            elevation: 2, 
            padding: 15 
        },
        cardImg:{ 
            width: 40, 
            height: 42, 
            tintColor: '#fd7907' 
        },
    }
)

export default Sample
