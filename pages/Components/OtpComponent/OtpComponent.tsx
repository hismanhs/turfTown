
import React, { useMemo } from "react";
import styles from "./OtpComponent.module.css";
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
        <div style={{ display: 'flex', margin: '20px 0px', gap: '6px', position: 'relative' }}  >
            <div style={{width:'100%'}}>
                <input className={Error ? `${styles.errorInput} ${styles.spacing}` : textClass} placeholder="Enter the 4 digit code" onChange={handleChange} value={number} />
            </div>
            {Error && <div className={styles.error}>Incorrect Code! </div>}
        </div>
    );
};

export default OtpComponent;
