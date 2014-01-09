enyo.kind({
	name: "App.Notifications",
 	kind: enyo.Control,
 	db:'',
  layoutKind: "FittableRowsLayout",
	classes:'main-wrap notifications enyo-fit enyo-unselectable',
	create: function() {
		this.inherited(arguments);
		this.db=app.getNotifications();
		this.$.list.setCount(this.db.length);
  },
	components:[
		{tag:"div",classes:"toolbar", components: [
			{tag:'a',ontap:"navIconTap",name:"navIcon",href:"#",classes:"nav-back-icon-wrap",components:[
				{tag:'span',classes:"nav-icon-back fi-left-arrow"}
			]},
			{tag:'h1',name:"heading",classes:"heading",content:"Notifications"},
			{tag:'div',classes:"clear"}
		]},
		{kind: "Panels",classes:"scroll-panal", fit: true, draggable: false,  
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
				{name:"itemView",kind:"App.Notifications.ItemList"}
			]}
		]}
	],
	
  setupItem:function(inSender, inEvent){ 
    var i = inEvent.index;
	  this.$.itemView.setContentData(this.db[i]);
	},
	navIconTap: function(inSender, inEvent) {
		app.goBack();
	}
});
