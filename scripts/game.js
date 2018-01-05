var w, h;

if(window.innerHeight > window.innerWidth) {
	w = 240;
	h = 320;
} else {
	w = 320;
	h = 240;
}

window.addEventListener("load", function() {
	var Q = window.Q = Quintus({development: true})
	.include("Scenes, Sprites, 2D, Input, Touch, TMX, UI, Audio")
	.include("playerComponent, beeComponent, gemComponent, enemyComponent")
	.setup({
		scaleToFit: true,
		width: w,
		height: h,
		upsampleWidth:  420,  // Double the pixel density of the 
		upsampleHeight: 320,  // game if the w or h is 420x320
		                    // or smaller (useful for retina phones)
		downsampleWidth: 1024, // Halve the pixel density if resolution
		downsampleHeight: 768 
	}).controls(true).touch();
	
	Q.setImageSmoothing(false);

	Q.input.drawJoypad = function() {
		var joypad = Q.joypad;
		Q.input.drawCircle(joypad.centerX,
		                   joypad.centerY,
		                   joypad.background,
		                   Math.PI * 2.5 * 2.5);

		  Q.input.drawCircle(joypad.x,
		                   joypad.y,
		                   joypad.color,
		                   Math.PI * 1.5 * 1.5);
		
			
	}

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