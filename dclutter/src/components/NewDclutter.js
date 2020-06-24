import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { baseUrl } from '../baseUrl';
//Use Axios
import axios from 'axios';

export default class NewDclutter extends Component {

    constructor(props) {
        super(props);

        this.state = {
            title: '',
            body: ''
        }

        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeBody = this.onChangeBody.bind(this);
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChangeTitle(e) {
        this.setState({
            title: e.target.value
        });
    }

    onChangeBody(e) {
        this.setState({
            body: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
        console.log('test');
        const dclutter = {
            title: this.state.title,
            body: this.state.body
        }

        console.log(dclutter);

        axios.post(baseUrl+'dclutter/new', dclutter)
    .then(res => console.log(res.data));

    window.location = '/';
    }

    render(){
        return (
            <div className="dclutter-form-container">
                <h3 className="newdclutter-title"> new dclutter </h3>
                <form className="dclutter-form" onSubmit={this.onSubmit}>
                    <div className="form-field">
                        <label>name of item</label>
                        <br />
                        <input type="text" name="title" value={this.state.title} onChange={this.onChangeTitle} />
                        <br />
                        <label>reason to dclutter</label>
                        <br />
                        <input type="text" name="body" value={this.state.body} onChange={this.onChangeBody} />
                    </div>
                    <div className="form-buttons">
                        <button type="submit" className="submit-button">save</button>
                        <button className="cancel-button"><Link to='/' style={{ color: "white" }}>cancel</Link></button>              
                    </div>
                </form>
            </div>
        );
    }
}