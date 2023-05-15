import { useContext, useState } from "react";

import { picturesContext } from "..";
import Picture from "./Picture";
import { getClass } from "../utils/getClass";

const Home = () => {
  const [isFavoriteSelected, setIsFavoriteSelected] = useState(false);
  const [isNotFavoriteSelected, setIsNotFavoriteSelected] = useState(false);
  const { picsData } = useContext(picturesContext);
  console.log(picsData);

  const handleFavoriteCheck = (e) => {
    const isChecked = e.target.checked;
    setIsFavoriteSelected(isChecked);
  };

  const handleNotFavoriteCheck = (e) => {
    const isChecked = e.target.checked;
    setIsNotFavoriteSelected(isChecked);
  };

  let displayedPhotos = picsData;

  displayedPhotos = isFavoriteSelected
    ? displayedPhotos.filter((e) => e.isFavorite)
    : displayedPhotos;

  displayedPhotos = isNotFavoriteSelected
    ? displayedPhotos.filter((e) => e.isFavorite === false)
    : displayedPhotos;

  displayedPhotos =
    isFavoriteSelected && isNotFavoriteSelected ? picsData : displayedPhotos;
  return (
    <div>
      <fieldset className="fieldset">
        <legend>SORT</legend>
        <label>
          <input
            type="checkbox"
            name="favorites"
            value={isFavoriteSelected}
            checked={isFavoriteSelected === true}
            onChange={(event) => handleFavoriteCheck(event)}
          />
          Favorites
        </label>
        <label>
          <input
            type="checkbox"
            name="yet to be favorites"
            value={isNotFavoriteSelected}
            checked={isNotFavoriteSelected === true}
            onChange={(event) => handleNotFavoriteCheck(event)}
          />
          Not favorites
        </label>
      </fieldset>
      <div className="photos">
        {displayedPhotos.map((e, i) => (
          <Picture
            img={e.url}
            id={e.id}
            isFavorite={e.isFavorite}
            key={e.id}
            className={getClass(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
