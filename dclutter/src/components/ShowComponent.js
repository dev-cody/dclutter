import React from 'react';
import { Link } from 'react-router-dom';
export default  class Show extends React.Component {

    render() {
        const { dclutter } = this.props;

        return(
            <div className="show-container">
                <h1>{ dclutter.title }</h1>
                <h2>{ dclutter.body }</h2>
                <div>
                    <button className="cancel-button"><Link to='/' style={{ color: "white" }}> back </Link></button>
                </div>
            </div>
        );
    }
}