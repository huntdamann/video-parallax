"use client"


export function Video({ link }) {

    return (

    
    <video className="vids" src={link} width={320} height={240} autoPlay playsInline loop muted preload="none">


        Your browser does not support the video tag.


    </video>
    );
}