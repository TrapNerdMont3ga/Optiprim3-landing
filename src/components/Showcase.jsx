import {useMediaQuery} from "react-responsive";
import {useGSAP} from "@gsap/react";
import gsap from 'gsap';

const Showcase = () => {
    const isTablet = useMediaQuery({ query: '(max-width: 1024px)'});

    useGSAP(() => {
        if(!isTablet) {
            const timeline = gsap.timeline({
                scrollTrigger: {
                    trigger: '#showcase',
                    start: 'top top',
                    end: 'bottom top',
                    scrub: true,
                    pin: true,
                }
            });

            timeline
                .to('.mask img', {
                    transform: 'scale(1.1)'
                }).to('.content', { opacity: 1, y: 0, ease: 'power1.in' });
        }
    }, [isTablet])

    return (
        <section id="showcase">
            <div className="media">
                <video src="/videos/game.mp4" loop muted autoPlay playsInline />
                <div className="mask">
                    <img src="/o3_mask.svg" />
                </div>
            </div>

            <div className="content">
                <div className="wrapper">
                    <div className="lg:max-w-md">
                        <h2>Built Different.</h2>

                        <div className="space-y-5 mt-7 pe-10">
                            <p>
                                Introducing {" "}
                                <span className="text-white">
                                    Optiprim3, the next generation of tech-enabled logistics
                                </span>
                                . Where the road meets the cloud.
                            </p>
                            <p>
                                Built by an owner-operator who runs the truck and the tech stack. AI-powered dispatch, cloud infrastructure, and cybersecurity — all under one authority.
                            </p>
                            <p>
                                No middlemen. No platform dependency. Just a smarter way to move freight — optimized at every layer, from route planning to real-time visibility.
                            </p>
                            <p className="text-primary">Learn more about the Optiprim3 Advantage</p>
                        </div>
                    </div>

                    <div className="max-w-3xs space-y-14">
                        <div className="space-y-2">
                            <p>Up to</p>
                            <h3>40% lower</h3>
                            <p>operating cost vs traditional carriers</p>
                        </div>
                        <div className="space-y-2">
                            <p>Up to</p>
                            <h3>99.9% uptime</h3>
                            <p>on cloud-managed operations</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Showcase
