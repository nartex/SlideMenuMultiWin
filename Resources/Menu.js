var view = view = Ti.UI.createView({
	width: Ti.UI.FILL,
	height: Ti.UI.FILL,
	backgroundColor: '#333'
});

view.add(Ti.UI.createTextArea({
	left: '5dp',
	right: '5dp',
	top: '5dp',
	height: '50%',
}));

exports.attachView = function(parentView){
	if (view.getParent()){
		view.getParent().remove(view);
	}
	
	parentView.add(view);
}

exports.getView = function(){
	return view;
}