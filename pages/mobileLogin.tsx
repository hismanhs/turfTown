
import React, { useState } from "react";
import { ButtonWithIcon, LoginLayout, PhoneNumber } from "./Components";
import { useRouter } from "next/router";

const MobileLogin = () => {
    const router = useRouter();
    const [buttonActive, setButtonActive] = useState(false)
    const [number, setNumber] = useState()

    const handleChange = (e: { target: { value: any; }; }) => {
        const inputValue = e.target.value;
        if (/^\d{0,10}$/.test(inputValue)) {
            setNumber(inputValue);
            console.log(inputValue.length, 'inputValue.lengt')
            if (inputValue.length == 10) {
                setButtonActive(true)
            } else {
                setButtonActive(false)
            }
        }
    };

    const handleMobileClick = () => {
        router.push({
            pathname: '/otpLogin',
            query: { number: number },
        });
    }
    return (
        <LoginLayout largeText={"Enter your phone number"} smallText={"Keep your phone closeby to verify."}>
            <PhoneNumber handleChange={handleChange} number={number} />
            <ButtonWithIcon
                Text={'Continue'}
                ActiveStatus={buttonActive ? 'active' : 'inactive'}
                handleClick={() => buttonActive && handleMobileClick()} />
        </LoginLayout>
    );
};

export default MobileLogin;
