import Home from "./routes/home/home-route";
import Navigation from "./routes/navigation/navigation-route";
import Shop from "./routes/shop/shop-route";
import SignIn from "./routes/sign-in/sign-in";
import { Routes, Route} from "react-router-dom";

const App = () => {
  return (
    // Routes and Route allow us to assign a browser path/url to certain components. Route components can be nested within another,
    // when the path is typed into a browser it will render the assigned element.
    <Routes>
      <Route path="/" element={<Navigation />}>
        {/* Using index links the path to the parent. (Navigation) */}
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
