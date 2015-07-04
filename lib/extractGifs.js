'use strict';

export default (posts) => {
	return posts
		.map(post => post.data.url)
		.map(url => url.split('?')[0])
		.filter(url => /.(gifv?|jpg|pne?g)$/.test(url))
		.map(url => url.replace(/v$/, ''))
	;
};