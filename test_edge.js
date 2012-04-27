/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};


var resources = [
];
var symbols = {
"stage": {
   version: "0.1.5",
   build: "0.9.0.113",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   content: {
         dom: [
         {
            id:'start_obj_btn',
            type:'image',
            rect:[0,0,207,205],
            fill:["rgba(0,0,0,0)",im+"start_obj_btn.png"],
            transform:[[163,16]]
         },
         {
            id:'Rectangle',
            type:'rect',
            rect:[124,261,151,103],
            fill:["rgba(166,95,95,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "height", '400px'],
            ["style", "width", '550px']
         ],
         "${_Rectangle}": [
            ["color", "background-color", 'rgba(96,95,166,1.00)'],
            ["style", "border-bottom-left-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["transform", "translateX", '67.999px'],
            ["style", "border-bottom-right-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-top-left-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-top-right-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["transform", "translateY", '-11.124px']
         ],
         "${_start_obj_btn}": [
            ["transform", "translateY", '16.477px'],
            ["style", "opacity", '1'],
            ["transform", "translateX", '163px'],
            ["transform", "rotateZ", '0']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1997,
         autoPlay: true,
         labels: {
            "Label 1": 0
         },
         timeline: [
            { id: "eid23", tween: [ "style", "${_Rectangle}", "border-bottom-right-radius", [10,10], { valueTemplate: '@@0@@px @@1@@px', fromValue: [10,10]}], position: 0, duration: 0 },
            { id: "eid26", tween: [ "transform", "${_Rectangle}", "translateY", '-11.124px', { fromValue: '-11.124px'}], position: 0, duration: 0 },
            { id: "eid22", tween: [ "style", "${_Rectangle}", "border-top-right-radius", [10,10], { valueTemplate: '@@0@@px @@1@@px', fromValue: [10,10]}], position: 0, duration: 0 },
            { id: "eid31", tween: [ "transform", "${_start_obj_btn}", "rotateZ", '360deg', { fromValue: '0deg'}], position: 0, duration: 1996 },
            { id: "eid27", tween: [ "transform", "${_Rectangle}", "translateX", '246px', { fromValue: '67.999px'}], position: 0, duration: 1006 },
            { id: "eid28", tween: [ "transform", "${_Rectangle}", "translateX", '-85.652px', { fromValue: '246px'}], position: 1006, duration: 991 },
            { id: "eid20", tween: [ "style", "${_Rectangle}", "border-bottom-left-radius", [10,10], { valueTemplate: '@@0@@px @@1@@px', fromValue: [10,10]}], position: 0, duration: 0 },
            { id: "eid24", tween: [ "color", "${_Rectangle}", "background-color", 'rgba(96,95,166,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(96,95,166,1.00)'}], position: 0, duration: 0 },
            { id: "eid21", tween: [ "style", "${_Rectangle}", "border-top-left-radius", [10,10], { valueTemplate: '@@0@@px @@1@@px', fromValue: [10,10]}], position: 0, duration: 0 }         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-12390392");
