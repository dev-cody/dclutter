import React from 'react';
import { Link } from 'react-router-dom';
import shoes from '../images/vans.jpg';
export default class DclutterList extends React.Component {

    renderDclutter() {
        const dclutter = Object.values(this.props.dclutter);
        
        return dclutter.map( (d) => 
            <div className="dclutter-card">
                <h2 className="dclutter-title" ><Link to={`/dclutter/${d._id}`} style={{ color: "white" }}>{ d.title }</Link></h2>
                <h3 className="dclutter-body">{ d.body }</h3>
                <img src={ shoes } className="test-image" alt="dclutter logl" />
            </div>
        );
    }
    render() {
        return(
            <div className="container">
                { this.renderDclutter() }
            </div>
        );
    }
}