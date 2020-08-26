// ==UserScript==
// @name Hack moving
// @name:ru Хак перемещения 
// @description Hacking the transfer to a nursing station in another Department
// @description:ru Взлом перевода на сестринский пост в другое отделении
// @namespace Привет ребяиа
// @version 1.3
// @updateURL https://raw.githubusercontent.com/SonOfStep/MovingISLO/master/index.js
// @authot Omar "SonOfStep" Nurmakhanov
// @match *://172.30.149.11:8282/OE/appointment/remsandapps*
// @grant none
// ==/UserScript==

const SETTINGS_URL = "/OE/appointment/getplaces";

$.ajaxSetup({
  beforeSend: function(jqXHR, settings) {
    if ( settings.url === SETTINGS_URL ) {

      let idPosts = 0; //ID сестринского поста	
      let idProcKab = 0; // ID процедурного кабинета
      let idDivision = $("#storeid").val();// ID МХ

      switch( idDivision ){
        case "889499": // 1 отделение
          idPosts = "4846833";
          idProcKab = "4846875";
          break;
        case "889409": // 2 отделение
          idPosts = "4757173";
          idProcKab = "4758670";
          break;
        case "889280": // 3 отделение
          idPosts = "4701995";
          idProcKab = "4703041";
          break;
        case "889303": // 4 отделение
          idPosts = "4813638";
          idProcKab = "4812424";
          break;
        case "889288": // 5 отделение
          idPosts = "4427501";
          idProcKab = "4429617";
          break;
        case "889294": // 6 отделение
          idPosts = "4531638";
          idProcKab = "4528618";
          break;
        case "889266": // 7 отделение
          idPosts = "4609048";
          idProcKab = "4613316";
          break;
        case "889273": // 8 отделение
          idPosts = "4392905";
          idProcKab = "4400161"
          break;
        case "889323": // 9 отделение
          idPosts = "4442813";
          idProcKab = "4445366";
          break;
        case "889315": // 12 отделение
          idPosts = "4202872";
          idProcKab = "4205584";
          break;

        default:
          false;
          break;
      };

      $( document ).ajaxComplete( function( e ) {
        if ( !( $("option").is('[value=' + idPosts + ']') ) ) {
          $("#placeid option").each( ( item, elem ) => {
            if ( !($(elem).is( '[value="0"]' ) ) ) {
              $(elem).remove();
            }
          } )

          $("#placeid").append("<option value = " + idPosts + ">Сестринский пост</option>");
          $("#placeid").append("<option value = " + idProcKab + ">Процедурный кабинет</option>");
          
        } else if ( $("option").is('[value="0"') ){

        }
      } )



    }
  }
});
