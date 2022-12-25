import { Provider } from "react-redux";
import Shoes from "./App/Features/Shoes/Shoes";
import store from "./App/Store";

function App() {
    return (
        <Provider store={store}>
            <Shoes />
        </Provider>
    );
}

export default App;
