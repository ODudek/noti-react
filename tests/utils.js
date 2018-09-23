'use strict';

function timerGame(callback, time) {
  	setTimeout(() => {
    	callback && callback();
  	}, time);
};

module.exports = timerGame;
