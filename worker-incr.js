this.onmessage = function (ev) {
	if (ev.data == 'init')
		this.index = 0;
	else if (ev.data == 'incr')
		this.index++;

	this.postMessage('index: ' + this.index);
}