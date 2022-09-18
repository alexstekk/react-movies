function Movie(props) {
	const { Title: title, Year: year, imdbID: id, Type: type, Poster: image } = props;

	return (
		<div
			className='movie card'
			id={id}
		>
			<div className='card-image'>
				{image === 'N/A' ? (
					<img
						src='https://via.placeholder.com/300x400.png?text=Poster'
						alt='poster'
					/>
				) : (
					<img
						src={image}
						alt='poster'
					/>
				)}
			</div>
			<div className='card-content'>
				<p className='card-title grey-text text-darken-4'>{title}</p>
				<p>
					{type}, {year}
				</p>
			</div>
		</div>
	);
}

export { Movie };
