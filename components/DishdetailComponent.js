import React, { Component } from 'react';
import { Text, View, ScrollView, FlatList } from 'react-native';
import { DISHES } from '../shared/dishes';
import { COMMENT } from '../shared/comments';
import { Card, Icon } from 'react-native-elements';

function RenderDish(props) {

    const dish = props.dish;
    
        if (dish != null) {
            return(
                <Card
                featuredTitle={dish.name}
                image={require('./images/uthappizza.png')}>
                    <Text style={{margin: 10}}>
                        {dish.description}
                    </Text>
                    <Icon 
                        raised
                        reverse
                        name={ props.favorite ? 'heart' : 'heart-o'}
                        type='font-awesome'
                        color='#f50'
                        onPress={() => props.favorite ? console.log('Already favorite'): props.onPress()}
                    />
                </Card>
            );
        }
        else {
            return(<View></View>);
        }
}

function Dishdetail(props) {
    return(<RenderDish dish={props.dish} />);
}

function RenderComments(props) {
    const comments = props.comments;
    const RenderCommentItem = ({item, index}) => {
        return (
            <View key={index} style={{margin:10}}>
                <Text style={{fontsSize: 14}}>{item.comment}</Text>
                <Text style={{fontsSize: 12}}>{item.rating}</Text>
                <Text style={{fontsSize: 12}}>{'--'+ item.author+','+item.date}</Text>
            </View>
        );
    }
    return (
        <Card title='Comments'>
         <FlatList
            data={comments}
            renderItem={renderCommentItem}
            keyExtractor={item => item.id.toString()}
            />
        </Card>
    );
}

class DishDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
            comments: COMMENTS,
            favorite: []
        };
    }

    static navigationOptions = {
        title: 'Dish Details'
    };

    markFavorite(dishId){
        this.setState({favorite: this.state.favorite.concat(dishId)});
    }

    render() {
        const dishId = this.props.navigation.getParam('dishId','');
        return(
            <ScrollView>
                <RenderDish dish={this.state.dishes[+dishId]} 
                            favorite={this.state.favorite.some(el => el === dishId)}
                            onPress={() => this.markFavorite(dishId)}
                />
                <RenderComments comments={this.state.comments.filter((comment) => comment.dishId === dishId)} />
            </ScrollView>
            
        );
    }
}

export default DishDetail;