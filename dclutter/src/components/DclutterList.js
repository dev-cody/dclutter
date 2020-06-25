import React, { Component } from 'react';
import { baseUrl } from '../baseUrl';
//Use Axios
import axios from 'axios'

const Dclutter = props => (
    <div className="dclutter-card">
        <h3> {props.dclutter.title} </h3>
        <h4> {props.dclutter.body}</h4>
        <button onClick={() => {props.deleteDclutter(props.dclutter._id) }} className="delete-button">dclutter</button>  
    </div>
)

export default class DclutterList extends Component {
    
    constructor(props){
        super(props);

        this.deleteDclutter = this.deleteDclutter.bind(this);

        this.state = {dclutter: []}
    }

    componentWillMount() {
        axios.get(baseUrl+'dclutter/')
        .then(response => {
            this.setState({ dclutter: response.data})
        })
        .catch((error) => {
            console.log(error)
        })
    }

    deleteDclutter(id) {
        axios.delete(baseUrl+'dclutter/'+id)
        .then(response => {console.log(response.data)});

        this.setState({
            dclutter: this.state.dclutter.filter( el => el._id !== id)
        })
    }

    dclutterList() {
        return (
            this.state.dclutter.map(currentdclutter => {
                return <Dclutter dclutter={currentdclutter} deleteDclutter={this.deleteDclutter} key={currentdclutter._id} />
            })
        )
    }

    render() {
        return(
            <div>
                <h3> your dclutter list </h3>
                <div> { this.dclutterList() }</div>
            </div>
        );
    }
}
