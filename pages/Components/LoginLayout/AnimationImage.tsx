
import React from "react";
import Image from "next/image";
import styles from "./LoginLayout.module.scss";

const AnimationImage: React.FC = () => {
    return (
        <>
            <Image className={styles.rightPaneImageOne} src={'../icons/image1.svg'} alt="Image1" width={696.15} height={560} />
            <Image className={styles.rightPaneImageTwo} src={'../icons/image2.svg'} alt="Image2" width={696.15} height={619.18} />
        </>
    );
};

export default AnimationImage;
