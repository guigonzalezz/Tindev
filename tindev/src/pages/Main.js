import React from 'react';
import { View, Text, SafeAreaView, Image, StyleSheet } from 'react-native';

import logo from '../assets/logo.png';


export default function Main() {
    return (
        <SafeAreaView style={styles.container}>
            <Image source={logo} />

            <View style={styles.cardsContainer}>
                <View style={styles.card}>
                    <Image style={styles.avatar} source={{ uri: 'https://avatars0.githubusercontent.com/u/45018237?v=4'}}/>
                    <View style={styles.footer}>
                        <Text style={styles.name}>Gabriel Ruiz</Text>
                        <Text style={styles.bio}>Cybersecurity Student and Pentester.</Text>
                    </View>
                </View>

                <View style={styles.card}>
                    <Image style={styles.avatar} source={{ uri: 'https://avatars0.githubusercontent.com/u/45018237?v=4'}}/>
                    <View style={styles.footer}>
                        <Text style={styles.name}>Gabriel Ruiz</Text>
                        <Text style={styles.bio}>Cybersecurity Student and Pentester.</Text>
                    </View>
                </View>

                <View style={styles.card}>
                    <Image style={styles.avatar} source={{ uri: 'https://avatars0.githubusercontent.com/u/45018237?v=4'}}/>
                    <View style={styles.footer}>
                        <Text style={styles.name}>Gabriel Ruiz</Text>
                        <Text style={styles.bio}>Cybersecurity Student and Pentester.</Text>
                    </View>
                </View>
            </View>

            <View />
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#F5F5F5',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    cardsContainer: {
        flex: 1,
        alignSelf: 'stretch',
        justifyContent: 'center',
        maxHeight: 500,        
    },

    card: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        margin: 30,
        overflow: 'hidden',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },

    avatar: {
        flex:1,
        height:300,
    },
});