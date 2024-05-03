(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"backgroud_2Temp_atlas_1", frames: [[0,0,948,1506],[950,0,557,677]]}
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



(lib.CachedBmp_44 = function() {
	this.initialize(img.CachedBmp_44);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2523,993);


(lib.CachedBmp_43 = function() {
	this.initialize(img.CachedBmp_43);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3187,292);


(lib.CachedBmp_42 = function() {
	this.initialize(ss["backgroud_2Temp_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_41 = function() {
	this.initialize(ss["backgroud_2Temp_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_40 = function() {
	this.initialize(img.CachedBmp_40);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3209,762);


// stage content:
(lib.backgroud2temp = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7F9C2D").s().p("AlGDVQgJgDgXgNQgVgLgNgEQgGgCg1gHQgkgGgQgQQgIgIgKgTQgLgTgHgHIgCgCIgFAJQgRAagWALQgNAHgUADIgkADQglAEhQAZQhLAWgrADQgZABgUgHQgXgIgHgTQgHgTALgUQAMgTAUgJQAQgHAZgDIAqgCQAsgDAVgRQAKgJAMgVQAOgYAHgIQAQgRAggLQATgHAmgJIAfgJQASgEANgBIAGAAIAQgNQAfgaAVgBQAdAAAWAfIAKATQAGALAFAHQAGAIAUAQQANAMAcAfIABABQADgOAKgIQALgKAbgFQAegFALgHQAMgGARgZQAQgYAOgHQASgKAWAJQAVAIAOASIAPAWQAKANAKAFQAJAFAdABQAbABAoAKIBDARQAuAJA7gBQAjAABHgGQgIgFgPgEQgRgFgHgEQgTgJgSgaQgUgdgLgeQgTg2AOgoQAIgYATgPQAVgQAXABQAjADAhAqIAZAiQAPATAOALQANAJAZAKQAdAMAKAFQAdAQATAdQASAcADAgIESABQgagQgOgKQgVgPgNgRQgOgVgDgYQgDgZAMgUQANgUAagDQAbgDAOATQAFAHAFARQAFARAFAHQAIALARAIIAeANQASAKASASQAKAKAUAXQATAZAJANQANAWAFAVQAFAYgJAWQgJAYgVAJQgTAIgagHIgtgQQg/gYhnAAQiZAAgSgCQg0gGgTgXIgFgIQgLADgPgBQgFAUgQAMQgMAJgSADQgMACgWAAIicABIgzgBQgcgBgWgEIgvgNQgdgIgSgDIgogDQgagCgOgDQgxgLgPghIhVA0IgMAHIAJALQALAOACARQADASgKANQgKAOgUACIgKABQgNAAgOgFg");
	this.shape.setTransform(498.5602,577.7783);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(31));

	// Layer_2
	this.instance = new lib.CachedBmp_40();
	this.instance.setTransform(-42.55,317.25,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(31));

	// MergedLayer_6
	this.instance_1 = new lib.CachedBmp_42();
	this.instance_1.setTransform(366.85,-153.2,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_41();
	this.instance_2.setTransform(380.3,556.45,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).wait(31));

	// Layer_5
	this.instance_3 = new lib.CachedBmp_44();
	this.instance_3.setTransform(112.25,464.9,0.5,0.5);

	this.instance_4 = new lib.CachedBmp_43();
	this.instance_4.setTransform(-1.95,489.85,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3}]}).wait(31));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(725.5,280.8,866.0999999999999,680.5999999999999);
// library properties:
lib.properties = {
	id: '20C39B1CA1CC47488A6DB31B2A9B5AE2',
	width: 1536,
	height: 868,
	fps: 4,
	color: "#FFFFFF",
	opacity: 0.00,
	manifest: [
		{src:"images/CachedBmp_44.png?1710462907218", id:"CachedBmp_44"},
		{src:"images/CachedBmp_43.png?1710462907218", id:"CachedBmp_43"},
		{src:"images/CachedBmp_40.png?1710462907218", id:"CachedBmp_40"},
		{src:"images/backgroud_2Temp_atlas_1.png?1710462907127", id:"backgroud_2Temp_atlas_1"}
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
an.compositions['20C39B1CA1CC47488A6DB31B2A9B5AE2'] = {
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