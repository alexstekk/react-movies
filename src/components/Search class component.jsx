import React, { Component } from 'react';

class Search extends Component {
	state = {
		search: '',
		type: 'all',
	};

	handleKey = (e) => {
		if (e.key === 'Enter') {
			this.props.searchMovies(this.state.search, this.state.type);
		}
	};

	handleFilter = (e) => {
		this.setState(
			() => ({ type: e.target.value }),
			() => this.props.searchMovies(this.state.search, this.state.type)
		);
	};

	render() {
		return (
			<div className='input-field'>
				<input
					id='search'
					type='search'
					className='validate'
					placeholder='Search...'
					value={this.state.search}
					onKeyDown={this.handleKey}
					onChange={(e) => this.setState({ search: e.target.value })}
				/>
				<button
					className='btn search-btn'
					onClick={() => this.props.searchMovies(this.state.search, this.state.type)}
				>
					Search
				</button>
				<div>
					<label className='filter'>
						<input
							className='with-gap'
							name='type'
							type='radio'
							value='all'
							onChange={this.handleFilter}
							checked={this.state.type === 'all'}
						/>
						<span>All</span>
					</label>
					<label className='filter'>
						<input
							className='with-gap'
							name='type'
							type='radio'
							value='movie'
							onChange={this.handleFilter}
							checked={this.state.type === 'movie'}
						/>
						<span>movies only</span>
					</label>
					<label className='filter'>
						<input
							className='with-gap'
							name='type'
							type='radio'
							value='series'
							onChange={this.handleFilter}
							checked={this.state.type === 'series'}
						/>
						<span>series only</span>
					</label>
				</div>
			</div>
		);
	}
}

export { Search };
