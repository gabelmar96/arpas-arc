
import { Mesh, Vector3,} from "three"
import { useEffect, useRef, useState } from "react"
import { ThreeEvent, useThree} from "@react-three/fiber"

const IndexPageARInteraction = () => {
    const { gl } = useThree()
    const [position, setPosition] = useState<Vector3 | null>(null)

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

    return position ? (
        <mesh position={position}>
            <boxGeometry args={[0.2, 0.2, 0.2]} />
            <meshStandardMaterial color="orange" />
        </mesh>
    ) : null
}

export default IndexPageARInteraction