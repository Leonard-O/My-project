import Stories from './Stories';
import Table from './Table';
import Table2 from './Table2';

function Main() {
	return (
		<main className="grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl mx-auto">
			<section className="col-span-2">
				{/* stories */}
				<Stories />

				{/* <Table /> */}

				<Table2 />
			</section>

			<section>
				{/* mini profile */}
				{/* suggestion */}
			</section>
		</main>
	);
}

export default Main;
