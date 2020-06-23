import React, { Component } from 'react';
import { baseUrl } from '../baseUrl';
//Use Axios
import axios from 'axios'

const Dclutter = props => (
    <tr>
        <td> {props.dclutter.title}</td>
        <td>{props.dclutter.body}</td>
    </tr>
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
                <h3> Your Dclutter List </h3>
                <p> { this.dclutterList }</p>
            </div>
        );
    }
}
