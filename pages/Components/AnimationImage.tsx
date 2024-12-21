
import React from "react";
import Image from "next/image";

interface AnimationImageProp {

    Icon?: boolean
}

const AnimationImage: React.FC<AnimationImageProp> = ({

    Icon
}) => {
    return (
        <>
            <Image style={{ position: 'absolute', zIndex: 1, transform: 'rotate(-3deg)' }} src={'../icons/image1.svg'} alt="Image1" width={696.15} height={560} />
            <Image style={{ position: 'absolute', top: '-23px', transform: 'rotate(0deg)' }} src={'../icons/image2.svg'} alt="Image2" width={696.15} height={619.18} />

        </>
    );
};

export default AnimationImage;
