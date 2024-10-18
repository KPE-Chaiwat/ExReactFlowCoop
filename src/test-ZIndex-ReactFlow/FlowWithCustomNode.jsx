import React from "react";
import {
  ReactFlow,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
} from "@xyflow/react";
import "reactflow/dist/style.css";
import CustomNode from "./CustomNode"; // Import the custom node component

const nodeTypes = {
  custom: CustomNode, // Register the custom node type
};

const initialNodes = [
  {
    id: "1",
    type: "custom", // Specify the type as 'custom'
    position: { x: 250, y: 0 },
    data: { label: "Custom Node" },
    style: { zIndex: 9 }, // You can also pass zIndex here in the node style
  },
  {
    id: "2",
    type: "custom", // Specify the type as 'custom'
    position: { x: 250, y: 250 },
    data: { label: "Custom Node1" },
    style: { zIndex: 10 }, // You can also pass zIndex here in the node style
  },
];

const initialEdges = [];

const FlowWithCustomNode = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = (params) => setEdges((eds) => addEdge(params, eds));

  return (
    <div style={{ width: "100%", height: "500px" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
      >
        <MiniMap />
        <Controls />
        <Background />
      </ReactFlow>
    </div>
  );
};

export default FlowWithCustomNode;
