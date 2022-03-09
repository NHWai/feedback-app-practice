import { createContext, useState, useEffect } from "react";

const FeedbackContext = createContext();

export function FeedbackProvider({ children }) {
  const [feedback, setFeedback] = useState([]);

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getFeedback();
  }, []);

  const getFeedback = async () => {
    const res = await fetch("/feedback");

    const data = await res.json();

    setFeedback(data);
    setIsLoading(false);
  };

  async function addFeedback(newFeed) {
    const response = await fetch("/feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newFeed),
    });

    const data = await response.json();

    setFeedback([data, ...feedback]);
  }

  async function updateItem(id, item) {
    const response = await fetch(`/feedback/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    });

    const data = await response.json();

    setFeedback(feedback.map((el) => (el.id === id ? { ...el, ...data } : el)));
    setFeedbackEdit({
      item,
      edit: false,
    });
  }

  async function deleteFeedback(id) {
    if (window.confirm(`Are you sure you want to delete? `)) {
      await fetch(`/feedback/${id}`, { method: "DELETE" });
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
        isLoading,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
}

export default FeedbackContext;
