import { Component } from 'react';
import classes from './ErrorBoundary.module.css';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, info) {
        console.error(error, info);
    }

    render() {
        if (this.state.hasError) {
            return <p className={classes.error}>Some thing went wrong.</p>
        }

        return this.props.children;
    }
}

export default ErrorBoundary;