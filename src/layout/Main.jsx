import React, { Component } from 'react';
import { Movies } from '../components/Movies';

class Main extends Component {
	state = {
		movies: [],
	};

	componentDidMount() {
		fetch('http://www.omdbapi.com/?apikey=6c6f4eae&s=matrix')
			.then((response) => response.json())
			.then((data) => this.setState({ movies: data.Search }));
	}
	render() {
		const { movies } = this.state;
		return <main className='container content'>{movies.length ? <Movies movies={this.state.movies} /> : <h3>Loading...</h3>}</main>;
	}
}

export { Main };
