import { useState } from "react";
import Editor from "@monaco-editor/react";
import api from "./api";

export default function App() {
  const [code, setCode] = useState("// Write your code here");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const submitCode = async () => {
    setLoading(true);
    const res = await api.post("/judge", {
      problemId: "DUMMY_ID",
      userCode: code,
      language: "Java"
    });
    setResult(res.data.aiResult);
    setLoading(false);
  };

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <div style={{ width: "60%" }}>
        <Editor
          height="100%"
          language="java"
          value={code}
          onChange={(value) => setCode(value)}
        />
      </div>

      <div style={{ width: "40%", padding: "20px" }}>
        <h2>CodeTruth AI</h2>
        <button onClick={submitCode}>
          {loading ? "Checking..." : "Check with AI"}
        </button>
        <pre>{result}</pre>
      </div>
    </div>
  );
}
