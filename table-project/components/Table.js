import React, { useState } from 'react';
import data from '../mock-data.json';

function Table() {
	const [contacts, setContacts] = useState(data);

	return (
		<div className="app-container flex col-auto gap-10 mt-5 ">
			<table className="border-collapse w-100%">
				<thead>
					<tr>
						<th className="border [2px solid #ffffff] align left-0 p-3 bg-blue-500">
							Time
						</th>
						<th className="border [1px solid #ffffff] align left-0 p-3 bg-blue-500">
							Monday
						</th>
						<th className="border [1px solid #ffffff] align left-0 p-3 bg-blue-500">
							Tuesday
						</th>
						<th className="border [1px solid #ffffff] align left-0 p-3 bg-blue-500">
							Wednesday
						</th>
						<th className="border [1px solid #ffffff] align left-0 p-3 bg-blue-500">
							Thursday
						</th>
						<th className="border [1px solid #ffffff] align left-0 p-3 bg-blue-500">
							Friday
						</th>
						<th className="border [1px solid #ffffff] align left-0 p-3 bg-blue-500">
							Saturday
						</th>
						<th className="border [1px solid #ffffff] align left-0 p-3 bg-blue-500">
							Sunday
						</th>
					</tr>
				</thead>
				<tbody>
					{contacts.map((contact) => (
						<tr>
							<td className="border [1px solid #ffffff] align left-0 p-2 bg-red-200">
								{contact.id}
							</td>
							<td className="border [1px solid #ffffff] align left-0 p-2 bg-red-200">
								{contact.subject1}
							</td>
							<td className="border [1px solid #ffffff] align left-0 p-2 bg-red-200">
								{contact.subject2}
							</td>
							<td className="border [1px solid #ffffff] align left-0 p-2 bg-red-200">
								{contact.subject3}
							</td>
							<td className="border [1px solid #ffffff] align left-0 p-2 bg-red-200">
								{contact.subject4}
							</td>
							<td className="border [1px solid #ffffff] align left-0 p-2 bg-red-200">
								{contact.subject5}
							</td>
							<td className="border [1px solid #ffffff] align left-0 p-2 bg-red-200">
								{contact.subject6}
							</td>
							<td className="border [1px solid #ffffff] align left-0 p-2 bg-red-200">
								{contact.subject7}
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}

export default Table;
