import type { NextPage } from 'next'
import Head from 'next/head'

// component
import Sidebar from '../components/Sidebar'
import Feed from '../components/Feed'
import Widget from '../components/Widgets'

const Home: NextPage = () => {
	return (
		<div>
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className="bg-twitter-bg min-h-screen max-w-[1400px] mx-auto flex">
				{/* Sidebar */}
				<Sidebar />
				
				{/* Feed */}
				<Feed />
				
				{/* Widget */}
				{/* <Widget /> */}
			</main>
		</div>
	)
}

export default Home
