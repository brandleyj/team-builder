import React, { useState } from "react";
import "./App.css";
import Form from "./Components/Form";
import UserForm from "./Components/UserForm";

function App() {
	const [forms, setForms] = useState([
		{
			id: 1,
			name: "Justin Brandley",
			email: "brandleyj@gmail.com",
			role: "Front End Web Developer"
		}
	]);

	const addNewMember = form => {
		const newMember = {
			id: Date.now(),
			name: form.name,
			email: form.email,
			role: form.role
		};
		setForms([...forms, newMember]);
	};

	return (
		<div className="App">
			<h1>Team Members</h1>
			<UserForm addNewMember={addNewMember} />
			<Form forms={forms} />
		</div>
	);
}

export default App;
