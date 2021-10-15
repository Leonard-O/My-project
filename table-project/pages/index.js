import Head from 'next/head';
import Header from '../components/Header';
import Main from '../components/Main';
import StudyNotes from '../components/StudyNotes';

export default function Home() {
	return (
		<div className="">
			<Head>
				<title>Study Table</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Header />

			<Main />

			<StudyNotes />
		</div>
	);
}
