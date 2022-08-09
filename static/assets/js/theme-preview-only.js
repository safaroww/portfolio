/**
 * Dynamic generation of theme colors
 */



function ifItsMobileDevice() {
	var isMobile = false; //initiate as false
	// device detection
	if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
	    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) isMobile = true;
	return isMobile;
}
var $isMobile = ifItsMobileDevice();
$( document ).ready(function() {      
	if ($isMobile == true) {
		// this is for mobile
		$('.color-styler').addClass('mobile-true');
	} else {
	}
});

$(document).ready(function(){
	var primClrA = '#8115ff';
	var primClrARGBA = 'rgba(129,21,255,1)';
	var primClrARGBNumbersOnly = '129,21,255';

	var primClrB = '#FF2AD0';
	var primClrBRGBA = 'rgba(255,42,208,1)';
	var primClrBRGBNumbersOnly = '255,42,208';

	var primClrC = '#ff8f2a';
	var primClrCRGBA = 'rgba(255,143,42,1)';
	var primClrCRGBNumbersOnly = '255,143,42';

	var primClrD = '#ffa911';
	var primClrDRGBA = 'rgba(255,169,17,1)';
	var primClrDRGBNumbersOnly = '255,169,17';

	function colorFixes() {

		// Gradient clipped text icons color fix
		$( 'a.sk__iconbox-icon-link span[class*="icon-"].sk__gradient-fancy-text' ).css({
			'zIndex': '1',
			'background': '#000000',
			'color': '#ffffff',
			'-webkit-background-clip': 'text',
			'-webkit-text-stroke': '0 transparent'
		});
		$( 'a.sk__iconbox-icon-link' ).hover( function () {
			$( this ).find( 'span[class^="icon-"].sk__gradient-fancy-text' ).css({
				'background': 'rgb(' + primClrARGBNumbersOnly + ')',
				'background': '-webkit-gradient(linear, left top, right top, from(rgba(' + primClrARGBNumbersOnly + ',1)), color-stop(52%, rgba(' + primClrBRGBNumbersOnly + ',1)), to(rgba(' + primClrCRGBNumbersOnly + ',1)))',
				'background': '-o-linear-gradient(left, rgba(' + primClrARGBNumbersOnly + ',1) 0%, rgba(' + primClrBRGBNumbersOnly + ',1) 52%, rgba(' + primClrCRGBNumbersOnly + ',1) 100%)',
				'background': 'linear-gradient(90deg, rgba(' + primClrARGBNumbersOnly + ',1) 0%, rgba(' + primClrBRGBNumbersOnly + ',1) 52%, rgba(' + primClrCRGBNumbersOnly + ',1) 100%)',
				'filter': 'progid:DXImageTransform.Microsoft.gradient(startColorstr="' + primClrA + '",endColorstr="' + primClrC + '",GradientType=1)',
				'-webkit-background-clip': 'text',
				'-webkit-text-stroke': '3.5px transparent',
				'color': 'rgba(0,0,0,0.65)',
				'padding': '3px'
			});
		});
		$( 'a.sk__iconbox-icon-link').mouseleave( function() {    
			$( this ).find( 'span[class^="icon-"].sk__gradient-fancy-text' ).css({
				'zIndex': '1',
				'background': '#000000',
				'color': '#ffffff',
				'-webkit-background-clip': 'text',
				'-webkit-text-stroke': '0 transparent'
			});
		});

	} // colorFixes()

	$('#theme-color-master').spectrum({
		type: "component",
		showPalette: "false",
		showInput: "true",
		allowEmpty: "false",
		move: function(color) {
			primClrA = color.toHexString();
			primClrARGBA = 'rgba(' + Math.floor(color._r) + ', ' + Math.floor(color._g) + ', ' + Math.floor(color._b) + ', ' + color._a + ')';
			primClrARGBNumbersOnly = Math.floor(color._r) + ', ' + Math.floor(color._g) + ', ' + Math.floor(color._b);

			$( '.sk__gradient-back-v1, ' +
				'.sk__gradient-back-v1-hover:hover, ' +
				'.btn:not([class*="btn-"]):before, ' +
				'.btn-gradient:before, ' +
				'.btn-gradient-outline' ).css({
					'background': 'rgb(' + primClrARGBNumbersOnly + ')',
					'background': '-o-linear-gradient(left, rgba(' + primClrARGBNumbersOnly + ',1) 0%, rgba(' + primClrBRGBNumbersOnly + ',1) 50%, rgba(' + primClrCRGBNumbersOnly + ',1) 100%)',
					'background': '-webkit-gradient(linear, left top, right top, from(rgba(' + primClrARGBNumbersOnly + ',1)), color-stop(50%, rgba(' + primClrBRGBNumbersOnly + ',1)), to(rgba(' + primClrCRGBNumbersOnly + ',1)))',
					'background': 'linear-gradient(90deg, rgba(' + primClrARGBNumbersOnly + ',1) 0%, rgba(' + primClrBRGBNumbersOnly + ',1) 50%, rgba(' + primClrCRGBNumbersOnly + ',1) 100%)',
					'filter': 'progid:DXImageTransform.Microsoft.gradient(startColorstr="' + primClrA + '",endColorstr="' + primClrC + '",GradientType=1)'
			});

			$( 'span.sk__iconbox-icon-dash' ).css({
				'background': 'rgb(' + primClrARGBNumbersOnly + ')',
				'background': '-webkit-gradient(linear,left top, left bottom,from(#000),to(#000)) padding-box, -webkit-gradient(linear, left top, right top, from(rgba(' + primClrARGBNumbersOnly + ',1)), color-stop(50%, rgba(' + primClrBRGBNumbersOnly + ',1)), to(rgba(' + primClrCRGBNumbersOnly + ',1))) border-box',
				'background': '-o-linear-gradient(#000,#000) padding-box, -o-linear-gradient(left, rgba(' + primClrARGBNumbersOnly + ',1) 0%, rgba(' + primClrBRGBNumbersOnly + ',1) 50%, rgba(' + primClrCRGBNumbersOnly + ',1) 100%) border-box',
				'background': 'linear-gradient(#000,#000) padding-box, linear-gradient(90deg, rgba(' + primClrARGBNumbersOnly + ',1) 0%, rgba(' + primClrBRGBNumbersOnly + ',1) 50%, rgba(' + primClrCRGBNumbersOnly + ',1) 100%) border-box'
			});
			
			$( '.sk__clipped-text, ' +
				'.sk__clipped-text-hover:hover' ).css({
					'-webkit-background-clip': 'text',
					'-webkit-text-fill-color': 'transparent'
			});

			// marker 1 - removed the line with: a.sk__iconbox-icon-link:hover span[class^="icon-"].sk__gradient-fancy-text
			$( '.sk__gradient-fancy-text' ).css({
				'background': 'rgb(' + primClrARGBNumbersOnly + ')',
				'background': '-webkit-gradient(linear, left top, right top, from(rgba(' + primClrARGBNumbersOnly + ',1)), color-stop(52%, rgba(' + primClrBRGBNumbersOnly + ',1)), to(rgba(' + primClrCRGBNumbersOnly + ',1)))',
				'background': '-o-linear-gradient(left, rgba(' + primClrARGBNumbersOnly + ',1) 0%, rgba(' + primClrBRGBNumbersOnly + ',1) 52%, rgba(' + primClrCRGBNumbersOnly + ',1) 100%)',
				'background': 'linear-gradient(90deg, rgba(' + primClrARGBNumbersOnly + ',1) 0%, rgba(' + primClrBRGBNumbersOnly + ',1) 52%, rgba(' + primClrCRGBNumbersOnly + ',1) 100%)',
				'filter': 'progid:DXImageTransform.Microsoft.gradient(startColorstr="' + primClrA + '",endColorstr="' + primClrC + '",GradientType=1)',
				'-webkit-background-clip': 'text',
				'color': '#000000',
				'padding': '3px'
			});

			$( '.sk__gradient-fancy-text-back' ).css({
				'position': 'absolute',
				'top': '0',
				'left': '0',
				'width': 'auto',
				'height': '100%',
				'-webkit-transform': 'translate(5px, 5px)',
				'-ms-transform': 'translate(5px, 5px)',
				'transform': 'translate(5px, 5px)',
				'z-index': '-1',
				'background': 'rgb(' + primClrARGBNumbersOnly + ')',
				'background': '-webkit-gradient(linear, left top, right top, from(rgba(' + primClrARGBNumbersOnly + ',0.7035189075630253)), color-stop(52%, rgba(' + primClrBRGBNumbersOnly + ',0.4990371148459384)), to(rgba(' + primClrCRGBNumbersOnly + ',0.4009978991596639)))',
				'background': '-o-linear-gradient(left, rgba(' + primClrARGBNumbersOnly + ',0.7035189075630253) 0%, rgba(' + primClrBRGBNumbersOnly + ',0.4990371148459384) 52%, rgba(' + primClrCRGBNumbersOnly + ',0.4009978991596639) 100%)',
				'background': 'linear-gradient(90deg, rgba(' + primClrARGBNumbersOnly + ',0.7035189075630253) 0%, rgba(' + primClrBRGBNumbersOnly + ',0.4990371148459384) 52%, rgba(' + primClrCRGBNumbersOnly + ',0.4009978991596639) 100%)',
				'filter': 'progid:DXImageTransform.Microsoft.gradient(startColorstr="' + primClrA + '",endColorstr="' + primClrC + '",GradientType=1)',
				'-webkit-background-clip': 'text',
				'color': '#000000',
				'padding': '3px'
			});

			$('.sk__gradient-background-tint').css({
				'background': 'rgb(' + primClrARGBNumbersOnly + ')',
				'background': '-o-linear-gradient(315deg, rgba(' + primClrARGBNumbersOnly + ',0.12290266106442575) 0%, rgba(' + primClrBRGBNumbersOnly + ',0.07007352941176472) 11%, rgba(' + primClrCRGBNumbersOnly + ',0) 20%)',
				'background': 'linear-gradient(135deg, rgba(' + primClrARGBNumbersOnly + ',0.12290266106442575) 0%, rgba(' + primClrBRGBNumbersOnly + ',0.07007352941176472) 11%, rgba(' + primClrCRGBNumbersOnly + ',0) 20%)',
				'filter': 'progid:DXImageTransform.Microsoft.gradient(startColorstr="' + primClrA + '",endColorstr="' + primClrC + '",GradientType=1)'
			});

			$('.sk__subtle-divider').css({
				'background': 'rgb(' + primClrARGBNumbersOnly + ')',
				'background': '-webkit-gradient(linear, left top, right top, from(rgba(' + primClrARGBNumbersOnly + ',0.3169642857142857)), color-stop(52%, rgba(' + primClrBRGBNumbersOnly + ',0.20772058823529416)), to(rgba(' + primClrCRGBNumbersOnly + ',0.14)))',
				'background': '-o-linear-gradient(left, rgba(' + primClrARGBNumbersOnly + ',0.3169642857142857) 0%, rgba(' + primClrBRGBNumbersOnly + ',0.20772058823529416) 52%, rgba(' + primClrCRGBNumbersOnly + ',0.14) 100%)',
				'background': 'linear-gradient(90deg, rgba(' + primClrARGBNumbersOnly + ',0.3169642857142857) 0%, rgba(' + primClrBRGBNumbersOnly + ',0.20772058823529416) 52%, rgba(' + primClrCRGBNumbersOnly + ',0.14) 100%)',
				'filter': 'progid:DXImageTransform.Microsoft.gradient(startColorstr="' + primClrA + '",endColorstr="' + primClrC + '",GradientType=1)'
			});

			$('.gradient-links').css({
				'background': 'rgb(198,198,198)',
				'background': '-webkit-gradient(linear, left top, right top, from(rgba(198,198,198,1)), color-stop(25%, rgba(198,198,198,1)), color-stop(43%, rgba(' + primClrARGBNumbersOnly + ',1)), color-stop(72%, rgba(' + primClrBRGBNumbersOnly + ',1)), to(rgba(' + primClrCRGBNumbersOnly + ',1)))',
				'background': '-o-linear-gradient(left, rgba(198,198,198,1) 0%, rgba(198,198,198,1) 25%, rgba(' + primClrARGBNumbersOnly + ',1) 43%, rgba(' + primClrBRGBNumbersOnly + ',1) 72%, rgba(' + primClrCRGBNumbersOnly + ',1) 100%)',
				'background': 'linear-gradient(90deg, rgba(198,198,198,1) 0%, rgba(198,198,198,1) 25%, rgba(' + primClrARGBNumbersOnly + ',1) 43%, rgba(' + primClrBRGBNumbersOnly + ',1) 72%, rgba(' + primClrCRGBNumbersOnly + ',1) 100%)',
				'filter': 'progid:DXImageTransform.Microsoft.gradient(startColorstr="#c6c6c6",endColorstr="' + primClrC + '",GradientType=1)'
			});

			$('.gradient-links-bright').css({
				'background': 'rgb(255,255,255)',
				'background': '-webkit-gradient(linear, left top, right top, from(rgba(255,255,255,1)), color-stop(25%, rgba(255,255,255,1)), color-stop(43%, rgba(' + primClrARGBNumbersOnly + ',1)), color-stop(72%, rgba(' + primClrBRGBNumbersOnly + ',1)), to(rgba(' + primClrCRGBNumbersOnly + ',1)))',
				'background': '-o-linear-gradient(left, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(' + primClrARGBNumbersOnly + ',1) 43%, rgba(' + primClrBRGBNumbersOnly + ',1) 72%, rgba(' + primClrCRGBNumbersOnly + ',1) 100%)',
				'background': 'linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(' + primClrARGBNumbersOnly + ',1) 43%, rgba(' + primClrBRGBNumbersOnly + ',1) 72%, rgba(' + primClrCRGBNumbersOnly + ',1) 100%)',
				'filter': 'progid:DXImageTransform.Microsoft.gradient(startColorstr="#ffffff",endColorstr="' + primClrC + '",GradientType=1)'
			});

			$( '.gradient-links, ' +
				'.gradient-links-bright' ).css({
					'display': 'table',
					'-webkit-background-clip': 'text',
					'-webkit-text-fill-color': 'transparent',
					'background-size': '400% 400%',
					'background-position': '0% 100%'
			});

			$( 'a.sk__iconbox-icon-link > span.sk__iconbox-icon > span.sk__iconbox-trail' ).css({
				'background': 'rgb(' + primClrARGBNumbersOnly + ')',
				'background': '-moz-linear-gradient(90deg, rgba(' + primClrARGBNumbersOnly + ',0) 45%, rgba(' + primClrARGBNumbersOnly + ',0.25253851540616246) 62%, rgba(' + primClrBRGBNumbersOnly + ',0.35898109243697474) 85%, rgba(' + primClrCRGBNumbersOnly + ',0.5158438375350141) 99%, rgba(' + primClrDRGBNumbersOnly + ',0.8239670868347339) 100%)',
				'background': '-webkit-linear-gradient(90deg, rgba(' + primClrARGBNumbersOnly + ',0) 45%, rgba(' + primClrARGBNumbersOnly + ',0.25253851540616246) 62%, rgba(' + primClrBRGBNumbersOnly + ',0.35898109243697474) 85%, rgba(' + primClrCRGBNumbersOnly + ',0.5158438375350141) 99%, rgba(' + primClrDRGBNumbersOnly + ',0.8239670868347339) 100%)',
				'background': 'linear-gradient(90deg, rgba(' + primClrARGBNumbersOnly + ',0) 45%, rgba(' + primClrARGBNumbersOnly + ',0.25253851540616246) 62%, rgba(' + primClrBRGBNumbersOnly + ',0.35898109243697474) 85%, rgba(' + primClrCRGBNumbersOnly + ',0.5158438375350141) 99%, rgba(' + primClrDRGBNumbersOnly + ',0.8239670868347339) 100%)',
				'filter': 'progid:DXImageTransform.Microsoft.gradient(startColorstr="' + primClrA + '",endColorstr="' + primClrD + '",GradientType=1)'
			});

			var updateCSS = '<style>.btn-gradient-outline:before, ' +
			'span.sk__underliner:before {' +
			'background: rgb(' + primClrARGBNumbersOnly + ');' +
			'background: -o-linear-gradient(left, rgba(' + primClrARGBNumbersOnly + ',1) 0%, rgba(' + primClrBRGBNumbersOnly + ',1) 50%, rgba(' + primClrCRGBNumbersOnly + ',1) 100%);' +
			'background: -webkit-gradient(linear, left top, right top, from(rgba(' + primClrARGBNumbersOnly + ',1)), color-stop(50%, rgba(' + primClrBRGBNumbersOnly + ',1)), to(rgba(' + primClrCRGBNumbersOnly + ',1)));' +
			'background: linear-gradient(90deg, rgba(' + primClrARGBNumbersOnly + ',1) 0%, rgba(' + primClrBRGBNumbersOnly + ',1) 50%, rgba(' + primClrCRGBNumbersOnly + ',1) 100%);' +
			'filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="' + primClrA + '",endColorstr="' + primClrC + '",GradientType=1);' +
			'background-size: 110% !important;' + 
			'background-position-x: 15% !important;}' +
			'.btn-gradient-outline, ' +
			'span.sk__underliner {' +
			'background-size: 110% !important;' + 
			'background-position-x: 15% !important;}' +
			'}</style>';
			$( '.btn-gradient-outline' ).each(function() {
				$( this ).parent().find( 'style' ).detach();
				$( updateCSS ).insertBefore( this );
			});

			colorFixes();

		}
	});


	$('#theme-color-master-b').spectrum({
		type: "component",
		showPalette: "false",
		showInput: "true",
		allowEmpty: "false",
		move: function(color) {
			primClrB = color.toHexString();
			primClrBRGBA = 'rgba(' + Math.floor(color._r) + ', ' + Math.floor(color._g) + ', ' + Math.floor(color._b) + ', ' + color._a + ')';
			primClrBRGBNumbersOnly = Math.floor(color._r) + ', ' + Math.floor(color._g) + ', ' + Math.floor(color._b);
			
			$( '.sk__gradient-back-v1, ' +
				'.sk__gradient-back-v1-hover:hover, ' +
				'.btn:not([class*="btn-"]):before, ' +
				'.btn-gradient:before, ' +
				'.btn-gradient-outline' ).css({
					'background': 'rgb(' + primClrARGBNumbersOnly + ')',
					'background': '-o-linear-gradient(left, rgba(' + primClrARGBNumbersOnly + ',1) 0%, rgba(' + primClrBRGBNumbersOnly + ',1) 50%, rgba(' + primClrCRGBNumbersOnly + ',1) 100%)',
					'background': '-webkit-gradient(linear, left top, right top, from(rgba(' + primClrARGBNumbersOnly + ',1)), color-stop(50%, rgba(' + primClrBRGBNumbersOnly + ',1)), to(rgba(' + primClrCRGBNumbersOnly + ',1)))',
					'background': 'linear-gradient(90deg, rgba(' + primClrARGBNumbersOnly + ',1) 0%, rgba(' + primClrBRGBNumbersOnly + ',1) 50%, rgba(' + primClrCRGBNumbersOnly + ',1) 100%)',
					'filter': 'progid:DXImageTransform.Microsoft.gradient(startColorstr="' + primClrA + '",endColorstr="' + primClrC + '",GradientType=1)'
			});

			$( 'span.sk__iconbox-icon-dash' ).css({
				'background': 'rgb(' + primClrARGBNumbersOnly + ')',
				'background': '-webkit-gradient(linear,left top, left bottom,from(#000),to(#000)) padding-box, -webkit-gradient(linear, left top, right top, from(rgba(' + primClrARGBNumbersOnly + ',1)), color-stop(50%, rgba(' + primClrBRGBNumbersOnly + ',1)), to(rgba(' + primClrCRGBNumbersOnly + ',1))) border-box',
				'background': '-o-linear-gradient(#000,#000) padding-box, -o-linear-gradient(left, rgba(' + primClrARGBNumbersOnly + ',1) 0%, rgba(' + primClrBRGBNumbersOnly + ',1) 50%, rgba(' + primClrCRGBNumbersOnly + ',1) 100%) border-box',
				'background': 'linear-gradient(#000,#000) padding-box, linear-gradient(90deg, rgba(' + primClrARGBNumbersOnly + ',1) 0%, rgba(' + primClrBRGBNumbersOnly + ',1) 50%, rgba(' + primClrCRGBNumbersOnly + ',1) 100%) border-box'
			});
			
			$( '.sk__clipped-text, ' +
				'.sk__clipped-text-hover:hover' ).css({
					'-webkit-background-clip': 'text',
					'-webkit-text-fill-color': 'transparent'
			});

			// marker 1
			$( '.sk__gradient-fancy-text' ).css({
				'background': 'rgb(' + primClrARGBNumbersOnly + ')',
				'background': '-webkit-gradient(linear, left top, right top, from(rgba(' + primClrARGBNumbersOnly + ',1)), color-stop(52%, rgba(' + primClrBRGBNumbersOnly + ',1)), to(rgba(' + primClrCRGBNumbersOnly + ',1)))',
				'background': '-o-linear-gradient(left, rgba(' + primClrARGBNumbersOnly + ',1) 0%, rgba(' + primClrBRGBNumbersOnly + ',1) 52%, rgba(' + primClrCRGBNumbersOnly + ',1) 100%)',
				'background': 'linear-gradient(90deg, rgba(' + primClrARGBNumbersOnly + ',1) 0%, rgba(' + primClrBRGBNumbersOnly + ',1) 52%, rgba(' + primClrCRGBNumbersOnly + ',1) 100%)',
				'filter': 'progid:DXImageTransform.Microsoft.gradient(startColorstr="' + primClrA + '",endColorstr="' + primClrC + '",GradientType=1)',
				'-webkit-background-clip': 'text',
				'color': '#000000',
				'padding': '3px'
			});

			$( '.sk__gradient-fancy-text-back' ).css({
				'position': 'absolute',
				'top': '0',
				'left': '0',
				'width': 'auto',
				'height': '100%',
				'-webkit-transform': 'translate(5px, 5px)',
				'-ms-transform': 'translate(5px, 5px)',
				'transform': 'translate(5px, 5px)',
				'z-index': '-1',
				'background': 'rgb(' + primClrARGBNumbersOnly + ')',
				'background': '-webkit-gradient(linear, left top, right top, from(rgba(' + primClrARGBNumbersOnly + ',0.7035189075630253)), color-stop(52%, rgba(' + primClrBRGBNumbersOnly + ',0.4990371148459384)), to(rgba(' + primClrCRGBNumbersOnly + ',0.4009978991596639)))',
				'background': '-o-linear-gradient(left, rgba(' + primClrARGBNumbersOnly + ',0.7035189075630253) 0%, rgba(' + primClrBRGBNumbersOnly + ',0.4990371148459384) 52%, rgba(' + primClrCRGBNumbersOnly + ',0.4009978991596639) 100%)',
				'background': 'linear-gradient(90deg, rgba(' + primClrARGBNumbersOnly + ',0.7035189075630253) 0%, rgba(' + primClrBRGBNumbersOnly + ',0.4990371148459384) 52%, rgba(' + primClrCRGBNumbersOnly + ',0.4009978991596639) 100%)',
				'filter': 'progid:DXImageTransform.Microsoft.gradient(startColorstr="' + primClrA + '",endColorstr="' + primClrC + '",GradientType=1)',
				'-webkit-background-clip': 'text',
				'color': '#000000',
				'padding': '3px'
			});

			$('.sk__gradient-background-tint').css({
				'background': 'rgb(' + primClrARGBNumbersOnly + ')',
				'background': '-o-linear-gradient(315deg, rgba(' + primClrARGBNumbersOnly + ',0.12290266106442575) 0%, rgba(' + primClrBRGBNumbersOnly + ',0.07007352941176472) 11%, rgba(' + primClrCRGBNumbersOnly + ',0) 20%)',
				'background': 'linear-gradient(135deg, rgba(' + primClrARGBNumbersOnly + ',0.12290266106442575) 0%, rgba(' + primClrBRGBNumbersOnly + ',0.07007352941176472) 11%, rgba(' + primClrCRGBNumbersOnly + ',0) 20%)',
				'filter': 'progid:DXImageTransform.Microsoft.gradient(startColorstr="' + primClrA + '",endColorstr="' + primClrC + '",GradientType=1)'
			});

			$('.sk__subtle-divider').css({
				'background': 'rgb(' + primClrARGBNumbersOnly + ')',
				'background': '-webkit-gradient(linear, left top, right top, from(rgba(' + primClrARGBNumbersOnly + ',0.3169642857142857)), color-stop(52%, rgba(' + primClrBRGBNumbersOnly + ',0.20772058823529416)), to(rgba(' + primClrCRGBNumbersOnly + ',0.14)))',
				'background': '-o-linear-gradient(left, rgba(' + primClrARGBNumbersOnly + ',0.3169642857142857) 0%, rgba(' + primClrBRGBNumbersOnly + ',0.20772058823529416) 52%, rgba(' + primClrCRGBNumbersOnly + ',0.14) 100%)',
				'background': 'linear-gradient(90deg, rgba(' + primClrARGBNumbersOnly + ',0.3169642857142857) 0%, rgba(' + primClrBRGBNumbersOnly + ',0.20772058823529416) 52%, rgba(' + primClrCRGBNumbersOnly + ',0.14) 100%)',
				'filter': 'progid:DXImageTransform.Microsoft.gradient(startColorstr="' + primClrA + '",endColorstr="' + primClrC + '",GradientType=1)'
			});

			$('.gradient-links').css({
				'background': 'rgb(198,198,198)',
				'background': '-webkit-gradient(linear, left top, right top, from(rgba(198,198,198,1)), color-stop(25%, rgba(198,198,198,1)), color-stop(43%, rgba(' + primClrARGBNumbersOnly + ',1)), color-stop(72%, rgba(' + primClrBRGBNumbersOnly + ',1)), to(rgba(' + primClrCRGBNumbersOnly + ',1)))',
				'background': '-o-linear-gradient(left, rgba(198,198,198,1) 0%, rgba(198,198,198,1) 25%, rgba(' + primClrARGBNumbersOnly + ',1) 43%, rgba(' + primClrBRGBNumbersOnly + ',1) 72%, rgba(' + primClrCRGBNumbersOnly + ',1) 100%)',
				'background': 'linear-gradient(90deg, rgba(198,198,198,1) 0%, rgba(198,198,198,1) 25%, rgba(' + primClrARGBNumbersOnly + ',1) 43%, rgba(' + primClrBRGBNumbersOnly + ',1) 72%, rgba(' + primClrCRGBNumbersOnly + ',1) 100%)',
				'filter': 'progid:DXImageTransform.Microsoft.gradient(startColorstr="#c6c6c6",endColorstr="' + primClrC + '",GradientType=1)'
			});

			$('.gradient-links-bright').css({
				'background': 'rgb(255,255,255)',
				'background': '-webkit-gradient(linear, left top, right top, from(rgba(255,255,255,1)), color-stop(25%, rgba(255,255,255,1)), color-stop(43%, rgba(' + primClrARGBNumbersOnly + ',1)), color-stop(72%, rgba(' + primClrBRGBNumbersOnly + ',1)), to(rgba(' + primClrCRGBNumbersOnly + ',1)))',
				'background': '-o-linear-gradient(left, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(' + primClrARGBNumbersOnly + ',1) 43%, rgba(' + primClrBRGBNumbersOnly + ',1) 72%, rgba(' + primClrCRGBNumbersOnly + ',1) 100%)',
				'background': 'linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(' + primClrARGBNumbersOnly + ',1) 43%, rgba(' + primClrBRGBNumbersOnly + ',1) 72%, rgba(' + primClrCRGBNumbersOnly + ',1) 100%)',
				'filter': 'progid:DXImageTransform.Microsoft.gradient(startColorstr="#ffffff",endColorstr="' + primClrC + '",GradientType=1)'
			});

			$('.gradient-links, ' +
				'.gradient-links-bright').css({
					'display': 'table',
					'-webkit-background-clip': 'text',
					'-webkit-text-fill-color': 'transparent',
					'background-size': '400% 400%',
					'background-position': '0% 100%'
			});

			$('a.sk__iconbox-icon-link > span.sk__iconbox-icon > span.sk__iconbox-trail').css({
				'background': 'rgb(' + primClrARGBNumbersOnly + ')',
				'background': '-moz-linear-gradient(90deg, rgba(' + primClrARGBNumbersOnly + ',0) 45%, rgba(' + primClrARGBNumbersOnly + ',0.25253851540616246) 62%, rgba(' + primClrBRGBNumbersOnly + ',0.35898109243697474) 85%, rgba(' + primClrCRGBNumbersOnly + ',0.5158438375350141) 99%, rgba(' + primClrDRGBNumbersOnly + ',0.8239670868347339) 100%)',
				'background': '-webkit-linear-gradient(90deg, rgba(' + primClrARGBNumbersOnly + ',0) 45%, rgba(' + primClrARGBNumbersOnly + ',0.25253851540616246) 62%, rgba(' + primClrBRGBNumbersOnly + ',0.35898109243697474) 85%, rgba(' + primClrCRGBNumbersOnly + ',0.5158438375350141) 99%, rgba(' + primClrDRGBNumbersOnly + ',0.8239670868347339) 100%)',
				'background': 'linear-gradient(90deg, rgba(' + primClrARGBNumbersOnly + ',0) 45%, rgba(' + primClrARGBNumbersOnly + ',0.25253851540616246) 62%, rgba(' + primClrBRGBNumbersOnly + ',0.35898109243697474) 85%, rgba(' + primClrCRGBNumbersOnly + ',0.5158438375350141) 99%, rgba(' + primClrDRGBNumbersOnly + ',0.8239670868347339) 100%)',
				'filter': 'progid:DXImageTransform.Microsoft.gradient(startColorstr="' + primClrA + '",endColorstr="' + primClrD + '",GradientType=1)'
			});

			var updateCSS = '<style>.btn-gradient-outline:before, ' +
			'span.sk__underliner:before {' +
			'background: rgb(' + primClrARGBNumbersOnly + ');' +
			'background: -o-linear-gradient(left, rgba(' + primClrARGBNumbersOnly + ',1) 0%, rgba(' + primClrBRGBNumbersOnly + ',1) 50%, rgba(' + primClrCRGBNumbersOnly + ',1) 100%);' +
			'background: -webkit-gradient(linear, left top, right top, from(rgba(' + primClrARGBNumbersOnly + ',1)), color-stop(50%, rgba(' + primClrBRGBNumbersOnly + ',1)), to(rgba(' + primClrCRGBNumbersOnly + ',1)));' +
			'background: linear-gradient(90deg, rgba(' + primClrARGBNumbersOnly + ',1) 0%, rgba(' + primClrBRGBNumbersOnly + ',1) 50%, rgba(' + primClrCRGBNumbersOnly + ',1) 100%);' +
			'filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="' + primClrA + '",endColorstr="' + primClrC + '",GradientType=1);' +
			'background-size: 110% !important;' + 
			'background-position-x: 15% !important;}' +
			'.btn-gradient-outline, ' +
			'span.sk__underliner {' +
			'background-size: 110% !important;' + 
			'background-position-x: 15% !important;}' +
			'}</style>';
			$( '.btn-gradient-outline' ).each(function() {
				$( this ).parent().find( 'style' ).detach();
				$( updateCSS ).insertBefore( this );
			});

			colorFixes();

		}
	});


	$('#theme-color-master-c').spectrum({
		type: "component",
		showPalette: "false",
		showInput: "true",
		allowEmpty: "false",
		move: function(color) {
			primClrC = color.toHexString();
			primClrCRGBA = 'rgba(' + Math.floor(color._r) + ', ' + Math.floor(color._g) + ', ' + Math.floor(color._b) + ', ' + color._a + ')';
			primClrCRGBNumbersOnly = Math.floor(color._r) + ', ' + Math.floor(color._g) + ', ' + Math.floor(color._b);
			
			$( '.sk__gradient-back-v1, ' +
				'.sk__gradient-back-v1-hover:hover, ' +
				'.btn:not([class*="btn-"]):before, ' +
				'.btn-gradient:before, ' +
				'.btn-gradient-outline ' ).css({
					'background': 'rgb(' + primClrARGBNumbersOnly + ')',
					'background': '-o-linear-gradient(left, rgba(' + primClrARGBNumbersOnly + ',1) 0%, rgba(' + primClrBRGBNumbersOnly + ',1) 50%, rgba(' + primClrCRGBNumbersOnly + ',1) 100%)',
					'background': '-webkit-gradient(linear, left top, right top, from(rgba(' + primClrARGBNumbersOnly + ',1)), color-stop(50%, rgba(' + primClrBRGBNumbersOnly + ',1)), to(rgba(' + primClrCRGBNumbersOnly + ',1)))',
					'background': 'linear-gradient(90deg, rgba(' + primClrARGBNumbersOnly + ',1) 0%, rgba(' + primClrBRGBNumbersOnly + ',1) 50%, rgba(' + primClrCRGBNumbersOnly + ',1) 100%)',
					'filter': 'progid:DXImageTransform.Microsoft.gradient(startColorstr="' + primClrA + '",endColorstr="' + primClrC + '",GradientType=1)'
			});

			$('span.sk__iconbox-icon-dash').css({
				'background': 'rgb(' + primClrARGBNumbersOnly + ')',
				'background': '-webkit-gradient(linear,left top, left bottom,from(#000),to(#000)) padding-box, -webkit-gradient(linear, left top, right top, from(rgba(' + primClrARGBNumbersOnly + ',1)), color-stop(50%, rgba(' + primClrBRGBNumbersOnly + ',1)), to(rgba(' + primClrCRGBNumbersOnly + ',1))) border-box',
				'background': '-o-linear-gradient(#000,#000) padding-box, -o-linear-gradient(left, rgba(' + primClrARGBNumbersOnly + ',1) 0%, rgba(' + primClrBRGBNumbersOnly + ',1) 50%, rgba(' + primClrCRGBNumbersOnly + ',1) 100%) border-box',
				'background': 'linear-gradient(#000,#000) padding-box, linear-gradient(90deg, rgba(' + primClrARGBNumbersOnly + ',1) 0%, rgba(' + primClrBRGBNumbersOnly + ',1) 50%, rgba(' + primClrCRGBNumbersOnly + ',1) 100%) border-box'
			});
			
			$('.sk__clipped-text, ' +
				'.sk__clipped-text-hover:hover').css({
					'-webkit-background-clip': 'text',
					'-webkit-text-fill-color': 'transparent'
			});

			// marker 1
			$( '.sk__gradient-fancy-text' ).css({
				'background': 'rgb(' + primClrARGBNumbersOnly + ')',
				'background': '-webkit-gradient(linear, left top, right top, from(rgba(' + primClrARGBNumbersOnly + ',1)), color-stop(52%, rgba(' + primClrBRGBNumbersOnly + ',1)), to(rgba(' + primClrCRGBNumbersOnly + ',1)))',
				'background': '-o-linear-gradient(left, rgba(' + primClrARGBNumbersOnly + ',1) 0%, rgba(' + primClrBRGBNumbersOnly + ',1) 52%, rgba(' + primClrCRGBNumbersOnly + ',1) 100%)',
				'background': 'linear-gradient(90deg, rgba(' + primClrARGBNumbersOnly + ',1) 0%, rgba(' + primClrBRGBNumbersOnly + ',1) 52%, rgba(' + primClrCRGBNumbersOnly + ',1) 100%)',
				'filter': 'progid:DXImageTransform.Microsoft.gradient(startColorstr="' + primClrA + '",endColorstr="' + primClrC + '",GradientType=1)',
				'-webkit-background-clip': 'text',
				'color': '#000000',
				'padding': '3px'
			});

			$('.sk__gradient-fancy-text-back').css({
				'position': 'absolute',
				'top': '0',
				'left': '0',
				'width': 'auto',
				'height': '100%',
				'-webkit-transform': 'translate(5px, 5px)',
				'-ms-transform': 'translate(5px, 5px)',
				'transform': 'translate(5px, 5px)',
				'z-index': '-1',
				'background': 'rgb(' + primClrARGBNumbersOnly + ')',
				'background': '-webkit-gradient(linear, left top, right top, from(rgba(' + primClrARGBNumbersOnly + ',0.7035189075630253)), color-stop(52%, rgba(' + primClrBRGBNumbersOnly + ',0.4990371148459384)), to(rgba(' + primClrCRGBNumbersOnly + ',0.4009978991596639)))',
				'background': '-o-linear-gradient(left, rgba(' + primClrARGBNumbersOnly + ',0.7035189075630253) 0%, rgba(' + primClrBRGBNumbersOnly + ',0.4990371148459384) 52%, rgba(' + primClrCRGBNumbersOnly + ',0.4009978991596639) 100%)',
				'background': 'linear-gradient(90deg, rgba(' + primClrARGBNumbersOnly + ',0.7035189075630253) 0%, rgba(' + primClrBRGBNumbersOnly + ',0.4990371148459384) 52%, rgba(' + primClrCRGBNumbersOnly + ',0.4009978991596639) 100%)',
				'filter': 'progid:DXImageTransform.Microsoft.gradient(startColorstr="' + primClrA + '",endColorstr="' + primClrC + '",GradientType=1)',
				'-webkit-background-clip': 'text',
				'color': '#000000',
				'padding': '3px'
			});

			$('.sk__gradient-background-tint').css({
				'background': 'rgb(' + primClrARGBNumbersOnly + ')',
				'background': '-o-linear-gradient(315deg, rgba(' + primClrARGBNumbersOnly + ',0.12290266106442575) 0%, rgba(' + primClrBRGBNumbersOnly + ',0.07007352941176472) 11%, rgba(' + primClrCRGBNumbersOnly + ',0) 20%)',
				'background': 'linear-gradient(135deg, rgba(' + primClrARGBNumbersOnly + ',0.12290266106442575) 0%, rgba(' + primClrBRGBNumbersOnly + ',0.07007352941176472) 11%, rgba(' + primClrCRGBNumbersOnly + ',0) 20%)',
				'filter': 'progid:DXImageTransform.Microsoft.gradient(startColorstr="' + primClrA + '",endColorstr="' + primClrC + '",GradientType=1)'
			});

			$('.sk__subtle-divider').css({
				'background': 'rgb(' + primClrARGBNumbersOnly + ')',
				'background': '-webkit-gradient(linear, left top, right top, from(rgba(' + primClrARGBNumbersOnly + ',0.3169642857142857)), color-stop(52%, rgba(' + primClrBRGBNumbersOnly + ',0.20772058823529416)), to(rgba(' + primClrCRGBNumbersOnly + ',0.14)))',
				'background': '-o-linear-gradient(left, rgba(' + primClrARGBNumbersOnly + ',0.3169642857142857) 0%, rgba(' + primClrBRGBNumbersOnly + ',0.20772058823529416) 52%, rgba(' + primClrCRGBNumbersOnly + ',0.14) 100%)',
				'background': 'linear-gradient(90deg, rgba(' + primClrARGBNumbersOnly + ',0.3169642857142857) 0%, rgba(' + primClrBRGBNumbersOnly + ',0.20772058823529416) 52%, rgba(' + primClrCRGBNumbersOnly + ',0.14) 100%)',
				'filter': 'progid:DXImageTransform.Microsoft.gradient(startColorstr="' + primClrA + '",endColorstr="' + primClrC + '",GradientType=1)'
			});

			$('.gradient-links').css({
				'background': 'rgb(198,198,198)',
				'background': '-webkit-gradient(linear, left top, right top, from(rgba(198,198,198,1)), color-stop(25%, rgba(198,198,198,1)), color-stop(43%, rgba(' + primClrARGBNumbersOnly + ',1)), color-stop(72%, rgba(' + primClrBRGBNumbersOnly + ',1)), to(rgba(' + primClrCRGBNumbersOnly + ',1)))',
				'background': '-o-linear-gradient(left, rgba(198,198,198,1) 0%, rgba(198,198,198,1) 25%, rgba(' + primClrARGBNumbersOnly + ',1) 43%, rgba(' + primClrBRGBNumbersOnly + ',1) 72%, rgba(' + primClrCRGBNumbersOnly + ',1) 100%)',
				'background': 'linear-gradient(90deg, rgba(198,198,198,1) 0%, rgba(198,198,198,1) 25%, rgba(' + primClrARGBNumbersOnly + ',1) 43%, rgba(' + primClrBRGBNumbersOnly + ',1) 72%, rgba(' + primClrCRGBNumbersOnly + ',1) 100%)',
				'filter': 'progid:DXImageTransform.Microsoft.gradient(startColorstr="#c6c6c6",endColorstr="' + primClrC + '",GradientType=1)'
			});

			$('.gradient-links-bright').css({
				'background': 'rgb(255,255,255)',
				'background': '-webkit-gradient(linear, left top, right top, from(rgba(255,255,255,1)), color-stop(25%, rgba(255,255,255,1)), color-stop(43%, rgba(' + primClrARGBNumbersOnly + ',1)), color-stop(72%, rgba(' + primClrBRGBNumbersOnly + ',1)), to(rgba(' + primClrCRGBNumbersOnly + ',1)))',
				'background': '-o-linear-gradient(left, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(' + primClrARGBNumbersOnly + ',1) 43%, rgba(' + primClrBRGBNumbersOnly + ',1) 72%, rgba(' + primClrCRGBNumbersOnly + ',1) 100%)',
				'background': 'linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(' + primClrARGBNumbersOnly + ',1) 43%, rgba(' + primClrBRGBNumbersOnly + ',1) 72%, rgba(' + primClrCRGBNumbersOnly + ',1) 100%)',
				'filter': 'progid:DXImageTransform.Microsoft.gradient(startColorstr="#ffffff",endColorstr="' + primClrC + '",GradientType=1)'
			});

			$('.gradient-links, ' +
				'.gradient-links-bright').css({
					'display': 'table',
					'-webkit-background-clip': 'text',
					'-webkit-text-fill-color': 'transparent',
					'background-size': '400% 400%',
					'background-position': '0% 100%'
			});

			$('a.sk__iconbox-icon-link > span.sk__iconbox-icon > span.sk__iconbox-trail').css({
				'background': 'rgb(' + primClrARGBNumbersOnly + ')',
				'background': '-moz-linear-gradient(90deg, rgba(' + primClrARGBNumbersOnly + ',0) 45%, rgba(' + primClrARGBNumbersOnly + ',0.25253851540616246) 62%, rgba(' + primClrBRGBNumbersOnly + ',0.35898109243697474) 85%, rgba(' + primClrCRGBNumbersOnly + ',0.5158438375350141) 99%, rgba(' + primClrDRGBNumbersOnly + ',0.8239670868347339) 100%)',
				'background': '-webkit-linear-gradient(90deg, rgba(' + primClrARGBNumbersOnly + ',0) 45%, rgba(' + primClrARGBNumbersOnly + ',0.25253851540616246) 62%, rgba(' + primClrBRGBNumbersOnly + ',0.35898109243697474) 85%, rgba(' + primClrCRGBNumbersOnly + ',0.5158438375350141) 99%, rgba(' + primClrDRGBNumbersOnly + ',0.8239670868347339) 100%)',
				'background': 'linear-gradient(90deg, rgba(' + primClrARGBNumbersOnly + ',0) 45%, rgba(' + primClrARGBNumbersOnly + ',0.25253851540616246) 62%, rgba(' + primClrBRGBNumbersOnly + ',0.35898109243697474) 85%, rgba(' + primClrCRGBNumbersOnly + ',0.5158438375350141) 99%, rgba(' + primClrDRGBNumbersOnly + ',0.8239670868347339) 100%)',
				'filter': 'progid:DXImageTransform.Microsoft.gradient(startColorstr="' + primClrA + '",endColorstr="' + primClrD + '",GradientType=1)'
			});

			var updateCSS = '<style>.btn-gradient-outline:before, ' +
			'span.sk__underliner:before {' +
			'background: rgb(' + primClrARGBNumbersOnly + ');' +
			'background: -o-linear-gradient(left, rgba(' + primClrARGBNumbersOnly + ',1) 0%, rgba(' + primClrBRGBNumbersOnly + ',1) 50%, rgba(' + primClrCRGBNumbersOnly + ',1) 100%);' +
			'background: -webkit-gradient(linear, left top, right top, from(rgba(' + primClrARGBNumbersOnly + ',1)), color-stop(50%, rgba(' + primClrBRGBNumbersOnly + ',1)), to(rgba(' + primClrCRGBNumbersOnly + ',1)));' +
			'background: linear-gradient(90deg, rgba(' + primClrARGBNumbersOnly + ',1) 0%, rgba(' + primClrBRGBNumbersOnly + ',1) 50%, rgba(' + primClrCRGBNumbersOnly + ',1) 100%);' +
			'filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="' + primClrA + '",endColorstr="' + primClrC + '",GradientType=1);' +
			'background-size: 110% !important;' + 
			'background-position-x: 15% !important;}' +
			'.btn-gradient-outline, ' +
			'span.sk__underliner {' +
			'background-size: 110% !important;' + 
			'background-position-x: 15% !important;}' +
			'}</style>';
			$( '.btn-gradient-outline' ).each(function() {
				$( this ).parent().find( 'style' ).detach();
				$( updateCSS ).insertBefore( this );
			});

			colorFixes();

		}
	});

	

	$('.styler-trigger').click(function() {
		$('.color-styler').toggleClass('expanded');
		$('.styler-trigger-cover').toggleClass('expanded');
	});
	$('.styler-trigger-cover').click(function() {
		$('.color-styler').toggleClass('expanded');
		$('.styler-trigger-cover').toggleClass('expanded');
	});

	// On click, update downloadable code
	$(document).on("click",'#getCSSLauncher',function(){
		$('#stylesForDwnLoad').html('<br>' +
	'/*<br>' + 
	' * Theme Accent/Brand Colors<br>' +
	' */<br>' +
	'.sk__gradient-back-v1, ' +
	'.sk__gradient-back-v1-hover:hover, ' +
	'.btn:not([class*="btn-"]):before, ' +
	'.btn-gradient:before, ' +
	'.btn-gradient-outline, ' +
	'.btn-gradient-outline:before, ' +
	'span.sk__underliner:before {<br>' +
	'&nbsp;&nbsp;&nbsp;&nbsp;background: rgb(' + primClrARGBNumbersOnly + ');<br>' +
	'&nbsp;&nbsp;&nbsp;&nbsp;background: -o-linear-gradient(left, rgba(' + primClrARGBNumbersOnly + ',1) 0%, rgba(' + primClrBRGBNumbersOnly + ',1) 50%, rgba(' + primClrCRGBNumbersOnly + ',1) 100%);<br>' +
	'&nbsp;&nbsp;&nbsp;&nbsp;background: -webkit-gradient(linear, left top, right top, from(rgba(' + primClrARGBNumbersOnly + ',1)), color-stop(50%, rgba(' + primClrBRGBNumbersOnly + ',1)), to(rgba(' + primClrCRGBNumbersOnly + ',1)));<br>' +
	'&nbsp;&nbsp;&nbsp;&nbsp;background: linear-gradient(90deg, rgba(' + primClrARGBNumbersOnly + ',1) 0%, rgba(' + primClrBRGBNumbersOnly + ',1) 50%, rgba(' + primClrCRGBNumbersOnly + ',1) 100%);<br>' +
	'&nbsp;&nbsp;&nbsp;&nbsp;filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="' + primClrA + '",endColorstr="' + primClrC + '",GradientType=1);<br>' +
	'}<br>' +
	'<br>' +
	'span.sk__iconbox-icon-dash {<br>' +
	'&nbsp;&nbsp;&nbsp;&nbsp;background: rgb(' + primClrARGBNumbersOnly + ');<br>' +
	'&nbsp;&nbsp;&nbsp;&nbsp;background: -webkit-gradient(linear,left top, left bottom,from(#000),to(#000)) padding-box, -webkit-gradient(linear, left top, right top, from(rgba(' + primClrARGBNumbersOnly + ',1)), color-stop(50%, rgba(' + primClrBRGBNumbersOnly + ',1)), to(rgba(' + primClrCRGBNumbersOnly + ',1))) border-box;<br>' +
	'&nbsp;&nbsp;&nbsp;&nbsp;background: -o-linear-gradient(#000,#000) padding-box, -o-linear-gradient(left, rgba(' + primClrARGBNumbersOnly + ',1) 0%, rgba(' + primClrBRGBNumbersOnly + ',1) 50%, rgba(' + primClrCRGBNumbersOnly + ',1) 100%) border-box;<br>' +
	'&nbsp;&nbsp;&nbsp;&nbsp;background: linear-gradient(#000,#000) padding-box, linear-gradient(90deg, rgba(' + primClrARGBNumbersOnly + ',1) 0%, rgba(' + primClrBRGBNumbersOnly + ',1) 50%, rgba(' + primClrCRGBNumbersOnly + ',1) 100%) border-box;<br>' +
	'}<br>' +
	'<br>' +	
	'.sk__clipped-text, ' +
	'.sk__clipped-text-hover:hover {<br>' +
	'&nbsp;&nbsp;&nbsp;&nbsp;-webkit-background-clip: text;<br>' +
	'&nbsp;&nbsp;&nbsp;&nbsp;-webkit-text-fill-color: transparent;<br>' +
	'}<br>' +
	'<br>' +
	'.sk__gradient-fancy-text, ' +
	'a.sk__iconbox-icon-link:hover span[class^="icon-"].sk__gradient-fancy-text {<br>' +
	'&nbsp;&nbsp;&nbsp;&nbsp;background: rgb(' + primClrARGBNumbersOnly + ');<br>' +
	'&nbsp;&nbsp;&nbsp;&nbsp;background: -webkit-gradient(linear, left top, right top, from(rgba(' + primClrARGBNumbersOnly + ',1)), color-stop(52%, rgba(' + primClrBRGBNumbersOnly + ',1)), to(rgba(' + primClrCRGBNumbersOnly + ',1)));<br>' +
	'&nbsp;&nbsp;&nbsp;&nbsp;background: -o-linear-gradient(left, rgba(' + primClrARGBNumbersOnly + ',1) 0%, rgba(' + primClrBRGBNumbersOnly + ',1) 52%, rgba(' + primClrCRGBNumbersOnly + ',1) 100%);<br>' +
	'&nbsp;&nbsp;&nbsp;&nbsp;background: linear-gradient(90deg, rgba(' + primClrARGBNumbersOnly + ',1) 0%, rgba(' + primClrBRGBNumbersOnly + ',1) 52%, rgba(' + primClrCRGBNumbersOnly + ',1) 100%);<br>' +
	'&nbsp;&nbsp;&nbsp;&nbsp;filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="' + primClrA + '",endColorstr="' + primClrC + '",GradientType=1);<br>' +
	'&nbsp;&nbsp;&nbsp;&nbsp;-webkit-background-clip: text;<br>' +
	'&nbsp;&nbsp;&nbsp;&nbsp;color: #000000;<br>' +
	'&nbsp;&nbsp;&nbsp;&nbsp;padding: 0.065em;<br>' +
	'}<br>' +
	'<br>' +
	'a.sk__iconbox-icon-link:hover span[class^="icon-"].sk__gradient-fancy-text {<br>' +
	'&nbsp;&nbsp;&nbsp;&nbsp;color: rgba(0,0,0,0.65);<br>' +
	'}<br>' +
	'<br>' +
	'.sk__gradient-fancy-text-back {<br>' +
	'&nbsp;&nbsp;&nbsp;&nbsp;position: absolute;<br>' +
	'&nbsp;&nbsp;&nbsp;&nbsp;top: 0;<br>' +
	'&nbsp;&nbsp;&nbsp;&nbsp;left: 0;<br>' +
	'&nbsp;&nbsp;&nbsp;&nbsp;width: auto;<br>' +
	'&nbsp;&nbsp;&nbsp;&nbsp;height: 100%;<br>' +
	'&nbsp;&nbsp;&nbsp;&nbsp;-webkit-transform: translate(5px, 5px);<br>' +
	'&nbsp;&nbsp;&nbsp;&nbsp;-ms-transform: translate(5px, 5px);<br>' +
	'&nbsp;&nbsp;&nbsp;&nbsp;transform: translate(5px, 5px);<br>' +
	'&nbsp;&nbsp;&nbsp;&nbsp;z-index: -1;<br>' +
	'&nbsp;&nbsp;&nbsp;&nbsp;background: rgb(' + primClrARGBNumbersOnly + ');<br>' +
	'&nbsp;&nbsp;&nbsp;&nbsp;background: -webkit-gradient(linear, left top, right top, from(rgba(' + primClrARGBNumbersOnly + ',0.7035189075630253)), color-stop(52%, rgba(' + primClrBRGBNumbersOnly + ',0.4990371148459384)), to(rgba(' + primClrCRGBNumbersOnly + ',0.4009978991596639)));<br>' +
	'&nbsp;&nbsp;&nbsp;&nbsp;background: -o-linear-gradient(left, rgba(' + primClrARGBNumbersOnly + ',0.7035189075630253) 0%, rgba(' + primClrBRGBNumbersOnly + ',0.4990371148459384) 52%, rgba(' + primClrCRGBNumbersOnly + ',0.4009978991596639) 100%);<br>' +
	'&nbsp;&nbsp;&nbsp;&nbsp;background: linear-gradient(90deg, rgba(' + primClrARGBNumbersOnly + ',0.7035189075630253) 0%, rgba(' + primClrBRGBNumbersOnly + ',0.4990371148459384) 52%, rgba(' + primClrCRGBNumbersOnly + ',0.4009978991596639) 100%);<br>' +
	'&nbsp;&nbsp;&nbsp;&nbsp;filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="' + primClrA + '",endColorstr="' + primClrC + '",GradientType=1);<br>' +
	'&nbsp;&nbsp;&nbsp;&nbsp;-webkit-background-clip: text;<br>' +
	'&nbsp;&nbsp;&nbsp;&nbsp;color: #000000;<br>' +
	'&nbsp;&nbsp;&nbsp;&nbsp;padding: 0.065em;<br>' +
	'}<br>' +
	'<br>' +
	'.sk__gradient-background-tint {<br>' +
	'&nbsp;&nbsp;&nbsp;&nbsp;background: rgb(' + primClrARGBNumbersOnly + ');<br>' +
	'&nbsp;&nbsp;&nbsp;&nbsp;background: -o-linear-gradient(315deg, rgba(' + primClrARGBNumbersOnly + ',0.12290266106442575) 0%, rgba(' + primClrBRGBNumbersOnly + ',0.07007352941176472) 11%, rgba(' + primClrCRGBNumbersOnly + ',0) 20%);<br>' +
	'&nbsp;&nbsp;&nbsp;&nbsp;background: linear-gradient(135deg, rgba(' + primClrARGBNumbersOnly + ',0.12290266106442575) 0%, rgba(' + primClrBRGBNumbersOnly + ',0.07007352941176472) 11%, rgba(' + primClrCRGBNumbersOnly + ',0) 20%);<br>' +
	'&nbsp;&nbsp;&nbsp;&nbsp;filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="' + primClrA + '",endColorstr="' + primClrC + '",GradientType=1);<br>' +
	'}<br>' +
	'<br>' +
	'.sk__subtle-divider {<br>' +
	'&nbsp;&nbsp;&nbsp;&nbsp;background: rgb(' + primClrARGBNumbersOnly + ');<br>' +
	'&nbsp;&nbsp;&nbsp;&nbsp;background: -webkit-gradient(linear, left top, right top, from(rgba(' + primClrARGBNumbersOnly + ',0.3169642857142857)), color-stop(52%, rgba(' + primClrBRGBNumbersOnly + ',0.20772058823529416)), to(rgba(' + primClrCRGBNumbersOnly + ',0.14)));<br>' +
	'&nbsp;&nbsp;&nbsp;&nbsp;background: -o-linear-gradient(left, rgba(' + primClrARGBNumbersOnly + ',0.3169642857142857) 0%, rgba(' + primClrBRGBNumbersOnly + ',0.20772058823529416) 52%, rgba(' + primClrCRGBNumbersOnly + ',0.14) 100%);<br>' +
	'&nbsp;&nbsp;&nbsp;&nbsp;background: linear-gradient(90deg, rgba(' + primClrARGBNumbersOnly + ',0.3169642857142857) 0%, rgba(' + primClrBRGBNumbersOnly + ',0.20772058823529416) 52%, rgba(' + primClrCRGBNumbersOnly + ',0.14) 100%);<br>' +
	'&nbsp;&nbsp;&nbsp;&nbsp;filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="' + primClrA + '",endColorstr="' + primClrC + '",GradientType=1);<br>' +
	'}<br>' +
	'<br>' +
	'.gradient-links {<br>' +
	'&nbsp;&nbsp;&nbsp;&nbsp;background: rgb(198,198,198);<br>' +
	'&nbsp;&nbsp;&nbsp;&nbsp;background: -webkit-gradient(linear, left top, right top, from(rgba(198,198,198,1)), color-stop(25%, rgba(198,198,198,1)), color-stop(43%, rgba(' + primClrARGBNumbersOnly + ',1)), color-stop(72%, rgba(' + primClrBRGBNumbersOnly + ',1)), to(rgba(' + primClrCRGBNumbersOnly + ',1)));<br>' +
	'&nbsp;&nbsp;&nbsp;&nbsp;background: -o-linear-gradient(left, rgba(198,198,198,1) 0%, rgba(198,198,198,1) 25%, rgba(' + primClrARGBNumbersOnly + ',1) 43%, rgba(' + primClrBRGBNumbersOnly + ',1) 72%, rgba(' + primClrCRGBNumbersOnly + ',1) 100%);<br>' +
	'&nbsp;&nbsp;&nbsp;&nbsp;background: linear-gradient(90deg, rgba(198,198,198,1) 0%, rgba(198,198,198,1) 25%, rgba(' + primClrARGBNumbersOnly + ',1) 43%, rgba(' + primClrBRGBNumbersOnly + ',1) 72%, rgba(' + primClrCRGBNumbersOnly + ',1) 100%);<br>' +
	'&nbsp;&nbsp;&nbsp;&nbsp;filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#c6c6c6",endColorstr="' + primClrC + '",GradientType=1);<br>' +
	'}<br>' +
	'<br>' +
	'.gradient-links-bright {<br>' +
	'&nbsp;&nbsp;&nbsp;&nbsp;background: rgb(255,255,255);<br>' +
	'&nbsp;&nbsp;&nbsp;&nbsp;background: -webkit-gradient(linear, left top, right top, from(rgba(255,255,255,1)), color-stop(25%, rgba(255,255,255,1)), color-stop(43%, rgba(' + primClrARGBNumbersOnly + ',1)), color-stop(72%, rgba(' + primClrBRGBNumbersOnly + ',1)), to(rgba(' + primClrCRGBNumbersOnly + ',1)));<br>' +
	'&nbsp;&nbsp;&nbsp;&nbsp;background: -o-linear-gradient(left, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(' + primClrARGBNumbersOnly + ',1) 43%, rgba(' + primClrBRGBNumbersOnly + ',1) 72%, rgba(' + primClrCRGBNumbersOnly + ',1) 100%);<br>' +
	'&nbsp;&nbsp;&nbsp;&nbsp;background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(' + primClrARGBNumbersOnly + ',1) 43%, rgba(' + primClrBRGBNumbersOnly + ',1) 72%, rgba(' + primClrCRGBNumbersOnly + ',1) 100%);<br>' +
	'&nbsp;&nbsp;&nbsp;&nbsp;filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#ffffff",endColorstr="' + primClrC + '",GradientType=1);<br>' +
	'}<br>' +
	'<br>' +
	'.gradient-links, ' +
	'.gradient-links-bright {<br>' +
	'&nbsp;&nbsp;&nbsp;&nbsp;display: table;<br>' +
	'&nbsp;&nbsp;&nbsp;&nbsp;-webkit-background-clip: text;<br>' +
	'&nbsp;&nbsp;&nbsp;&nbsp;-webkit-text-fill-color: transparent;<br>' +
	'&nbsp;&nbsp;&nbsp;&nbsp;background-size: 400% 400%;<br>' +
	'&nbsp;&nbsp;&nbsp;&nbsp;background-position: 0% 100%;<br>' +
	'}<br>' +
	'<br>' +
	'a.sk__iconbox-icon-link > span.sk__iconbox-icon > span.sk__iconbox-trail {<br>' +
	'&nbsp;&nbsp;&nbsp;&nbsp;background: rgb(' + primClrARGBNumbersOnly + ');<br>' +
	'&nbsp;&nbsp;&nbsp;&nbsp;background: -moz-linear-gradient(90deg, rgba(' + primClrARGBNumbersOnly + ',0) 45%, rgba(' + primClrARGBNumbersOnly + ',0.25253851540616246) 62%, rgba(' + primClrBRGBNumbersOnly + ',0.35898109243697474) 85%, rgba(' + primClrCRGBNumbersOnly + ',0.5158438375350141) 99%, rgba(' + primClrDRGBNumbersOnly + ',0.8239670868347339) 100%);<br>' +
	'&nbsp;&nbsp;&nbsp;&nbsp;background: -webkit-linear-gradient(90deg, rgba(' + primClrARGBNumbersOnly + ',0) 45%, rgba(' + primClrARGBNumbersOnly + ',0.25253851540616246) 62%, rgba(' + primClrBRGBNumbersOnly + ',0.35898109243697474) 85%, rgba(' + primClrCRGBNumbersOnly + ',0.5158438375350141) 99%, rgba(' + primClrDRGBNumbersOnly + ',0.8239670868347339) 100%);<br>' +
	'&nbsp;&nbsp;&nbsp;&nbsp;background: linear-gradient(90deg, rgba(' + primClrARGBNumbersOnly + ',0) 45%, rgba(' + primClrARGBNumbersOnly + ',0.25253851540616246) 62%, rgba(' + primClrBRGBNumbersOnly + ',0.35898109243697474) 85%, rgba(' + primClrCRGBNumbersOnly + ',0.5158438375350141) 99%, rgba(' + primClrDRGBNumbersOnly + ',0.8239670868347339) 100%);<br>' +
	'&nbsp;&nbsp;&nbsp;&nbsp;filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="' + primClrA + '",endColorstr="' + primClrD + '",GradientType=1);<br>' +
	'}');
	});

	// Copy text to clipboard
	new ClipboardJS('.copyToClip');

	$(".copyToClip").click(function () {
		$('.unappeared').addClass('appeared');
		$('.appeared').removeClass('unappeared');
		setTimeout(function(){
			$( '.appeared' ).addClass( 'processing-appearance' );
			$( '.processing-appearance' ).removeClass( 'appeared' );
			setTimeout(function(){
				$( '.processing-appearance' ).addClass( 'unappeared' );
				$( '.unappeared' ).removeClass( 'processing-appearance' );
			}, 3000);
		}, 8000);
	});

});