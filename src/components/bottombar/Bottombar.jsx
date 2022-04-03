import "./bottombar.css";
import { Instagram, Twitter, LinkedIn } from "@mui/icons-material";

export default function Bottombar() {
  return (
    <div className="bottombar">
      <div className="bottombarCenter">
        <span className="bottombarText">
          &#169; 2022 <strong>Ideabox</strong>
        </span>
      </div>
      <div className="bottombarRight">
        <ul className="socialsList">
          <li className="social">
            <a href="https://www.instagram.com/gdsc_dypcoe/">
              <Instagram />
            </a>
          </li>
          <li className="social">
            <a href="https://twitter.com/GDSC_DYPCOE">
              <Twitter />
            </a>
          </li>
          <li className="social">
            <a href="https://www.linkedin.com/company/dsc-dypcoe/">
              <LinkedIn />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
