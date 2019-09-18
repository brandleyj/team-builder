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
			<label htmlFor="Name">Name</label>
			<input
				id="name"
				type="text"
				name="name"
				onChange={handleChanges}
				value={form.name}
			/>
			<label htmlFor="email">Email</label>
			<input
				id="email"
				type="text"
				name="email"
				onChange={handleChanges}
				value={form.email}
			/>
			<label htmlFor="role">Role</label>
			<input
				id="role"
				type="text"
				name="role"
				onChange={handleChanges}
				value={form.role}
			/>
			<button type="submit">Add Note</button>
		</form>
	);
};

export default UserForm;
