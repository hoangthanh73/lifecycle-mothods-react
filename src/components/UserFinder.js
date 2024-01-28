import React from "react";
import classes from './UserFinder.module.css';

class UserFinder extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className={classes.finder}>
            <input onChange={this.props.getKeyWords} type='text' />
        </div>
    }
}

export default UserFinder;