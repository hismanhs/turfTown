
import React from "react";
import styles from "../../styles/Home.module.scss";
import Image from "next/image";
import { CoolShap, TurfTown } from "../icons";
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
            {/* 5rem 8rem 0rem 14rem */}
                <div style={{ margin: 'auto' }}>
                    <Image src={TurfTown} alt="My SVG Icon" width={114.19} height={63.11} />
                    <div className={styles.largeText}>{largeText}
                    {Icon && <Image src={CoolShap} className={styles.iconStyle} alt="My SVG Icon" width={22} height={22} />}
                    </div>
                    <div className={styles.smallText}>{smallText}</div>
                    {children}
                </div>
            </div>
            <div className={styles.rightPane}>
                <AnimationImage Icon={true}/>
                <div className={styles.italicText} >Lets keep the world playing!</div>
            </div>
        </div>
    );
};

export default LoginLayout;
