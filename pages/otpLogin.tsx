
import React, { useState } from "react";
import { useRouter } from "next/router";
import ResendTimer from "./Components/ResendTimer/ResendTimer";
import LoginLayout from "./Components/LoginLayout/LoginLayout";
import InputOtp from "./Components/InputOtp/InputOtp";
import ButtonWithIcon from "./Components/ButtonWithIcon/ButtonWithIcon";
import styles from "./Components/LoginLayout/LoginLayout.module.scss";
import Image from "next/image";


const OtpLogin = () => {
    const router = useRouter();
    const { number } = router.query;
    const [buttonActive, setButtonActive] = useState(false)
    const [otp, setOtp] = useState()
    const [error, setError] = useState(false)
    const [isVisible, setIsVisible] = useState(false);

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

    const hideElement = () => {
        setIsVisible(true); 
        setTimeout(() => {
          setIsVisible(false); 
        }, 3000);
    };
    return (
        <>
            <LoginLayout largeText={"Enter the code sent"} smallText={`Please check your texts on +91 ${number}`}>
                <InputOtp number={otp} handleChange={handleChange} Icon={buttonActive} Error={error} />
                <ButtonWithIcon
                    Text={'Continue'}
                    ActiveStatus={buttonActive ? 'active' : 'inactive'}
                    handleClick={() => buttonActive && handleMobileClick()} >
                </ButtonWithIcon>
                <div className={styles.flex}>
                    <div className={styles.textDidntGet}> Didn’t get it? </div>
                    <ResendTimer Text="Resend Code" duration={6} showPopUp={hideElement} />
                </div>
            </LoginLayout>
            {isVisible && <Image src={'../icons/CodeResend.svg'} className={`${styles.element} ${!isVisible ? styles.hidden : ''}`} alt="CodeResendIcon" width={197} height={52} />}
        </>
    );
};

export default OtpLogin;
