import React from "react";
import { useRouter } from "next/router";
import LoginLayout from "./Components/LoginLayout";
import ButtonWithIcon from "./Components/ButtonWithIcon/ButtonWithIcon";
import OrBar from "./Components/OrBar";
import Image from "next/image";

const Login = () => {
    const router = useRouter();
    const handleMobileClick = () => {
        router.push('/mobileLogin');
    }
    return (
        <LoginLayout Icon={true} largeText="Welcome to the Command Centre" smallText="Login to access and manage the Townverse.">
            <ButtonWithIcon Text={'Login with Google'} handleClick={() => console.log('Google Logim')} ActiveStatus={""} >
                <Image src={'../icons/google.svg'} alt="My SVG Icon" width={22} height={22} />
            </ButtonWithIcon>
            <OrBar Text={'Or'} />
            <ButtonWithIcon Text={'Login with Phone'} handleClick={handleMobileClick} ActiveStatus={""} >
                <Image src={'../icons/phone.svg'} alt="My SVG Icon" width={22} height={22} />
            </ButtonWithIcon>
            <ButtonWithIcon Text={'Login with Email'} ActiveStatus={""} handleClick={function (): void {
                throw new Error("Function not implemented.");
            }} >
                <Image src={'../icons/mail.svg'} alt="My SVG Icon" width={22} height={22} />
            </ButtonWithIcon>
        </LoginLayout>
    );
};

export default Login;