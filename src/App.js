import React, { useState } from "react";
import { QrScanner } from "@yudiel/react-qr-scanner";

const App = () => {
  const [data, setData] = useState("No result");
  const [showScan, setShowScan] = useState(false);

  return (
    <div>
      <button
        onClick={() => {
          setShowScan(!showScan);
        }}
      >
        Scan to login
      </button>
      {showScan && (
        <>
          {" "}
          <QrScanner
            onDecode={(result) => {
              setData(result);
              setShowScan(!showScan);
            }}
            onError={(error) => console.log(error?.message)}
          />
        </>
      )}
      <p>{data}</p>
    </div>
  );
};

export default App;
