import logo from "./logo.svg";
import "./App.css";
import { Container } from "react-bootstrap";
import AddToDo from "./components/AddToDo";
import DisplayToDos from "./components/DisplayToDos";

function App() {
  return (
    <Container className="py-3">
      <AddToDo />
      <DisplayToDos />
    </Container>
  );
}

export default App;
