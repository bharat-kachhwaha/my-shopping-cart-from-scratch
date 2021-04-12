import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import './sign-up.styles.scss';
import {auth, createUserProfileDocument} from '../../firebase/firebase.utils';

class SignUp extends React.Component {
    constructor(){
        super();
        this.state = {
            email:'',
            displayName:'',
            password:'',
            confirmPassword:''
        }
    }

    handleChange = (e) => {
        const {name, value} = e.target;
        this.setState({
            [name]:value
        });
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        const {displayName, email, password, confirmPassword} = this.state;
        if(password !== confirmPassword){
            alert("pasword don't match");
            return;
        }
        try {
            const {user} = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, {displayName});
            this.setState({
                email:'',
                displayName:'',
                password:'',
                confirmPassword:''
            });
        } catch (error) {
            console.error(error);
        }
    }

    render(){
        const {displayName, email, password, confirmPassword} = this.state;
        return (
            <div className='sign-up'>
                <h2 className='title'>I do not have a account</h2>
                <span>Sign up with email and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                
                    <FormInput 
                        name='displayName'
                        type='text'
                        value={displayName}
                        handleChange={this.handleChange}
                        label='Display name' required />
                    <FormInput 
                        name='email'
                        type='email'
                        value={email}
                        handleChange={this.handleChange}
                        label='Email' required />
                    <FormInput 
                        name='password'
                        type='password'
                        value={password}
                        handleChange={this.handleChange}
                        label='Password' required />
                    <FormInput 
                        name='confirmPassword'
                        type='password'
                        value={confirmPassword}
                        handleChange={this.handleChange}
                        label='Confirm password' required />
                    <CustomButton type='submit'>SIGN UP</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignUp;