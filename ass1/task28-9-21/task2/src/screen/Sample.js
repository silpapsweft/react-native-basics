import React, { useState } from 'react'
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Entypo';
const numColumns = 2;
const Data = [
    {
        id: "1",
        title: "FATURAMLNTOS",
        imges: require('../images/i1.png')
    },
    {
        id: "2",
        title: "CADKA",
        imges: require('../images/i2.png')
    },
    {
        id: "3",
        title: "EXTRATOS",
        imges: require('../images/i3.png')
    },
    {
        id: "4",
        title: "TRANGHCH OFFLINE",
        imges: require('../images/i4.png')
    },
    {
        id: "5",
        title: "VALORES RECEIVER",
        imges: require('../images/i5.png')
    },

    {
        id: "6",
        title: "PAGER CONTAS",
        imges: require('../images/i6.png')
    },




];
const Item = ({ item, onPress, backgroundColor, tint, textColor }) => (
    <TouchableOpacity onPress={onPress} style={[styles.cards, backgroundColor]}>
        <Image source={item.imges} style={[styles.cardImg, tint]} ></Image>
        <Text style={[styles.cardText, textColor]}>{item.title}</Text>
    </TouchableOpacity>
);



const Sample = () => {
    const [selectedId, setSelectedId] = useState(null);

    const renderItem = ({ item }) => {
        const tintColor = item.id === selectedId ? "#fff" : "#fd7907";
        const backgroundColor = item.id === selectedId ? "#fd7907" : "#fff";
        const color = item.id === selectedId ? 'white' : '#8f8f8f';
        return (
            <Item
                item={item}
                onPress={() => setSelectedId(item.id)}
                backgroundColor={{ backgroundColor }}
                tint={{ tintColor }}
                textColor={{ color }}
            />
        );
    };

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


                    <FlatList
                        data={Data}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id}
                        extraData={selectedId}
                        numColumns={numColumns}
                    />

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
        nextSection: {
            flex: 3,
            backgroundColor: '#fff',
            margin: 20,
            borderRadius: 10,
            padding: 20,
            elevation: 8
        },
        saldoText: {
            color: '#fd7907',
            fontWeight: 'bold',
            fontSize: 20
        },
        rs: {
            fontSize: 18,
            marginVertical: 10,
            color: '#8f8f8f'
        },
        cards: {
            flex: 1,
            margin: 5,
            borderRadius: 10,
            backgroundColor: '#fff',
            elevation: 2,
            padding: 15
        },
        cards1: {
            flex: 1,
            margin: 5,
            borderRadius: 10,
            backgroundColor: '#ccc',
            elevation: 2,
            padding: 15
        },
        cardImg: {
            width: 40,
            height: 42,
            tintColor: '#fd7907'
        },
        cardText: {
            color: '#8f8f8f',
            paddingTop: 10
        },
    }
)

export default Sample
