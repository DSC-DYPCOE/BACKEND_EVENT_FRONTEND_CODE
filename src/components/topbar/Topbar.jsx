import "./topbar.css";
import { Link } from "react-router-dom";

export default function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link to="/" className="no-dec">
          <img className="logo" src="/assets/logo.png" alt="logo" />
        </Link>
      </div>
    </div>
  );
}
