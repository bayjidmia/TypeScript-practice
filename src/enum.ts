// enums

// set of fixed string literal

// type Userrole = "admin" | "editor" | "viewer";

enum Userrole {
  admin = "admin",
  editor = "editor",
  viewer = "viewer",
}

const andedit = (value: Userrole) => {
  if (value === Userrole.admin || value === Userrole.editor) {
    return true;
  } else {
    return false;
  }
};

const makeedit = andedit(Userrole.admin);
console.log(makeedit);
