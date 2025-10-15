import { Mesh, Vector3, } from "three"
import { useEffect, useLayoutEffect, useRef, useState } from "react"
import { ThreeEvent, useThree } from "@react-three/fiber"
import { Header, HelpMenu } from "../../components-ui"
import { useXRStore, XRDomOverlay } from "@react-three/xr"
import { Compass2D } from "../../components-ui/compass"

const debounce = (func: () => void, delay: number) => {
    let timeoutId: ReturnType<typeof setTimeout>;
    return () => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(func, delay);
    };
};

const IndexPageARInteraction = () => {
    const store = useXRStore();
    const { gl, camera } = useThree();
    const [position, setPosition] = useState<Vector3>(new Vector3(0, 0, -1))

    //const planes = useXRPlanes(gl);
    //useTapRaycast(gl, camera, setPosition, planes);

    // UI values
    const fontSize = 22;
    const [isHelpVisible, setIsHelpVisible] = useState(false);
    const [headerHeight, setHeaderHeight] = useState(0);

    // Update header height on mount and window resize
    useLayoutEffect(() => {
        const updateHeaderHeight = () => {
            const header = document.querySelector("#arc-header") as HTMLElement;
            if (header) {
                console.log("update header: " + (header.offsetTop + header.offsetHeight));
                setHeaderHeight(header.offsetTop + header.offsetHeight);
            }
        };

        // Delay the calculation slightly to ensure the DOM is fully rendered
        setTimeout(updateHeaderHeight, 100);

        // Debounced update for resize events
        const debouncedUpdateHeaderHeight = debounce(updateHeaderHeight, 200);
        window.addEventListener("resize", debouncedUpdateHeaderHeight);
        return () => window.removeEventListener("resize", debouncedUpdateHeaderHeight);
    }, []);

    useEffect(() => {
        const session = gl.xr.getSession();
        if (!session) return

        let hitTestSource: XRHitTestSource | null = null;

        // Create a hit-test source for viewer
        session.requestReferenceSpace("viewer").then((refSpace) => {
            const hitTestPromise = session.requestHitTestSource({ space: refSpace }).then((source) => {
                hitTestSource = source
            })
        })

        const onSelect = (event: XRInputSourceEvent) => {
            console.log("Click");
            const frame = event.frame
            const referenceSpace = gl.xr.getReferenceSpace()
            if (!hitTestSource || !frame || !referenceSpace) return

            const hitTestResults = frame.getHitTestResults(hitTestSource)
            if (hitTestResults.length > 0) {
                const hitPose = hitTestResults[0].getPose(referenceSpace)
                if (hitPose) {
                    setPosition(
                        new Vector3(
                            hitPose.transform.position.x,
                            hitPose.transform.position.y,
                            hitPose.transform.position.z
                        )
                    )
                }
            }
        }

        session.addEventListener("select", onSelect)

        return () => {
            session.removeEventListener("select", onSelect)
        }
    }, [gl])

    return (
        <>
            <XRDomOverlay style={{ width: "100%", height: "100%", fontSize: `${fontSize}px`, boxSizing: "border-box" }}>
                <Header
                    isHelpVisible={isHelpVisible}
                    onToggleHelp={() => setIsHelpVisible((v) => !v)}
                    onLeave={() => store.getState().session?.end()}
                    fontSize={fontSize}
                />
                <HelpMenu
                    isVisible={isHelpVisible}
                    onClose={() => setIsHelpVisible(false)}
                    onLeave={() => store.getState().session?.end()}
                    headerHeight={headerHeight}
                    fontSize={fontSize}
                />
            </XRDomOverlay>

            {/* Visualize detected planes 
            {planes.map((p, i) => (
                <primitive object={p} key={i} />
            ))}*/}

            {position && (
                <mesh position={position}>
                    <boxGeometry args={[0.2, 0.2, 0.2]} />
                    <meshStandardMaterial color="orange" />
                </mesh>
            )}
        </>
    );
}

export default IndexPageARInteraction