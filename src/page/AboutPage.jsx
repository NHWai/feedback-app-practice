import Card from "../components/shared/Card";
import { Link } from "react-router-dom";

function AboutPage() {
  return (
    <Card>
      <h1>This is a react app showing feedback of a product or service</h1>
      <Link to="/">Go back to home page</Link>
    </Card>
  );
}

export default AboutPage;
