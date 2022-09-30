import React, { useState } from 'react';

const Search = (props) => {
	const { searchMovies = Function.prototype } = props;

	const [search, setSearch] = useState('');
	const [type, setType] = useState('all');

	const handleKey = (e) => {
		if (e.key === 'Enter') {
			searchMovies(search, type);
		}
	};

	const handleFilter = (e) => {
		setType(e.target.value);
		searchMovies(search, e.target.value);
	};

	return (
		<div className='input-field'>
			<input
				id='search'
				type='search'
				className='validate'
				placeholder='Search...'
				value={search}
				onKeyDown={handleKey}
				onChange={(e) => setSearch(e.target.value)}
			/>
			<button
				className='btn search-btn'
				onClick={() => searchMovies(search, type)}
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
						onChange={handleFilter}
						checked={type === 'all'}
					/>
					<span>All</span>
				</label>
				<label className='filter'>
					<input
						className='with-gap'
						name='type'
						type='radio'
						value='movie'
						onChange={handleFilter}
						checked={type === 'movie'}
					/>
					<span>movies only</span>
				</label>
				<label className='filter'>
					<input
						className='with-gap'
						name='type'
						type='radio'
						value='series'
						onChange={handleFilter}
						checked={type === 'series'}
					/>
					<span>series only</span>
				</label>
			</div>
		</div>
	);
};

export { Search };
