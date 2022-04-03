import "./share.css";
import autosize from "autosize";
import { useState, useEffect, useRef } from "react";
import axios from "axios";

// mui imports
import { CircularProgress } from "@mui/material";

export default function Share() {
  const shareName = useRef(null);
  const shareTextArea = useRef(null);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    autosize(shareTextArea.current);
  }, []);

  const handleSubmit = async () => {
    if (!shareTextArea.current?.value) return;
    setLoading(true);
    const name = shareName.current?.value || "Anonymous";
    const description = shareTextArea.current.value;

    try {
      await axios.post("/ideas", { name, description });
      setLoading(false);
      handleCancel();
    } catch (err) {
      console.log(err);
      setLoading(false);
      handleCancel();
    }
  };

  const handleCancel = () => {
    shareName.current.value = "";
    shareTextArea.current.value = "";
  };

  return (
    <div className="share">
      <div className="shareWrapper">
        <form className="shareTop">
          <input
            type="text"
            name="shareName"
            className="shareNameInput"
            placeholder="Anonymous"
            ref={shareName}
          />
          <textarea
            type="text"
            name="shareText"
            ref={shareTextArea}
            className="shareTextArea"
            placeholder="Share an idea with the world..."
            rows={1}
          ></textarea>
        </form>
        <hr className="shareHr" />
        <div className="shareBottom">
          <div className="shareOptions">
            <button className="shareButton cancel" onClick={handleCancel}>
              Cancel
            </button>
            <button className="shareButton" onClick={handleSubmit}>
              {!loading ? (
                "Share"
              ) : (
                <CircularProgress size={20} className="loadingIndicator" />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
