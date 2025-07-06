import js from "@eslint/js";
import { useEffect, useState } from "react";

export const useFetchData = (country) => {
  const [result, setResult] = useState([]);
  const [filterdCountries, setfilterdCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    if (country) {
      fetchDataFromApi();
    } else {
      fetchDataFromLocalStorage();
    }
  }, []);

  const fetchDataFromApi = () => {
    let url =
      "https://countryapi.io/api/all?apikey=vUTE8pcLEPevGu6uR22k3Vih9E2YCMUeeduds5qU";

    setIsLoading(true);

    if (country) {
      url = `https://countryapi.io/api/name/${country}?apikey=vUTE8pcLEPevGu6uR22k3Vih9E2YCMUeeduds5qU`;
    }

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (country) {
          setResult(Object.values(data)[0]);
        } else {
          localStorage.setItem(
            "countries",
            JSON.stringify(Object.values(data))
          );
          setResult(Object.values(data));
          setfilterdCountries(Object.values(data));
        }
      })
      .catch(() => setIsError(true))
      .finally(() => setIsLoading(false));
  };

  const fetchDataFromLocalStorage = () => {
    const data = JSON.parse(localStorage.getItem("countries"));
    if (data) {
      setResult(Object.values(data));
      setfilterdCountries(Object.values(data));
    } else {
      fetchDataFromApi();
    }
  };

  return {
    result,
    filterdCountries,
    setfilterdCountries,
    isLoading,
    isError,
  };
};
