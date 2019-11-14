import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';


const App = props => (
    <LoginForm />
);


class LoginForm extends React.Component {
    render() {
        return (
            <div id="loginform">
                <FormHeader title="Login" />
                <Link to="/create">
                    <p className="navigation">or Create a New Acount</p>
                </Link>
                <Form />
            </div>
        )
    }
}

const FormHeader = props => (
    <h2 id="headerTitle">{props.title}</h2>
);


const Form = props => (
    <div>
        <FormInput description="Username" placeholder="Enter your username" type="text" />
        <FormInput description="Password" placeholder="Enter your password" type="password" />
        <FormButton title="Log in" />
    </div>
);

const FormButton = props => (
    <div id="button" className="row">
        <button>{props.title}</button>
    </div>
);

const FormInput = props => (
    <div className="row">
        <label>{props.description}</label>
        <input type={props.type} placeholder={props.placeholder} />
    </div>
);

// ReactDOM.render(<App />, document.getElementById('container'));
export default LoginForm