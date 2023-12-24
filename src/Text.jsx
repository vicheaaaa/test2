import { useState } from "react";
import "./Text.css";

const Text = () => {
  const [value, setValue] = useState("");
  function onChange(e) {
    setValue(e.target.value);
  }
  return (
    <div>
      <h3>{value}</h3>
      <input
        onChange={onChange}
        value={value}
        type="text"
        placeholder="Type Here ..."
      />
      <button onClick={() => setValue("")}>CLear</button>
    </div>
  );
};

export default Text;
