import "./feed.css";
import { useState, useEffect } from "react";
import { baseURL } from "../../api/baseURL";

// mui imports
import { CircularProgress } from "@mui/material";

// components imports
import Share from "../share/Share";
import Idea from "../idea/Idea";
export default function Feed() {
  const [ideas, setIdeas] = useState([]);
  const [nbHits, setNbHits] = useState(0);
  const [loading, setLoading] = useState(false);

  const getIdeas = async () => {
    setLoading(true);
    try {
      const response = await baseURL.get("/ideas");
      const reviewedIdeas = response.data.ideas;
      setIdeas(reviewedIdeas);
      setNbHits(reviewedIdeas.length);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    getIdeas();
  }, []);

  return (
    <div className="feed">
      <div className="feedWrapper">
        <div className="feedTop">
          <Share />
        </div>
        {loading ? (
          <div className="loading">
            <CircularProgress size={50} />
          </div>
        ) : (
          <div className="feedBottom">
            {ideas.map((i, index) => (
              <Idea key={i._id} idea={i} index={index} hits={nbHits} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
