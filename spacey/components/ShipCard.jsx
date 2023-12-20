import { View, Text, StyleSheet, Image, Button, TouchableOpacity, Platform } from 'react-native';
import React from 'react';


export default function ShipCard({ navigation, id, title }) {
    const handlePress = () => {
        navigation.navigate('Подробности', { id: id });
    };

    return (
        <TouchableOpacity style={styles.btn} onPress={handlePress}>
           <View style={styles.card}>
                <View style={styles.imageItem}>
                    {/* <Image source={{ uri: "http://192.168.1.3:9000/spacey/"+ props.Image_url.slice(16, props.Image_url.lenght+1) }} style={styles.image}/> */}
                    <Image source={require('./starship.jpg')}></Image>
                </View>
                <Text href='' style={styles.textItem}>
                    {title}
                </Text>
            </View> 
        </TouchableOpacity>
        
    );
}

const styles = StyleSheet.create({
    card: {
        flex: 0,
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: '21%',
        borderRadius: 6,
        margin: '2%',
        flexDirection: 'column',
        transitionDuration: 0.3,
      },
      cardPressed: {
        backgroundColor: '#e7e7e7', // Цвет фона при активации
      },
      imageItem: {
        margin: '5%',
        padding: 0,
        // paddingBottom: '120%', // Это приблизительно соответствует вашему padding-bottom: 120%
        overflow: 'hidden',
        position: 'relative',
        borderRadius: 5,
        height: 200,
      },
      image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover', // Вместо object-fit: cover
        position: 'absolute',
        top: 0,
        left: 0,
      },
      textItem: {
        color: '#303030',
        fontSize: 26,
        marginVertical: '1%', // Используйте marginVertical вместо margin-top и margin-bottom
        alignSelf: 'center', // Используйте alignSelf вместо margin: auto
      },
      description: {
        fontSize: 18,
        margin: '5%',
        flex: 1,
        justifyContent: 'center',
      },
      type: {
        flexDirection: 'row',
        alignItems: 'center',
      },

});