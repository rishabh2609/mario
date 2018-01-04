Quintus.gemComponent = function(Q) {
	Q.Sprite.extend("Gem", {
		init: function(p) {
			this._super(p, {
				sheet: "bullet",
				
			});
			this.on("hit.sprite", function(col) {
				if(col.obj.isA("Player")) {
					this.destroy();
					col.obj.destroy();
					alert("You won!");
				}
			});
		}
	});
}