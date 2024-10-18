import {
  Handle,
  Position,
  useNodesData,
  useHandleConnections,
} from "@xyflow/react";

function ShowOutput() {
  const redConnections = useHandleConnections({
    type: "target",
    id: "red",// 
  });
  const redNodeData = useNodesData(redConnections?.[0].source);

  return (
    <div
      style={{ display: "grid", justifyItems: "center", alignItems: "center" }}
    >
      <div style={{ position: "absolute" }}>{redNodeData.data.value}</div>
      <div
        className="node"
        style={{
          background: "green",
          // background: `rgb(${color.r}, ${color.g}, ${color.b})`,
        }}
      >
        <div>
          <Handle
            type="target"
            position={Position.Left}
            id="red"
            className="handle"
          />
          <label htmlFor="red" className="label">
            R
          </label>
        </div>
      </div>
    </div>
  );
}

export default ShowOutput;
