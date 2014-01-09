enyo.kind({
	name: "App",
	kind: enyo.Object,
	db:{},
	page:"",
	pageItemId:'',
	paddleId:0,
	constructor: function() { 
    this.getData();
  },
  //The main db Initilazation function
	getData:function(){ 
		var base=this,xhr;
    xhr = new enyo.Ajax({url: "source/js/db.json"});
    xhr.response(function(inRequest, inResponse){
    	base.db=inResponse;
  		base.init();
    });
		xhr.go();
	},
	//this is a app initilazation
	init:function(){
		if(this.paddleId){
			var home=new App.Home();
	    home.renderInto(document.body);
		}
		else{
			var login=new App.UserLogin();
	  	login.renderInto(document.body);	
		}
	},
	//helper functions for bids
	getBidHistory:function(lotId){ 
		var data=[];
		for (var i = 0; i < this.db.bids.length; i++) {
			if(this.db.bids[i].lotId==lotId){
				this.db.bids[i].place=this.getUserPlaceByPaddle(this.db.bids[i].paddleId);
				data.push(this.db.bids[i]);
			}
		};
		return data;
	},
	getUserPlaceByPaddle:function(paddleId){
		for (var i = 0; i < this.db.users.length; i++) {
			if(this.db.users[i].paddleId == paddleId){
				return this.db.users[i].place;
			}
		};
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
	//helper functions for users
	getUserByPaddle:function(paddleId){ 
		for (var i = 0; i < this.db.users.length; i++) {
			if(this.db.users[i].paddleId == paddleId){
				return this.db.users[i];
			}
		};
	},
	getNotifications:function(){
		var notes=[];
		for (var i = 0; i < this.db.notifications.length; i++) {
			if(this.db.notifications[i].paddleId== this.paddleId){
				notes.push(this.db.notifications[i].msg);
			}
		};
		return notes;
	},
	//helper functions for bids
	getHighBid:function(lotId){
		var max=0;
		for (var i = 0; i < this.db.bids.length; i++) {
			if(this.db.bids[i].lotId==lotId){
				if(this.db.bids[i].amount > max){
					max=this.db.bids[i].amount;
				}
			}
		};
		return max;
	},
	getMyBids:function(){
		var items=[];
		for (var i = 0; i < this.db.bids.length; i++) {
			if(this.db.bids[i].paddleId==this.paddleId){
				items.push({"lotId":this.db.bids[i].lotId});
			}
		};
		for (var i = 0; i < items.length; i++) {
			var item=this.getMyBidPositionAmount(items[i].lotId);
			items[i].position=item.position;
			items[i].amount=item.amount;
			items[i].high=item.high;
			items[i].lotName=this.getItem(items[i].lotId).lotName;
		};
		return items;
	},
	getMyBidPositionAmount:function(lotId){
		var items=[];
		for (var i = 0; i < this.db.bids.length; i++) {
			if(this.db.bids[i].lotId== lotId){
				items.push({
					"amount":this.db.bids[i].amount,
					"paddleId":this.db.bids[i].paddleId
				});
			}
		};
		items.sort(function(a, b) {
		    var amountA = a.amount;
		    var amountB = b.amount;
		    return (amountA < amountB) ? -1 : (amountA > amountB) ? 1 : 0;
		});
		items.reverse();
		for (var i = 0; i < items.length; i++) {
			if(items[i].paddleId== this.paddleId){
				return {"position":i+1,"amount":items[i].amount,"high":items[0].amount};
			}
		};
	},
	//helperfunctions for iteams
	getItem:function(id){
		var i,base=this;
		for(i=0; i<base.db.items.length; i++) {
			if(base.db.items[i].id == id){
				return base.db.items[i];
			}
		}
	},
	//general app helpers
	logIn:function(paddleId,pass){
		if(paddleId==1525)
			return true;
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

