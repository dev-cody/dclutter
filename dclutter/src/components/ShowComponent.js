import React from 'react';

export default  class Show extends React.Component {

    render() {
        const { dclutter } = this.props;

        return(
            <div>
                <h1>{ dclutter.title }</h1>
                <h2>{ dclutter.body }</h2>
            </div>
        );
    }
}