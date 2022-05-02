// $('.start').on('click', function(left){
//   var $point = $('.relative .circle');
//   var starPos = { x: 40, y: 40}; //始点（座標）
//   var endPos = {x: 40, y: 200}; //終点（座標）
  
//   var StartAnimate = function(){
//     $point.animate({ count: 1}, {
//       duration : 1000,
//       step :function(currebt{
//         var point = getPointTrack(current, startPos.x, startPos.y, endPos.x, endPos.y);
//         $point.css({ left :point.x, top: point.y });
//       },
//       complete : function(){
//         this.count = 0;
//         StartAnimate(); //繰り返し
//       }
//     });
//   }
  
  
  
  
  
  
//   $('.circle').()
// })

$('.start').on('click', function(){
  $('.circle').css('background-color', 'red')
});





// ビジェ曲線のアニメーション

var getPointQuadraticCurve = function(t, x1, y1, x2, y2, x3, y3) {
  var tp = 1 - t;
  var x = t * t * x3 + 2 * t * tp * x2 + tp * tp * x1;
  var y = t * t * y3 + 2 * t * tp * y2 + tp * tp * y1;

  return { x : x, y : y };
};

$(function() {
  var $point = $('.sample .point');

  var startPos = { x : 0,   y : 180 }; // 始点（座標）
  var endPos   = { x : 180, y : 0 };   // 終点（座標）
  var ctrlPos  = { x : 180, y : 180 }; // 制御点（座標）

  var startAnimate = function() {
      $point.animate({ count : 1 }, {
          duration : 1000,
          step     : function(current) {
              var point = getPointQuadraticCurve(current, startPos.x, startPos.y, ctrlPos.x, ctrlPos.y, endPos.x, endPos.y);
              $point.css({ left : point.x, top : point.y });
          },
          complete : function() {
              this.count = 0;
              startAnimate(); // 繰り返し
          }
      });
  };

  startAnimate();
});