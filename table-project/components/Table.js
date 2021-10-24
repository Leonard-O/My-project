function Table() {
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
					<tr>
						<td className="border [1px solid #ffffff] align left-0 p-2 bg-red-200">
							{'7:45'}
						</td>
						<td className="border [1px solid #ffffff] align left-0 p-2 bg-red-200">
							{'Swahili'}
						</td>
						<td className="border [1px solid #ffffff] align left-0 p-2 bg-red-200">
							{'Geography'}
						</td>
						<td className="border [1px solid #ffffff] align left-0 p-2 bg-red-200">
							{'English'}
						</td>
						<td className="border [1px solid #ffffff] align left-0 p-2 bg-red-200">
							{'Science'}
						</td>
						<td className="border [1px solid #ffffff] align left-0 p-2 bg-red-200">
							{'History'}
						</td>
						<td className="border [1px solid #ffffff] align left-0 p-2 bg-red-200">
							{'Math'}
						</td>
						<td className="border [1px solid #ffffff] align left-0 p-2 bg-red-200">
							{'Project'}
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}

export default Table;
