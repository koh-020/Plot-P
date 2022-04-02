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
