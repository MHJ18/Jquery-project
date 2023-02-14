"use strict";
 jQuery(document).ready(function () {
   $("p").on("click", function (e) {
     $(this).text("Text function of jquery is functioning properly");
     $(this).hide();
     $("button").text("show me");
   });
   $("button").click(() => {
     $("p").show();
     $(this).html("hide me");
   });
   $("p:first").on({
     click: function () {
       console.log("why u clicked me bcz i am the first thats why");
     },
     mouseenter: function () {
       console.log("wallah u are touching me");
     },
     function() {
       console.log("hi");
     },
   });

   $(".btn").on("click", function (params) {
     console.log($(".toggle").html());

     // $(".toggle")
     //   .css({ "background-color": "#457b9d", color: "white" })
     //   .animate({ width: "20rem", "background-color": "black" }, 2000);
     // $(".data").css("color");
     $(".toggle").animate({ width: "20rem" }, 2000);
     $(".data").animate({ color: "red" }, 1000);
     $(".data").css("color");
   });
 });