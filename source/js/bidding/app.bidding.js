enyo.kind({
	name: "App.Bidding",
 	kind: enyo.Control,
 	lotId:"302",
 	lotName:"",
  layoutKind: "FittableRowsLayout",
	classes:'main-wrap bidding enyo-fit enyo-unselectable',
	create: function() { 
		this.inherited(arguments);
		this.init();
  },
	components:[
		{kind: "onyx.Toolbar", components: [
			{tag:'a',ontap:"navIconTap",name:"navIcon",href:"#",classes:"nav-back-icon-wrap",components:[
				{tag:'span',classes:"nav-icon-back fi-left-arrow"}
			]},
			{tag:'h1',name:"heading",classes:"heading",content:"Bidding"},
			{tag:'div',classes:"clear"}
		]},
		//{kind:"Panels",name:"mask",classes:"mask",ontap:"hideMak"},
		{kind: "Panels",classes:"scroll-panal inner-wrap", draggable: false,  components: [
			{kind: "onyx.Groupbox", components: [
				{kind:"FittableColumns",classes:"biding-row",components:[
					{tag:"label",content:"Barrel Lot:"},
					{kind:"onyx.Input",fit:true,name:"lotId",disabled: true,value:"#"}
				]},
				{kind:"FittableColumns",classes:"biding-row",components:[
					{tag:"label",content:"Current Bid:"},
					{tag:"span",fit:true,name:"curBid",content:"$5500"}
				]},
				{kind:"FittableColumns",classes:"biding-row",components:[
					{tag:"label",content:"Minium Increement:"},
					{tag:"span",fit:true,name:"minInc",content:"$250"}
				]},
				{kind:"FittableColumns",classes:"biding-row",components:[
					{tag:"label",content:"Your Bid:"},
					{kind:"onyx.Input",fit:true,name:"yourBid"}
				]}
			]}
		]},
		{kind: "onyx.Groupbox", classes:"inner-wrap",components: [
				{kind:"onyx.Button",ontap:"showBidPopup",content:"Bid",name:"bid",classes:"bid-btn"}
		]},
		{kind: "onyx.Popup",name: "bidPopup",classes: "onyx-light bidPopup",  centered: true, modal: true, floating: true, onShow: "popupShown", onHide: "popupHidden", components: [
			{tag: "p",name:"msg",content:""},
			{kind:"FittableColumns",components:[
				{kind: "onyx.Button",classes:"cancel", content: "Cancel", ontap: "closeModalPopup"},
				{kind: "onyx.Button", classes:"confirm", content: "Confirm", ontap: "confirmTap"}
			]}
		]}
	],
	navIconTap: function(inSender, inEvent) {
		app.goBack();
	},
	showBidPopup:function(inSender, inEvent) {
		var bidVal=this.$.yourBid.getValue();
		this.$.msg.setContent("You just bid $"+bidVal+" for the wine from #"+this.lotId+" "+this.lotName);
	//	this.$.mask.applyStyle('display','block');
		this.$.bidPopup.show();
	},
	popupHidden: function() {
		// FIXME: needed to hide ios keyboard
		document.activeElement.blur();
		if(this.$.bidPopup.showing) {   // Refocus input on modal
			this.startJob("focus", function() { 
				this.$.yourBid.focus(); 
			//	this.$.mask.applyStyle('display','block');
			}, 500);
		}
	},
	popupShown: function() {
		this.startJob("focus", function() { 
			this.$.yourBid.focus(); 
		}, 500);
	},
	closeModalPopup: function() {
		this.$.bidPopup.hide();
	//	this.$.mask.applyStyle('display','none');
	},
	init: function() {
		var data=app.getBidDetails(this.lotId); 
		//console.log(data);
		this.lotName=data.lotName;
		this.$.lotId.setValue("#"+this.lotId);
		this.$.curBid.setContent("$"+data.curBid);
		this.$.minInc.setContent("$"+data.minInc)
	}	
});
