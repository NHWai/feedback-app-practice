import { useState, useContext, useEffect } from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";
import FeedbackRating from "./FeedbackRating";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackForm() {
  const { updateItem, feedbackEdit, addFeedback } = useContext(FeedbackContext);

  // function addFeedback(newFeed) {
  //   newFeed.id = nanoid();
  //   setFeedbackData([newFeed, ...feedbackData]);
  // }

  const [text, setText] = useState("");
  const [rating, setRating] = useState();
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (feedbackEdit.edit === true) {
      setRating(feedbackEdit.item.rating);
      setBtnDisabled(false);
      setText(feedbackEdit.item.text);
    }
  }, [feedbackEdit]);

  function handleChange(event) {
    if (text === "") {
      setBtnDisabled(true);
      setMessage(null);
    } else if (text.replace(/\s/g, "").length <= 10 && text !== "") {
      setBtnDisabled(true);
      setMessage("Text should be at least 10 characters");
    } else {
      setBtnDisabled(false);
      setMessage(null);
    }
    setText(event.target.value);
  }

  function handleRate(rating) {
    setRating(rating);
  }

  function handleSubmit(event) {
    event.preventDefault();

    const newFeed = {
      text: text,
      rating: rating,
    };

    if (feedbackEdit.edit === true) {
      updateItem(feedbackEdit.item.id, newFeed);
    } else {
      addFeedback(newFeed);
    }
    setText("");
    setBtnDisabled(true);
  }

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us?</h2>
        <FeedbackRating select={handleRate} />
        <div className="input-group">
          <input
            onChange={handleChange}
            value={text}
            type="text"
            placeholder="Write a review"
          />
          <Button isDisabled={btnDisabled} type="submit">
            Send
          </Button>
        </div>
      </form>
      {message && <div className="message">{message}</div>}
    </Card>
  );
}

export default FeedbackForm;
