import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Link extends Component {
    static contextTypes = {
        route: PropTypes.string,
        linkHandler: PropTypes.func      
    };

    handleClick = (evt) => {
        evt.preventDefault();
        this.context.linkHandler(this.props.to);
    }

    render() {
        return (
            <div>
                <a
                    className="Link"
                    href="#"
                    onClick={this.handleClick}
                >
                    {this.props.children}
                </a>
            </div>
        );
    }
};

Link.propTypes = {
    to: PropTypes.string.isRequired
};
