import React, { Component } from 'react';
import { Movies } from '../components/Movies';
import { Preloader } from '../components/Preloader';
import { Search } from '../components/Search';

class Main extends Component {
	state = {
		movies: [],
		loading: true,
	};

	searchMovies = (str, type = 'all') => {
		this.setState({ loading: true });
		fetch(`http://www.omdbapi.com/?apikey=6c6f4eae&s=${str}${type !== 'all' ? `&type=${type}` : ''}`)
			.then((response) => response.json())
			.then((data) => this.setState({ movies: data.Search, loading: false }));
	};

	componentDidMount() {
		fetch('http://www.omdbapi.com/?apikey=6c6f4eae&s=matrix')
			.then((response) => response.json())
			.then((data) => this.setState({ movies: data.Search, loading: false }));
	}
	render() {
		const { movies, loading } = this.state;

		return (
			<main className='container content'>
				<Search searchMovies={this.searchMovies} />
				{loading ? <Preloader /> : <Movies movies={movies} />}
			</main>
		);
	}
}

export { Main };
