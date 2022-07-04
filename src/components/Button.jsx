import './styles/Button.css';

const Button = ({ text, href, svg }) => {
  return (
    <a className="button" href={href} target="_blank">
      {svg && <img className="button__icon" src={svg} />}
      {text}
    </a>
  );
};

export default Button;
