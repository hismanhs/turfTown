import React from "react";
import { useState, useEffect } from "react";
import styles from './ResendTimer.module.scss'

interface ResendTimerProp {
    Text?: string;
    duration: number;
    showPopUp: () => void
}

const ResendTimer: React.FC<ResendTimerProp> = ({
    Text, duration, showPopUp
}) => {
    const [timer, setTimer] = useState(duration); // 1 minute 2 seconds
    const [isDisabled, setIsDisabled] = useState(true); // Disable the button during the countdown

    useEffect(() => {
        let interval: any;
        if (timer > 0 && isDisabled) {
            interval = setInterval(() => {
                setTimer((prev) => prev - 1);
            }, 1000);
        } else if (timer === 0) {
            setIsDisabled(false);
            setTimer(duration);
        }

        return () => clearInterval(interval);
    }, [timer, isDisabled]);

    const handleResendCode = () => {
        setIsDisabled(true);
        setTimer(duration);
        showPopUp()
    };
    return (

        <div>
            {!isDisabled ? <div onClick={handleResendCode} role="Button" className={styles.resendButton}>{Text}</div> : <div className={styles.resendText}>
                Resend in {Math.floor(timer / 60)}:{String(timer % 60).padStart(2, '0')}
            </div>}
        </div >
    );
};

export default ResendTimer;
