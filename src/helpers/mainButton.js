module.exports = function (options) {
	var bolder = `<a href="https://www.google.com/">${options.fn(this)}</a>`;
	return bolder;
};
