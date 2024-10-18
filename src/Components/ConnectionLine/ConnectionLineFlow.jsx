import { useCallback, useState } from "react";
import ReactFlow, {
  Background,
  ReactFlowProvider,
  useEdgesState,
  addEdge,
  Controls,
  Node,
  ProOptions,
  OnConnect,
  applyNodeChanges,
  OnNodesChange,
  BackgroundVariant,
  NodeChange,
  Panel,
} from "reactflow";

import "reactflow/dist/style.css";
import "./dnd.css";
import {
  nodes as defaultNodes,
  edges as defaultEdges,
} from "./initialElements";
import { getHelperLines } from "./utils.ts";
import HelperLines from "./HelperLines.tsx";

const proOptions = { account: "paid-pro", hideAttribution: true };

// this example shows how to implement helper lines within React Flow
// usage: drag nodes around to see them snap and align with other nodes boundaries
function ReactFlowPro() {
  const [nodes, setNodes] = useState(defaultNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(defaultEdges);

  const [helperLineHorizontal, setHelperLineHorizontal] = useState(undefined);
  const [helperLineVertical, setHelperLineVertical] = useState(undefined);

  const onConnect = useCallback(
    (connection) => {
      setEdges((edges) => addEdge(connection, edges));
    },
    [setEdges]
  );

  //!-----4
  const customApplyNodeChanges = useCallback((changes, nodes) => {
    // reset the helper lines (clear existing lines, if any)
    //!-----5
    setHelperLineHorizontal(undefined);
    setHelperLineVertical(undefined);

    // this will be true if it's a single node being dragged
    // inside we calculate the helper lines and snap position for the position where the node is being moved to
    if (
      changes.length === 1 &&
      changes[0].type === "position" &&
      changes[0].dragging &&
      changes[0].position
    ) {
      //!-----6
      const helperLines = getHelperLines(changes[0], nodes);

      // if we have a helper line, we snap the node to the helper line position
      // this is being done by manipulating the node position inside the change object
      changes[0].position.x =
        helperLines.snapPosition.x ?? changes[0].position.x;
      changes[0].position.y =
        helperLines.snapPosition.y ?? changes[0].position.y;
      console.log(`-----------------helperLines-----${helperLines.horizontal}`);
      console.log(`-----------------helperLines-----${helperLines.vertical}`);

      // if helper lines are returned, we set them so that they can be displayed
      setHelperLineHorizontal(helperLines.horizontal);
      setHelperLineVertical(helperLines.vertical);
    }

    return applyNodeChanges(changes, nodes);
  }, []);

  //!-----2
  const onNodesChange = useCallback(
    (changes) => {
      setNodes((nodes) => customApplyNodeChanges(changes, nodes)); //!-----3
    },
    [setNodes, customApplyNodeChanges]
  );

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange} //!-----1
      onEdgesChange={onEdgesChange}
      proOptions={proOptions}
      onConnect={onConnect}
      fitView
      elevateEdgesOnSelect
      elevateNodesOnSelect
    >
      <Panel>
        <h3>Test - Massage</h3>
      </Panel>
      <Background />
      {/* ทำพื้นหลังตารางของ */}
      <Background
        id="1"
        gap={10}
        color="#f1f1f1"
        variant={BackgroundVariant.Lines}
      />
      <Background
        id="2"
        gap={100}
        color="#ccc"
        variant={BackgroundVariant.Lines}
      />
      <Controls />
      <HelperLines
        horizontal={helperLineHorizontal}
        vertical={helperLineVertical}
      />
    </ReactFlow>
  );
}

function ReactFlowWrapper() {
  return (
    <div
      // style={{
      //   height: "80vh",
      //   margin: "1rem",
      //   padding: "1rem",
      //   border: "solid black 1px",
      // }}
      className="dndflow"
    >
      <ReactFlowProvider>
        <ReactFlowPro />
      </ReactFlowProvider>
    </div>
  );
}

export default ReactFlowWrapper;
