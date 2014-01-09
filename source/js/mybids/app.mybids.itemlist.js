enyo.kind({
	name: "App.MyBids.ItemList",
	kind: enyo.Control,
	published:{
		id:"",
		lotname:"",
		position:"",
		amount:"",
		high:""
	},
	tag: "div", 
	classes:"mybids-item",
	components: [
		{tag:"a",name:"idname",href:"",ontap:"itemTap",components:[
			{tag:"span",name:"id"},
			{tag:"span",name:"lotname"}
		]},
		{tag:"span",name:"position",content:"NIL"},
		{tag:"span",name:"amount",content:"NIL"},
		{tag:"span",name:"high",content:"NIL"}
	],
	create: function() {
    this.inherited(arguments);
    this.idChanged();
    this.lotnameChanged();
    this.positionChanged();
    this.amountChanged();
    this.highChanged();
  },
  idChanged:function(){
  	this.$.id.setContent(this.id);
  },
  lotnameChanged:function(){
  	this.$.lotname.setContent(this.lotname);
  },
  positionChanged:function(){
  	this.$.position.setContent(this.position);
  },
  amountChanged:function(){
  	this.$.amount.setContent(this.amount);
  },
  highChanged:function(){
  	this.$.high.setContent(this.high);
  },
  itemTap:function() {
  	var Item=new App.Item({"lotId":this.$.id.getContent().slice(1)});
  	Item.renderInto(document.body);
  }
});

