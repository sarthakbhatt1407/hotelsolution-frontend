import React, { useState } from "react";
import { QrScanner } from "@yudiel/react-qr-scanner";

const App = () => {
  const [data, setData] = useState("No result");
  const [showScan, setShowScan] = useState(false);

  const onSubmitHandler = async (e) => {
    const res = await fetch(`http://localhost:5000/user/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: data.userId,
        password: data.password,
      }),
    });
    const data = await res.json();
    console.log(data);
    if (res.ok) {
    }
    if (!res.ok) {
    }
  };

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
              const resArr = result.split(",");
              const obj = {
                userId: resArr[0].trim(),
                password: resArr[1].trim(),
              };
              console.log(obj);
              setShowScan(!showScan);
              const onSubmitHandler = async (e) => {
                const res = await fetch(`http://localhost:5000/user/login`, {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(obj),
                });
                const data = await res.json();
                console.log(data);
                if (res.ok) {
                  setData("Login Successfull");
                }
                if (!res.ok) {
                }
              };
              onSubmitHandler();
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
