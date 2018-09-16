/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


HTML_TEMPLATE_CACHE ={};

loadTemplate= function(path){
    if (path in HTML_TEMPLATE_CACHE) return HTML_TEMPLATE_CACHE[path];
    
    let html = $.get({
        url: path,
        dataType: 'html',
        async: false
    }).responseText;
    HTML_TEMPLATE_CACHE[path]=html;
    return html;
    };
    