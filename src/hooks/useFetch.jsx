import React, { useState, useEffect } from "react";
import apiKey from "../apiKey";

function useFetch() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchData(
    url,
    options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": apiKey,
        "X-RapidAPI-Host": "unogsng.p.rapidapi.com",
      },
    }
  ) {
    setLoading(true);
    try {
      const response = await fetch(url, options);
      const jsonData = await response.json();
      setData(jsonData);
    } catch (err) {
      setError(err);
    }
    setLoading(false);
  }

  return [data, error, loading, fetchData];
}

export default useFetch;
