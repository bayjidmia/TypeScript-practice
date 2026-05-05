"use strict";
// enums
// set of fixed string literal
// type Userrole = "admin" | "editor" | "viewer";
var Userrole;
(function (Userrole) {
    Userrole["admin"] = "admin";
    Userrole["editor"] = "editor";
    Userrole["viewer"] = "viewer";
})(Userrole || (Userrole = {}));
const andedit = (value) => {
    if (value === Userrole.admin || value === Userrole.editor) {
        return true;
    }
    else {
        return false;
    }
};
const makeedit = andedit(Userrole.admin);
console.log(makeedit);
