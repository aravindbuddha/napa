enyo.kind({
	name: "App.Nav",
	kind: enyo.Control,
	fit: false,
	components:[
		{tag: "nav", classes:'side-nav',components: [
			{tag:'ul',},
			{tag:'li', classes:'user fi-user', content:"Rayn Marphy"},
			{tag:'li', classes:"item-id fi-label",content:"#1525"},
			{tag:'li', classes:"finder fi-search",content:"Barrel Lot Finder"},
			{tag:'li', classes:"my-bid fi-order",content:"My Bid"},
			{tag:'li', classes:"my-watch fi-drink",content:"My Watch List"},
			{tag:'li', classes:"notification fi-notification",content:"Notifications"},
			{tag:'li', classes:"help fi-help",content:"Help"}
		]},
	]

});
