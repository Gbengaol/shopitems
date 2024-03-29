import React from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, signInWithGoogle } from '../../firebase/firebase.util';

class SignIn extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }
    handleSubmit = async (event) => {
        event.preventDefault();

        const { email, password } = this.state;
        
        try {
            await auth.signInWithEmailAndPassword (email, password);
        } catch(error){
            alert(error.message)
        }

        this.setState({email: '', password: ''})
    }

    handleChange = (event) => {
        const {name, value } = event.target;

        this.setState({[name] :  value});
    }
    render(){
        const { email, password } = this.state;
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        value={email} 
                        type="email" 
                        name="email" 
                        label="Email"
                        required 
                        handleChange={this.handleChange}
                    />
                    <FormInput 
                        value={password} 
                        type="password" 
                        name="password" 
                        required 
                        label="Password"
                        handleChange={this.handleChange}
                    />
                    <div className="buttons">
                        <CustomButton type="submit">Sign in</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                            Sign in with Google
                        </CustomButton>
                    </div>
                    
                </form>
            </div>
            
        )
    }
}

export default SignIn;