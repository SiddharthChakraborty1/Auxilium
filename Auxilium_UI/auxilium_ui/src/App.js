import './App.css';
//import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import SupplierDashboard from './Components/SupplierDashboard/SupplierDashboard'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './Components/SupplierActivities/Login/login';
import Register from './Components/SupplierActivities/Register/register';
import NavCards from './Components/NavCards/NavCards';
import AddProductForm from './Components/AddProductForm/AddProductForm';
import PersistentDrawerLeft from './Components/Home/Home'


function App() {
	return (
		<div className="App">
			<BrowserRouter>
			<Route exact path='/Home' component={PersistentDrawerLeft}></Route>
			<Route exact path='/Header' component={Header}></Route>
			<Route exact path="/NavCards" component={NavCards}></Route>
			<Route exact path='/' component={Login}></Route>
			<Route exact path='/login' component={Login}></Route>
			<Route exact path = '/register' component={Register}></Route>
			<Route exact path = '/supplierDashboard' component={SupplierDashboard}></Route>
			<Route exact path = '/AddProductForm' component={AddProductForm} />
			{/* <Route exact path = '/footer' component={Footer}></Route> */}
			</BrowserRouter>
			
		</div>
	);
}

export default App;
