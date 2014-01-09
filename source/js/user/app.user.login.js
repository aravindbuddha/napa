enyo.kind({
	name: "App.UserLogin",
 	kind: enyo.Control,
  layoutKind: "FittableRowsLayout",
	classes:'user login enyo-fit',
	create: function() {
		this.inherited(arguments);
		this.setDate();
  },
	components:[
		{kind: "Panels", fit: true,components: [
			{tag:"div",classes:"outer-wrap",components:[
				{tag:"div",classes:"logo"},
				{tag:"div",classes:"inner-wrap",components:[
					{tag:"time",name:"dateTime",classes:"date-time"},
					{tag:"form",components:[
						{kind: "onyx.InputDecorator", components: [
							{kind: "onyx.Input", name:"paddleId",placeholder: "Paddle No."}
						]},
						{kind: "onyx.InputDecorator", components: [
							{kind: "onyx.Input", name:"pass",type:"password", placeholder: "Enter password"}
						]}
					]}
				]},
				{kind: "onyx.Button", name:"login",classes:"login-btn",content:"Login",ontap:"loginTap"}
			]}
		]}
	],
	setDate:function(){
		var datestring,months = ["January","February","March","April","May","June","July","August","September","October","November","December"],
		days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
		d= new Date();
		datestring=days[d.getDay()]+", "+months[d.getMonth()]+" "+d.getDate()+", "+d.getFullYear();
		this.$.dateTime.setContent(datestring);
	},
	loginTap: function(inSender, inEvent) {
		var isValid,paddleId=this.$.paddleId.getValue(),
		pass=this.$.pass.getValue();
		//login service call
		isValid=app.logIn(paddleId,pass);
		if(isValid){
			app.paddleId=paddleId;
			new App.Nav();
			var home=new App.Home();
	    home.renderInto(document.body);
		}
	}
		
});
