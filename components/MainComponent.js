import React, { Component } from 'react';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import Dishdetail from './DishdetailComponent';
import { View, Platform, Text, ScrollView, Image, StyleSheet } from 'react-native';
import { createStackNavigator, createDrawerNavigator, DrawerItems, SafeAreaView } from 'react-navigation';
import { Icon } from 'react-native-elements';

const MenuNavigator = createStackNavigator({
    Menu: { screen: Menu,
        navigationOptions: ({ navigation }) => ({
          headerLeft: <Icon name="menu" size={24} 
          color= 'white'
          onPress={ () => navigation.toggleDrawer() } />          
        })  
    },
        Dishdetail: Dishdetail
    },
    {
        navigationOptions: {
            headerStyle: {
                backgroundColor: "#512DA8"
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            }
        }
    });

const HomeNavigator = createStackNavigator({
    Home: {screen: Home }
}, {
    navigationOptions: {
        headerStyle: {
            backgroundColor: '#512da8'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            color: '#fff'
        }
    }
});

const ContactNavigator = createStackNavigator({
    Home: {screen: Contact }
}, {
    navigationOptions: {
        headerStyle: {
            backgroundColor: '#512da8'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            color: '#fff'
        }
    }
});

const AboutNavigator = createStackNavigator({
    Home: {screen: About }
}, {
    navigationOptions: {
        headerStyle: {
            backgroundColor: '#512da8'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            color: '#fff'
        }
    }
});

const MainNavigator = createDrawerNavigator({
    Home: {
        screen: HomeNavigator,
        navigationOptions: {
            title: 'Home',
            drawerLabel: 'Home'
        }
    },
    About: { screen: AboutNavigator,
      navigationOptions: {
          title: 'About',
          drawerLabel: 'About Us'
      }
  },
    Menu: { screen: MenuNavigator,
        navigationOptions: {
            title: 'Menu',
            drawerLabel: 'Menu'
        }
    },
    Contact: { screen: ContactNavigator,
        navigationOptions: {
            title: 'Contact',
            drawerLabel: 'Contact Us'
        }
    }
    
}, {
    drawerBackgroundColor: '#D1c4e9'
});

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDish: null
        };
    }

    onDishSelect(dishId) {
        this.setState({ selectedDish: dishId });
    }

    render() {
        return (
            <View style={{flex: 1, paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight }} >
                <MainNavigator />
            </View>
        );
    }
}


export default Main;