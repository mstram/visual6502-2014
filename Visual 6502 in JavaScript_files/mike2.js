//var mikeNoZoomOnFind = false;

// var frame, chipbg, overlay, hilite, hitbuffer, ctx;

// mike chipbg is a <canvas> element
//       <canvas class="chip" id="overlay"></canvas>
//       <canvas class="chip" id="hilite"></canvas>
//       <canvas class="chip" id="hitbuffer"></canvas>

//alert('mike2:mikeNoZoomOnFind = ' + mikeNoZoomOnFind);


//<!--  <input type="button" value="Add to List" onclick="mikeAddToList();" /> -->
//  <input type="button" value="Add to Favs" onclick="mikeAddToFavs();" />

//  <input type="text" id="HighlightThese" name="HighlightThese" value="" />
//
//  <select id="selMikeHighlightList" onchange="doMikeSelect1()">

//  <select id="selMikeFavs" onchange="doMikeSelectFavs()">
//     <option value="  " selected="selected">blank</option>
//  </select>


var mikeJunk = 25;
console.log('mike2: mikeJunk = ', mikeJunk);
var sortedNodes = '';

function buildSelectNodesList(){
  //
  // builds a select (picklist) in the UI from nodenames.js
  //
   // var sortedNodes = '';
    var temp = [];

  //  alert('buildSelectNodesList');
    console.log('buildSelectNodesList');

    for(n in nodenames) {temp.push(n);}
        sortedNodes = temp.sort();

    var selObj   = document.getElementById('selMikeHighlightList');
    var elOptOld = selObj.options[selObj.selectedIndex];
    var elOptNew = '';
    var x = 0;

    for( node in sortedNodes) {
         x++;
     //    console.log(x + ': ' + sortedNodes[node]);
         elOptNew       = document.createElement('option');
         elOptNew.text  = sortedNodes[node];
         elOptNew.value = sortedNodes[node];
         selObj.add(elOptNew, elOptOld);
    }
   //alert('hello there');
}

function doMikeSelect1(elem){
	var selObj       = document.getElementById(elem);
//  var selObj       = document.getElementById('selMikeHighlightList');
	var txtValueObj  = document.getElementById('inpBoxHighlightThese');
	var selIndex     = selObj.selectedIndex;

        if(mstNodeListSelectReplaceInTextBox == true){
       	 txtValueObj.value = selObj.options[selIndex].value;
        }
        else
         txtValueObj.value = txtValueObj.value + ' ' + selObj.options[selIndex].value;

      //  alert('selection changed to :' + selObj.options[selIndex].value);
}

function mikeAddToList() {
//       var selObj       = document.getElementById('selMikeHighlightList');

			 var selObj       = document.getElementById('selMikeFavs');
       var txtValueObj  = document.getElementById('inpBoxHighlightThese');
       var txt = txtValueObj.value;

    //   alert('add to list "' + txt + '"');
       console.log('(mikeAddToList) added to favlist "' + txt + '"');

       var elOptNew = document.createElement('option');
       elOptNew.text = txt;
       elOptNew.value = txt;

       var elOptOld = selObj.options[selObj.selectedIndex];
       selObj.add(elOptNew, elOptOld);
}



function  mikeSetNoZoomOnFind(cbox){
  //alert('mikeSetNoZoomOnFind ' + cbox.value);
 // mikeNoZoomOnFind = true;
  mstNoZoomOnFind = cbox.value;
}

function mikeresetZoom() {
// alert('mikeresetZoom');
 setZoom(1);
}

function mikeLastZoom() {
 alert('mikeLastZoom');
// setZoom(1);
}

function mikeShowBoxes() {
   boxLabel(['IR',   50, 8432, 2332, 9124,  984]);
   boxLabel(['PLA', 100, 1169, 2328, 8393,  934]);
   boxLabel(['Y',    50, 2143, 8820, 2317, 5689]);
   boxLabel(['X',    50, 2317, 8820, 2490, 5689]);
//   boxLabel(['S',    50, 2490, 8820, 2814, 5689]);
//   boxLabel(['ALU',  50, 2814, 8820, 4525, 5689]);
//   boxLabel(['DAdj', 40, 4525, 8820, 5040, 5689]);
   boxLabel(['A',    50, 5040, 8820, 5328, 5689]);
   boxLabel(['PC',   50, 5559, 8820, 6819, 5689]);
}



function mikeAlphaSort(){
  alert('mikeAlphaSort');
}

function mikeSymSort(){
  alert('mikeSymSort');
}

function mikeSetNodeListAppendOrReplace(cbox){
 // this is defined in expertWires.js
  mstNodeListSelectReplaceInTextBox = cbox.value;
}


var dragger = function (e){
	this.dx = e.clientX;
	this.dy = e.clientY;
	isDrag = this;
}

var rectangle=[];

function getColr(){
	var Colr="#bfbfbf"
	while(Colr=="#bfbfbf")	{
		Colr=Raphael.getColor();
	}
	return Colr;
}

var ctxSave;
function mikeBlackBox1() {
// var ctx = mikeGetchipbg();
// var ctx = mikeGetHilite();
 // console.log('mike: ctx = ' + ctx);

 ctx.save();
 ctx.fillStyle = 'rgba(0,0,0,255)';
 //ctx.fillStyle = 'rgba(255,255,255,255)';
 ctx.fillRect (500,500,300,300);
}
function mikeEraseBlackBox1() {
  ctx.restore();
}


var paper;
function mikeRaphaelBox1() {
 //alert('mikeRaphaelBox1');
 paper = new Raphael(document.getElementById('raphael'), 800, 800);
// paper = new Raphael(document.getElementById('chipsurround'), 1,1);
 var rec1 = paper.rect(100, 100, 150, 200);
 rec1.attr({fill: '#aaa'});
 var x = 0;
 for(var i=0; i<10;i++) {
	y=(Math.floor(i/8))*40;
	x++;
	x=x>7?0:x;
	if(i!=33){
	  rectangle[i]=paper.rect(x*80,y , 80, 40, 10).attr({fill: getColr()});
	  rectangle[i].node.style.cursor = 'move';
	  rectangle[i].mousedown(dragger);
	}
  }
}

//function mikeGetchipbg(){
// return chipbg.getContext('2d');
// }

//function mikeGetHilite() {
// return hilite.getContext('2d');
//}
//var ctx = '';
// called from <ui>.htm handleOnload()

var mstNoZoomOnFind = false;
var mstNodeListSelectReplaceInTextBox = true;


// called from plugins.js

function mikeinit(){
 // alert('mikeinit');
  //ctx = mikeGetHilite();
  console.log('mikeinit: ctx = ' + ctx);
  buildSelectNodesList();
}

// end of file