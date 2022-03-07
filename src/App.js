import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutIconLink from "./components/AboutIconLink";
import AboutPage from "./page/AboutPage";
import Post from "./components/Post";
import NotFound from "./components/NotFound";
import { FeedbackProvider } from "./context/FeedbackContext";

function App() {
  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className="container">
          <Route exact path="/">
            <FeedbackForm />
            <FeedbackStats />
            <FeedbackList />
          </Route>
          <Route path="/about" component={AboutPage} />
          <Route path="/post" component={Post} />
          <Route path="/notfound" component={NotFound} />
          <AboutIconLink />
        </div>
      </Router>
    </FeedbackProvider>
  );
}

export default App;
