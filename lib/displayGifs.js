'use strict';

export default (urls) => {
    const elem = document.querySelector('#gifs');
    elem.innerHTML = urls
        .map(url => `<a target="_blank"><img src=${url} /></a>`)
        .join('\n')
    ;
};
