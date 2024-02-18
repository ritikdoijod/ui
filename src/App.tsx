import Login from "./components/forms/Login";
import Button from "./components/ui/Button";
import Card from "./components/ui/Card";
import Container from "./components/ui/Container";

function App() {
  return (
    <Container className="w-full h-full bg-red-50/50 flex items-center justify-center">
      <Login />
    </Container>
  );
}

export default App;
