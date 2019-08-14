import React, { Component } from 'react';
class Footer extends Component {
    /**
     * 1ro en ejecucion
     */
    constructor(props) {
        super(props);
        this.state = { 
            message:"copyright L.A. ",
         }
    }
    //2de en ejecucion.
    componentWillMount(){

    }
    //3ro en ejecucion
    render() { 
        return <div>
            <div className="footer">{this.state.message}
                </div>
        </div>;
    }
    //4to en ejecucion
    componentDidMount(){
        //llamadas a API
        //si cambiamos a copyri Mx, inicia el ciclo desde render
    }

    componentWillReceiveProps(nextProps,nextState){

    }
    shouldComponentUpdate(){

    }
componentWillUpdate(){
    
}


    componentDidUpdate(){

    }
    componentWillReceiveProps(){

    }

    componentWillUnmount(){

    }

    componentDidUpdate(){

    }

    
}
 
export default Footer;