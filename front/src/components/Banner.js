import "../styles/Banner.css";
import logo from "../assets/logo.png";

export default function Banner() {
  const title = " Clinical Trial Management";

  return (
    <div className="mtl-banner">
      <img src={logo} alt={title} className="mtl-logo" />
      <h1>{title}</h1>
    </div>
  );
}
