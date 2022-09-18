import React from 'react';
import { Footer } from './layout/Footer';
import { Header } from './layout/Header';
import { Main } from './layout/Main';

export default class App extends React.Component {
	render() {
		return (
			<>
				<Header />
				<Main />
				<Footer />
			</>
		);
	}
}
