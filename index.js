// ==UserScript==
// @name Hack moving
// @name:ru Хак перемещения 
// @description Hacking the transfer to a nursing station in another Department
// @description:ru Взлом перевода на сестринский пост в другое отделении
// @namespace Привет ребяиа
// @version 0.6
// @updateURL https://github.com/SonOfStep/MovingISLO/blob/master/index.js
// @authot Omar "SonOfStep" Nurmakhanov
// @match *://172.30.149.11:8282/OE/appointment/remsandapps*
// @grant none
// ==/UserScript==

$(window).on("load", ()=>{

  $("#placeblock").on("click", function addPost(){
    let idPosts = 0;
    let idDivision = $("#storeid").val();

    switch( idDivision ){
      case "889499": // 1 отделение
        idPosts = "7338";
        break;
      case "889409": // 2 отделение
        idPosts = "6950";
        break;
      case "889280": // 3 отделение
        idPosts = "7000";
        break;
      case "889303": // 4 отделение
        idPosts = "7159";
        break;
      case "889288": // 5 отделение
        idPosts = "4897";
        break;
      case "889294": // 6 отделение
        idPosts = "5793";
        break;
      case "889266": // 7 отделение
        idPosts = "6112";
        break;
      case "889273": // 8 отделение
        idPosts = "4400161";
        break;
      case "889323": // 9 отделение
        idPosts = "4914";
        break;
      case "889315": // 12 отделение
        idPosts = "3900";
        break;

      default:
        false;
        break;
    };

    if ( !( $("option").is('[value=' + idPosts + ']') ) ) {
      $("#placeid").append("<option value = " + idPosts + ">Сестринский пост</option>");
    }


    /*$(document).ajaxSuccess( function (e, xhr, settings){ 

      if( ( settings.url == "/OE/appointment/getplaces" )){
        console.log("Пришел ответ")
        if ( !( $("option").is('[value=' + idPosts + ']') ) ) {

          $("#placeid").append("<option value = " + idPosts + ">Сестринский пост</option>");
        }
      };

    } ) */


  });
});
