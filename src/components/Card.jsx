import "../styles/Card.css";

const Card = ({ cover, title, artist, shape = "square", onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <div className={`card__cover-wrap card__cover-wrap--${shape}`}>
        <img className="card__cover" src={cover} alt={title} />
      </div>

      <button className="card__play-button">▶</button>

      <p className="card__title">{title}</p>
      <p className="card__artist">{artist}</p>
    </div>
  );
};

export default Card;
