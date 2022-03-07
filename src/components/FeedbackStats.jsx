import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackStats() {
  const { feedback } = useContext(FeedbackContext);
  const len = feedback.length;
  let average =
    feedback.reduce((acc, curr) => {
      return (acc = acc + curr.rating);
    }, 0) / len;

  average = average.toFixed(1).replace(/[.,]0$/, "");

  return (
    <div className="feedbackStats">
      <p>
        {" "}
        {len} Review{len === 1 ? "" : "s"}
      </p>
      <p>Average Rating : {average}</p>
    </div>
  );
}

export default FeedbackStats;
