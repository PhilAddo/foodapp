import { useState } from "react";
import Search from "./componenents/Search";
import FoodList from "./componenents/FoodList";
import Nav from "./componenents/Nav";
import Container from "./componenents/Container";
import InnerContainer from "./componenents/InnerContainer";
import "./App.css";
import FoodDetails from "./componenents/FoodDetails";
function App() {
  const [foodData, setFoodData] = useState([]);
  const [foodId, setFoodId] = useState("656329");
  return (
    <div className="App">
      <Nav />
      <Search foodData={foodData} setFoodData={setFoodData} />
      <Container>
        <InnerContainer>
          <FoodList setFoodId={setFoodId} foodData={foodData} />
        </InnerContainer>
        <InnerContainer>
          <FoodDetails foodId={foodId} />
        </InnerContainer>
      </Container>
    </div>
  );
}

export default App;
