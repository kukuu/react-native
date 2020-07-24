import React from 'react';
import { 
    Stylesheet,
    View, 
    TexrInput, 
    Button 
} from 'react-native';

export default class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            loaded: true,
            data: null,
            error: null
        }
    }

    baseURL = 'https://jsonplaceholder.typicode.com';

    getData = (e) => {

        this.setState({
            loaded: false,
            error: null
        })

        let url = this.baseURL + '/comments';
        //let url = this.baseURL + '/comments/xxxx';
        //Will show error message "NETWORK BAD REQUEST"

        let h = new Headers();
        h.append('Authorization', 'Bearer 865657899988')
        h.append('X-Client', 'Bob and friends');


        let req = new Request( url, {
            headers: h,
            method: 'GET'
        });

        fetch(req)
        .then( response => response.json())
        .then(this.showData)
        .catch(this.badstuff);

    }

    showData = (data) => {
        this.setState({
            loaded: true,
            //data: data
            data
        })

        console.log(data);
    }

    badstuff = (err) => {
        this.setState({
            error: err.message,
            loaded: true
        })
    }

    componentDidMount(){

    }

    render(){

        return (
            <ScrollView>
                
                { !this.state.loaded && (
                    <Text>Loading..</Text>
                )}
                <Text style= { styles.text }>
                    Get some data
                </Text>

                { this.state.data && this.state.data.length > 0 && (
                    this.state.data.map(comment => (
                        <Text style={styles.txt} key={ comment.id }>
                            {comment.email}
                        </Text>
                    ))
                )}
                <Button onPress = { this.getData }></Button>

                { this.state.errror && (
                    <Text style= {styles.err}>
                        { this.state.error }
                    </Text>
                )}
            </ScrollView>

        );
    }
}