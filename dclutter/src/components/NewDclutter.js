import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
export default class NewDclutter extends React.Component {

    state = {
        dclutter: {
            title: '',
            body: '',
        }
    }

    updateValue = (e) => {
        const { dclutter } = this.state;

        this.setState({
            dclutter: {...dclutter, [e.target.name]: e.target.value}
        });
    }

    handleSave = (e) => {
        e.preventDefault();

        axios.post('https://localhost:3443/dclutter', this.state)
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        })
        
        const id = this.props.onSave(this.state.dclutter);
        this.props.history.replace(`/dclutter/${ id }`);
    }


    render(){
        const { dclutter } = this.state;

        return (
            <div className="dclutter-form-container">
                <h3 className="newdclutter-title"> new dclutter </h3>
                <form className="dclutter-form" onSubmit={this.handleSave}>
                    <div className="form-field">
                        <label>name of item</label>
                        <br />
                        <input type="text" name="title" value={dclutter.title} onChange={this.updateValue} />
                        <br />
                        <label>reason to dclutter</label>
                        <br />
                        <input type="text" name="body" value={dclutter.body} onChange={this.updateValue} />
                        <br />
                        <label htmlFor="img">select image</label>
                        <br />
                        <input type="file" name="img" accept="image/*" id="img" />
                    </div>
                    <div className="form-buttons">
                        <button className="submit-button">save</button>
                        <button className="cancel-button"><Link to='/' style={{ color: "white" }}>cancel</Link></button>              
                    </div>
                </form>
            </div>
        );
    }
}