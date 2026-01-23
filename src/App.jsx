import { useState } from "react";



function App() {

  const [value, setValue] = useState("Bonjour")

  return (
    <div>
      <h1>Hello World</h1>
      <input
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />

    </div>
  );
}

export default App;
