
import React, { useState } from "react";
import { ButtonWithIcon, LoginLayout, OtpComponent } from "./Components";
import { useRouter } from "next/router";
import TimerComponent from "./Components/TimerComponent";

const OtpLogin = () => {
    const router = useRouter();
    const { number } = router.query;
    const [buttonActive, setButtonActive] = useState(false)
    const [otp, setOtp] = useState()
    const [error, setError] = useState(false)


    const handleChange = (e: { target: { value: any; }; }) => {
        const inputValue = e.target.value;
        if (/^\d{0,4}$/.test(inputValue)) {
            setOtp(inputValue)
            if (inputValue.length == 0) {
                setButtonActive(false)
                setError(false)
            } else {
                setButtonActive(true)

            }
        }
    };
    function handleMobileClick() {
        setError(true)
    }
    return (
        <LoginLayout largeText={"Enter the code sent"} smallText={`Please check your texts on +91 ${number}`}>
            <OtpComponent number={otp} handleChange={handleChange} Icon={buttonActive} Error={error} />
            <ButtonWithIcon
                Text={'Continue'}
                ActiveStatus={buttonActive ? 'active' : 'inactive'}
                handleClick={() => buttonActive && handleMobileClick()} />
            <div style={{ display: 'flex', gap: '6px' }}>
                <div style={{ fontSize: '18px', fontFamily: 'Nuttito' }}>Didn’t get it?</div>
                <TimerComponent Text="Resend Code" />
            </div>
        </LoginLayout>
    );
};

export default OtpLogin;
