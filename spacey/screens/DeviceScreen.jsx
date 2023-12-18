import { ScrollView, StyleSheet, View, TextInput, TouchableOpacity, Text } from 'react-native';
import React, { useEffect, useState } from 'react';

import { useRoute } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { axiosInstance } from '../API';
import { setShip } from '../store/shipSlice';
import OneShip from '../components/OneShip';

export default function DeviceScreen() {
    const route = useRoute();
    const shipId = route.params?.id || 'No ID';
    const dispatch = useDispatch();
    const { ship } = useSelector((store) => store.ship);
    
    useEffect(() => {
        async function getShip() {
            const response = await axiosInstance.get(`/api/ships/${shipId}`);
            dispatch(setShip(response?.data));
            console.log(response.data)
        }
        getShip();
    }, [dispatch]);

    return (
        <ScrollView style={styles.container}>
            <View style={styles.page}>
                {!!ship.data && <OneShip key={ship.data.ID} {...ship.data} />}
            </View>        
        </ScrollView>

        
    );
}


const styles = StyleSheet.create({
    container:{
        backgroundColor: '#1F3E47'
    },
    page: {
        display: 'flex',
        width: '100%',
        // justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#1F3E47',
    }
});