import React, { Component } from 'react';
import { Stylesheet, View, Text } from 'react-native';


export default class Apicall extends Component {


    async componentDidMount(){

        try {
                await fetch('https://gnews.io/api/v3/top-news?token=b513038f932385a65dea3b766689d2c6&country=uk&max=10', {
                    method: 'POST',
                    mode: 'no-cors',
                    headers: {
                        'Accept': "application/json",
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        user: 'Pete',
                        password: '12333300-9jnndklf098&'
                    })
                })
        }
        catch(e) {
            console.log(e);
        }
    }

    render(){

        return (
            <View>
                <Text>
                    Hello
                </Text>
            </View>
        );
    }
}