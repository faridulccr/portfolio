import "./AnimatedLetters.scss";

const AnimatedLetters = ({ letterClass = "", strArray = [], id }) => {
  return (
    <>
      {strArray.map((char, index) => (
        <span key={char + index} className={`${letterClass} _${index + id}`}>
          {char}
        </span>
      ))}
    </>
  );
};

export default AnimatedLetters;
