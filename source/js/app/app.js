enyo.kind({
	name: "App",
	kind: enyo.Object,
	db:{},
	userId:"",
	constructor: function() { 
    this.getData();
   // enyo.Scroller.touchScrolling = true;
  },
  setUserId:function(id){
  	this.userId=id;
  },
  getUserId:function() {
  	return this.userId;
  },
	getData:function(){ 
		var base=this,xhr;
    xhr = new enyo.Ajax({url: "source/js/db.json"});
    xhr.response(function(inRequest, inResponse){
    base.db=inResponse;
    var home=new App.Home();
		home.renderInto(document.body);
		// var finder=new App.Finder();
		// finder.renderInto(document.body);
		 //var history=new App.History();
		 //history.renderInto(document.body);
    });
		xhr.go();
	},
	getBidHistory:function(lotId){ 
		var data=[];
		this.db.bids.forEach(function(item){
			if(item.lotId==lotId){
				data.push(item);
			}
		});
		for (var i = 0; i < data.length; i++) {
			var user=this.getUserByPaddle(data[i].paddleId);
			data[i].location=user.location;
		};
		return data;
	},
	getUserByPaddle:function(paddleId){ 
		for (var i = 0; i < this.db.users.length; i++) {
			if(this.db.users[i].paddleId == paddleId){
				return this.db.users[i];
			}
		};
	},
	getItem:function(id){
		var i,base=this;
		for(i=0; i<base.db.items.length; i++) {
			if(base.db.items[i].id == id){
				return base.db.items[i];
			}
		}
	}
});

