'use strict';

export default (links) => {
	const elem = document.querySelector('#links');
	elem.innerHTML = links
		.map(link => `<li><a href="#${link}">${link}</a></li>`)
		.join('\n')
	;
};
