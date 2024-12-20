
import React, { useMemo } from "react";
import styles from "./OtpComponent.module.scss";
interface otpScreenProp {
    Icon: boolean;
    number: number;
    handleChange: (e: any) => void;
    Error: boolean
}

const OtpComponent: React.FC<otpScreenProp> = ({
    Icon,
    number,
    handleChange,
    Error = true
}) => {
    const textClass = useMemo(() => Icon ? `${styles.InputBox} ${styles.spacing}` : styles.InputBox, [Icon])

    return (
        <div className={styles.otpContainer} >
                <input className={Error ? `${styles.errorInput} ${styles.spacing}` : textClass} placeholder="Enter the 4 digit code" onChange={handleChange} value={number} />
            {Error && <div className={styles.error}>Incorrect Code! </div>}
        </div>
    );
};

export default OtpComponent;
