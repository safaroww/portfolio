// YouTube Video

var tag = document.createElement('script');
tag.src = 'https://www.youtube.com/player_api';
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var tv,
	playerDefaults = {
		autoplay: 0,
		autohide: 1,
		modestbranding: 0,
		rel: 0,
		showinfo: 0,
		controls: 0,
		disablekb: 1,
		enablejsapi: 0,
		iv_load_policy: 3
	};

function onYouTubePlayerAPIReady() {
	tv = new YT.Player('sk__youtube-container', {
		events: {
			'onReady': onPlayerReady,
			'onStateChange': onPlayerStateChange
		},
		playerVars: playerDefaults
	});
}

function onPlayerReady() {
	tv.loadVideoById(vid[randomvid]);
	tv.mute();
}

function onPlayerStateChange(e) {
	if (e.data === 1) {
		$('#tv').addClass('active');
	} else if (e.data === 0) {
		tv.seekTo(vid[randomvid].startSeconds)
	}
}

var vidID = $('#sk__yt-video-background').data('youtube-video-id');

// Single video
var vid = [{
			'videoId': vidID,
			'startSeconds': 0,
			'endSeconds': 1020,
			'suggestedQuality': 'hd1080'
		}
	],
	randomvid = Math.floor(Math.random() * (vid.length - 1 + 1));

function onYouTubePlayerAPIReady() {
	tv = new YT.Player('sk__yt-video-background', {
		events: {
			'onReady': onPlayerReady,
			'onStateChange': onPlayerStateChange
		},
		playerVars: playerDefaults
	});
}

function onPlayerReady() {
	tv.loadVideoById(vid[randomvid]);
	tv.mute();
}

function onPlayerStateChange(e) {
	if (e.data === 1) {
		$('#sk__yt-video-background').addClass('active');
	} else if (e.data === 0) {
		tv.seekTo(vid[randomvid].startSeconds)
	}
}

function vidRescale() {

	var w = $(window).width() + 200,
		h = $(window).height() + 200;

	if (w / h > 16 / 9) {
		tv.setSize(w, w / 16 * 9);
		$('.sk__youtube-container .youtube-video').css({
			'left': '0px'
		});
	} else {
		tv.setSize(h / 9 * 16, h);
		$('.sk__youtube-container .youtube-video').css({
			'left': -($('.sk__youtube-container .youtube-video').outerWidth() - w) / 2
		});
	}
}

$(window).on('load resize', function() {
	vidRescale();
});