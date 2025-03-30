import React, { useEffect, useState } from "react";
import StockChart from "./components/charts/StockChart";
import Hoge from "./Hoge";

const App: React.FC = () => {
  return (
    <div>
      <h1>株価チャート</h1>
      <StockChart />
      <Hoge />
    </div>
  );
};

// const App: React.FC = () => {
//   const [message, setMessage] = useState<string>("");

//   useEffect(() => {
//     // Goサーバーからメッセージを取得
//     fetch("http://localhost:8080/api/message")
//       .then((response) => response.json())
//       .then((data) => setMessage(data.message))
//       .catch((error) => console.error("Error:", error));
//   }, []);

//   return (
//     <div>
//       <h1>{message}</h1>
//     </div>
//   );
// };

export default App;
