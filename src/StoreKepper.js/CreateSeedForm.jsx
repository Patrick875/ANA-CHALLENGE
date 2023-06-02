import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useEffect, useState } from "react";
import { instance } from "../API/axiosInstance";

const CreateSeedForm = () => {
	const { register, reset, handleSubmit } = useForm();
	const [fertilizers, setFertilizers] = useState([]);
	const createSeed = async (data) => {
		await instance.post("/seed/create", data).then(() => {
			toast.success("Seed created!!!");
		});
		reset();
	};

	useEffect(() => {
		const getFertilizers = async () => {
			await instance.get("/fertilizer/create").then((res) => {
				setFertilizers(res.data.data);
			});
		};
		getFertilizers();
	}, []);
	return (
		<div className="create-fertilizer">
			<div className="create-form">
				<h3>
					<strong>Create Seed</strong>
				</h3>

				<div>
					<div className="form-container">
						<form
							name="seedCreateFrm"
							className="form"
							onSubmit={handleSubmit(createSeed)}>
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
									max={1}
									step="any"
									name="quantity"
									id="quantity"
									placeholder="...qty/a"
									required
									{...register("kg_per_acre")}
								/>
							</div>
							<div>
								<label htmlFor="ferttizers"> Fertilizers</label>
								{fertilizers && fertilizers.length !== 0
									? fertilizers.map((el, i) => {
											return (
												<input
													key={i}
													type="radio"
													value={el.id}
													name="fertilizer"
													id="fertilizer"
													{...register("fertlizers")}
												/>
											);
									  })
									: null}
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

export default CreateSeedForm;
