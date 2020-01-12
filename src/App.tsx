import React, { useState, useEffect } from "react";

import { Header, AppWrapper, ErrorWrapper } from "./App.style";
import ContentItem from "./Content/ContentItem";
import LoadingPage from "./LoadingPage";
import { ContentType } from "./Content/content.type";

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

  const fetchData = async () => {
    try {
      setLoading(true);

      const response = await fetch(apiUrl + sampleArticleUrl);
      const json = await response.json();
      setData(json);
    } catch (error) {
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Header>Acoustic content</Header>
      <AppWrapper>
        {data && <ContentItem item={data!} />}
        {loading && <LoadingPage />}
        {error && <ErrorWrapper>{error}</ErrorWrapper>}
      </AppWrapper>
    </div>
  );
};

export default App;
