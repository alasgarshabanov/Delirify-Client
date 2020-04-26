import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

const LoadingComponent = props => {
  return(
    <CircularProgress color="secondary" size={120} />
  );
};

export default LoadingComponent;
