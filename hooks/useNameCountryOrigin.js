import { useState, useEffect } from "react";

const useNameCountryOrigin = (fullname) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [nameCountryOrigin, setNameCountryOrigin] = useState(null);
  useEffect(() => {
    const [first, last, other] = fullname.split(":");
    if (first && last && !other) {
      fetch(
        "https://sirrine-functions.netlify.app/.netlify/functions/server/name",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            first,
            last,
          }),
        }
      )
        .then((response) => response.json())
        .then((response) => {
          const { countryOrigin } = response;
          const regionNames = new Intl.DisplayNames(["en"], { type: "region" });
          const country = regionNames.of(countryOrigin);
          setNameCountryOrigin(country);
          setError(null);
          setLoading(false);
        })
        .catch((error) => {
          setNameCountryOrigin(null);
          setError(error);
          setLoading(false);
        });
    } else {
      setNameCountryOrigin(null);
      setError(error);
      setLoading(false);
    }
  }, [fullname]);
  return [loading, error, nameCountryOrigin];
};

export default useNameCountryOrigin;
