import React from 'react';
import { Link } from 'react-router-dom';
import DclutterList from './DclutterList';

export default class Main extends React.Component {

    render() {
        return (
            <div>
                <h1>Testing</h1>
                <DclutterList dclutter={this.props.dclutter} />
                <div className="newdclutter-button">
                    <Link to='/new' className='addnew-button'> New </Link>
                </div>
            </div>
        );
    }
}