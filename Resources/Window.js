var SlideMenu = require('ti.nartex.slidemenu');
var Menu = require('/Menu');

function Window(parentWindow){
	var winParams = { backgroundColor: 'white' };
	
	if (parentWindow){
		winParams.navBarHidden = false
	}
	
	this.window = Ti.UI.createWindow(winParams);
	
	this.leftView = Ti.UI.createView({
		width: Ti.UI.FILL,
		height: Ti.UI.FILL
	});
	
	this.mainView = Ti.UI.createView({
		width: Ti.UI.FILL,
		height: Ti.UI.FILL,
		backgroundColor: 'white'
	});
	
	this.slideMenuView = SlideMenu.createSlideMenu({
		centerView: this.mainView,
		leftView: this.leftView,
		menuWidth: '300dp'
	});
	this.window.add(this.slideMenuView);
	
	var that = this;
	function onOpen(){
		Menu.attachView(that.leftView);
	}
	
	function onClose(){
		if (parentWindow){
			Menu.attachView(parentWindow.leftView);
		}
	
		that.window.removeEventListener('open', onOpen);
		that.window.removeEventListener('close', onClose);
	}
	
	this.window.addEventListener('open', onOpen);
	this.window.addEventListener('close', onClose);
}

Window.prototype.getWindow = function(){
	return this.window;
}

Window.prototype.getMainView = function(){
	return this.mainView;
}

Window.prototype.getSlideMenuView = function(){
	return this.slideMenuView;
}

Window.prototype.open = function(){
	this.window.open();
}

Window.prototype.close = function(){
	this.window.close();
}

module.exports = Window;