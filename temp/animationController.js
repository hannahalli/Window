var canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation;
function init() {
	canvas = document.getElementById("canvas");
	anim_container = document.getElementById("animation_container");
	dom_overlay_container = document.getElementById("dom_overlay_container");
	var comp=AdobeAn.getComposition("28B6D125F7D440639A7D307F01E1C2BC");
	var lib=comp.getLibrary();
	var loader = new createjs.LoadQueue(false);
	loader.addEventListener("fileload", function(evt){handleFileLoad(evt,comp)});
	loader.addEventListener("complete", function(evt){handleComplete(evt,comp)});
	var lib=comp.getLibrary();
	loader.loadManifest(lib.properties.manifest);
}
function handleFileLoad(evt, comp) {
	var images=comp.getImages();	
	if (evt && (evt.item.type == "image")) { images[evt.item.id] = evt.result; }	
}
function handleComplete(evt,comp) {
	//This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
	var lib=comp.getLibrary();
	var ss=comp.getSpriteSheet();
	var queue = evt.target;
	var ssMetadata = lib.ssMetadata;
	for(i=0; i<ssMetadata.length; i++) {
		ss[ssMetadata[i].name] = new createjs.SpriteSheet( {"images": [queue.getResult(ssMetadata[i].name)], "frames": ssMetadata[i].frames} )
	}
	exportRoot = new lib.Untitled5();
	stage = new lib.Stage(canvas);	
;	//Registers the "tick" event listener.
	fnStartAnimation = function() {
		stage.addChild(exportRoot);
		createjs.Ticker.framerate = lib.properties.fps;
		createjs.Ticker.addEventListener("tick", stage);
	}	    
	//Code to support hidpi screens and responsive scaling.
	AdobeAn.makeResponsive(true,'both',true,0,[canvas,anim_container,dom_overlay_container]);	
	AdobeAn.compositionLoaded(lib.properties.id);
	fnStartAnimation();
 

};

let stoppedFrame;
let stoppedExportRoot;
let ExportRoot50;
var stopAnimation, stopAtFrame50, resumeAnimation, exportRoot;

stopAnimation = function() {
	createjs.Ticker.removeEventListener("tick", stage);
	stoppedExportRoot = exportRoot;
};
stopAtFrame50 = function() {
	console.log(exportRoot);
	var checkFrame = function() {
		let currentFrame = exportRoot.timeline.rawPosition;
		if (currentFrame === 500) {
			createjs.Ticker.removeEventListener("tick", stage);
			createjs.Ticker.removeEventListener("tick", checkFrame);
			stoppedFrame = currentFrame;
			stoppedExportRoot = exportRoot;
		} else {
			if (currentFrame === 50) {
				ExportRoot50 = exportRoot;
				createjs.Ticker.removeEventListener("tick", stage);
				createjs.Ticker.removeEventListener("tick", checkFrame);
			}	
			setTimeout(checkFrame, 54); 
			console.log("fuck");// Continue checking every 54 milliseconds
		}
			
	}
	createjs.Ticker.addEventListener("tick", checkFrame);
};

stopAndGOAnimation = function() {
	console.log(ExportRoot50);
	var checkFrame = function() {
		let currentFrame = exportRoot.timeline.rawPosition;
		if (currentFrame === 75) {
			createjs.Ticker.removeEventListener("tick", stage);
			createjs.Ticker.removeEventListener("tick", checkFrame);
			stage.addChild(ExportRoot50);
			createjs.Ticker.framerate = lib.properties.fps;
			createjs.Ticker.addEventListener("tick", stage);
			console.log("hi");
		} else {
			setTimeout(checkFrame, 54); 
		}
			
	}
	createjs.Ticker.addEventListener("tick", checkFrame);
};

resumeAnimation = function() {
	stage.addChild(stoppedExportRoot);
	createjs.Ticker.framerate = 18;
	createjs.Ticker.addEventListener("tick", stage);
}	   