import CreateFertilizerForm from "./StoreKepper.js/CreateFertilizerForm";
import "./App.css";
import CreateSeedForm from "./StoreKepper.js/CreateSeedForm";
import OrderForm from "./Farmer/OrderForm";
function App() {
	return (
		<div>
			<CreateFertilizerForm />
			<CreateSeedForm />
			<OrderForm />
		</div>
	);
}

export default App;
