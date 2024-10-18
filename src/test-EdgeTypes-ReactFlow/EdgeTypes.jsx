import React, { useCallback } from "react";
import {
  ReactFlow,
  Background,
  Controls,
  MiniMap,
  addEdge,
  useNodesState,
  useEdgesState,
  useKeyPress,
} from "@xyflow/react";
import { getElements } from "./utils";

const onInit = (reactFlowInstance) => {
  reactFlowInstance.fitView();
  console.log(reactFlowInstance.getNodes());
};

const { nodes: initialNodes, edges: initialEdges } = getElements();

const multiSelectionKeyCode = ["ShiftLeft", "ShiftRight"];
const deleteKeyCode = ["AltLeft+KeyD", "Backspace"];

const EdgeTypesFlow = () => {
  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );
  const spacePressed = useKeyPress("Space");
  const cmdAndSPressed = useKeyPress(["Meta+s", "Strg+s"]);
  return (
    <>
      <div>
        {spacePressed && <p>Space pressed!</p>}{" "}
        {cmdAndSPressed && <p>Cmd + S pressed!</p>}
      </div>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onInit={onInit}
        onConnect={onConnect}
        minZoom={0.2}
        selectionKeyCode="a+s"
        multiSelectionKeyCode={multiSelectionKeyCode}
        deleteKeyCode={deleteKeyCode}
        zoomActivationKeyCode="z"
      >
        <MiniMap />
        <Controls />
        <Background />
      </ReactFlow>
    </>
  );
};

export default EdgeTypesFlow;
