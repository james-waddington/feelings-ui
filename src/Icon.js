import React, { Component } from 'react';
import icons from './icons';

class Icon extends Component {
    render() {
        const IconName = icons[this.props.name]
        return <IconName />
    }
};

export default Icon;