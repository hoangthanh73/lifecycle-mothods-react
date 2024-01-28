import { Component } from "react";
import classes from './User.module.css';

class User extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { user } = this.props;
        return <li className={classes.user}>{user.name}</li>
    }
}

export default User;