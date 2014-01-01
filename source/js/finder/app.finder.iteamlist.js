enyo.kind({
	name: "App.Finder.IteamList",
	kind: enyo.Control,
	published:{
		id:"",
		lotname:"",
		desc:""
	},
	tag: "div", 
	classes:"finder-item",
	components: [
		{tag:'div',name:"id",classes:"id"},
		{tag:'div',classes:"info",components:[
			{tag:'b',name:'lotname',classes:'lotname'},
			{tag:'span',name:'desc',classes:'desc'}
		]}
	],
	create: function() {
    this.inherited(arguments);
    this.idChanged();
    this.lotnameChanged();
    this.descChanged();
  },
  idChanged:function(){
  	this.$.id.setContent(this.id);
  },
  lotnameChanged:function(){
  	this.$.lotname.setContent(this.lotname);
  },
  descChanged:function(){
  	this.$.desc.setContent(this.desc);
  }
});

