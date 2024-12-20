import { useState, useEffect, useRef } from "react";

interface OrBarProp {
    Text?: string;
}

const TimerComponent: React.FC<OrBarProp> = ({
    Text
}) => {
    const [timer, setTimer] = useState(62); // 1 minute 2 seconds
    const [isDisabled, setIsDisabled] = useState(true); // Disable the button during the countdown

    useEffect(() => {
        let interval:any;
        if (timer > 0 && isDisabled) {
            interval = setInterval(() => {
                setTimer((prev) => prev - 1);
            }, 1000);
        } else if (timer === 0) {
            setIsDisabled(false);
            setTimer(62); 
        }

        return () => clearInterval(interval);
    }, [timer, isDisabled]);

    const handleResendCode = () => {
        setIsDisabled(true); 
        setTimer(62); 
    };
    return (

        <div>
            {!isDisabled ? <div onClick={handleResendCode} style={{ color: '#305DF0', fontSize: '18px', fontFamily: 'Nuttito', textDecorationLine: 'underline',cursor:'pointer' }}>{Text}</div> : <div style={{
                color: '#888888', fontSize: '18px', fontFamily: 'Nuttito',
            }}>Resend in {Math.floor(timer / 60)}:{String(timer % 60).padStart(2, '0')}</div>}
        </div >
    );
};

export default TimerComponent;
