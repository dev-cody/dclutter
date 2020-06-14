import React from 'react';
import { Link } from 'react-router-dom';
import DclutterList from './DclutterList';

export default class Main extends React.Component {

    render() {
        return (
            <div>   
                <DclutterList dclutter={this.props.dclutter} className="test"/>
                <div className="newdclutter-button">
                    <Link to='/new' className='addnew-button' style={{ color: "white" }}>
                    <i className="fa fa-plus"></i>
                    </Link>
                </div>
            </div>
        );
    }
}