import React, { useEffect, useState } from "react";
import "./header.scss";

const Header: React.FC = (): JSX.Element => {
  const [valueFilm, setValueFilm] = useState<string>("");
  // const [exStr, setExStr] = useState<string>("");

  function changeValueFilm(val: string): void {
    setValueFilm(val);
  }

  return (
    <>
      <header className="header">
        <div className="center">
          <p className="headerText">FilmLand</p>
          <div className="search-content">
            <img
              className="header__iconSearch"
              src="./src/image/iconSearch.svg"
            />
            <input
              className="header__inputSearch"
              onChange={(e) => {
                changeValueFilm(e.target.value);
                console.log(e.target.value, valueFilm);
              }}
            />
          </div>
        </div>
      </header>
      <p>{valueFilm}</p>
    </>
  );
};

export default Header;
