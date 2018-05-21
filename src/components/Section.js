import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Link from './Link';

export default class Section extends Component {
    static contextTypes = {
        route: PropTypes.string,
        linkHandler: PropTypes.func      
    };

    handleClick = (evt) => {
        evt.preventDefault();
        this.context.linkHandler(this.props.to);
    }

    componentDidMount() {
        // this.
    }

    render() {
        return (
            <div 
              className={`Section ${this.props.name} ${this.props.alternate ? 'alternate' : ''}`}
              ref={this.props.name}
              id={this.props.name}
            >
              {this.props.children}
            </div>
          );
    }
};

Link.propTypes = {
    to: PropTypes.string.isRequired
};
