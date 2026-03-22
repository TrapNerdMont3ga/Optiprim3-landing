import {useMediaQuery} from "react-responsive";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";

const Highlights = () => {
    const isMobile = useMediaQuery({  query: '(max-width: 1024px)' });

    useGSAP(() => {
        gsap.to(['.left-column', '.right-column'], {
            scrollTrigger: {
                trigger: '#highlights',
                start: isMobile ? 'bottom bottom' : 'top center'
            },
            y: 0,
            opacity: 1,
            stagger: 0.5,
            duration: 1,
            ease: 'power1.inOut'
        });
    })

    return (
        <section id="highlights">
            <h2>There's never been a better time to move smarter.</h2>
            <h3>Here's what you get with Optiprim3.</h3>

            <div className="masonry">
                <div className="left-column">
                    <div>
                        <img src="/laptop.png" alt="Laptop" />
                        <p>Operate up to 9.8x more efficiently with AI-powered dispatch.</p>
                    </div>
                    <div>
                        <img src="/sun.png" alt="Sun" />
                        <p>Full visibility <br />
                            Real-time tracking <br/>
                            on every load.</p>
                    </div>
                </div>
                <div className="right-column">
                    <div className="optiprime-gradient">
                        <img src="/ai.png" alt="AI" />
                        <p>Built for <br />
                            <span>Intelligent Logistics.</span></p>
                    </div>
                    <div>
                        <img src="/battery.png" alt="uptime" />
                        <p>Up to
                            <span className="blue-gradient">{' '}99.9% uptime{' '}</span>
                           on cloud operations.
                            <span className="text-dark-100">{' '}(Always on. Always moving.)
                            </span></p>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Highlights
