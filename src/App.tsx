import React, { useState, useEffect } from "react";
import "./App.css";
import ContentItem from "./ContentItem";
import LoadingPage from "./LoadingPage";
import { ContentType } from "./content.type";

export const apiUrl =
  "https://my12.digitalexperience.ibm.com/api/859f2008-a40a-4b92-afd0-24bb44d10124";

const sampleArticleUrl =
  "/delivery/v1/content/fa9519d5-0363-4b8d-8e1f-627d802c08a8";

const errorMessage =
  "Something went wrong. There is no content for you. Please reload the site or contact with us.";

const App: React.FC = () => {
  const [data, setData] = useState<ContentType | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | undefined>(undefined);

  const fetchUrl = async () => {
    try {
      setLoading(true);
      const response = await fetch(apiUrl + sampleArticleUrl);
      const json = await response.json();
      setData(json);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(errorMessage);
    }
  };

  useEffect(() => {
    fetchUrl();
  }, []);

  return (
    <div>
      <header className="App-header">HEADER</header>
      <>{data && <ContentItem item={data!} />}</>
      <>{loading && <LoadingPage />}</>
      <>{error && <div>{error}</div>}</>
    </div>
  );
};

export default App;
