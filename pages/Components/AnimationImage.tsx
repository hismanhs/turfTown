
import React from "react";
import Image from "next/image";
import { image1, image2 } from "../icons";

interface AnimationImageProp {

    Icon?: boolean
}

const AnimationImage: React.FC<AnimationImageProp> = ({

    Icon
}) => {
    return (
        <>
            <Image style={{ position: 'absolute', zIndex: 1, transform: 'rotate(-3deg)' }} src={image1} alt="Image 1" width={696.15} height={560} />
            <Image style={{ position: 'absolute', top: '-23px', transform: 'rotate(0deg)' }} src={image2} alt="Image 1" width={696.15} height={619.18} />

        </>
    );
};

export default AnimationImage;
