import React from 'react';
import { Link } from 'react-router-dom';
export default class DclutterList extends React.Component {

    renderDclutter() {
        const dclutter = Object.values(this.props.dclutter);
        
        return dclutter.map( (d) => 
            <div className="dclutter-card">
                <h2> <Link to={`/dclutter/${d._id}`} style={{ color: "white" }}>{ d.title }</Link></h2>
                <h3>{ d.body }</h3>
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