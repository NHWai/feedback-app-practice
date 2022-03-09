import { useContext } from "react";
import FeedbackItem from "./FeedbackItem";
import FeedbackContext from "../context/FeedbackContext";
import Spinner from "./shared/Spinner";

function FeedbackList() {
  const { feedback, isLoading } = useContext(FeedbackContext);

  if (!isLoading && (!feedback || feedback.length === 0)) {
    return <p style={{ color: "#fff" }}>No Feedback yet !</p>;
  }

  return isLoading ? (
    <Spinner />
  ) : (
    <div>
      {feedback.map((el) => (
        <FeedbackItem key={el.id} item={el} />
      ))}
    </div>
  );
}

export default FeedbackList;
