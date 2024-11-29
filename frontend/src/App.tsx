import "./index.css";

import { Icon } from "@mdi/react";
import {
  mdiArrowLeftThinCircleOutline,
  mdiArrowRightThinCircleOutline,
  mdiTrashCan
} from "@mdi/js";
import { useState, useEffect } from "react";
import Modal from "./Components/Modal";
import Random from "./Components/Random";

export interface allComics {
  id: number;
  title: string;
  description: string;
  image: string;
  character: string;
  publisher_name: string;
  issue: number;
}


export default function App() {
  const [allComics, setAllComics] = useState<allComics[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetch("http://localhost:3000/api/magazines")
      .then((response) => response.json())
      .then((result) => {
        setAllComics(result);
        console.log(allComics)
      });
  }, []);

  const SelectPreviousComic = () => {
    setCurrentIndex((i) => (i === allComics.length - 1 ? 0 : i + 1));
  };

  const SelectNextComic = () => {
    setCurrentIndex((i) => (i === allComics.length - 1 ? 0 : i + 1));
  };
  
  const deleteComic = async (x: number) => {
    await fetch('http://localhost:3000/api/magazines/delete', {
      method: 'DELETE',
      body: JSON.stringify({
        id: x
      }),
      headers: {
        'Content-type': 'application/json'
      }
    })
  }

  return (
    <>
      <div className="bg-black text-white">
        <div>
          <div className="flex justify-between mb-10">
            <div id="randommagazine">
            <Random
              allComics={allComics}
              currentIndex={currentIndex}
              setCurrentIndex={setCurrentIndex}
            />
            </div>
            <div id="modalforaddingmagazine">
            <Modal />
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          {allComics.length > 0 ? (
            <>
            <div className="flex">
              <p id="titleelement" className="text-white italic text-lg mb-3">
                {allComics[currentIndex].title} 
              </p>
              <div onClick={() => deleteComic(allComics[currentIndex].id)}>
              <Icon  path={mdiTrashCan} size={1} className="hover"/> 
              </div>
              </div>
              <div className="flex flex-row items-center">
                <div
                  className="flex flex-col justify-center items-center hover"
                  onClick={SelectPreviousComic}
                  id="previouscomic"
                >
                  <p>Previous</p>
                  <Icon
                    path={mdiArrowLeftThinCircleOutline}
                    size={2}
                    className=" m-4"
                  />
                </div>
                <img
                  src={allComics[currentIndex].image}
                  alt={allComics[currentIndex].title}
                  style={{ height: 450, width: 350 }}
                />
                <div
                  className="flex flex-col justify-center items-center hover"
                  onClick={SelectNextComic}
                  id="nextcomic"
                >
                  <p>Next</p>
                  <Icon
                    path={mdiArrowRightThinCircleOutline}
                    size={2}
                    className="m-4"
                  />
                </div>
              </div>
              <div className="w-80 mt-5">
                <div className="flex">
                  <p className="italic">Publisher - </p>
                  {allComics[currentIndex].publisher_name}
                </div>
                <p className="mb-5">{allComics[currentIndex].issue}</p>
                <p className="font-bold h-screen">
                  {allComics[currentIndex].description}
                </p>
              </div>
            </>
          ) : (
            <p>No comics to show :(</p>
          )}
        </div>
      </div>
    </>
  );
}
