let val;

// properties

val = document;
val = document.all;
val = document.all[2];
val = document.all.length;
val = document.head;
val = document.body;
val = document.doctype;
val = document.domain;
val = document.URL;
val = document.characterSet;
val = document.contentType;

// can select things without using selectors but not recommended.

val = document.forms;
val = document.forms[0];
val = document.forms[0].id;
val = document.forms[0].method;
val = document.forms[0].action;

val = document.links;
val = document.links[5];
val = document.links[5].className;
val = document.links[5].classList[0];

val = document.images;

val = document.scripts;
val = document.scripts[2].getAttribute('src');

console.log(val);