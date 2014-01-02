enyo.kind({
	name: "App",
	kind: enyo.Object,
	db:{},
	constructor: function() { 
    this.getData();
   // enyo.Scroller.touchScrolling = true;
  },
	getData:function(){ 
		var base=this,xhr;
    xhr = new enyo.Ajax({url: "source/js/db.json"});
    xhr.response(function(inRequest, inResponse){
    base.db=inResponse;
    var home=new App.Home();
		home.renderInto(document.body);
		// var mywatch=new App.MyWatch();
		// mywatch.renderInto(document.body);
    });
		xhr.go();
	},
	getIteam:function(id){
		var i,base=this;
		for(i=0; i<base.db.items.length; i++) {
			if(base.db.items[i].id == id){
				return base.db.items[i];
			}
		}
	}
});

