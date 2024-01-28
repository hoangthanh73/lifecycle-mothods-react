import { Component } from "react";
import Button from "./Button";
import User from "./User";
import ErrorBoundary from "./ErrorBoundary";
import classes from './Users.module.css';

class Users extends Component {
    constructor(props) {
        super(props);

        this.state = { showUsers: true };
    }

    showUsersHandler() {
        this.setState({ showUsers: true });
    }

    hideUsersHandler() {
        this.setState({ showUsers: false });
    }

    clickHandler = (e) => {
        const stateBtn = e.target.innerText;

        if (stateBtn === 'Hide Users') {
            this.hideUsersHandler();
            e.target.innerText = 'Show Users';
        } else {
            this.showUsersHandler();
            e.target.innerText = 'Hide Users';
        }
    }

    render() {
        const { users } = this.props;
        const { showUsers } = this.state;
        const usersList = users.map(user => {
            return <User key={user.id} user={user}></User>
        })


        return (
            <div className={classes.users}>
                <Button onClick={this.clickHandler}>Hide Users</Button>
                <ErrorBoundary fallback={<p>Something went wrong!</p>}>
                    {usersList.length >= 1 ? showUsers && (<ul>{usersList}</ul>) : new Error('something went wrong!')}
                </ErrorBoundary>
            </div>
        );
    }
}

export default Users;