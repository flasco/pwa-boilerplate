import React from 'react';
import { setConfig } from 'react-hot-loader';
import { render } from 'react-dom';

import App from './app';

setConfig({
  pureRender: true, // RHL will not change render method
});

function checkNeedScroll(target) {
  for (let i = 0; i <= 6; i++) {
    const className = target?.className ?? '';
    if (className.includes('needScroll')) return true;
    target = target?.parentElement ?? null;
    if (target == null) return false;
  }
  return false;
}

document.body.addEventListener(
  'touchmove',
  function(e) {
    if (!checkNeedScroll(e.target)) {
      e.preventDefault(); //阻止默认的处理方式(阻止下拉滑动的效果)
    }
  },
  { passive: false }
); //passive 参数不能省略，用来兼容ios和android

document.body.addEventListener('contextmenu', function(e) {
  e.preventDefault();
});

render(<App />, document.getElementById('root'));
