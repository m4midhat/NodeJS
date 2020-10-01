import React from 'react';
import ReactDom from 'react-dom';


class App extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {lat : null, long: null, errorMessege: ''};

        window.navigator.geolocation.getCurrentPosition(
            position => 
            {
                this.setState({lat: position.coords.latitude, long: position.coords.longitude});
            },
            err => {
                this.setState( {errorMessege: err.message} );
            }
        
        );
        }

    render()
    {
    
        if(this.state.errorMessege && !this.state.lat) {
        return <div>Error : {this.state.errorMessege}</div>;
        }

        if(!this.state.errorMessege && this.state.lat && this.state.long){
        return  (
            <div>
                latitude: {this.state.lat}
                <br/>
                longitude: {this.state.long}
            </div>
        );
                
                
        }

    return <div>Loading ...</div>    

    }
}


ReactDom.render( <App />, document.querySelector('#root'));