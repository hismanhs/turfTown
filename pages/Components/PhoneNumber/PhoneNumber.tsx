
import React from "react";
import styles from "./PhoneNumber.module.scss";
interface PhoneNumberProp {
    number: number;
    handleChange: (e: any) => void
}

const PhoneNumber: React.FC<PhoneNumberProp> = ({
    number,
    handleChange
}) => {

    return (
        <div className={styles.container}  >
            <div className={styles.countryCodeContainer}>
                <div>{'🇮🇳'}</div>
                <div className={styles.verticalLine} />
                <div>{"+ 91"}</div>
            </div>
            <div className={styles.inputBoxContainer}>
                <input className={styles.InputBox} placeholder="Enter your phone number" onChange={handleChange} value={number} />
            </div>
        </div>
    );
};

export default PhoneNumber;
