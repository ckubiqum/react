import React from 'react';
import { connect } from 'react-redux';
import { addUser } from './store/actions/userAction';
import history from './history';
import './Create.css';

class CreateForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            username: "",
            password: "",
            name: ""
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        this.props.addUser(
            this.state
        );

        history.push('/login');
    }

    render() {
        return (
            <form className="row" onSubmit={this.handleSubmit}>
                <div className="row" id="loginform">
                    <h1 className="row" id="headerTitle">Create a new Account</h1>
                    <label className="row">
                        Email:
            <input className="row"
                            name="email"
                            placeholder="Enter your email"
                            type="text"
                            value={this.state.email}
                            onChange={this.handleInputChange}
                        />
                    </label>
                    <label className="row">
                        Username:
            <input className="row"
                            name="username"
                            placeholder="Choose your username"
                            type="text"
                            value={this.state.username}
                            onChange={this.handleInputChange}
                        />
                    </label>
                    <label className="row">
                        Password:
            <input className="row"
                            name="password"
                            placeholder="Choose your password"
                            type="text"
                            value={this.state.password}
                            onChange={this.handleInputChange}
                        />
                    </label>


                    <input type="submit" value="Submit" className="row" id="button" />
                </div></form>
        )
    }
}

const mapStateToProps = state => ({
    email: state.users.email,
    name: state.users.name,
    username: state.users.username,
    password: state.users.password
})

export default connect(mapStateToProps, { addUser })(CreateForm)
