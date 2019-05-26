import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Container, Content, Header, Left, Right, Icon } from 'native-base';
import FAIcon from 'react-native-vector-icons';
 
class HomeScreen extends Component {
    static navigationOptions = {
        title: 'Home',
        header:null
    };
    render() {
        return(
            <Container>
                <Header style={{backgroundColor:'#3a4555c', height:90, borderBottomColor:'#757575'}}>
                    <Left style={{flexDirection:'row'}}>
                        <Icon name="md-menu" style={{ color:'blue', marginRight:15}}/>
                        {/* <FAIcon name="amazon" style={{fontSize:32,color:'white'}}/> */}
                    </Left>
                    <Right>
                        {/* <FAIcon name="md-chart" style={{color:'white'}}/> */}
                    </Right>
                </Header>
                <View style={{position:'absolute',left:0,right:0,top:90,height:70,backgroundColor:'#3a455c'}}>

                </View>
            </Container>
        );
    }
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})