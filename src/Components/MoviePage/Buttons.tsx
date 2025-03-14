"use client";

import { useEffect, useState } from "react";

interface MovieVideos {
  results: [
    {
      key: string;
    }
  ];
}

export default function Buttons({ movieId }: { movieId: string }) {
  const fetchMovieData = async (id: string | number) => {
    const url = `https://api.themoviedb.org/3/movie/${id}/videos?language=pt-BR`;
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMmNlM2RhY2UzNjljOGViODJmMzIwODc4MWU1NzllYyIsIm5iZiI6MTczMDk0MzgyMi4zODIwMDAyLCJzdWIiOiI2NzJjMWI0ZTU1MDgyMDljZjdhZDM5MTEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.CSMQKgVUe8slAtDPn5XLmt2rlyP2W24l23O6pYRI5SE",
      },
    };

    const data = await fetch(url, options);
    const videos: MovieVideos = await data.json();

    return videos;
  };

  const [modalOpen, setModalOpen] = useState(false);
  const [movieVideos, setMovieVideos] = useState<MovieVideos | null>(null);

  useEffect(() => {
    const fetchVideos = async () => {
      const videos = await fetchMovieData(movieId);
      setMovieVideos(videos);
    };

    fetchVideos();
  }, [movieId]);

  return (
    <>
      {movieVideos && movieVideos.results.length > 0 && (
        <button
          onClick={() => setModalOpen(!modalOpen)}
          className="inline-block rounded-full border border-gray-800 text-center text-sm text-white hover:bg-gray-800 focus:outline-none focus:ring active:bg-gray-800 px-6 h-12"
        >
          Ver trailer
        </button>
      )}

      {movieVideos && modalOpen && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center z-30">
          <div
            onClick={() => setModalOpen(!modalOpen)}
            className="absolute top-0 left-0 right-0 bottom-0 bg-gray-950/90"
          ></div>
          <iframe
            allowFullScreen
            frameBorder="0"
            title="YouTube video player"
            className="w-7/12 aspect-video rounded-2xl shadow relative z-30"
            src={`https://www.youtube.com/embed/${movieVideos.results[0].key}?si=WSwcUKA0rPTorCCf`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
          ></iframe>
        </div>
      )}
    </>
  );
}
