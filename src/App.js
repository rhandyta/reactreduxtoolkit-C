import { Provider } from "react-redux";
import Shoes from "./App/Features/Shoes/Shoes";
import Users from "./App/Features/Users/Users";
import store from "./App/Store";

function App() {
    return (
        <Provider store={store}>
            {/* <Shoes /> */}
            <Users />
        </Provider>
    );
}

export default App;
