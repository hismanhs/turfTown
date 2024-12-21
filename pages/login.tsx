import React from "react";
import { useRouter } from "next/router";
import LoginLayout from "./Components/LoginLayout";
import ButtonWithIcon from "./Components/ButtonWithIcon/ButtonWithIcon";
import OrBar from "./Components/OrBar";

const Login = () => {
    const router = useRouter();
    const handleMobileClick=()=>{
        router.push('/mobileLogin'); 
    }
    return (
        <LoginLayout Icon={true} largeText="Welcome to the Command Centre" smallText="Login to access and manage the Townverse.">
            <ButtonWithIcon Icon={'../icons/Google.svg'} Text={'Login with Google'} handleClick={() => console.log('Google Logim')} ActiveStatus={""} />
            <OrBar Text={'Or'} />
            <ButtonWithIcon Icon={'../icons/Phone.svg'} Text={'Login with Phone'} handleClick={handleMobileClick} ActiveStatus={""}/>
            <ButtonWithIcon Icon={'../icons/Mail.svg'} Text={'Login with Email'} ActiveStatus={""} handleClick={function (): void {
                throw new Error("Function not implemented.");
            } } />
        </LoginLayout>
    );
};

export default Login;