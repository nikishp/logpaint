module.exports = function() {
	$.gulp.task('serve', function() {
		$.browserSync.init({
			//server: 'build',
			proxy: "http://wood/build/",
			// reloadDelay: 2000,
			notify: false,
			//tunnel: true,
			//tunnel: "project", //Demonstration page: http://projectmane.localtunnel.me
		});
	});
};
