
import React from "react";
import styles from "../../styles/Home.module.scss";

interface OrBarProp {
    Text: string;
}

const OrBar: React.FC<OrBarProp> = ({
    Text
}) => {
    return (
        <div className={styles.OrContainer}>
            <div className={styles.OrBarLine} />
            <span className={styles.OrText}>{Text}</span>
            <div className={styles.OrBarLine} />
        </div>
    );
};

export default OrBar;
