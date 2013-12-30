enyo.kind({
	name: "App.UI.IteamShort",
	kind: enyo.Control,
	published:{
		pic:"",
		id:"",
		lotname:"",
		amount:"",
		time:""
	},
	tag: "div", 
	classes:"item",
	components: [
		{tag:'img',name:"pic",classes:"pic",src:"#"},
		{tag:'div',classes:"info",components:[
			{tag:'div',classes:'top',components:[
				{tag:'span',name:'id',classes:'id'},
				{tag:'span',name:'lotname',classes:'lotname'}
			]},
			{tag:'div',classes:'middle',content:"Current Bid:",components:[
				{tag:'span',name:'amount',classes:'amount'},
				{tag:'span',name:'time',classes:'time'}
			]},
			{tag:'div',classes:'bottom',components:[
				{tag:'a',name:'history',classes:'history fi-clock',content:'Bid History'},
				{tag:'a',name:'watchlist',classes:'watchlist fi-eye',content:'Add to my Watchlis'},
				{tag:'a',name:'bid',classes:'bid fi-order',content:'Bid',ontap:'bidTap'},
			]}
		]}
	],
	create: function() {
    this.inherited(arguments);
    this.picChanged();
    this.idChanged();
    this.lotnameChanged();
    this.amountChanged();
    this.timeChanged();
  },
  picChanged:function() {
  	this.$.pic.setAttribute("src", this.pic);
  },
  idChanged:function(){
  	this.$.id.setContent("#"+this.id);
  },
  lotnameChanged:function(){
  	this.$.lotname.setContent(this.lotname);
  },
  amountChanged:function(){
  	this.$.amount.setContent("Current Bid:$"+this.amount);
  },
  timeChanged:function(){
  	this.$.time.setContent(this.time);
  },
  bidTap:function(){
  	alert('hi');
  }
});

