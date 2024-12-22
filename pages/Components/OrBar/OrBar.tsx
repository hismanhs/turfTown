
import React from "react";
import styles from "../LoginLayout/LoginLayout.module.scss";

interface OrBarProp {
    Text: string;
}

const OrBar: React.FC<OrBarProp> = ({
    Text
}) => {
    return (
        <div className={styles.OrContainer}>
            <div className={styles.OrBarLine} />
            <span className={styles.OrText}>{Text?.toUpperCase()}</span>
            <div className={styles.OrBarLine} />
        </div>
    );
};

export default OrBar;
