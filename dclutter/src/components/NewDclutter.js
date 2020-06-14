import React from 'react';
import { Link } from 'react-router-dom';

export default class NewDclutter extends React.Component {

    state = {
        dclutter: {
            title: '',
            body: '',
            created: undefined,
            updated: undefined
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

        const id = this.props.onSave(this.state.dclutter);
        this.props.history.replace(`/dclutter/${ id }`);
    }


    render(){
        const { dclutter } = this.state;

        return (
            <div className="dclutter-form">
                <h1> New dclutter </h1>
                <form onSubmit={this.handleSave}>
                    <div className="form-field">
                        <label>name of item</label>
                        <input type="text" name="title" value={dclutter.title} onChange={this.updateValue} />
                        <label>reason to dclutter</label>
                        <input type="text" name="body" value={dclutter.body} onChange={this.updateValue} />
                    </div>
                    <div className="form-buttons">
                        <button>save dclutter</button>
                        <Link to='/'>cacel dclutter</Link>                 
                    </div>
                </form>
            </div>
        );
    }
}