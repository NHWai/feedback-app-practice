import { useState, useContext, useEffect } from "react";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackRating({ select }) {
  const [selected, setSelected] = useState();

  const { feedbackEdit } = useContext(FeedbackContext);

  useEffect(() => {
    setSelected(feedbackEdit.item.rating);
  }, [feedbackEdit]);

  function handleSelect(event) {
    setSelected(+event.currentTarget.value);
    select(+event.currentTarget.value);
  }

  return (
    <div className="rating">
      <input
        type="radio"
        id="num1"
        name="rating"
        value="1"
        checked={selected === 1}
        onChange={handleSelect}
      />
      <label htmlFor="num1">1</label>
      <input
        type="radio"
        id="num2"
        name="rating"
        value="2"
        checked={selected === 2}
        onChange={handleSelect}
      />
      <label htmlFor="num2">2</label>
      <input
        type="radio"
        id="num3"
        name="rating"
        value="3"
        checked={selected === 3}
        onChange={handleSelect}
      />
      <label htmlFor="num3">3</label>
      <input
        type="radio"
        id="num4"
        name="rating"
        value="4"
        checked={selected === 4}
        onChange={handleSelect}
      />
      <label htmlFor="num4">4</label>
      <input
        type="radio"
        id="num5"
        name="rating"
        value="5"
        checked={selected === 5}
        onChange={handleSelect}
      />
      <label htmlFor="num5">5</label>
      <input
        type="radio"
        id="num6"
        name="rating"
        value="6"
        checked={selected === 6}
        onChange={handleSelect}
      />
      <label htmlFor="num6">6</label>
      <input
        type="radio"
        id="num7"
        name="rating"
        value="7"
        checked={selected === 7}
        onChange={handleSelect}
      />
      <label htmlFor="num7">7</label>
      <input
        type="radio"
        id="num8"
        name="rating"
        value="8"
        checked={selected === 8}
        onChange={handleSelect}
      />
      <label htmlFor="num8">8</label>
      <input
        type="radio"
        id="num9"
        name="rating"
        value="9"
        checked={selected === 9}
        onChange={handleSelect}
      />
      <label htmlFor="num9">9</label>
      <input
        type="radio"
        id="num10"
        name="rating"
        value="10"
        checked={selected === 10}
        onChange={handleSelect}
      />
      <label htmlFor="num10">10</label>
    </div>
  );
}

export default FeedbackRating;
