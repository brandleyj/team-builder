import React from "react";

const Forms = props => {
	return (
		<div>
			{props.forms.map(form => (
				<div key={form.id}>
					<h2>{form.name}</h2>
					<p>{form.email}</p>
					<p>{form.role}</p>
				</div>
			))}
		</div>
	);
};

export default Forms;
