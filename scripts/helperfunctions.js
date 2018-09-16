/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


loadTemplate =function(path){
 let html=$.get({
     url: "html/"+ path,
     dataType:'html',
     aync:false
 }).responseText;
 return html;
};