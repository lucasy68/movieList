import "./MovieCard.scss";
const MovieCard = ({ eachMovie }) => {
  const imgUrl = "https://image.tmdb.org/t/p/w200" + eachMovie.poster_path;
  const backUpUrl =
    "https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg";

  return (
    <div className="card">
      <img src={eachMovie.poster_path === null ? backUpUrl : imgUrl} />
      <h2> {eachMovie.title}</h2>
      <p>{eachMovie.release_date}</p>
    </div>
  );
};
export default MovieCard;
