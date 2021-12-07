import {useEffect, useState} from 'react';

export function useCurrentTime(){
    const [currentTime, setCurrentTime] = useState(`${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`);

    useEffect(() => {
        setInterval(()=>{
            let now = new Date();
            setCurrentTime(formatMyTime(now));
        }, 1000);
    }, [currentTime]);

    return currentTime;
}

function formatMyTime(date){
    let hours = transformTime(date.getHours());
    let minutes = transformTime(date.getMinutes());
    let seconds = transformTime(date.getSeconds());
    return `${hours}:${minutes}:${seconds}`;
}

function transformTime(time){
    time < 10 ? time = '0'+time : time = time.toString();
    return time;
}
