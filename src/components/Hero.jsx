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

            <button style={{backgroundColor: '#00BFFF'}} className="relative z-10 text-black py-2 px-6 mt-10 lg:mt-0 mb-5 rounded-full font-semibold text-lg cursor-pointer hover:opacity-90 transition-all duration-300 ease-in-out">
    Get Started
</button>

            <p>Technology-Enabled Logistics. Built by an Operator.</p>
        </section>
    )
}
export default Hero
