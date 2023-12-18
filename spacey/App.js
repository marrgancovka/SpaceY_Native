import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ShopScreen from './screens/ShopScreen';
import { store } from './store';
import { Provider } from 'react-redux';
import DeviceScreen from './screens/DeviceScreen'

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <Provider store={store}>
            <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerStyle: {
                    backgroundColor: 'black', // Цвет навигационной шапки
                    },
                    headerTintColor: 'white', // Цвет текста в навигационной шапке
                    headerTitleStyle: {
                    fontWeight: 'bold',
                    },
                }}
                >
                    <Stack.Screen name='SpaceY' component={ShopScreen} />
                    <Stack.Screen name='Подробности' component={DeviceScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
}