import 'antd/dist/antd.css';
import { Button, Table, Modal, Input } from 'antd';
import { useState } from 'react';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

function Table2() {
	const [isEditing, setIsEditing] = useState(false);
	const [editingDay, setEditingDay] = useState(null);
	const [dataSource, setDataSource] = useState([
		{
			time: '8:00',
			subject1: 'Maths',
			subject2: 'English',
			subject3: 'Physics',
			subject4: 'Geography',
			subject5: 'History',
			subject6: 'Project',
			subject7: 'Chill',
		},
		{
			time: '9:00',
			subject1: 'Maths',
			subject2: 'English',
			subject3: 'Physics',
			subject4: 'Geography',
			subject5: 'History',
			subject6: 'Project',
			subject7: 'Chill',
		},
		{
			time: '9:30',
			subject1: 'Maths',
			subject2: 'English',
			subject3: 'Physics',
			subject4: 'Geography',
			subject5: 'History',
			subject6: 'Project',
			subject7: 'Chill',
		},
		{
			time: '10:00',
			subject1: 'Maths',
			subject2: 'English',
			subject3: 'Physics',
			subject4: 'Geography',
			subject5: 'History',
			subject6: 'Project',
			subject7: 'Chill',
		},
	]);
	const columns = [
		{
			key: '1',
			title: 'Time',
			dataIndex: 'time',
		},
		{
			key: '2',
			title: 'Monday',
			dataIndex: 'subject1',
		},
		{
			key: '3',
			title: 'Tuesday',
			dataIndex: 'subject2',
		},
		{
			key: '4',
			title: 'Wednesday',
			dataIndex: 'subject3',
		},
		{
			key: '5',
			title: 'Thursday',
			dataIndex: 'subject4',
		},
		{
			key: '6',
			title: 'Friday',
			dataIndex: 'subject5',
		},
		{
			key: '7',
			title: 'Saturday',
			dataIndex: 'subject6',
		},
		{
			key: '8',
			title: 'Sunday',
			dataIndex: 'subject7',
		},
		{
			key: '9',
			title: 'Actions',
			render: (record) => {
				return (
					<>
						<EditOutlined
							onClick={() => {
								onEditDay(record);
							}}
						/>
						<DeleteOutlined
							onClick={() => {
								onDeleteDay(record);
							}}
							style={{ color: 'red', marginLeft: 12 }}
						/>
					</>
				);
			},
		},
	];

	const onAddDay = () => {
		const randomNumber = parseInt(Math.random() * 1000);
		const newDay = {
			time: randomNumber,
			subject1: 'subject1',
			subject2: 'subject2',
			subject3: 'subject3',
			subject4: 'subject4',
			subject5: 'subject5',
			subject6: 'subject6',
			subject7: 'subject7',
		};

		setDataSource((pre) => {
			return [...pre, newDay];
		});
	};

	const onDeleteDay = (record) => {
		Modal.confirm({
			title: 'Are you sure you want to DELETE this entry?',
			okText: 'Yes',
			okType: 'danger',
			onOk: () => {
				setDataSource((pre) => {
					return pre.filter((day) => day.time !== record.time);
				});
			},
		});
	};

	const onEditDay = (record) => {
		setIsEditing(true);
		setEditingDay({ ...record });
	};

	return (
		<div className="app-header">
			<Button onClick={onAddDay}>Add New Day</Button>
			<Table columns={columns} dataSource={dataSource}></Table>
			<Modal
				title="Edit Subject"
				visible={isEditing}
				okText="Save"
				onCancel={() => {
					setIsEditing(false);
				}}
				onOk={() => {
					setIsEditing(false);
				}}
			>
				<Input placeholder="Time" value={onEditDay?.title} />
				<Input placeholder="Subject1" value={onEditDay?.title} />
				<Input placeholder="Subject2" value={onEditDay?.title} />
				<Input placeholder="Subject3" value={onEditDay?.title} />
				<Input placeholder="Subject4" value={onEditDay?.title} />
				<Input placeholder="Subject5" value={onEditDay?.title} />
				<Input placeholder="Subject6" value={onEditDay?.title} />
				<Input placeholder="Subject7" value={onEditDay?.title} />
			</Modal>
		</div>
	);
}

export default Table2;
