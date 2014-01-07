enyo.kind({
	name: "App.Finder.ItemList",
	kind: enyo.Control,
	classes:"finder-item",
	components: [
		{kind:"FittableColumns",components:[
			{tag:'div',name:"id",classes:"id"},
			{tag:'div',classes:"info",components:[
				{tag:'b',name:'lotname',classes:'lotname'},
				{tag:'span',name:'desc',classes:'desc'}
			]}
		]}
	],
	setContentData:function(item){ 
		this.$.id.setContent(item.id);
		this.$.lotname.setContent(item.lotName);
		this.$.desc.setContent(item.desc.substr(0,64)+"...");
	},
  itemTap:function(inSender, inEvent){ 
  console.log(this.$.id.getContent());
   return true; // handled here, don't propagate
   //var item=new App.Item({"lotId":this.$.id.getContent()});
   //item.renderInto(document.body);
  }
});

