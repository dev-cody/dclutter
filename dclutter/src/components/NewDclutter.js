import React from 'react';
import { Link } from 'react-router-dom';
import { baseUrl } from '../baseUrl';
export default class NewDclutter extends React.Component {

    state = {
        dclutter: {
            title: '',
            body: '',
            img: ''
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

        fetch(baseUrl+'dclutter', {
            method:'POST',
            body: JSON.stringify(this.state.dclutter),
            headers: {
                'Content-Type': 'appliction/json'
            }
        })
        .then((response) => {
            console.log(response)
        })
        .catch((err) => new Error(err))
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
                        <input type="file" name="img" accept="image/*" id="img" value={dclutter.img} onChange={this.updateValue} />
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