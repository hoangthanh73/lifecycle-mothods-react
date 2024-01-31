import { Component } from 'react';
import classes from './UserFinder.module.css';
import Users from './Users';
import UsersContext from '../store/users-context';
import ErrorBoundary from './ErrorBoundary';

class UserFinder extends Component {
    constructor() {
        super();
        this.state = ({
            filteredUsers: [],
            searchTerm: ''
        })
    }

    static contextType = UsersContext;

    componentDidMount() {
        this.setState({ filteredUsers: this.context.users });
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.searchTerm !== this.state.searchTerm) {
            this.setState({
                filteredUsers: this.context.users.filter((user) => {
                    return user.name.toUpperCase().includes(this.state.searchTerm.toUpperCase().trim())
                })
            })
        }
    }

    searchUserHandler = (e) => {
        this.setState({ searchTerm: e.target.value });
    }

    render() {
        return (
            <>
                <div className={classes.finder}>
                    <input type="seacrch" onChange={this.searchUserHandler} />
                </div>
                <ErrorBoundary>
                    <Users filteredUsers={this.state.filteredUsers} />
                </ErrorBoundary>
            </>
        )
    }
}

export default UserFinder;