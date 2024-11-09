import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import { router } from "./routes/route";
import NavBar from "./components/global/NavBar";
import Footer from "./components/global/Footer";

const App = () => {
  return (
    <>
      <Provider store={store}>
        <NavBar />
        <RouterProvider router={router} />
        <Footer />
      </Provider>
    </>
  );
};

export default App;
