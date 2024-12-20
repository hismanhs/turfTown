import React from "react";
import { OrBar, ButtonWithIcon, LoginLayout } from './Components'
import {  Phone, Google, Mail } from './icons'
import { useRouter } from "next/router";

const Login = () => {
    const router = useRouter();
    const handleMobileClick=()=>{
        router.push('/mobileLogin'); 
    }
    return (
        <LoginLayout Icon={true} largeText="Welcome to the Command Centre" smallText="Login to access and manage the Townverse.">
            <ButtonWithIcon Icon={Google} Text={'Login with Google'} handleClick={()=>console.log('Google Logim')} />
            <OrBar Text={'Or'} />
            <ButtonWithIcon Icon={Phone} Text={'Login with Phone'} handleClick={handleMobileClick}/>
            <ButtonWithIcon Icon={Mail} Text={'Login with Email'} />
        </LoginLayout>
    );
};

export default Login;