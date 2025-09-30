import * as THREE from "three"
import { Billboard, Line, Text } from "@react-three/drei";
import { useEffect, useMemo, useState } from "react";
import { Position } from "../../types/transform";

interface InfoLabelProps {
  objectRef: React.RefObject<THREE.Group>;
  objectName: string;
  yPadding?: number;
  showLine?: boolean
}

const InfoLabel = ({ objectRef, objectName, yPadding = 7.5, showLine = true }: InfoLabelProps
) => {
  const [labelPosition, setLabelPosition] = useState(new Position(0, yPadding, 0));
  const [localLabelPosition, setLocalLabelPosition] = useState(new Position(0, yPadding, 0));
  const [top, setTop] = useState(new Position(0, 0, 0));

  console.log("TOP: " + top);
  console.log("label pos: " + labelPosition)
  console.log("local label pos: " + localLabelPosition)

  useEffect(() => {
    if (!objectRef.current) return;

    console.log("CALCULATE BB");
    const boundingBox = new THREE.Box3().setFromObject(objectRef.current);
    const center = boundingBox.getCenter(new THREE.Vector3());
    const size = boundingBox.getSize(new THREE.Vector3());

    setTop(new Position(center.x, center.y + size.y / 2, center.z));
    setLabelPosition(new Position(center.x, center.y + size.y / 2 + yPadding, center.z));

    const localPos = objectRef.current.localToWorld(labelPosition.clone());

    setLocalLabelPosition(new Position(localPos.x, localPos.y, localPos.z));
  }, [objectRef, yPadding]);

  return (
    <>
      <Billboard position={labelPosition.toArray()}>
        <Text fontSize={1} color="black" anchorX="center" anchorY="bottom">
          {objectName}
        </Text>
      </Billboard>
      {showLine && <Line points={[top, labelPosition]} color="black" lineWidth={1} />}
    </>
  )
}

export default InfoLabel