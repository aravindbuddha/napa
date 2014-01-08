enyo.kind({
	name: "App.History",
	kind: enyo.Control,
	lotId:"",
  db:"",
  layoutKind: "FittableRowsLayout",
	classes:'main-wrap history enyo-fit finder enyo-unselectable',
	create: function() { 
		this.inherited(arguments);
		this.db=app.getBidHistory(this.lotId);
		this.$.list.setCount(this.db.length);
  },
	components:[
		{tag:"div",classes:"toolbar", components: [
			{tag:'a',ontap:"navIconTap",name:"navIcon",href:"#",classes:"nav-icon-wrap",components:[
				{tag:'span',classes:"nav-icon-back fi-left-arrow"}
			]},
			{tag:'h1',name:"heading",classes:"heading",content:"Bid History"},
			{tag:'div',classes:"clear"}
		]},
		{kind:App.Nav, name:'side',classes:'side-wrap'},
		{tag:"div",classes:"inner-wrap-side",components:[
			{tag:'div',classes:'headder',components:[
				{tag:'b',classes:"paddle-num",content:"Paddle Number"},
				{tag:'b',classes:"amount",content:"Bid amount"},
				{tag:'b',classes:"time",content:"Date/Time"}
			]}
		]},
		{kind: "Panels",classes:"scroll-panal inner-wrap-side history-list", fit: true, draggable: false,  
		components: [{
				name:"list",
				kind:"List",
				classes: "enyo-fit", 
				strategyKind: "TranslateScrollStrategy",  
				touch:true,
				onSetupItem: "setupItem",
    		count: 5,
    		fixedHeight: true,
    		classes: "enyo-fit",
				components:[
				{name:"itemView",onclick:"itemTap",kind:"App.History.ItemList"}
			]}
		]}
	],
	setupItem:function(inSender, inEvent){ 
	  var i = inEvent.index;
	  var item = this.db[i];
	  console.log(item);
	  this.$.itemView.setContentData(item);
	},

	navIconTap: function(inSender, inEvent) {
		var home=new App.Home();
		home.renderInto(document.body);
	},
	displayItems: function(inRequest, inResponse) { 
		console.log(app.getBidHistory(this.lotId));
		var l = new enyo.Control;
		var main=this.$.main;
		main.destroyClientControls();
		app.getBidHistory(this.lotId).forEach(function(Item){
			l.createComponent({
				kind: App.History.ItemList,
				container: main,
				paddleId:"#"+Item.paddleId+" ",
    		location:Item.location,
				amount:Item.amount,
				time:Item.time
			});
		});
		this.$.main.render();
	},	
});
