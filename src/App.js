import React, { useState, useEffect } from "react";
import axios from "axios";
import { SpecificDataDisplayed } from "./SpecificDataDisplayed";

const App = () => {
  const api = "https://randomuser.me/";

  const [data, setData] = useState();

  const fetchData = () => {
    return axios.get(api).then((resp) => {
      const { data } = resp;
      return data;
    });
  };

  useEffect(() => {
    fetchData().then((resp) => {
      setData(resp);
    });
  });

  return (
    <div>
      <SpecificDataDisplayed
        reasonOne={data.reason[0]}
        reasonTwo={data.reason[1]}
      />
    </div>
  );
};

export { App };
