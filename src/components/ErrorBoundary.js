import { Component } from 'react';
import classes from './ErrorBoundary.module.css';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    conponentDidCatch(error) {
        console.log(error);
        this.setState({ hasError: true });
    }

    render() {
        if (this.props.hasError) {
            return <p className={classes.error}>Something went wrong</p>
        }
        return this.props.children;
    }
}

export default ErrorBoundary;