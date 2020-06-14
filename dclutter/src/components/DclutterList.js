import React from 'react';
import { Link } from 'react-router-dom';
export default class DclutterList extends React.Component {

    renderDclutter() {
        const dclutter = Object.values(this.props.dclutter);
        
        return dclutter.map( (d) => <div><h2> <Link to={`/dclutter/${d._id}`}>{ d.title }</Link></h2></div>);
    }
    render() {
        return(
            <div>
                { this.renderDclutter() }
            </div>
        );
    }
}