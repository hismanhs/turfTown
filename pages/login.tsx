import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import LoginLayout from "./Components/LoginLayout/LoginLayout";
import ButtonWithIcon from "./Components/ButtonWithIcon/ButtonWithIcon";
import OrBar from "./Components/OrBar/OrBar";

const Login = () => {
    const router = useRouter();
    const handleMobileClick = () => {
        router.push('/mobileLogin');
    }
    return (
        <LoginLayout Icon={true} largeText="Welcome to the Command Centre" smallText="Login to access and manage the Townverse.">
            <ButtonWithIcon Text={'Login with Google'} handleClick={() => console.log('Google Login')}  >
                <Image src={'../icons/google.svg'} alt="googleIcon" width={22} height={22} />
            </ButtonWithIcon>
            <OrBar Text={'Or'} />
            <ButtonWithIcon Text={'Login with Phone'} handleClick={handleMobileClick} >
                <Image src={'../icons/phone.svg'} alt="phoneIcon" width={22} height={22} />
            </ButtonWithIcon>
            <ButtonWithIcon Text={'Login with Email'} handleClick={() => console.log('Email Login')}>
                <Image src={'../icons/mail.svg'} alt="mailIcon" width={22} height={22} />
            </ButtonWithIcon>
        </LoginLayout>
    );
};

export default Login;