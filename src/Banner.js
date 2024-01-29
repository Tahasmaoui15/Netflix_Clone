import React, { useEffect, useState } from "react";
import axios from "./axios";
import { requests, getRandom } from "./Requests";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(requests.fetchTrending);
      setMovie(
        response.data.results[getRandom(1, response.data.results.length - 1)]
      );
      return response;
    }
    fetchData();
  }, []);

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(
        "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
    )`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1>{movie?.title || movie?.name || movie?.original_name}</h1>

        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>

        <h1 className="banner__description"> {movie?.overview} </h1>
      </div>
    </header>
  );
}

export default Banner;
