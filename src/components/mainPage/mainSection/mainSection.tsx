import FilmsBlock from "./filmsBlock/filmsBlock";
import SideMenu from "./sideMenu/sideMenu";

const MainSection = () => {
  return (
    <>
      <div className="center">
        <div className="flex">
          <SideMenu />
          <FilmsBlock />
        </div>
      </div>
    </>
  );
};

export default MainSection;
