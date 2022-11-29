import React, { useEffect } from "react";
import axios from "../../utils/axios";
import requests from "../../utils/requests";
import "./NotFound.css";

const NotFound = () => {
  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get()
        .then((response) => {
          console.log("response:", response);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchData();
  }, []);
  return <div className="message_text">Route Not Found!</div>;
};

export default NotFound;