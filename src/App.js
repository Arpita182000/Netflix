import "./App.css";
import Header from "./common/Header";
import Body from "./component/Body";
import Footer from "./common/Footer";
import { RouterProvider, createBrowserRouter, useNavigate} from "react-router-dom";
import SignIn from "./component/SignIn";

import Browse from "./component/Browse";
function App() {


  return (
    <>
      <RouterProvider router={route} />
    </>
  );
}
const route = createBrowserRouter([
  {
    path: "/signin",
    element:<SignIn /> ,
  },
  {
    path: "/",
    element: <Body /> ,
  },
  {
    path: "/browse",
    element: <Browse/>,
  },
]);



export default App;
