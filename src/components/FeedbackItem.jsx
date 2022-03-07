import { useContext } from "react";
import PropTypes from "prop-types";
import { FaTimes, FaEdit } from "react-icons/fa";
import Card from "./shared/Card";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackItem({ item }) {
  const { deleteFeedback, editItem } = useContext(FeedbackContext);

  return (
    <Card>
      <div className="text-display">{item.text}</div>
      <button onClick={() => deleteFeedback(item.id)} className="close">
        <FaTimes color="purple" />
      </button>
      <button onClick={() => editItem(item)} className="edit">
        <FaEdit color="red" />
      </button>
      <div className="num-display">{item.rating}</div>
    </Card>
  );
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default FeedbackItem;
