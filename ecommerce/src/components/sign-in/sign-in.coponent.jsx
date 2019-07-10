import React from 'react';
import './sign-in.styles.scss';
import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';

class SignIn extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({email: '', password: ''})
    }

    handleChange = (event) => {
        const {name, value } = event.target;

        this.setState({[name] :  value});
    }
    render(){
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        value={this.state.email} 
                        type="email" 
                        name="email" 
                        label="email"
                        required 
                        handleChange={this.handleChange}
                    />
                    <FormInput 
                        value={this.state.password} 
                        type="password" 
                        name="password" 
                        required 
                        label="password"
                        handleChange={this.handleChange}
                    />

                    <CustomButton type="submit">Sign in</CustomButton>
                </form>
            </div>
            
        )
    }
}

export default SignIn;