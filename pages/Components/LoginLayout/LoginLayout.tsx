
import React from "react";
import styles from "./LoginLayout.module.scss";
import Image from "next/image";
import AnimationImage from "./AnimationImage";

interface LoginLayoutProp {
    children: any;
    largeText:string;
    smallText:string;
    Icon?:boolean
}

const LoginLayout: React.FC<LoginLayoutProp> = ({
    children,
    largeText,
    smallText,
    Icon
}) => {
    return (
        <div className={styles.container}>
            <div className={styles.leftPane}>
                <div  className={styles.leftPanelContainer}>
                    <Image src={'../icons/TTLogoWhite.svg'} alt="TurfTownIcon" width={114.19} height={63.11} />
                    <div className={styles.largeText}>{largeText}
                    {Icon && <Image src={'../icons/CoolShape.svg'} className={styles.iconStyle} alt="CoolShapIcon" width={22} height={22} />}
                    </div>
                    <div className={styles.smallText}>{smallText}</div>
                    {children}
                </div>
            </div>
            <div className={styles.rightPane}>
                <AnimationImage/>
                <div className={styles.italicText} >Lets keep the world playing!</div>
            </div>
        </div>
    );
};

export default LoginLayout;
