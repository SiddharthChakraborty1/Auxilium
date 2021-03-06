import "./App.css";
import SupplierDashboard from "./Components/SupplierDashboard/SupplierDashboard";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route } from "react-router-dom";
import Login from "./Components/SupplierActivities/Login/login";
import AddProductForm from "./Components/AddProductForm/AddProductForm";
import PersistentDrawerLeft from "./Components/Home/Home";
import DisplayProducts from "./Components/DisplayProducts/DisplayProducts";
import UserDashboard from "./Components/UserDashboard/UserDashboard";
import registerNew from "./Components/SupplierActivities/Register/registerNew";
import UserRequestForm from "./Components/UserRequestForm/userRequestForm";
import Aboutus from "./Components/AboutUs/Aboutus";

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Route exact path="/Home" component={PersistentDrawerLeft}></Route>
        <Route exact path="/About" component={Aboutus}></Route>
        <Route exact path="/rgnew" component={registerNew}></Route>
        <Route exact path="/" component={PersistentDrawerLeft}></Route>
        <Route exact path="/login" component={Login}></Route>
        <Route
          exact
          path="/supplierDashboard"
          component={SupplierDashboard}
        ></Route>
        <Route exact path="/AddProductForm" component={AddProductForm} />
        <Route exact path="/DisplayProducts" component={DisplayProducts} />
        <Route
          exact
          path="/UserDashboard/ambulance"
          render={() => <UserDashboard productType="Ambulance" />}
        />
        <Route
          exact
          path="/UserDashboard/bedServices"
          render={() => <UserDashboard productType="Bed Services" />}
        />
        <Route
          exact
          path="/UserDashboard/medicalSupplies"
          render={() => <UserDashboard productType="Medical Supplies" />}
        />
        <Route
          exact
          path="/UserDashboard/oxygenServices"
          render={() => <UserDashboard productType="Oxygen Services" />}
        />
        <Route
          exact
          path="/UserDashboard/foodServices"
          render={() => <UserDashboard productType="Food Services" />}
        />
        <Route
          exact
          path="/userRequestForm"
          render={(props) => <UserRequestForm {...props} />}
        />
      </BrowserRouter>
    </div>
  );
}

export default App;
