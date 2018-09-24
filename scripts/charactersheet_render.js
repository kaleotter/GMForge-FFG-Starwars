/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


sync.render("CHARACTER_UI", function (obj, app, scope) {
    let html = loadTemplate("html/charsheet.html");
    let rendered = sync.render("ui_processUI")(obj, app, {display: html});
    return rendered;
});

sync.render("SKILLS_GENERAL_UI", function (obj, app, scope) {
    let html = loadTemplate("html/skillstab_general.html");
    let rendered = sync.render("ui_processUI")(obj, app, {display: html});
    return rendered;
});

sync.render("SKILLS_COMBAT_UI", function (obj, app, scope) {
    let html = loadTemplate("html/skillstab_combat.html");
    let rendered = sync.render("ui_processUI")(obj, app, {display: html});
    return rendered;
});

sync.render("SKILLS_KNOW_UI", function (obj, app, scope) {
    let html = loadTemplate("html/skillstab_know.html");
    let rendered = sync.render("ui_processUI")(obj, app, {display: html});
    return rendered;
});

sync.render("SKILLS_CUST_UI", function (obj, app, scope) {
    let html = loadTemplate("html/skillstab_custom.html");
    let rendered = sync.render("ui_processUI")(obj, app, {display: html});
    return rendered;
});

sync.render("DICE_POPOUT_UI", function (obj, app, scope) {
    let html = loadTemplate("html/dice_popout.html");
    let rendered = sync.render("ui_processUI")(obj, app, {display: html});
    return rendered;
});


sync.render("WEAPON_CARD_UI", function (obj, app, scope) {
    let html = loadTemplate("html/itemcard_weapons.html");
    let rendered = sync.render("ui_processUI")(obj, app, {display: html});
    return rendered;
});

sync.render("ITEM_CARD_UI", function (obj, app, scope) {
    let html = loadTemplate("html/item_card.html");
    let rendered = sync.render("ui_processUI")(obj, app, {display: html});
    return rendered;
});
sync.render("ARMOR_CARD_UI", function (obj, app, scope) {
    let html = loadTemplate("html/itemcard_armor.html");
    let rendered = sync.render("ui_processUI")(obj, app, {display: html});
    return rendered;
});

sync.render("GEAR_CARD_UI", function (obj, app, scope) {
    let html = loadTemplate("html/itemcard_gear.html");
    let rendered = sync.render("ui_processUI")(obj, app, {display: html});
    return rendered;
});

sync.render("EQUIP_TAB_UI", function (obj, app, scope) {
    let html = loadTemplate("html/equipment_tab.html");
    let rendered = sync.render("ui_processUI")(obj, app, {display: html});
    return rendered;
});
$('body').append('<link rel="stylesheet" href="/css/css.css" type="text/css" />');