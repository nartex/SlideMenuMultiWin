var Window = require('/Window');
var SlideMenu = require('ti.nartex.slidemenu');

function ChildWindow(parentWindow){
	var window = new Window(parentWindow);
	
	var buttonMenu = Ti.UI.createButton({
		width: Ti.UI.FILL,
		height: Ti.UI.SIZE,
		title: 'Open Menu',
		top: '10dp'
	});
	window.getMainView().add(buttonMenu);
	
	window.getMainView().add(Ti.UI.createLabel({
		width: Ti.UI.SIZE,
		height: Ti.UI.SIZE,
		text: 'Child Window ' + (new Date()).getTime(),
		color: 'black'
	}));
	
	var buttonWindow = Ti.UI.createButton({
		width: Ti.UI.FILL,
		height: Ti.UI.SIZE,
		title: 'Open Window',
		bottom: '10dp'
	});
	window.getMainView().add(buttonWindow);
	
	buttonMenu.addEventListener('click', function(){
		if (window.getSlideMenuView().state == SlideMenu.STATE_DEFAULT){
			window.getSlideMenuView().state = SlideMenu.STATE_LEFT_VISIBLE;
		}else{
			window.getSlideMenuView().state = SlideMenu.STATE_DEFAULT;
		}
	});
	
	buttonWindow.addEventListener('click', function(){
		var childWindow = new ChildWindow(window);
		childWindow.open();
	});
	
	return window;
}

module.exports = ChildWindow;