import React from "react";

function renderMeshes(object) {
	const meshes = [];
	object.traverse((child) => {
		if (child.isMesh) {
			meshes.push(
				<mesh
					key={child.uuid}
					geometry={child.geometry}
					material={child.material}
					position={child.position}
					rotation={child.rotation}
					scale={child.scale}
					castShadow
					receiveShadow
				/>
			);
		}
	});
	return meshes;
}

function ComputerModel({ scene, scale, position, rotation }) {
	if (!scene) return null;

	return (
		<group scale={scale} position={position} rotation={rotation}>
			{renderMeshes(scene)}
		</group>
	);
}

export default ComputerModel;
