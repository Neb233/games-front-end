import React, { useState } from "react";
import FullPageLoader from "../components/fullpageloader/fullpageloader";

const UseFullPageLoader = () => {
  const [isLoading, setisLoading] = useState(false);
  return [
    isLoading ? <FullPageLoader /> : null,
    () => setisLoading(true),
    () => setisLoading(false),
  ];
};

export default UseFullPageLoader;
