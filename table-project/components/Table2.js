import 'antd/dist/antd.css';
import { Table } from 'antd';
import { useState } from 'react';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

function Table2() {
	const [dataSource, setDataSource] = useState([
		{
			id: 1,
			name: 'Zannoh',
			email: 'zanuchol@gmail.com',
			address: 'Lelmokwo Nyagacho Kericho',
		},
		{
			id: 2,
			name: 'Notty',
			email: 'notty@gmail.com',
			address: 'plot10 Kericho town ',
		},
		{
			id: 3,
			name: 'Jayden',
			email: 'jayden@gmail.com',
			address: 'SiloconValley PaloAlto Califonia',
		},
		{
			id: 4,
			name: 'Joy',
			email: 'joy@gmail.com',
			address: 'San Francisco Califonia',
		},
	]);
	const columns = [
		{
			key: '1',
			title: 'ID',
			dataIndex: 'id',
		},
		{
			key: '2',
			title: 'NAME',
			dataIndex: 'name',
		},
		{
			key: '3',
			title: 'Email',
			dataIndex: 'email',
		},
		{
			key: '4',
			title: 'Address',
			dataIndex: 'address',
		},
		{
			key: '5',
			title: 'Actions',
			render: (record) => {
				return (
					<>
						<EditOutlined />
						<DeleteOutlined style={{ color: 'red', marginLeft: 12 }} />
					</>
				);
			},
		},
	];

	const onAddDay = () => {
		const randomNumber = parseInt(Math.random() * 1000);
		const newDay = {
			id: randomNumber,
			name: 'name ' + randomNumber,
			email: randomNumber + ' email',
			address: 'address' + randomNumber,
		};

		setDataSource((pre) => {
			return [...pre, newDay];
		});
	};
	return (
		<div className="app-header">
			<button onClick={onAddDay}>Add New Day</button>
			<Table columns={columns} dataSource={dataSource}></Table>
		</div>
	);
}

export default Table2;
