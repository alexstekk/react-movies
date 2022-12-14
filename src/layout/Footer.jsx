function Footer() {
	return (
		<footer className='page-footer indigo'>
			<div className='footer-copyright'>
				<div className='container'>
					© {new Date().getFullYear()} Copyright Text
					<a
						className='grey-text text-lighten-4 right'
						href='#!'
					>
						repo
					</a>
				</div>
			</div>
		</footer>
	);
}

export { Footer };
