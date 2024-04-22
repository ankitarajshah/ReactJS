import { useEffect, useState } from "react";

export function useFetch(fetchfun, initialValue) {
  const [isFetching, setIsFetching] = useState();
  const [error, setError] = useState();
  const [fetchedData, setFetchedData] = useState(initialValue);

  useEffect(() => {
    async function fetchData() {
      setIsFetching(true);

      try {
        const data = await fetchfun();
        setFetchedData(data);
      } catch (error) {
        setError({ message: error.message || "Failed " });
      }
      setIsFetching(false);
    }
    fetchData();
  }, [fetchfun]);

  return {
    isFetching,
    fetchedData,
    setFetchedData,
    error,
  };
}
