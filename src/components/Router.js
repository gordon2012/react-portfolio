import React, {Component} from 'react';
import PropTypes from 'prop-types';

const getCurrentPath = () => {
    const path = document.location.pathname;
    return path.substring(path.lastIndexOf('/'));
}

export default class Router extends Component {
    state = {
        route: getCurrentPath()
    };

    handleLinkClick = (route) => {
        this.setState({route});
        window.history.pushState(null, '', route);
        var el = document.getElementById(route.substring(1));
        if(el) {
            el.scrollIntoView();
        } else {
            document.getElementsByTagName('header')[0].scrollIntoView();
        }
        // console.log(route.substring(1));

    }

    static childContextTypes = {
        route: PropTypes.string,
        linkHandler: PropTypes.func
    }

    getChildContext() {
        return {
            route: this.state.route,
            linkHandler: this.handleLinkClick
        }
    }

    render() {
        return (
            <div>{this.props.children}</div>
        );
    }
};
