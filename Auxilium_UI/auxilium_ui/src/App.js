import './App.css';
//import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import SupplierDashboard from './Components/SupplierDashboard/SupplierDashboard'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './Components/SupplierActivities/Login/login';
import Register from './Components/SupplierActivities/Register/register';
import Main from './Components/Main/Main';


function App() {
	return (
		<div className="App">
			<BrowserRouter>
			<Route exact path='/Header' component={Header}></Route>
			<Route exact path="/Main" component={Main}></Route>
			<Route exact path='/' component={Login}></Route>
			<Route exact path='/login' component={Login}></Route>
			<Route exact path = '/register' component={Register}></Route>
			<Route exact path = '/supplierDashboard' component={SupplierDashboard}></Route>
			{/* <Route exact path = '/footer' component={Footer}></Route> */}
			</BrowserRouter>
			
		</div>
	);
}

export default App;
