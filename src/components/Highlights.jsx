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
        <h2>Smarter logistics starts with O₃.</h2>
        <h3>Built to optimize operations, maximize profit, and scale your fleet.</h3>

        <div className="masonry">
            <div className="left-column">
                <div>
                    <img src="/laptop.png" alt="Dashboard" />
                    <p>Track loads, revenue, and performance in real time.</p>
                </div>
                <div>
                    <img src="/sun.png" alt="Efficiency" />
                    <p>
                        Data-driven decisions <br />
                        for every mile you drive.
                    </p>
                </div>
            </div>

            <div className="right-column">
                <div className="apple-gradient">
                    <img src="/ai.png" alt="AI System" />
                    <p>
                        Powered by <br />
                        <span>O₃ Intelligence.</span>
                    </p>
                </div>
                <div>
                    <img src="/battery.png" alt="Performance" />
                    <p>
                        Maximize
                        <span className="green-gradient">{' '}profit per load{' '}</span>
                        with optimized routes and cost tracking.
                        <span className="text-dark-100">{' '}
                            Built for real-world operations.
                        </span>
                    </p>
                </div>
            </div>
        </div>
    </section>
)
}
export default Highlights