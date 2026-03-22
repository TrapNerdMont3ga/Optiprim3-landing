import useMacbookStore from "../store";
import clsx from "clsx";
import {Canvas} from "@react-three/fiber";
import {OrbitControls} from "@react-three/drei";
import MacbookModel14 from "./models/Macbook-14.jsx";
import StudioLights from "./three/StudioLights.jsx";
import ModelSwitcher from './three/ModelSwitcher.jsx'
import {useMediaQuery} from "react-responsive";

const ProductViewer = () => {
    const { color, scale, setColor, setScale } = useMacbookStore();

    const isMobile = useMediaQuery({ query: '(max-width: 1024px)'});

    return (
        <section id="product-viewer">
            <h2>Built for the road. Powered by the cloud.</h2>

            <div className="controls">
                <div className="flex-center gap-5 mt-5">
                    <div className="color-control">
    <div className="flex flex-col items-center gap-1">
        <div
            onClick={() => setColor('#adb5bd')}
            className={clsx('bg-neutral-300', color === '#adb5bd' && 'active')}
        />
        <p className="text-white text-xs">Local</p>
    </div>
    <div className="flex flex-col items-center gap-1">
        <div
            onClick={() => setColor('#2e2c2e')}
            className={clsx('bg-neutral-900', color === '#2e2c2e' && 'active')}
        />
        <p className="text-white text-xs">OTR</p>
    </div>
</div>

                    <div className="size-control">
                        <div
                            onClick={() => setScale(0.06)}
                            className={clsx(scale === 0.06 ? 'bg-white text-black' : 'bg-transparent text-white')}
                        >
                            <p>Semi</p>
                        </div>
                        <div
                            onClick={() => setScale(0.08)}
                            className={clsx(scale === 0.08 ? 'bg-white text-black' : 'bg-transparent text-white')}
                        >
                            <p>Box</p>
                        </div>
                        <div
                            onClick={() => setScale(0.05)}
                            className={clsx(scale === 0.05 ? 'bg-white text-black' : 'bg-transparent text-white')}
                        >
                            <p>Sprinter</p>
                        </div>
                    </div>
                </div>
            </div>

            <Canvas id="canvas" camera={{ position: [0, 2, 5], fov: 50, near: 0.1, far: 100}}>
                <StudioLights />
                <ModelSwitcher scale={isMobile ? scale - 0.03 : scale} isMobile={isMobile} />
            </Canvas>
        </section>
    )
}
export default ProductViewer
