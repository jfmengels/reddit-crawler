'use strict';

import jsonp from 'jsonp';
import Qs from 'qs';

class RedditApi {
	constructor() {
		this.baseUrl = 'http://www.reddit.com/r';
	}

    load(subreddit, options={}) {
    	const params = Object.assign({}, {
	    	sort: 'top',
	    	t: 'week',
	    	jsonp: 'callbackFunction'
    	}, options);

        const url = `${this.baseUrl}/${subreddit}/${params.sort}.json?${Qs.stringify(params)}`;
        console.log(url);
        return new Promise((resolve, reject) => {
            jsonp(url, {
                param: 'jsonp'
            }, (error, data) => {
                error ? reject(error) : resolve(data.data.children);
            });
        });
    }
}

export default new RedditApi();
