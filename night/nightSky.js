(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"nightSky_atlas_1", frames: [[0,0,320,374],[0,376,296,340]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_1790 = function() {
	this.initialize(ss["nightSky_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1792 = function() {
	this.initialize(ss["nightSky_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1791 = function() {
	this.initialize(img.CachedBmp_1791);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2316,515);


(lib.Bitmap1 = function() {
	this.initialize(img.Bitmap1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2620,1104);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.moon1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_1790();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.moon1, new cjs.Rectangle(0,0,160,187), null);


// stage content:
(lib.RECOVER_nightsky = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// moon
	this.instance = new lib.moon1();
	this.instance.setTransform(814.4,267,0.8376,0.8075,0,0,0,80,93.5);
	this.instance.shadow = new cjs.Shadow("rgba(153,204,255,1)",0,0,80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(102));

	// Layer_14
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFDC2").s().p("EhO/AP9IgMgEQgKgGgBgPQAAgMAJgKQADgEAEAAQAAAAABAAQABAAAAAAQAAAAAAAAQAAAAAAgBQAQgCAGAGQADADAEALIADALQAAAEgDAGQgHANgIABIgCABIgHgCgAhFNOQgNgOAEgQQACgIAGgGQAFgGAIgBIAHgCQAHABAFAEQAFAFACAGIALgGQAAADgDADIgGAFIgBAGQgBARgFAGQgCADgKAFIgJACQgHAAgFgHgEBOyAFkIgGgJIgBgFIgBgOQAAgIACgEQAEgHAFABQABAAABAAQAAAAAAAAQABAAAAAAQAAgBgBAAQAIgCAJAEQAPAGAAAOQAAAEgDAHQgDAIgGAFQgFAFgIABIgCAAQgHAAgDgFgAu0jdQgJgJgBgGQgEgLAMgOQAKgNAKACIAIACQAFACADgCQAAAFACAFIACAIQABAEgCAGIgJARQgFAKgGACIgCAAQgHAAgIgIgEg9ygPTQgGgEgDgFQgDgIAHgNQACgGAEgCQAEgEAFABQAAAAAAgBQAAAAAAAAQAAAAABAAQAAgBABAAQANAAAEAEQAFACADAJQADAGAAADQABAGgGAHQgEADgHAEQgGAEgGAAQgFAAgHgFg");
	this.shape.setTransform(731.15,280.4063);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFDC2").s().p("AecU2IgEgBQgDAAgFgEQgDgCAAgCQgCgCACgGQADgHADgEQADgEAGgCQAFACAMAAQAGACACADQADAFgBAFIgGAHIgHAHIgDACIgEABgEhRxAKKQgCgDAAgFIABgHIgBgNQAAgFADgFQADgFAFgBQAAAAABAAQAAAAAAAAQABAAAAAAQAAgBAAAAIAGAAIAGACIAGAGQAGAJgBAFIgEAHIgCAKQgBAGgEADQgCACgIAAQgKAAgDgFgEBRVAFFQgFgEgCgFQgDgGADgFQADgFABgDIABgHQACgDAGgBIAMgBQAHgBADgEQABAAAAABQAAAAABABQAAAAAAABQAAAAgBABIgBAEQgBADAEAHQAAAEgGAGIgFAIQgEAIgCACQgDACgDAAQgDAAgFgDgEg35gKHIgJAAQgHgJgBgFIgCgJIACgJQADgIAIgCQAJgBAEADIAEAFIAFALIABAIIgCAIQgDAFgEACIgGACIgCgBgAUarbQgGgCgFgGQgEgFAAgDIACgGIADgJQADgFAEgBIAFgBQAEgBAFgHQAFgGAFABIAEACQACACAAAEIACAOIAAAKQgBAFgFAEQgFAEgFAAIAAAEQgEADgEAAIgFgBgEAyjgURIgGgHIgEgGQgDgEACgJQADgHAFgCQAFgCAEACIAEABIAEgBQAEAAADADQADAEABADQACAHgCAFQgDALgNADIgEABQgDAAgCgCg");
	this.shape_1.setTransform(715.42,283.8125);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFDC2").s().p("EhGKAWeIAAgDQAAgEgIgHQACgHAFgFQAEgDADAAIAFAEQAFAEALACQABACgCAEQgCADgGABIgIADQACAIgHAEQgFgDAAgDgAehR4QgEgIABgOIAFgDIAAgCIAQACIAEABIACABQAEAFgBAIIgFANgEBQsANMQgEgKABgWQAAgHADgDQACgDAHgBQAHgCAGABQACAEABAJIADAQQAAALgGAKgAEdHPIgEgCQgHgFgDgFQgEgHAFgFIAEgEQACgCABgGIABgGQACgDADABIAAgDIAWADQAEAMgCAVQAAAHgDADQgCACgHAAgEhREAGoQgEgIABgOIABgIQABgFAIgHQADgEACABIAAgDIAXADQAEAKgBASQAAALgDAGQgJACgJAAQgJAAgIgCgEBAmgGkIAGgIQADgEACgJQADgGAIgEIAAgCIAMADQADAEgBAFIgBAFQgBAIAKAIIgCAFIgKgFQgRAJgQAGQgEgIAFgHgAHA1zIgEgBQgDAAgEgEQgIgJAAgKQAAgHAFgGQAEgGAHgDIAAgCIAMACQADAKAGAIIADAEQABADgCAEIgJAOIgCACIgDABg");
	this.shape_2.setTransform(658.7139,281.975);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFDC2").s().p("EgrJAVWQgPgEgLgJQgIgFgCgGQgFgHAEgHQAEgGAJgCQAHgBAHACQAIABALAEQAEABACACQACACACAFQADAKAAAEQgBAEgFAGQgFAGgEABIgDAAIgEgBgEhRuAFNQgCgBgFgEQgJgNABgJQAAgFADgDQADgDAEABIAAgCIAYACQAGAAACADQAFAEgFAIIgFAJIgGAGQgCAEABAEIgHAAIgIgBgADTEwQgIgCgKgLQgHgHgBgFQAEgGALgFQADgBAEAAQAFAAAGAEQAFAEABADQAGAJgCAKQgBAEgDACIgFABgEAlXgDsQgGgPAHgIIAGgEQAFgEACgFQADgGACgBIAIgEQAHAEACAJQACAFAAAKQAAAHgCAGQgCAGgMALQgJgIgNgDgEBRUgNuQAFgHgEgJQgBgFgHgJQAFgKAJgIQAFgEACgBQAGgBABgCQAIAMAOAMQgJAIgCANIgVALIgHACQAAAAgBgBQgBAAAAAAQgBAAAAAAQgBgBAAAAgAH50rIgFgBQgHgDACgIQABgEAGgGIAFgGQACgEgBgDIAFgDIAAgCIAWACIACAIQAAACgCACIgHAMIgBAFQAAAHgFABIgDABgA8e03QgDgFAAgEQABgHAJgJQAFgFADACIAAgCQARgDAQAHQgCAJgLAMQgGAGgEACQgHAEgPACIgDgJg");
	this.shape_3.setTransform(664.9452,220.9655);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFDC2").s().p("EhS8ATkIgQgHQAAgBgBAAQAAAAAAgBQAAAAgBgBQAAgBAAAAQgCgLACgLIACgEIAFgCIAEgDIAEgCQAFgBAFAGIAGAJIABAKIAAAKQgBAJgFABIgDABIgFgBgEA4+ATfIgdgCQgEgPADgKQACgGAFgEQAFgFAHABIAAgDIAUADQAMAFAAAKQgBAEgCAEIgFAHIgCAGQgBADgCABQgBABAAAAQgBAAAAAAQgBABAAAAQgBAAgBAAIgDgBgAqrRnIgKgBIgFgBQgFgCgFgFQgFgEgCgFQgBgDABgEIAAgIIAAgGIAEgDQAHgEAQgBIAAgCQACADAHABQAIABAFAFQAGAGgBAHIgEAHQgGANgCACQgDAEgDAAgEBSkADXIgEgBIgCgDQgEgHABgKQAEgNAPgGQAIgDAFACQAGABAFAHIAKAKQAAAFgGAFIgKAIIgEAEIgEABgEhKJgADQgEAAgEgCIgGgEQgHgIAAgFIAFgJIAFgKQADgFADgCQAJgDACgDQAJAFALALQAGAFAAAEQAAAFgGAGIgLAKQgGAFgCABIgCAAIgFgBgADFgQQgDgDAAgMQAAgQACgEIAGgGQADgEABgDIAFAAIAAgCQAVAAAJAHQgCAEAAAIIgBAOQgBAEgIAKIgFAEIgFABIgMAAIgCAAQgEAAgEgCgAoty2QgEgBgEgHIgGgKQgCgEABgCIADgFIAHgKIAEgBIAOgCQAHgBADgBQAHgDACABQADAGgCAHIgGAJIgBAGQAAADgGAJIgEAEIgFACIgGABIgFgBg");
	this.shape_4.setTransform(664.0625,254.1153);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFDC2").s().p("EgkrAWMIgXgCQgGgJAGgJQACgEAFgEIAKgHQADgCAAgCQAFACACgFIAOALIADAEQACAEgBAEQgDAJgEAFQgDAEgFABgAncIOQgHgBgEgFIgCgEIgDgSQgBgHADgDIAFAAIAAgCQATAAAIAGIAIAKQACAEAAAEQgBAFgFAEIgJAGQgEACgEAAIgFgBgEhSZADCIgGgFIgKgLQgDgCAAgDQgBgCACgFQAFgKAPgGQAEgDAEABIAEAEQADACAIADQAGADACAHQACAGgCAGQgEAJgNAGIgKABIgGgBgEBSEAA4QgEgDAAgJIACgcQADgKABgCQACgDADAAIAFgBQABAAAAAAQABAAABAAQAAAAABgBQAAAAAAAAQAMAGAEAHIAGAJIADAIQACAKgMAOIgFAEIgFABIgKAAIgEAAQgEAAgDgCgEBAAAAvIgLgJIgEgDQAAAAAAgBQgBAAAAAAQAAgBgBAAQAAgBAAAAIgBgFQAAgCgEgEQgGgHAAgHQAAgEADgDQAEgCADABIAAgDIAXACIAEABIAFAEQACAEAJAGQAHAGgCAGIgNAIQADAHgHAGQgDADgEAAIgGgCgAvUi9QgHgBgCgCIgGgFQgHgGAAgGQgCgKAMgKQAFgEAAgDQAEABADgDQAPACAGAPQADAHgCAIQgCAIgJAGQgDACgDABgEgwKgJEIgIgBIgJgXIgBgFQAAgDAEgEIAMgMQAFgFAEACIAAgDQACABAIAAQAHABADACQAEADACAHQACAIgBAGQAAAMgGAEQgCACgGACIgIADIgFADIgDABIgEgBgEAuigVXQAAgHgDgIQgCgGAAgBIAEgHIABgGQABgJAJgEIAKgEIAFADIAEAFIABAGQAAAEADAIQACAGAAAJQgBAJgEAEQgDACgGABIgEABQgJAAgIgGg");
	this.shape_5.setTransform(783.7549,272.825);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFDC2").s().p("EBRBAMcQgLgBgHgKIgIgOIgGgNQgBgIAFgIQAFgHAIgCIAAgCIANACQAIAAAEADIAFALIAHAOQABAGgBAIQgBAJgDADQgEAJgKAAIgEAAgEg8fALzIgFgCIgCgFIgBgZIABgHIAEgFQAHgGAEgBQAHAAACgDQAFADAEAIIAFANIADAHIgCAHQgGALgJAEQgEACgGAAIgHgBgAMBhgQgDgBgFgEIgOgOQgDgDAAgCQgBgFAGgGIAJgJIAHgFIAEgBQABAAABAAQAAgBABAAQAAAAABAAQAAgBABAAQAKAIAKAEIAGACQACACABAFQADAJgMASIgDAEIgFAAgEhQ5gE3IgLgCQgHgCgDgDIgCgIQgHgKAAgGQAAgHAKgGQAMgGANgEQAIADAFAIQAFAHAAAJIAPAFQACACgDADQgCADgDABQgJACgCADIgCAEQgEAHgPAAgEAmlgFXQgFgEgBgDIgBgIIAAgOQAAgHABgDQAEgGAFACIAAgCIAVACIAFABQAFACABAFQABAFgCAGIgKAVQgDACgJAEQgDABgBACIgCAEQgCAEgGABQgBgIADgHgEBAugGyIgKgCIgIgGQgIgHgBgEQgDgJALgKQAIgGAIgFIAFgCIAGACQAKAHADADQAGAHgDAIIgIAKQgEAFABAHQgDADgEAAIgGgBgAnnrpIgFgBQgGgDAAgMQgBgRAFgIQACgDADgCIAGgCIAFgCIAFACIAKAGQAGAEACAEQAEAHgCAIQgCAGgGAIQgFAFgDABIgIAAg");
	this.shape_6.setTransform(659.32,286.266);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFDC2").s().p("EA/AAUKQgIgCgFgIQgFgIAAgJQAAgGADgEQADgEAHgEQAFgCADABIAEAEQAEAFAHABIAFgFQgHgBgKgMQABgDADABIAAgDIAXADQAEANgEAIQgCADgGAEQgGAFgCADQgCADgBAIQgBAGgEADQAAAAgBABQAAAAgBAAQgBAAAAAAQgBAAAAAAIgFgBgEg/UARAIgFgJIgFgHQgEgFAAgDQAJgFALAAQAAgJABgDQADgGAGAAIAAgCIAMABQAHAAADADQADAEABAJQAAAQgFAFIgKAHQgGAEgHALQgKgDgEgIgANFHDQgDgIAAgNQAAgJACgEQACgFAEgEIAJgLIAGgFIAFgBQABAAAAAAQABgBABAAQAAAAABAAQAAgBABAAQAJAGACAEQABAEAAAHIAAAZQAAAOgGADQgEACgFAAQgSgBgJgCgEgrMgGGQgIgFgDgHIgBgIQgGgIAAgFQgCgGAFgGQAKgQAQgHQAYAOANAXIgTAYQgHAKgGABIgEABQgGAAgGgFgAaRzZIgFgDQgOgMgJgJQgCgCgBgDQgBgCACgFIADgIQAEgDAEAAIAAgCQAJgCAGAHIACADQAEACADgCIAGgEQAKAFACAKQgEADgDAGIAAALQAAAHgDADIgGABIgHgBg");
	this.shape_7.setTransform(552.0441,212.4562);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFDC2").s().p("AFdZYQgEgBgGgFIgFgGIAAgGIAAgQIAEgFQAFgEAIgEIAIAFQAJgFAEABIADACQADACABAFQACALgHAJQgHAGgCAEQgCAEgCABIgEABIgGABIgCAAgEhGUAVeQgIAAgGgGQgIgGgDgJQgDgJADgJQADgNANgFIAAgCIASACQADAAACABQADACABAGIACAIIAEAGQABAEgCAEIgEAIIgFAMQgEAGgIAAIgCAAgEBKLATpQgEgIACgGIAHgJQACgEABgGIAAgKQADgOAOgDIAAgCQARAAAIACIAFACQAFADACAHIABANQAAAJgEAEIgJAHQgGAMgFACIgHABgAu0KpIgMgJQgFgFAAgEQAAgCADgEIAGgHQAFgEADABIAAgDQANABAFAEQADADAFAKQAEANgFAHQgEAEgIAAQgGAAgHgFgEhTGABPIgIgBQgSgBgGgFQgKgJAEgMIAFgJQADgFABgEQAAgJACgEQACgDAFgBQAEgBADABQAIABAGAIIAIANQAJATgCALQgBAGgCACQgDADgGAAIgEAAgEBTSgB8QgHgDgJgIQgHgIgBgFQgDgIAFgGQAEgEALgEIgFgHIAFgDIAAgCQAIgBAOAKIAIAEQAHAGgEAHIgEAHQgCADAAAJQAAAIgCAEQgFACgFAAIgIgBgEgxFgR4QgGgGABgGIADgFQAIgKAGgEQAGgEAHgCQgBAGAFAKQAGAKAAAFIgCAKQgCAJgIAIQgOgKgJgLgAGP4uQgJAAgDgDQgEgEAAgJQAAgHADgEQAEgFANAAQARgBALgFIAAgDIANADQgMAOgFAIQgFALgFADQgEACgHAAg");
	this.shape_8.setTransform(675.052,246.9333);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFDC2").s().p("EBKMAVPIgTgCQgEgOgLgJQACgIAIgBIAGgBIAFgEQAEgDACACIAAgDQAIgBAHADQAJADABAGQAAADgGAIQgFAGgBAJIgCAGIgCAAIgCAAgEhP2AShIgKgEIgFgDQgCgDAAgEQgBgMABgFQACgKAJgCQAFgCABgBQAJAFAGAKIAFAMIAEAFIADAGQABAHgJADIgFABQgGAAgIgDgAi7NCIAAgQQAAgJADgFIAHgGQAJgHAGAAIAAgCIAKAAQAGgBADACQADACAEAHQAFAMgCAIQgCAEgEAEQgDADgFABIgRAFIgKACQgIAAgFgEgEgzJAAdQgGgCgCgDQgFgFADgHIAEgGQACgDAAgEQABgFACgCQADgEAEACIAAgDQAKAAANABQAIADACADQADAEgFAIQgFAHgNANQgGAFgCAAIgCAAQgEAAgFgCgEAp0gEEQgIAAgCgDIgDgIIAAgbQAFgDAJgBQAHAAATAEQADAJAAAJQgBALgGAGIgDACIgEABgEBPXgLsIgDgFQAAgDACgEIAEgIIAEgKQADgDAHgCIAKgDIAAgCQAFACADgFIAKAIQAFAGAAAGQAAADgCAEQgGAKgNAIQgJAFgHAAQgHgBgGgGgAX70dIgQgBQgHAAgCgDQgCgDgBgGQgBgKADgFIAHgHIAVgOIAQAQQADADAAACIgBAHIgEAMQgBAEgCADQgDACgHAAIgDAAg");
	this.shape_9.setTransform(702.2321,210.725);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFDC2").s().p("EhYhATPIgEgBIgFgEQgIgKADgGQAGgHAAgEIABgGIADgDIAYgLIAPAKQAKAFACAIQAAAFgBAGQgEAOgJADIgKABgAcaOvIgKgCIgFgBIgDgEQgIgPgEgDQADgJAPgOQAFgFAFABIAAgDQANgBAGAEQAEADADAIQABAEgBAFQgCAPgMAOIgGADgEBOhAJnIgFgGQgCgDAAgGQAAgUADgJIAFAAIAAgDQAUAGAKgDQAJAHADAIQAFAKgEAJQgCAGgJAGIgMALQgMgGgJgHgEgsrAIrIgQgBIgEgBQgDgCgCgFIgCgJIgDgGQgBgEAFgNIAHgPQAFgIAJAAIAAgDQAIABAEADQAEADACAEQAFAIAEAMQACAGAAAEQAAAEgEAHQgGAOgHABgAv7C7IgDgCIgCgEIgGgLQgDgHABgFQABgEAGgIQADgDADgCIAFgBQABAAAAAAQABAAABAAQAAgBABAAQAAAAABgBQAKAGAIANIACAHQAAAFgFAFIgHAIQgHAGgGAAIgFgBgAlUm8IgGgHQgDgDgGgBIgLgDQAAAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAIgBgEQgBgFAAgQQAAgGACgEQACgGAGACIAAgDIALABQAHAAADADIAFAIIAEAEQABADAAADIgBAGIgIAMQAHAEABAEQADAHgDAFIgCAAQgDAAgEgDgEhKIgQ3IgKAAQgHgCgEgEQgGgEgBgIQgCgIADgHQACgJAPgOQAGgFADABIAAgCIAcACIAFABQADACACAFIACAHIAEAHQACADABADQABAEgFAHIgKARIgDADIgFABgEhKVgRYQgBACAAADIACADIADAAIAaAAIgVgEIgCgBIgCgFIgCAAQAAAAgBAAQAAAAgBABQAAAAAAAAQAAAAgBABgEBX1gSVQgJgCgDgJQADgDAGgLQAEgJAGgDQAEgCAGgBQAJAAACgBQgBgFADgFQAEgFAFgBIAFAAQAEABADADQAGACACAEQACAGgEAIIgKALIgHAMQgDAHgFADQgEACgKAAQgMAAgGgCg");
	this.shape_10.setTransform(672.7,303.5125);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFDC2").s().p("Akgd1QgMgBgGgFQgHgGAAgLQABgPAMgIQAEgDAEABIAAgDIAXACIAGABQAFADABAMQAAAMgCAFQgCAEgGAGIgIAGIgGABIgHgBgEhIfAPwQAMgUADgXQABgIABgCQAEgHAFADIAAgDQACABAIAAQAHABADACIAFAGIAHAJQACADABAMQAAASgFAHQgFAGgIADQgIAEgHAAQgMgBgQgLgEBNsAPYIgBgHIAAgSQAAgKADgEQADgEAHgDIAOgFQADAEgBAFQgCAFgGADIgLAGIAAAKQgBAHABAEQACAGAFADIgIACQgGAAgCgEgEBnXADHQgCAAgDgCQgKgFgBgGIgBgGQgBgCgFgGQgHgKAFgJQADgFAJgDQALgEADgDQAKACAHAHQAFAFACAFIACAJIAAAHIgCAGQgLAPgIAEIgFABIgBAAgEhnMAC6IgPgDQgLgCgEgDQgIgGABgHIAEgKIAHgPQAGgKAIABIAAgDQADABANAAQALABAEAEQAEAEAEAJIAHAIQADAHgIALQgLAOgKABIgIgCgANnlEQgFgCgEgEQgDgFAAgFQABgDACgDIAJgJIAFgDQADgCAIABIAAgCQAIAAAJACIAEACQAFACgBAFQgBAGgJAJIgCAHQgCAEgCABIgFACIgFAAQgIAAgHgDgAz084QgHgBgDgCQgEgDAAgGQAAgFADgEIAGgLIABgFQABgEAGgFIgMgIIAAgFIACAAIAAgCQARABAMALQALAMgCAMQAAAJgGAHQgEAGgFACQgDACgGAAIgHgBg");
	this.shape_11.setTransform(739.7819,217.525);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFDC2").s().p("EhY4AN9IgOgHQgKgFgDgHQgFgKAHgHIAFgFQAEgDAAgDIAFAAIAAgDIAbACIAHABQAEACAFAGQAEAFAAADQAAACgDAFIgLARQgEAGgFACIgEABQgFAAgEgCgAkgKtQgEgHAEgHQgFgEgCgGQgCgHACgFQACgEAFgFQAFgFAFABIAAgCQAWgCAMAEQAIADABAEQACAEgDAHIgEAHIgGAGIgIAJQgFAHgEACQgEADgGAAQgHAAgIgDgEBY5AJVIgYgBIgFgBQAAAAAAAAQgBgBAAAAQgBAAAAgBQAAgBgBAAQgFgLAEgLQAFgMALgDIAAgCIAgAEQAIACADADQAFAGgEAKIgFAIQgCAHAGAFIgDAFQgGgFgRgBgA3nnNIgPgEIgEgBIgDgGQgDgLACgEQACgDAFgFIAEgHQAEgDADABIAAgCIAKABQAGAAADACQAHADAHALQgDAEgEAJQgEAJgDADQgFADgGAAIgDAAgAC0szQgDgCgCgFIgEgJIgFgIIgDgIQgBgHADgGQAGgLAVgEIAHgCIAGgGIAGgHIAMADIgKAPQAKAHAEANQAEAMgFALQgCAGgJAJQgDAEgEACIgFAAQgRgBgGgGg");
	this.shape_12.setTransform(762.1053,258.0364);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFDC2").s().p("EhcTANuQgNgIAEgUQABgFACgCIAFgEQAKgFALgDIARAJQAFABACAEIAAAHQgCAOgCAEQgDAFgFAEQgEADgDAAIgGAAQgNAAgGgEgEBcEANeQgLgCgEABQgDgIABgKQAAgFgBgCIgEgCQgEgEACgGQAQgOAMgDIAJgEQAPANgCANIgEAKIgFAKIgDAKQgDAEgGAAIgFgBgAnQKeQgLgBgEgEQgHgHAAgNIAAgWIAIgDIAAgCQARgBAIAEIALAGQAEADAJABIANACQACAGgIADQgIABgDADQAEALgDAGQgEAHgNABIgEAAIgLgBgAOXhVQgHgBgQgIQAIgFAGgIIAGgMQAGgIAJgCIAAgCIARACQAEgBACACQADACABAFQAFAOgOAOIgHAFQgGAEgIAAIgJgBgAoFtGIgJgCQgJgEgBgMIAAgUIAIgDIAAgDIAPACQAKACAEAEIAGAJQAEAHADACQgCAIgGAHQgCADgDABg");
	this.shape_13.setTransform(783.1161,258.55);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFDC2").s().p("EhWQAQ0IgGgEQgGgEgCgFIgBgKIAAgVQADgFAFgDIAMgDIAAgCQAFABAFgEQALAIAHAJQADADAAACQABADgCAFIgEAHIgCAJIgEAKIgDAEIgEAAgEBaIAPwIgLgBIgFgBIgFgEIgEgFIgGgFQgBgEAAgEIABgHQACgEAEgDQAKgIAVgGIAAgCQALABAEAFQACADAAAKQAAAKAFALQgKACgGAHQgEAFgEAAgAUVAtIgJgDQgPgEgCgIQgBgFADgGIAFgKIAFgJQAEgEAEABIAAgCIAPACQAGABACACQACABAAAHIAAATQAAAIgBADQgCAHgGABIgCAAIgIgBgAGXloQgIgBgBgBQgGgEABgNIAAgXQAAgHACgDQACgCAIgDIAUgIQARAIAMAOQAFAFABADQACAHgFAIQgEAHgIAHQgJAHgEABgEhaJgPtQgIgDgLgMQgGgGgBgFQgCgJAJgJQAMgIAEgEIAIgIQAFgFAEgBQAGgBAHAFQAJAHACALQACAMgHAJIgHAJIgEAMQgDAFgHACIgFAAQgEAAgDgBg");
	this.shape_14.setTransform(761.9818,321.9909);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFDC2").s().p("AB7ZqQgCgCgBgHIgDgJQgGgIgCgEQAAgGADgGQAJgPAQgFIAAgCQAIABAHAFQAHAFADAIIACAKQABAHACADIAEAIQAAADgCAIQgGAOgJACIgHAAQgTgBgFgJgEhTsAUdQgEgCgEgGQgIgOABgXQAAgFACgEQAEgFAEABIAAgDQASABAHAFQAFADAEAGQAGAIACAHQAGAPgIAHQgDADgGABIgKAEQgGACgEAAIgGgBgEhQpANQQAAgCACgNIABgYQAAgEACgBIADgBIACAAQAEAKgBASQAAAMgDAFgAhfEgIAFgPQgHgEgCgDQgBgCAAgFIAAgLIABgEQABgDAEgCIASgGQAKgDAIABQAJABAGAIQAEAGAAAHQgBAHgEAFQgDADgFAEIgKAFIgPAKQgFADgFAAQgEAAgEgCgEBk9gEpQgRgBgCgMQgBgHgBgDQgBgCgFgGQgEgEABgEQAIgJASgKQAKgFAGACIAHAEIAGgBQABgBABAAQAAAAABAAQABAAAAAAQABAAAAABQAEACgDAGIgEAIIgCAIQgBAGgBACIgIALIgDAJQgBAFgEABIgDABIgEgBgEhlbgGHIAKgXQgIgHgDgJQgDgLAIgGQAEgEALgDIAZgFQABAAAAAAQABAAABgBQAAAAAAgBQAAAAAAgBQALABAEAFQAGAGgFALQgFAMgNAGQADANgPASQgIAJgHAAIgBABQgIAAgJgLgEBRcgIOQgNgBgHgFQgLgFAAgLQgBgCACgEQAAgCAFgDQAJgGACgGIAEgGIAFgCQABAAABgBQAAAAABAAQAAAAABgBQAAAAAAAAQAFAGAHADIAIADQAFAFAAANQgBAQgGAGQgEADgIAAIgFAAgAEO4/QgPgEgDgGQgFgGAEgJQABgHAIgHQAJgKAKgBIAAgCIAKABQAFAAADACIAFAHIAMAWIgEAHIgEAHQgFAJgMAAIgCAAQgGAAgLgDg");
	this.shape_15.setTransform(743.5072,296.55);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFDC2").s().p("AwtbaQgBgDAAgEQgCgIADgIQABgEADgDIAHgCIAHgEQAEgDAEACIAAgDQAOgBALADQAFABACACQACACABAFQADAIAAAGQABASgSAKQgIAGgHgBIgIgBQgFAAgDACQgNgMgDgIgAhOamQgIgHgGgQIgCgGIABgHQAEgHAEAAIAAgCIAfAAQAFACAGAJQAFAHgBAFQAAADgFAEIgNAOQgDADgDACIgEABQgFAAgGgFgEhdBAZ+IgMgEIgEgCQgBgBgBgFIgBgQQAAgNADgFQAGgLAJACIAAgDQAOgBAMACQAKACAEADQADADABAEQAFANgKANQgHAJgPAIQgGAEgDAAIgHgCgEBcyAZEQgEgDgHgIQgIgLABgIQABgGAKgJQAJgIAIgCIAAgCIAWACQADAGAAAOQABAGgCAEQgBADgIALIgEAHQgCADgDACQgDACgEAAQgEAAgFgDgAxaGaQgEgFgBgGQgDgKACgGQADgFAIgHIATgMQAOANAGAKQgEADgBAHIgCALQgEAMgNACIgEABQgJAAgHgIgEAskgAfIgXgBIgEgBIgDgEQgEgHACgJQACgJAGgHQAMgLAUAAIAAgDIAUADQAFAIgEAJQgBAEgHAJIgLAPQgDAEgDAAIgCABIgCgBgEhTHgFHQgKgFgIgJQgFgGAAgGIAEgHIAPgTQAGgGADACIAAgCQAPACAFAGQAFAEACALQACAKgCALQgEAOgLAEIgEAAQgFAAgIgEgAIprDQgIgFgGgGIAGgRQABgDAAgCIgDgGQgEgJAJgJQAHgFAMgDIAAgDQAMAAAGAJQAEAHAAAFQADANgDAGQgCAGgKAHQgMAIgDAEQgCAEgCABIgBAAIgEgCgEBP9gTWQgEgDgCgFQgBgDABgHIAGgRQAEgKAHAAIAAgCQATABAOAOIADAGQABAEgEAHQgLAQgMADIgGABQgIAAgHgFgAkE65IgJgBIgGgCQgDgBgDgDQgIgIgBgFQgBgEACgGQADgIAFgFQAGgGAHAAIAAgDIAbAEQAHACADAKQACAGgBAJQAAAKgDADQgDAGgJACIgEAAIgLAAg");
	this.shape_16.setTransform(742.5667,261.925);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},6).to({state:[{t:this.shape_2}]},6).to({state:[{t:this.shape_3}]},6).to({state:[{t:this.shape_4}]},6).to({state:[{t:this.shape_5}]},6).to({state:[{t:this.shape_6}]},6).to({state:[{t:this.shape_7}]},6).to({state:[{t:this.shape_8}]},6).to({state:[{t:this.shape_9}]},6).to({state:[{t:this.shape_10}]},6).to({state:[{t:this.shape_11}]},6).to({state:[{t:this.shape_12}]},6).to({state:[{t:this.shape_13}]},6).to({state:[{t:this.shape_14}]},6).to({state:[{t:this.shape_15}]},6).to({state:[{t:this.shape_16}]},6).wait(6));

	// MergedLayer_2_copy
	this.instance_1 = new lib.CachedBmp_1792();
	this.instance_1.setTransform(297.95,696.05,0.5,0.5);

	this.instance_2 = new lib.Bitmap1();
	this.instance_2.setTransform(-242,-87);

	this.instance_3 = new lib.CachedBmp_1791();
	this.instance_3.setTransform(115.65,136.55,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(102));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(526,347,1852,670);
// library properties:
lib.properties = {
	id: 'F0DD684866B64B07B8FC8F4ECF6B4A25',
	width: 1536,
	height: 868,
	fps: 24,
	color: "#000000",
	opacity: 1.00,
	manifest: [
		{src:"CachedBmp_1791.png?1709257596721", id:"CachedBmp_1791"},
		{src:"Bitmap1.png?1709257596721", id:"Bitmap1"},
		{src:"nightSky_atlas_1.png?1709257596366", id:"nightSky_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['F0DD684866B64B07B8FC8F4ECF6B4A25'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;