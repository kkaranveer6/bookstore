import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { BookView } from "./components/book-view/book-view.component";

function App() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/login");
  };

  return (
    <>
      <Button onClick={handleClick}>Log Out</Button>
      <BookView />
    </>
  );
}

export default App;
