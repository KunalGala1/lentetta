"use client";
import { useState, useEffect } from "react";
import { getRecordings } from "@/sanity/sanity.query";
import type { RecordingType } from "@/types";

import React from "react";
import ReactPlayer from "react-player";

const MusicPage = () => {
  const [recordings, setRecordings] = useState<RecordingType[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const recordings: RecordingType[] = await getRecordings();
        setRecordings(recordings);
        console.log(recordings);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setError(error as Error);
        setLoading(false);
      }
    };
    getData();
  }, []);

  return (
    <div className="p-4 space-y-4 md:space-y-0 md:flex md:items-start md:gap-6 md:justify-center md:flex-wrap max-w-[1700px] mx-auto">
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}

      {recordings &&
        recordings.map((recording) => (
          <div
            key={recording._id}
            className="p-4 bg-slate-200/60 rounded flex-1 sm:flex-[45%] lg:flex-[30%] min-w-[25%] max-w-full"
          >
            <div className="py-4">
              <h2 className="font-bold text-xl">{recording.title}</h2>
              <p className="text-gray-950/50">{recording.subtitle}</p>
            </div>
            <div className="mt-4">
              <ReactPlayer
                url={recording.url}
                width={"100%"}
                height={300}
                controls={true}
              />
            </div>
          </div>
        ))}
    </div>
  );
};
export default MusicPage;
