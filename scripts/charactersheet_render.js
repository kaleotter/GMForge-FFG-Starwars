/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


sync.render("CHARACTER_UI", function (obj, app, scope) {
    let html = loadTemplate("html/actors/pc_sheet/charsheet.html");
    let rendered = sync.render("ui_processUI")(obj, app, {display: html});
    return rendered;
});

sync.render("SKILLS_GENERAL_UI", function (obj, app, scope) {
    let html = loadTemplate("html/actors/pc_sheet/skillstab_general.html");
    let rendered = sync.render("ui_processUI")(obj, app, {display: html});
    return rendered;
});

sync.render("SKILLS_COMBAT_UI", function (obj, app, scope) {
    let html = loadTemplate("html/actors/pc_sheet/skillstab_combat.html");
    let rendered = sync.render("ui_processUI")(obj, app, {display: html});
    return rendered;
});

sync.render("SKILLS_KNOW_UI", function (obj, app, scope) {
    let html = loadTemplate("html/actors/pc_sheet/skillstab_know.html");
    let rendered = sync.render("ui_processUI")(obj, app, {display: html});
    return rendered;
});

sync.render("SKILLS_CUST_UI", function (obj, app, scope) {
    let html = loadTemplate("html/actors/pc_sheet/skillstab_custom.html");
    let rendered = sync.render("ui_processUI")(obj, app, {display: html});
    return rendered;
});

sync.render("DICE_POPOUT_UI", function (obj, app, scope) {
    let html = loadTemplate("html/dice_popout.html");
    let rendered = sync.render("ui_processUI")(obj, app, {display: html});
    return rendered;
});


sync.render("WEAPON_CARD_UI", function (obj, app, scope) {
    let html = loadTemplate("html/elements/item_card/itemcard_weapons.html");
    let rendered = sync.render("ui_processUI")(obj, app, {display: html});
    return rendered;
});

sync.render("ITEM_CARD_UI", function (obj, app, scope) {
    let html = loadTemplate("html/elements/item_card/item_card.html");
    let rendered = sync.render("ui_processUI")(obj, app, {display: html});
    return rendered;
});
sync.render("ARMOR_CARD_UI", function (obj, app, scope) {
    let html = loadTemplate("html/elements/item_card/itemcard_armor.html");
    let rendered = sync.render("ui_processUI")(obj, app, {display: html});
    return rendered;
});

sync.render("GEAR_CARD_UI", function (obj, app, scope) {
    let html = loadTemplate("html/elements/item_card/itemcard_gear.html");
    let rendered = sync.render("ui_processUI")(obj, app, {display: html});
    return rendered;
});

sync.render("EQUIP_TAB_UI", function (obj, app, scope) {
    let html = loadTemplate("html/actors/pc_sheet/equipment_tab.html");
    let rendered = sync.render("ui_processUI")(obj, app, {display: html});
    return rendered;
});

sync.render("COMBAT_TAB_UI", function (obj, app, scope) {
    let html = loadTemplate("html/actors/pc_sheet/combat_tab.html");
    let rendered = sync.render("ui_processUI")(obj, app, {display: html});
    return rendered;
});

sync.render("TALENTS_TAB_UI", function (obj, app, scope) {
    let html = loadTemplate("html/actors/pc_sheet/talents_tab.html");
    let rendered = sync.render("ui_processUI")(obj, app, {display: html});
    return rendered;
});

sync.render("BIO_TAB_UI", function (obj, app, scope) {
    let html = loadTemplate("html/actors/pc_sheet/biotab.html");
    let rendered = sync.render("ui_processUI")(obj, app, {display: html});
    return rendered;
});

sync.render("TALENT_CARD_UI", function (obj, app, scope) {
    let html = loadTemplate("html/elements/talent_card/talent_card.html");
    let rendered = sync.render("ui_processUI")(obj, app, {display: html});
    return rendered;
});

sync.render("SKILL_CARD_UI", function (obj, app, scope) {
    let html = loadTemplate("html/elements/skill_card.html");
    let rendered = sync.render("ui_processUI")(obj, app, {display: html});
    return rendered;
});

sync.render("POWERS_TAB_UI", function (obj, app, scope) {
    let html = loadTemplate("html/actors/powers_tab.html");
    let rendered = sync.render("ui_processUI")(obj, app, {display: html});
    return rendered;
});

sync.render("POWERS_TAB_UI", function (obj, app, scope) {
    let html = loadTemplate("html/actors/pc_sheet/powers_tab.html");
    let rendered = sync.render("ui_processUI")(obj, app, {display: html});
    return rendered;
});

sync.render("POWERS_CARD_UI", function (obj, app, scope) {
    let html = loadTemplate("html/elements/powers_card.html");
    let rendered = sync.render("ui_processUI")(obj, app, {display: html});
    return rendered;
});

$('body').append('<link rel="stylesheet" href="/css/css.css" type="text/css" />');