import { useEffect, useRef } from "react";

const Hero = () => {
    const videoRef = useRef();

    useEffect(() => {
        if (videoRef.current) videoRef.current.playbackRate = 2;
    }, []);

    return (
        <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
            {/* Background Video */}
            <video 
                ref={videoRef} 
                src="/videos/hero.mov" 
                autoPlay 
                muted 
                playsInline 
                loop
                className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/50" />

            {/* Content Container */}
            <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-12 w-full pt-24 lg:pt-32 pb-16">
                <div className="max-w-2xl">
                    <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white tracking-tighter leading-none">
                        Optiprim3
                    </h1>
                    
                    <p className="neon-title text-2xl md:text-3xl mt-6 text-white">
                        Built for Cargo Intelligence.
                    </p>
                </div>

                {/* Button with proper spacing */}
                <div className="mt-10 lg:mt-12">
                    <button 
                        style={{ backgroundColor: '#00BFFF' }}
                        className="text-black py-3.5 px-10 rounded-full font-semibold text-lg cursor-pointer 
                                   hover:opacity-90 active:scale-95 transition-all duration-300 ease-in-out shadow-lg"
                    >
                        Get Started
                    </button>
                </div>

                {/* Subtitle */}
                <p className="mt-16 text-white/90 text-lg md:text-xl max-w-md text-center">
                    Technology-Enabled Logistics. <br /> Built by an Operator.
                </p>
            </div>
        </section>
    )
}

export default Hero