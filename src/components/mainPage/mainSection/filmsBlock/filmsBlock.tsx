import React from "react";
import "./filmsBlock.scss";

const FilmsBlock = (): JSX.Element => {
  return (
    <>
      <div className="films">
        <h2 className="films__header">Popular films</h2>
        <ul className="films__cards">
          <li className="films__card">
            <img src="./src/image/skala.png" />
            <div className="films__info">
              <p className="films__type">Action</p>
              <p className="films__description">decsroptoion: sfdfs</p>
            </div>
          </li>
          <li className="films__card">
            <img src="./src/image/skala.png" />
            <div className="films__info">
              <p className="films__type">Action</p>
              <p className="films__description">decsroptoion: sfdfs</p>
            </div>
          </li>
          <li className="films__card">
            <img src="./src/image/skala.png" />
            <div className="films__info">
              <p className="films__type">Action</p>
              <p className="films__description">decsroptoion: sfdfs</p>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default FilmsBlock;
