import "./idea.css";
import { format } from "timeago.js";

export default function Idea({ idea, index, hits }) {
  const randomAvatar = Math.ceil(Math.random() * 5);

  return (
    <div className="idea">
      <div className="ideaWrapper">
        <div className="ideaTop">
          <div className="ideaTopLeft">
            <img
              className="avatar"
              src={`/assets/avatar/${randomAvatar}.png`}
              alt="avatar"
            />
          </div>
          <div className="ideaTopRight">
            <span className="ideaCount">#{hits - index}</span>
            <span className="ideaName">{idea.name}</span>
          </div>
        </div>
        <div className="ideaCenter">
          <span className="ideaDescription">{idea.description}</span>
        </div>
        <div className="ideaBottom">
          <a
            href={`https://twitter.com/intent/tweet?text=${idea.description.replace(
              " ",
              "%20"
            )}`}
            className="tweet"
          >
            tweet this idea
          </a>
          <span className="date">{format(idea.createdAt)}</span>
        </div>
      </div>
    </div>
  );
}
