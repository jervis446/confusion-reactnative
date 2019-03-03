import React, { Component } from 'react';
import { DISHES } from '../shared/dishes';
import { View, FlatList } from 'react-native';
import { Tile, Card } from 'react-native-elements';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';

const mapStateToProps = state => {
    return {
      dishes: state.dishes
    }
  }

class Menu extends Component {

    

    static navigationOptions = {
        title: 'Menu'
    };

    render() {

    const renderMenuItem = ({item, index}) => {

        return (
            <Tile
            key={index}
            title={item.name}
            subtitle={item.description}
            hideChevron={true}
            onPress={() => navigate('Dishdetail', { dishId: item.id })}
            leftAvatar={{ source: require('./images/uthappizza.png')}}
          />
        );
    };

    const { navigate } = this.props.navigation;
    
    return (
            <FlatList 
            data={this.props.dishes.dishes}
            renderItem={renderMenuItem}
            keyExtractor={item => item.id.toString()}
            />
    );
  }
}


export default connect(mapStateToProps)(Menu);