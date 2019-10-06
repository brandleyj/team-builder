import React from "react";

const Forms = props => {
	return (
		<div class="card w-75">
			{props.forms.map(form => (
				<div key={form.id}>
					<div class="card-header">
						<h2>{form.name}</h2>
					</div>
					<div class="card-body">
						<p>{form.email}</p>
						<p>{form.role}</p>
					</div>
				</div>
			))}
		</div>
	);
};

export default Forms;
