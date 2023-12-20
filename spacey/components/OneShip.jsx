import { View, Text, StyleSheet, Image, Button, TouchableOpacity, Platform } from 'react-native';
import React from 'react';

export default function OneShip({ ...props }) {

    return (    
        <View style={styles.mycontainer}>
          <View style={styles.photo}>
          <Image source={require('./starship.jpg')}></Image>
          </View>

          <View style={styles.text}>
            <Text style={styles.title}>Описание звездного корабля</Text>

            <View style={styles.overview}>
              <View style={styles.itemOverview}>
                <Text>ИМЯ</Text>
                <Text>{props.Title}</Text>
              </View>

              <View style={styles.itemOverview}>
                <Text>РАКЕТА-НОСИТЕЛЬ</Text>
                <Text>{props.Rocket}</Text>
              </View>

              <View style={styles.itemOverview}>
                <Text>ТИП</Text>
                <Text>{props.Type}</Text>
              </View>

              <View style={[styles.itemOverview, styles.description]}>
                <Text>{props.Description}</Text>
              </View>
            </View>

            {/* <View style={styles.mybtn}>
              <TouchableOpacity onPress={() => navigation.navigate('SpaceY')}>
                <Text style={styles.btnBack}>Вернуться к списку</Text>
              </TouchableOpacity>
            </View> */}
          </View>
        </View>

    );
}

const styles = StyleSheet.create({
    mycontainer: {
        flexDirection: 'row',
        margin: '3%',
        marginTop: '15%',
      },
      photo: {
        padding: 0,
        paddingBottom: '43%',
        position: 'relative',
        overflow: 'hidden',
        flex: 0,
        flexGrow: 1,
        flexBasis: '43%',
        borderRadius: 10,
      },
      text: {
        flex: 0,
        flexGrow: 1,
        flexBasis: '50%',
        display: 'flex',
        flexDirection: 'column',
        marginLeft: '5%',
        marginRight: '5%',
        alignItems: 'center',
      },
      title: {
        fontSize: 34,
      },
      overview: {
        width: '100%',
        flex: 1,
        flexGrow: 1,
        flexShrink: 1,
        marginTop: '5%',
      },
      itemOverview: {
        paddingVertical: '3%',
        fontSize: 22,
        color: '#303030',
        borderBottomWidth: 1,
        borderBottomColor: '#acacacd7',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
      description: {
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
      },
      btnBack: {
        padding: '1%',
        marginTop: 10,
        fontSize: 20,
        color: 'black',
        textAlign: 'center',
        width: 'auto',
        borderWidth: 1,
        borderColor: '#acacacd7',
        borderRadius: 5,
        transitionDuration: 0.3,
      },
      mybtn: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
      },
});