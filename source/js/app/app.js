enyo.kind({
	name: "App",
	kind: enyo.Object,
	db:{},
	page:"",
	pageItemId:'',
	paddleId:"",
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
	  //var bidding=new App.Bidding();
		//bidding.renderInto(document.body);
    });
		xhr.go();
	},
	getBidHistory:function(lotId){ 
		var data=[];
		for (var i = 0; i < this.db.bids.length; i++) {
			if(this.db.bids[i].lotId==lotId){
				data.push(this.db.bids[i]);
			}
		};
		for (var i = 0; i < data.length; i++) {
			var user=this.getUserByPaddle(data[i].paddleId);
			data[i].location=user.location;
		};
		return data;
	},
	getBidDetails:function(lotId){
		var data={},max=0;
		for (var i = 0; i < this.db.bids.length; i++) {
			if(this.db.bids[i].amount > max){
				max=this.db.bids[i].amount;
			}
		};
		data.curBid=max;
		for (var i = 0; i < this.db.items.length; i++) {
				if(this.db.items[i].id==lotId){
					data.minInc=this.db.items[i].minIncrement;
					data.lotName=this.db.items[i].lotName;
					return data;
				}
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
	},
	goBack:function(){
		switch(this.page){
			case "item":
				var Item=new App.Item({"lotId":this.pageItemId});
  			Item.renderInto(document.body);
			break;
			case "mywatch":
				var mywatch=new App.MyWatch();
				mywatch.renderInto(document.body);
			break;
			default:
				var home=new App.Home();
				home.renderInto(document.body);
				break;
		}
	},
});

