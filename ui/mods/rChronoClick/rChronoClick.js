model.scrubToTime = function () {
	var event = window.event;
	
	if (event.screenX >= $('.div_time_progress_frame').offset().left) {
		if (event.screenX <= $('.div_time_progress_frame').offset().left + $('.div_time_progress_frame').width()) {
			if (event.screenY >= $('.div_time_progress_frame').offset().top) {
				if (event.screenY <= $('.div_time_progress_frame').offset().top + $('.div_time_progress_frame').height()) {
					var time = ((event.screenX - $('.div_time_progress_frame').offset().left) / $('.div_time_progress_frame').width()) * model.endOfTimeInSeconds();
					api.time.set(Number(time));
				}
			}
		}
	}
}

$('.body_panel').mousedown(function() { model.scrubToTime()});
