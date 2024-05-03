(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"pumpkin_atlas_1", frames: [[484,0,238,242],[0,450,851,229],[0,0,482,448]]}
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



(lib.CachedBmp_3 = function() {
	this.initialize(ss["pumpkin_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["pumpkin_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["pumpkin_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.wheel = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_3();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,119,121);


(lib.vines = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// MergedLayer_12
	this.instance = new lib.CachedBmp_2();
	this.instance.setTransform(0,0,0.4691,0.4691);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,399.3,107.5);


(lib.Pumpkin = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// MergedLayer_11
	this.instance = new lib.CachedBmp_1();
	this.instance.setTransform(0,0,0.4691,0.4691);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,226.2,210.2);


(lib.Tween26 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.wheel("synched",0);
	this.instance.setTransform(-100.5,3.75,0.8723,0.8501,0,-174.7737,-172.5095,59.2,60.8);

	this.instance_1 = new lib.wheel("synched",0);
	this.instance_1.setTransform(94.15,-0.05,0.8546,0.854,0,-163.0644,-160.5093,59.3,60.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-156.9,-66.3,313.8,132.8);


(lib.Tween25 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.wheel("synched",0);
	this.instance.setTransform(-96.7,1.6,0.8772,0.8549,0,-136.1094,-133.2281,59.4,60.9);

	this.instance_1 = new lib.wheel("synched",0);
	this.instance_1.setTransform(98.1,-2.25,0.86,0.8583,0,-133.3749,-130.2039,59.3,60.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-168.6,-76.9,337.1,154);


(lib.Tween24 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.vines("synched",0);
	this.instance.setTransform(0,-36.95,1,1.0542,0,0,0,199.7,53.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F28C20").s().p("AAAAKQgBgDAAgFIAAgIIAAgCIACAAIABAIIAAAKg");
	this.shape.setTransform(111.8,92.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-199.7,-93.7,399.29999999999995,187.5);


(lib.Tween23 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.vines("synched",0);
	this.instance.setTransform(0,-37.3,1,1.0657,0,0,0,199.7,53.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F28C20").s().p("AAAAKQgBgDAAgEIAAgJIABgCIABgBIABAJIgBAKg");
	this.shape.setTransform(111.8,93.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-199.7,-94.7,399.29999999999995,189.5);


(lib.Tween22 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.wheel("synched",0);
	this.instance.setTransform(-98.35,2.95,0.8498,0.8537,0,-101.7337,-99.5315,59.4,61);

	this.instance_1 = new lib.wheel("synched",0);
	this.instance_1.setTransform(96.3,-0.75,0.8339,0.8561,0,-106.1409,-103.9076,59.4,60.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-157.7,-63.2,315.29999999999995,126.6);


(lib.Tween21 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.wheel("synched",0);
	this.instance.setTransform(-97,1.5,0.8169,0.8537,0,-90.7558,-88.5261,59.5,60.9);

	this.instance_1 = new lib.wheel("synched",0);
	this.instance_1.setTransform(97.75,-2,0.8016,0.8561,0,-91.0979,-88.8645,59.4,60.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150.2,-50.7,300.29999999999995,101.5);


(lib.Tween20 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.vines("synched",0);
	this.instance.setTransform(0,-36.1,1,1.0314,0,0,0,199.7,53.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F28C20").s().p("AAAAJQgBgCAAgFIAAgIIABgCIABAAIABAIIAAAJg");
	this.shape.setTransform(111.8,90.825);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-199.7,-91.7,399.29999999999995,183.5);


(lib.Tween19 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.vines("synched",0);
	this.instance.setTransform(0,-34.7,1,0.9914,0,0,0,199.7,53.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F28C20").s().p("AAAAJQgBgCAAgFIAAgIIABgCIABAAIABAIIAAAJg");
	this.shape.setTransform(111.8,87.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-199.7,-88.1,399.29999999999995,176.3);


(lib.Tween8 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.wheel("synched",0);
	this.instance.setTransform(-96.9,1.4,0.8407,0.8554,0,-75.324,-74.0078,59.5,60.9);

	this.instance_1 = new lib.wheel("synched",0);
	this.instance_1.setTransform(97.8,-2.3,0.8251,0.8577,0,-75.675,-74.336,59.5,60.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-161.1,-62.5,322.1,125);


(lib.Tween7 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.wheel("synched",0);
	this.instance.setTransform(-96.95,1.7,0.8558,0.8755,0,-40.6951,-41.7116,59.6,60.8);

	this.instance_1 = new lib.wheel("synched",0);
	this.instance_1.setTransform(97.65,-2.1,0.8422,0.8755,0,-44.498,-45.5138,59.6,60.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-169.7,-75.7,339.4,151.3);


(lib.Tween6 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.vines("synched",0);
	this.instance.setTransform(0,-35.85,1,1.0228,0,0,0,199.7,53.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F28C20").s().p("AAAAJQgBgCAAgFIAAgIIAAgCIACAAIABAIIAAAJg");
	this.shape.setTransform(111.8,90.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-199.7,-90.9,399.29999999999995,181.9);


(lib.Tween5 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.vines("synched",0);
	this.instance.setTransform(0,-37.45,1,1.0657,0,0,0,199.7,53.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F28C20").s().p("AAAAKQgBgDAAgFIAAgJIABgBIABgBIABAJIgBAKg");
	this.shape.setTransform(111.8,93.775);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-199.7,-94.7,399.29999999999995,189.5);


(lib.Tween4 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.wheel("synched",0);
	this.instance.setTransform(-96.75,1.75,0.8537,0.8469,-14.9982,0,0,59.6,60.7);

	this.instance_1 = new lib.wheel("synched",0);
	this.instance_1.setTransform(97.8,-1.85,0.8401,0.8469,-14.9982,0,0,59.6,60.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-159.2,-64.3,318.4,128.6);


(lib.Tween3 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.wheel("synched",0);
	this.instance.setTransform(-97.25,1.75,0.8538,0.8234,0,0,0,59.5,60.6);

	this.instance_1 = new lib.wheel("synched",0);
	this.instance_1.setTransform(97.25,-1.7,0.8538,0.8234,0,0,0,59.5,60.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-148,-51.6,296.1,103.1);


(lib.Tween2 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.vines("synched",0);
	this.instance.setTransform(0,-36.15,1,1.0286,0,0,0,199.7,53.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F28C20").s().p("AAAAJQgBgCAAgFIAAgIIABgCIABAAIABAIIgBAJg");
	this.shape.setTransform(111.8,90.475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-199.7,-91.4,399.29999999999995,182.8);


(lib.Tween1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.vines("synched",0);
	this.instance.setTransform(0,-35.2,1,1,0,0,0,199.7,53.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F28C20").s().p("AAAAJQgBgCAAgFIAAgIIABgCIABAAIABAIIgBAJg");
	this.shape.setTransform(111.8,87.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-199.7,-88.8,399.29999999999995,177.6);


// stage content:
(lib.pumpkin = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// vines
	this.instance = new lib.Tween1("synched",0);
	this.instance.setTransform(1753.25,541.2);

	this.instance_1 = new lib.Tween2("synched",0);
	this.instance_1.setTransform(1460.3,555.95);
	this.instance_1._off = true;

	this.instance_2 = new lib.Tween5("synched",0);
	this.instance_2.setTransform(1372,562.5);
	this.instance_2._off = true;

	this.instance_3 = new lib.Tween6("synched",0);
	this.instance_3.setTransform(1327.95,557.7);
	this.instance_3._off = true;

	this.instance_4 = new lib.Tween19("synched",0);
	this.instance_4.setTransform(1275.3,562.15);
	this.instance_4._off = true;

	this.instance_5 = new lib.Tween20("synched",0);
	this.instance_5.setTransform(1220.55,564.7);
	this.instance_5._off = true;

	this.instance_6 = new lib.Tween23("synched",0);
	this.instance_6.setTransform(1174.1,564.3);
	this.instance_6._off = true;

	this.instance_7 = new lib.Tween24("synched",0);
	this.instance_7.setTransform(1122.45,569.8);
	this.instance_7._off = true;

	this.instance_8 = new lib.vines("synched",0);
	this.instance_8.setTransform(1082.65,532.35,1,1,0,0,0,199.7,53.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F28C20").s().p("AAAAJQgBgBAAgFIAAgJIAAgCIACAAIABAIIgBAJg");
	this.shape.setTransform(1194.45,655.45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F28C20").s().p("AAAAJQgBgBAAgGIAAgIIABgCIABAAIABAIIgBAJg");
	this.shape_1.setTransform(684.6,641.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.shape},{t:this.instance_8,p:{x:1082.65,y:532.35}}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.shape_1},{t:this.instance_8,p:{x:132.5,y:538.35}}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},78).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.shape_1},{t:this.instance_8,p:{x:132.5,y:538.35}}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.shape},{t:this.instance_8,p:{x:1082.65,y:532.35}}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},32).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:1517.35,y:548.6},0).to({_off:true},1).wait(8).to({_off:false,x:1042.7,y:565.45},0).to({_off:true,x:982.55,y:567},1).wait(6).to({_off:false,x:610.45,y:568.05},1).to({x:552.55,y:570.3},1).to({_off:true,x:512.9,y:566.5},1).wait(8).to({_off:false,x:61.05,y:575.55},0).to({_off:true,x:-3.95,y:582.95},1).wait(80).to({_off:false,x:61.05,y:575.55},1).to({_off:true},1).wait(7).to({_off:false,x:552.55,y:570.3},1).to({x:610.45,y:568.05},1).to({_off:true,x:643.3,y:567.35},1).wait(6).to({_off:false,x:1042.7,y:565.45},1).to({_off:true},1).wait(10).to({_off:false,x:1517.35,y:548.6},0).wait(1).to({x:1753.25,y:541.2},0).to({x:1783.3,y:517.2},1).to({x:1777.8,y:517.65},1).to({x:1772.3,y:518.05},1).to({startPosition:0},32).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({_off:false},0).to({_off:true,x:1372,y:562.5},1).wait(7).to({_off:false,x:982.55,y:567},1).to({_off:true,x:919.6,y:563.55},1).wait(7).to({_off:false,x:512.9,y:566.5},1).to({_off:true,x:459.35,y:565.7},1).wait(7).to({_off:false,x:-3.95,y:582.95},1).to({_off:true,x:-73.5,y:575.85},1).wait(78).to({_off:false,x:-3.95,y:582.95},1).to({_off:true,x:61.05,y:575.55},1).wait(7).to({_off:false,x:512.9,y:566.5},1).to({_off:true,x:552.55,y:570.3},1).wait(7).to({_off:false,x:982.55,y:567},1).to({_off:true,x:1042.7,y:565.45},1).wait(7).to({_off:false,x:1419.3,y:555.95},1).to({x:1460.3},2).to({_off:true},1).wait(37));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({_off:false},1).to({_off:true,x:1327.95,y:557.7},1).wait(7).to({_off:false,x:919.6,y:563.55},1).to({_off:true,x:871.55,y:565.75},1).wait(7).to({_off:false,x:459.35,y:565.7},1).to({_off:true,x:407,y:567.25},1).wait(7).to({_off:false,x:-73.5,y:575.85},1).to({startPosition:0},78).to({_off:true,x:-3.95,y:582.95},1).wait(7).to({_off:false,x:459.35,y:565.7},1).to({_off:true,x:512.9,y:566.5},1).wait(7).to({_off:false,x:919.6,y:563.55},1).to({_off:true,x:982.55,y:567},1).wait(7).to({_off:false,x:1372,y:562.5},1).to({_off:true,x:1419.3,y:555.95},1).wait(40));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(3).to({_off:false},1).to({_off:true,x:1275.3,y:562.15},1).wait(7).to({_off:false,x:871.55,y:565.75},1).to({_off:true,x:808.3,y:563.25},1).wait(7).to({_off:false,x:407,y:567.25},1).to({_off:true,x:356.65,y:563.85},1).wait(92).to({_off:false,x:407,y:567.25},1).to({_off:true,x:459.35,y:565.7},1).wait(7).to({_off:false,x:871.55,y:565.75},1).to({_off:true,x:919.6,y:563.55},1).wait(7).to({_off:false,x:1327.95,y:557.7},1).to({_off:true,x:1372,y:562.5},1).wait(41));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(4).to({_off:false},1).to({_off:true,x:1220.55,y:564.7},1).wait(7).to({_off:false,x:808.3,y:563.25},1).to({_off:true,x:751.55,y:564.75},1).wait(7).to({_off:false,x:356.65,y:563.85},1).to({_off:true,x:305.95,y:562.1},1).wait(90).to({_off:false,x:356.65,y:563.85},1).to({_off:true,x:407,y:567.25},1).wait(7).to({_off:false,x:808.3,y:563.25},1).to({_off:true,x:871.55,y:565.75},1).wait(7).to({_off:false,x:1275.3,y:562.15},1).to({_off:true,x:1327.95,y:557.7},1).wait(42));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(5).to({_off:false},1).to({_off:true,x:1174.1,y:564.3},1).wait(7).to({_off:false,x:751.55,y:564.75},1).to({_off:true,x:687.2,y:564.4},1).wait(7).to({_off:false,x:305.95,y:562.1},1).to({_off:true,x:255.15,y:570.4},1).wait(88).to({_off:false,x:305.95,y:562.1},1).to({_off:true,x:356.65,y:563.85},1).wait(7).to({_off:false,x:751.55,y:564.75},1).to({_off:true,x:808.3,y:563.25},1).wait(7).to({_off:false,x:1220.55,y:564.7},1).to({_off:true,x:1275.3,y:562.15},1).wait(43));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(6).to({_off:false},1).to({_off:true,x:1122.45,y:569.8},1).wait(7).to({_off:false,x:687.2,y:564.4},1).to({_off:true,x:643.3,y:567.35},1).wait(7).to({_off:false,x:255.15,y:570.4},1).to({_off:true,x:197.35,y:571.55},1).wait(86).to({_off:false,x:255.15,y:570.4},1).to({_off:true,x:305.95,y:562.1},1).wait(7).to({_off:false,x:687.2,y:564.4},1).to({_off:true,x:751.55,y:564.75},1).wait(7).to({_off:false,x:1174.1,y:564.3},1).to({_off:true,x:1220.55,y:564.7},1).wait(44));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(7).to({_off:false},1).to({_off:true},1).wait(7).to({_off:false,x:643.3,y:567.35},1).to({_off:true,x:610.45,y:568.05},1).wait(7).to({_off:false,x:197.35,y:571.55},1).to({_off:true},1).wait(85).to({_off:false},0).to({_off:true,x:255.15,y:570.4},1).wait(7).to({_off:false,x:643.3,y:567.35},1).to({_off:true,x:687.2,y:564.4},1).wait(8).to({_off:false,x:1122.45,y:569.8},0).to({_off:true,x:1174.1,y:564.3},1).wait(45));

	// wheels
	this.instance_9 = new lib.Tween3("synched",0);
	this.instance_9.setTransform(1752.05,542.8);

	this.instance_10 = new lib.Tween4("synched",0);
	this.instance_10.setTransform(1458.65,557.7);
	this.instance_10._off = true;

	this.instance_11 = new lib.Tween7("synched",0);
	this.instance_11.setTransform(1370.55,564.5);
	this.instance_11._off = true;

	this.instance_12 = new lib.Tween8("synched",0);
	this.instance_12.setTransform(1326.4,559.95);
	this.instance_12._off = true;

	this.instance_13 = new lib.Tween21("synched",0);
	this.instance_13.setTransform(1273.85,564.15);
	this.instance_13._off = true;

	this.instance_14 = new lib.Tween22("synched",0);
	this.instance_14.setTransform(1220.55,565.45);
	this.instance_14._off = true;

	this.instance_15 = new lib.Tween25("synched",0);
	this.instance_15.setTransform(1172.35,566.65);
	this.instance_15._off = true;

	this.instance_16 = new lib.Tween26("synched",0);
	this.instance_16.setTransform(1124.6,570);
	this.instance_16._off = true;

	this.instance_17 = new lib.wheel("synched",0);
	this.instance_17.setTransform(984.2,570.9,0.8538,0.8234,0,0,0,59.5,60.6);

	this.instance_18 = new lib.wheel("synched",0);
	this.instance_18.setTransform(1178.7,567.45,0.8538,0.8234,0,0,0,59.5,60.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9}]}).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_18,p:{x:1178.7,y:567.45}},{t:this.instance_17,p:{x:984.2,y:570.9}}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_18,p:{x:228.55,y:573.45}},{t:this.instance_17,p:{x:34.05,y:576.9}}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},78).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_18,p:{x:228.55,y:573.45}},{t:this.instance_17,p:{x:34.05,y:576.9}}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_18,p:{x:1178.7,y:567.45}},{t:this.instance_17,p:{x:984.2,y:570.9}}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},2).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},32).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({x:1515.9,y:550.25},0).to({_off:true},1).wait(8).to({_off:false,x:1041.5,y:567.05},0).to({_off:true,x:980.9,y:568.75},1).wait(6).to({_off:false,x:609.25,y:569.65},1).to({x:551.1,y:571.95},1).to({_off:true,x:511.25,y:568.25},1).wait(8).to({_off:false,x:59.85,y:577.15},0).to({_off:true,x:-5.6,y:584.7},1).wait(80).to({_off:false,x:59.85,y:577.15},1).to({_off:true},1).wait(7).to({_off:false,x:551.1,y:571.95},1).to({x:609.25,y:569.65},1).to({_off:true,x:645.45,y:567.55},1).wait(6).to({_off:false,x:1041.5,y:567.05},1).to({_off:true},1).wait(10).to({_off:false,x:1515.9,y:550.25},0).wait(1).to({x:1752.05,y:542.8},0).to({x:1782.1,y:518.8},1).to({x:1776.6,y:519.25},1).to({x:1771.1,y:519.65},1).to({startPosition:0},32).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(2).to({_off:false},0).to({_off:true,x:1370.55,y:564.5},1).wait(7).to({_off:false,x:980.9,y:568.75},1).to({_off:true,x:918.15,y:565.55},1).wait(7).to({_off:false,x:511.25,y:568.25},1).to({_off:true,x:457.9,y:567.7},1).wait(7).to({_off:false,x:-5.6,y:584.7},1).to({_off:true,x:-74.95,y:577.85},1).wait(78).to({_off:false,x:-5.6,y:584.7},1).to({_off:true,x:59.85,y:577.15},1).wait(7).to({_off:false,x:511.25,y:568.25},1).to({_off:true,x:551.1,y:571.95},1).wait(7).to({_off:false,x:980.9,y:568.75},1).to({_off:true,x:1041.5,y:567.05},1).wait(7).to({_off:false,x:1417.65,y:557.7},1).to({x:1458.65},2).to({_off:true},1).wait(37));
	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(2).to({_off:false},1).to({_off:true,x:1326.4,y:559.95},1).wait(7).to({_off:false,x:918.15,y:565.55},1).to({_off:true,x:870,y:568},1).wait(7).to({_off:false,x:457.9,y:567.7},1).to({_off:true,x:405.45,y:569.5},1).wait(7).to({_off:false,x:-74.95,y:577.85},1).to({startPosition:0},78).to({_off:true,x:-5.6,y:584.7},1).wait(7).to({_off:false,x:457.9,y:567.7},1).to({_off:true,x:511.25,y:568.25},1).wait(7).to({_off:false,x:918.15,y:565.55},1).to({_off:true,x:980.9,y:568.75},1).wait(7).to({_off:false,x:1370.55,y:564.5},1).to({_off:true,x:1417.65,y:557.7},1).wait(40));
	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(3).to({_off:false},1).to({_off:true,x:1273.85,y:564.15},1).wait(7).to({_off:false,x:870,y:568},1).to({_off:true,x:806.85,y:565.25},1).wait(7).to({_off:false,x:405.45,y:569.5},1).to({_off:true,x:355.2,y:565.85},1).wait(92).to({_off:false,x:405.45,y:569.5},1).to({_off:true,x:457.9,y:567.7},1).wait(7).to({_off:false,x:870,y:568},1).to({_off:true,x:918.15,y:565.55},1).wait(7).to({_off:false,x:1326.4,y:559.95},1).to({_off:true,x:1370.55,y:564.5},1).wait(41));
	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(4).to({_off:false},1).to({_off:true,x:1220.55,y:565.45},1).wait(7).to({_off:false,x:806.85,y:565.25},1).to({_off:true,x:751.55,y:565.5},1).wait(7).to({_off:false,x:355.2,y:565.85},1).to({_off:true,x:305.95,y:562.85},1).wait(90).to({_off:false,x:355.2,y:565.85},1).to({_off:true,x:405.45,y:569.5},1).wait(7).to({_off:false,x:806.85,y:565.25},1).to({_off:true,x:870,y:568},1).wait(7).to({_off:false,x:1273.85,y:564.15},1).to({_off:true,x:1326.4,y:559.95},1).wait(42));
	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(5).to({_off:false},1).to({_off:true,x:1172.35,y:566.65},1).wait(7).to({_off:false,x:751.55,y:565.5},1).to({_off:true,x:685.45,y:566.75},1).wait(7).to({_off:false,x:305.95,y:562.85},1).to({_off:true,x:253.4,y:572.75},1).wait(88).to({_off:false,x:305.95,y:562.85},1).to({_off:true,x:355.2,y:565.85},1).wait(7).to({_off:false,x:751.55,y:565.5},1).to({_off:true,x:806.85,y:565.25},1).wait(7).to({_off:false,x:1220.55,y:565.45},1).to({_off:true,x:1273.85,y:564.15},1).wait(43));
	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(6).to({_off:false},1).to({_off:true,x:1124.6,y:570},1).wait(7).to({_off:false,x:685.45,y:566.75},1).to({_off:true,x:645.45,y:567.55},1).wait(7).to({_off:false,x:253.4,y:572.75},1).to({_off:true,x:199.5,y:571.75},1).wait(86).to({_off:false,x:253.4,y:572.75},1).to({_off:true,x:305.95,y:562.85},1).wait(7).to({_off:false,x:685.45,y:566.75},1).to({_off:true,x:751.55,y:565.5},1).wait(7).to({_off:false,x:1172.35,y:566.65},1).to({_off:true,x:1220.55,y:565.45},1).wait(44));
	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(7).to({_off:false},1).to({_off:true,regX:59.5,regY:60.6,scaleX:0.8538,scaleY:0.8234,x:984.2,y:570.9},1).wait(7).to({_off:false,regX:0,regY:0,scaleX:1,scaleY:1,x:645.45,y:567.55},1).to({_off:true,x:609.25,y:569.65},1).wait(7).to({_off:false,x:199.5,y:571.75},1).to({_off:true,regX:59.5,regY:60.6,scaleX:0.8538,scaleY:0.8234,x:34.05,y:576.9},1).wait(85).to({_off:false,regX:0,regY:0,scaleX:1,scaleY:1,x:199.5,y:571.75},0).to({_off:true,x:253.4,y:572.75},1).wait(7).to({_off:false,x:645.45,y:567.55},1).to({_off:true,x:685.45,y:566.75},1).wait(8).to({_off:false,x:1124.6,y:570},0).to({_off:true,x:1172.35,y:566.65},1).wait(45));

	// Pumpkin
	this.instance_19 = new lib.Pumpkin("synched",0);
	this.instance_19.setTransform(1752.25,455.3,1,1,0,0,0,113.1,105);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).to({scaleY:1.0143,x:1516.35,y:471.45},1).to({regY:105.1,scaleY:1.0286,x:1459.3,y:467.6},1).to({regY:105.2,scaleY:1.0657,x:1371,y:471.05},1).to({scaleY:1.0228,x:1326.95,y:469.95},1).to({scaleY:0.9914,x:1274.3,y:477.05},1).to({regY:105.3,scaleY:1.0314,x:1219.55,y:476.25},1).to({scaleY:1.0657,x:1173.1,y:472.9},1).to({regY:105.4,scaleY:1.0542,x:1121.45,y:479.4},1).to({regY:105,scaleY:1,x:1081.65,y:481.65},1).wait(1).to({x:1041.7,y:479.55},0).to({regY:105.1,scaleY:1.0286,x:981.55,y:478.65},1).to({regY:105.2,scaleY:1.0657,x:918.6,y:472.1},1).to({scaleY:1.0228,x:870.55,y:478},1).to({scaleY:0.9914,x:807.3,y:478.15},1).to({regY:105.3,scaleY:1.0314,x:750.55,y:476.3},1).to({scaleY:1.0657,x:686.2,y:473},1).to({regY:105.4,scaleY:1.0542,x:642.3,y:476.95},1).to({regY:105,scaleY:1,x:609.45,y:482.15},1).to({scaleY:1.0143,x:551.55,y:483.15},1).to({regY:105.1,scaleY:1.0286,x:511.9,y:478.15},1).to({regY:105.2,scaleY:1.0657,x:458.35,y:474.25},1).to({scaleY:1.0228,x:406,y:479.5},1).to({scaleY:0.9914,x:355.65,y:478.75},1).to({regY:105.3,scaleY:1.0314,x:304.95,y:473.65},1).to({scaleY:1.0657,x:254.15,y:479},1).to({regY:105.4,scaleY:1.0542,x:196.35,y:481.15},1).to({regY:105,scaleY:1,x:131.5,y:487.65},1).wait(1).to({x:60.05,y:489.65},0).to({regY:105.1,scaleY:1.0286,x:-4.95,y:494.6},1).to({regY:105.2,scaleY:1.0657,x:-74.5,y:484.4},1).to({startPosition:0},78).to({regY:105.1,scaleY:1.0286,x:-4.95,y:494.6},1).to({regY:105,scaleY:1,x:60.05,y:489.65},1).wait(1).to({x:131.5,y:487.65},0).to({regY:105.4,scaleY:1.0542,x:196.35,y:481.15},1).to({regY:105.3,scaleY:1.0657,x:254.15,y:479},1).to({scaleY:1.0314,x:304.95,y:473.65},1).to({regY:105.2,scaleY:0.9914,x:355.65,y:478.75},1).to({scaleY:1.0228,x:406,y:479.5},1).to({scaleY:1.0657,x:458.35,y:474.25},1).to({regY:105.1,scaleY:1.0286,x:511.9,y:478.15},1).to({regY:105,scaleY:1.0143,x:551.55,y:483.15},1).to({scaleY:1,x:609.45,y:482.15},1).to({regY:105.4,scaleY:1.0542,x:642.3,y:476.95},1).to({regY:105.3,scaleY:1.0657,x:686.2,y:473},1).to({scaleY:1.0314,x:750.55,y:476.3},1).to({regY:105.2,scaleY:0.9914,x:807.3,y:478.15},1).to({scaleY:1.0228,x:870.55,y:478},1).to({scaleY:1.0657,x:918.6,y:472.1},1).to({regY:105.1,scaleY:1.0286,x:981.55,y:478.65},1).to({regY:105,scaleY:1,x:1041.7,y:479.55},1).wait(1).to({x:1081.65,y:481.65},0).to({regY:105.4,scaleY:1.0542,x:1121.45,y:479.4},1).to({regY:105.3,scaleY:1.0657,x:1173.1,y:472.9},1).to({scaleY:1.0314,x:1219.55,y:476.25},1).to({regY:105.2,scaleY:0.9914,x:1274.3,y:477.05},1).to({scaleY:1.0228,x:1326.95,y:469.95},1).to({scaleY:1.0657,x:1371,y:471.05},1).to({regY:105.1,scaleY:1.0286,x:1418.3,y:467.6},1).to({regY:105,scaleY:1.0143,x:1449.35,y:471.45},1).to({regY:105.1,scaleY:1.0286,x:1459.3,y:467.6},1).to({regY:105,scaleY:1.0143,x:1516.35,y:471.45},1).to({scaleY:1,x:1752.25,y:455.3},1).to({x:1782.3,y:431.3},1).to({x:1776.8,y:431.75},1).to({x:1771.3,y:432.15},1).to({startPosition:0},32).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(494.8,760.3,1488.1000000000001,-85.89999999999998);
// library properties:
lib.properties = {
	id: '17C1BD90DC0B48789B2886A321DC9CA8',
	width: 1536,
	height: 868,
	fps: 5,
	color: "#FFFFFF",
	opacity: 0.00,
	manifest: [
		{src:"images/pumpkin_atlas_1.png?1707272328160", id:"pumpkin_atlas_1"}
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
an.compositions['17C1BD90DC0B48789B2886A321DC9CA8'] = {
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