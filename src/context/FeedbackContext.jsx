import { createContext, useState } from "react";
import { nanoid } from "nanoid";

const FeedbackContext = createContext();

export function FeedbackProvider({ children }) {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: "this is from context 1",
      rating: 10,
    },
  ]);

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  function addFeedback(newFeed) {
    newFeed.id = nanoid();
    setFeedback([newFeed, ...feedback]);
  }

  function updateItem(id, item) {
    setFeedback(feedback.map((el) => (el.id === id ? { ...el, ...item } : el)));
    setFeedbackEdit({
      item,
      edit: false,
    });
  }

  function deleteFeedback(id) {
    if (window.confirm(`Are you sure you want to delete? `)) {
      setFeedback((pre) => pre.filter((el) => el.id !== id));
    }
  }

  function editItem(item) {
    setFeedbackEdit({
      item,
      edit: true,
    });
  }

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        addFeedback,
        deleteFeedback,
        editItem,
        feedbackEdit,
        updateItem,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
}

export default FeedbackContext;
