import { Component } from 'react';
import classes from './UserFinder.module.css';

class UserFinder extends Component {
    render() {
        return (
            <div className={classes.finder}>
                <input type="text" />
            </div>
        )
    }
}

export default UserFinder;