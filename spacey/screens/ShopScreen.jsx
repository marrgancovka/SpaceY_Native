import { ScrollView, StyleSheet, View, TextInput, TouchableOpacity, Text , Image} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import React, { useState, useEffect } from 'react';
import { axiosInstance } from '../API';
import { setShips } from '../store/shipSlice';
import ShipCard from '../components/ShipCard';
import { useFocusEffect } from '@react-navigation/native';


export default function ShopScreen({ navigation }) {
    const dispatch = useDispatch();
    const [searchValue, setSearchValue] = useState('');
    const { ships } = useSelector((store) => store.ship);
  
    const handleSearch = async () => {
      try {
        const response = await axiosInstance.get(
          `/api/ships?search=${searchValue}`
        );
        dispatch(setShips(response?.data));
        console.log('API response:', response.data);
      } catch (error) {
        console.error('Error during search:', error);
      }
    };
  
    useFocusEffect(
      React.useCallback(() => {
        async function getAllShips() {
          try {
            const response = await axiosInstance.get('/api/ships');
            dispatch(setShips(response?.data));
            console.log('API response:', response.data);
          } catch (error) {
            console.error('Error fetching documents:', error);
          }
        }
        console.log('useeff');
        getAllShips();
      }, [dispatch]))
  
    return (
      <ScrollView style={styles.body}>
        <View style={styles.block}>
          <View style={styles.mytop}>
            {/* Form */}
            <View style={styles.searchContainer}>
              <TextInput
                style={styles.myinput}
                placeholder="Поиск по названию"
                value={searchValue}
                onChangeText={setSearchValue}
                autoCompleteType="off"
              />
              <TouchableOpacity onPress={handleSearch} style={styles.btn_submit}>
                <Text>Найти</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Card Container */}
          <View style={styles.cardContainer}>
            { !!ships.data && ships.data.map((ship) => (
              <ShipCard key={ship.id} {...ship} navigation={navigation}/>
            ))}
          </View>
        </View>
    </ScrollView>
    );  
  }

const styles = StyleSheet.create({
    mytop: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 1%',
        marginTop: '1%',
    },
    notFound: {
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: 24,
      marginBottom: '3%',
    },
    body: {
        backgroundColor: 'white',
        flex: 1,
        flexDirection: 'column',
      },
    search: {
      display: 'flex',
      margin: '0% 3% 0 2%',
      justifyContent: 'center',
      alignItems: 'center',
      width: 100,  
    },
    myinput: {
      width: 200,
      height: 35,
      borderRadius: 5,
      borderWidth: 1,
      borderColor: '#acacacd7',
      padding: 0,
      paddingHorizontal: 10,
      marginRight: 10,
      fontSize: 16,
    },
    btn_submit: {
      width: 60,
      height: 26,
      backgroundColor: 'rgba(0, 0, 0, 0)',
      borderWidth: 0,
    },
    searchImage: {
      width: 100,
    },
});