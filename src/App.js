import React, { useState } from "react";
import QrReader from "react-qr-scanner";
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
        <QrReader
          onResult={(result, error) => {
            if (!!result) {
              setData(result?.text);
            }

            if (!!error) {
              console.info(error);
            }
          }}
          style={{ width: "100%" }}
        />
      )}
      <p>{data}</p>
    </div>
  );
};

export default App;
