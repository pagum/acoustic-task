import React, { useState, useEffect } from "react";
import "./App.css";
import ContentItem from "./ContentItem";

export const apiUrl =
  "https://my12.digitalexperience.ibm.com/api/859f2008-a40a-4b92-afd0-24bb44d10124";
const sampleArticleUrl =
  "/delivery/v1/content/fa9519d5-0363-4b8d-8e1f-627d802c08a8";

const App: React.FC = () => {
  const [data, setData] = useState(undefined);
  const [loading, setLoading] = useState(true);

  const fetchUrl = async () => {
    setLoading(true);
    const response = await fetch(apiUrl + sampleArticleUrl);
    const json = await response.json();
    setData(json);
    setLoading(false);
  };
  useEffect(() => {
    fetchUrl();
  }, []);

  return (
    <div>
      <header className="App-header">HEADER</header>
      <>{data && <ContentItem item={data!} />}</>
    </div>
  );
};

export default App;
