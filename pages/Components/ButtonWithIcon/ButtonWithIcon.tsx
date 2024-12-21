
import React, { useMemo } from "react";
import styles from "./ButtonnWithIcon.module.scss";
import Image from "next/image";

interface ButtonWithIconProp {
  children: any;
  Text: string;
  ActiveStatus: string;
  handleClick: () => void
}

const ButtonWithIcon: React.FC<ButtonWithIconProp> = ({
  children,
  Text,
  ActiveStatus,
  handleClick
}) => {
  const statusClassMap = {
    active: styles.active,
    inactive: styles.inActiveButtonBar,
    default: styles.buttonBar, 
  };

  const buttonClass = useMemo(() => statusClassMap[ActiveStatus] || statusClassMap.default, [ActiveStatus]);
  const textClass = useMemo(() => styles.textStyle, [])
  return (
    <button className={buttonClass} role="button" onClick={handleClick} >
      <div className={styles.container}>
        {children && children}
        <div className={textClass} >{Text}</div>
      </div>
    </button>
  );
};

export default ButtonWithIcon;
