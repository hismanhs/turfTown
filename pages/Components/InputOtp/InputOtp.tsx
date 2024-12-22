
import React, { useMemo } from "react";
import styles from "./InputOtp.module.scss";

interface InputOtpProp {
    Icon: boolean;
    number: number;
    handleChange: (e: any) => void;
    Error?: boolean
}

const InputOtp: React.FC<InputOtpProp> = ({
    Icon,
    number,
    handleChange,
    Error = false
}) => {
    const textClass = useMemo(() => Icon ? `${styles.InputBox} ${styles.spacing}` : styles.InputBox, [Icon])

    return (
        <div className={styles.otpContainer} >
            <input className={Error ? `${styles.errorInput} ${styles.spacing}` : textClass} placeholder="Enter the 4 digit code" onChange={handleChange} value={number} />
            {Error && <div className={styles.error}>Incorrect Code! </div>}
        </div>
    );
};

export default InputOtp;
