import React from 'react';

function Header() {
	return (
		<nav className='indigo'>
			<div className='container'>
				<div className='nav-wrapper'>
					<a
						href='#!'
						className='brand-logo'
					>
						React Movies Catalog
					</a>
					<ul
						id='nav-mobile'
						className='right hide-on-med-and-down'
					>
						<li>
							<a href='#!'>repo</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}

export { Header };
