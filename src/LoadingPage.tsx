import React from "react";
import { CircularProgress } from "@material-ui/core";

import { LoaderWrapper } from "./App.style";

const LoadingPage = () => (
  <LoaderWrapper>
    <CircularProgress />
  </LoaderWrapper>
);

export default LoadingPage;
