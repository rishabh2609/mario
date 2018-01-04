Quintus.playerComponent = function(Q) {
	Q.Sprite.extend("Player", {
		init: function(p) {
			this._super(p, {
				sheet: "player",
				jumpspeed: -350,
				speed: 100
			});
			this.add("2d, platformerControls");
		}
	});
}