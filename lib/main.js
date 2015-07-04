'use strict';

import Qs from 'qs';

import RedditApi from './redditApi';
import extractGifs from './extractGifs';
import displayGifs from './displayGifs';
import createLinks from './createLinks';

createLinks([
	'cats',
	'kittens',
	'puppies',
	'cute',
	'sloths',
	'poop',
	'perfectloops',
]);

const elem = document.querySelector('#gifs');
function load() {
	elem.innerHTML = '<p>Wait for it...</p>';
	const options = Qs.parse(
		window.location.href
			.replace(/#.*$/, '')
			.split('?')[1]
	);

	RedditApi
		.load(window.location.href.split('#')[1] || 'cats', options)
		.then(extractGifs)
		.then(displayGifs)
	;
}

window.onhashchange = load;
load();