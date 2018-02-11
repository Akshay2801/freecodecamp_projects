$(document).ready(function(){
  
    function myFunction(){
       var quotes=["Hi","Hiii","Hello"];
       var author=["Akshay","Rautela","ashu"];
       
       var randomNum=Math.floor((Math.random()*quotes.length));
       var randomQuote=quotes[randomNum];
      var randomAuthor=author[randomNum];
      
      $(".quote").text(randomQuote);
      $(".author").text(randomAuthor);
              }
      $(".btn").on("click",function(){
        myFunction();
      });
    
  });