window.addEventListener("load", function() {
	var Q = window.Q = Quintus({development: true})
	.include("Scenes, Sprites, 2D, Input, Touch, TMX, UI, Audio")
	.include("playerComponent, beeComponent, gemComponent, enemyComponent")
	.setup({
		scaleToFit: true,
		width: 320,
		height: 240
	}).controls(true).touch();
	
	Q.setImageSmoothing(false);

	Q.input.drawButtons = function() {
		var keypad = Q.input.keypad,
          ctx = Q.ctx;
 
      ctx.save();
      ctx.textAlign = "center"; 
      ctx.textBaseline = "middle";
 
      ctx.restore();
	}

	Q.scene("level1", function(stage) {
		var player;
		Q.stageTMX("level.tmx", stage);
		player = Q("Player").first();
		stage.add("viewport").follow(player, {x: true, y: true})
	});

	Q.loadTMX("level.tmx, sprites.json, sprites.png", function() {
		Q.compileSheets("sprites.png", "sprites.json");
		Q.stageScene("level1");
	})
});