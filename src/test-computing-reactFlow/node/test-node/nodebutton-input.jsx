import { useCallback, useState } from "react";
import { Handle, Position, useReactFlow } from "@xyflow/react";

function NodeButton_input({ id, data }) {
  const { updateNodeData } = useReactFlow();
  const [number, setNumber] = useState(data.value);

  const [count, setCount] = useState(0);

  const onClick = useCallback(() => {
    setCount((previous) => {
      let _newCount = previous + 1;
      // จุดที่ input-จะส่งdata ออกไปผ่าน usenode Data
      updateNodeData(id, { value: _newCount });
      return _newCount;
    });
  }, []);

  return (
    <div className="number-input">
      <div onClick={onClick}>{data.label + `${id}` + `${count}`}</div>

      {/* <input
        id={`number-${id}`}
        name="number"
        type="number"
        min="0"
        max="255"
        onChange={onChange}
        className="nodrag"
        value={number}
      /> */}
      <Handle type="source" position={Position.Right} />
    </div>
  );
}

export default NodeButton_input;
