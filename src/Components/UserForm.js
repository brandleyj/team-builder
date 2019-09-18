import React, { useState } from "react";

const UserForm = props => {
	const [form, setForm] = useState({ name: "", email: "", role: "" });

	const handleChanges = e => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const submitForm = e => {
		e.preventDefault();
		props.addNewMember(form);
		setForm({ name: "", email: "", role: "" });
	};

	return (
		<form onSubmit={submitForm}>
			<input
				className="form-control"
				id="name"
				type="text"
				name="name"
				placeholder="Name"
				onChange={handleChanges}
				value={form.name}
			/>
			<input
				className="form-control"
				id="email"
				type="text"
				name="email"
				placeholder="Email"
				onChange={handleChanges}
				value={form.email}
			/>
			<input
				className="form-control"
				id="role"
				type="text"
				name="role"
				placeholder="Role"
				onChange={handleChanges}
				value={form.role}
			/>
			<button class="btn btn-secondary" type="submit">
				Add Note
			</button>
		</form>
	);
};

export default UserForm;
