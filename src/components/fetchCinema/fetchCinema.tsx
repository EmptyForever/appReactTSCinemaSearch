import React, { useEffect, useState } from "react";

import { FetchUrlProps, Data } from "../../data/interface/interface";

// https://api.github.com/users/mojombo

// interface FetchUrlProps {
//   useUrl: string;
// }

// interface Data {
//   id: number;
//   name: string;
// }

const FetchUrl: React.FC<FetchUrlProps> = ({ useUrl }): JSX.Element => {
  // const [data, setData] = useState<Data[] | null>(null);
  const [data, setData] = useState<any | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [errorFetch, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCinema = async (url: string) => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setData(data);
        console.log(data, Date.now());
      } catch (errorFetch) {
        if (errorFetch instanceof Error) {
          setError(errorFetch.message);
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchCinema(useUrl);
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (errorFetch) {
    return <div>Error: {errorFetch}</div>;
  }

  return (
    <ul>
      {/* {data?.map((element) => (
        // <li>{element}</li>
        <li>{element.length}</li>
      ))} */}
      <li>ok1</li>
    </ul>
  );

  // if (typeof 0 === "undefined") {
  //   return <StartSearch />;
  // }

  // if (0) {
  //   return 10901;
  // } else {
  //   // + repos
  //   if (0 === 0) {
  //     return 10901;
  //   } else {
  //     // - repos
  //     return 10901;
  //   }
  // }
};

export default FetchUrl;
