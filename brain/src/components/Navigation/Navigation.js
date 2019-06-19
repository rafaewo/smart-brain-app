import React from 'react';

const Navigation = ( {onRouteChange, signed} ) => {
		if (signed) {
			return(
				<nav style={{display: 'flex', justifyContent: 'flex-end'}} >
					<p onClick={() => onRouteChange('signout')} className='f3 pointer link dim white underline pa3'>Sign Out</p>
				</nav>
			);
		} else{
			return(
				<nav style={{display: 'flex', justifyContent: 'flex-end'}} >
					<p onClick={() => onRouteChange('signin')} className='f3 pointer link dim white underline pa3'>Sign In</p>
					<p onClick={() => onRouteChange('register')} className='f3 pointer link dim white underline pa3'>Register</p>
				</nav>
			);
		}
}

export default Navigation;