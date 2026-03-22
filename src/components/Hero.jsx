import {useEffect, useRef} from "react";

const Hero = () => {
    const videoRef = useRef();

    useEffect(() => {
        if(videoRef.current) videoRef.current.playbackRate = 2;
    }, []);

    return (
        <section id="hero">
            <div>
                <h1>Optiprim3</h1>
                <img src="/title.png" alt="Optiprim3" />
            </div>

            <video ref={videoRef} src="/videos/hero.mp4" autoPlay muted playsInline />

            <button>Get Started</button>

            <p>Technology-Enabled Logistics. Built by an Operator.</p>
        </section>
    )
}
export default Hero
