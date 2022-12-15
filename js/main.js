// Can also be included with a regular script tag
// import Typed from 'typed.js';

var options = {
  strings: ["I M ' A Graphic Designer.|" , "I' M  Developer.|"],
  typeSpeed: 100,
  loop:true,
  startDelay:5,
  backSpeed:100,
  smartBackspace:true,
  shuffle:true,
  backDelay:5,
//   fadeOut:true,
showCursor:true,
};

var typed = new Typed('.element', options);


// Can also be included with a regular script tag
// import Typed from 'typed.js';






const option = {
    bottom: '64px', // default: '32px'
    right: ' 30px', // default: '32px'
    left: 'unset', // default: 'unset'
    time: '0.5s', // default: '0.3s'
    mixColor: '#fff', // default: '#fff'
    backgroundColor: '#fff',  // default: '#fff'
    buttonColorDark: '#100f2c',  // default: '#100f2c'
    buttonColorLight: '#fff', // default: '#fff'
    saveInCookies: false, // default: true,
    label: '🌓', // default: ''
    autoMatchOsTheme: true // default: true
  }
  
  function addDarkmodeWidget() {
    new Darkmode( option ).showWidget()
  }
  window.addEventListener('load', addDarkmodeWidget);

  new WOW().init();

////////////



let aboutoffset = $("#About").offset().top;


$(window).scroll(function(){

 let wScroll= $(window).scrollTop();

if(wScroll >= aboutoffset-120){
  $("#main-nav").css('backgroundColor' , ' rgba(0, 0, 0, 0.58) ' )
  $("#main-nav a").css('color' , 'white' )
  $("#btn-top").fadeIn(500);

}
else{
  $("#main-nav").css('backgroundColor' , ' white' )
  $("#main-nav a").css('color' , 'black' )
  $("#btn-top").fadeOut(500);
}


})

$("#btn-top").click(function(){
        $('html,body').animate({scrollTop :'0px'},1000)

})


$(" nav a").click(function (e) { 
  linkHrfe=$(e.target).attr("href")
  linkOffset=$(linkHrfe).offset().top;
  $("html , body").animate({scrollTop: `${linkOffset}px`},1000)
});

$(document).ready(function () {
  $("#LodingScreen .loader" ).fadeOut(1000 ,()=>{
    $("#LodingScreen").fadeOut(1000,()=>{
      $('body').css("overflow-y" ,'auto')
    });
   
  });

});
  