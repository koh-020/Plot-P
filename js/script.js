$(function(){

  const MAX_WIDTH = 400;
  const MAX_HEIGHT = 400;
  let squareWidth = $('#x').val();
  let squareHeight = $('#y').val();
  // var plot = document.querySelector('#plot');

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







  // ベジェ曲線のアニメーション

  // var getPointQuadraticCurve = function(t, x1, y1, x2, y2, x3, y3) {
  //   var tp = 1 - t;
  //   var x = t * t * x3 + 2 * t * tp * x2 + tp * tp * x1;
  //   var y = t * t * y3 + 2 * t * tp * y2 + tp * tp * y1;

  //   return { x : x, y : y };
  // };

  // $(function() {
  //   var $point = $('.sample .point');

  //   var startPos = { x : 0,   y : 180 }; // 始点（座標）
  //   var endPos   = { x : 180, y : 0 };   // 終点（座標）
  //   var ctrlPos  = { x : 180, y : 180 }; // 制御点（座標）

  //   var startAnimate = function() {
  //       $point.animate({ count : 1 }, {
  //           duration : 1000,
  //           step     : function(current) {
  //               var point = getPointQuadraticCurve(current, startPos.x, startPos.y, ctrlPos.x, ctrlPos.y, endPos.x, endPos.y);
  //               $point.css({ left : point.x, top : point.y });
  //           },
  //           complete : function() {
  //               this.count = 0;
  //               startAnimate(); // 繰り返し
  //           }
  //       });
  //   };

  //   startAnimate();
  // });





$('#setting').click(function() {
  let x = $('#x').val();
  let y = $('#y').val();
  // x = parseInt(x, 10);
  // y = parseInt(y, 10);
  if(parseInt(x, 10) > parseInt(y, 10)) {
    console.log("x > y")
    squareWidth = MAX_WIDTH;
    squareHeight = y * MAX_HEIGHT / x;
  } else {
    squareWidth = x * MAX_WIDTH / y;
    squareHeight = MAX_HEIGHT;
  }
  $('.square').outerWidth(squareWidth);
  $('.square').outerHeight(squareHeight);
  console.log("squareWidth：" + squareWidth);
  console.log("squareHeight：" + squareHeight);

  console.log("x：" + x);
  console.log("y：" + y);
  console.log("MAX_WIDTH：" + MAX_WIDTH);
  console.log("MAX_HEIGHT：" + MAX_HEIGHT);
  console.log(typeof(x));
  console.log(typeof(squareHeight));
  console.log(typeof(MAX_HEIGHT));
  console.log(typeof(x > y));
});






  let playPauseAnim = anime({
    targets: '#plot',
    loop: false,
    keyframes: [
      { translateY: squareHeight, duration: 1000},
      { translateX: squareWidth, duration: 2000},
      { translateY: 0, duration: 1000},
      { translateX: 0, duration: 2000}
    ],
    easing: 'linear',
    autoplay: false // 自動再生を禁止します。
  });

  // STARTボタンを押した時にアニメーション開始
  $('.start').click(function(){
    console.log("squareHeight" + squareHeight);
    console.log("squareWidth" + squareWidth);
    $('#plot').css('background-color', 'blue')
    playPauseAnim.play();
  });

  // STOPボタンを押したときに停止する?
  $('.stop').click(function(){
    $('#plot').css('background-color', 'blue')
    playPauseAnim.pause();
  });

  // RESETボタンを押すとアニメーションが初期位置に戻り停止する
  $('.reset').click(function() {
    $('#plot').css('background-color', '#00ffff')
    playPauseAnim.reset();
    playPauseAnim.pause();
  })

});