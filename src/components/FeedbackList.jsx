import { createContext, useContext } from "react";
import FeedbackItem from "./FeedbackItem";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackList() {
  const { feedback } = useContext(FeedbackContext);

  if (!feedback || feedback.length === 0) {
    return <p style={{ color: "#fff" }}>No Feedback yet !</p>;
  }

  return (
    <div>
      {feedback.map((el) => (
        <FeedbackItem key={el.id} item={el} />
      ))}
    </div>
  );
}

export default FeedbackList;
