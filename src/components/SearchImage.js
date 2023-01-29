import './SearchImage.css';


function SearchImage({ getImage }) {
  return (
    <div className="searchImage">
      {getImage.map((photo, index) => {
        return (
          <div className="imgBox">
            {photo ? (
              <img src={photo.urls.thumb} alt={index} />
            ) : (
              <div className="poster" style={{ height: "325px" }}>
                <img
                  src="https://www.prokerala.com/movies/assets/img/no-poster-available.jpg"
                  alt={index}
                />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default SearchImage;
