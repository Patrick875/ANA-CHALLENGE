import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { instance } from "../API/axiosInstance";

const CreateFertilizerForm = () => {
	const { register, reset, handleSubmit } = useForm();
	const createFertilizer = async (data) => {
		await instance.post("/fertilizer/create", data).then(() => {
			toast.success("Fertilizer created!!!");
		});
		reset();
	};
	return (
		<div className="create-fertilizer">
			<div className="create-form">
				<h3>
					<strong>Create Fertilizer</strong>
				</h3>

				<div>
					<div className="form-container">
						<form
							name="fertilizerCreateFrm"
							className="form"
							onSubmit={handleSubmit(createFertilizer)}>
							<div>
								<label htmlFor="name"> Name </label>
								<input
									type="text"
									name="name"
									id="name"
									placeholder="...name"
									required
									{...register("name")}
								/>
							</div>
							<div>
								<label htmlFor="quantity"> Quantity /per accre</label>
								<input
									type="number"
									min={0}
									max={3}
									step="any"
									name="quantity"
									id="quantity"
									placeholder="...qty/a"
									required
									{...register("kg_per_acre")}
								/>
							</div>
							<div className="button-container">
								<button type="submit" className="add-button">
									Submit{" "}
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CreateFertilizerForm;
