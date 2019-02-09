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

// cannot use forEach on a collection by default. it would return this error: TypeError: scripts.forEach is not a function

// However, you can turn collections into in array so as to use forEach etc.

let scripts = document.scripts;

let scriptsArr = Array.from(scripts);

scriptsArr.forEach(function(script){
  console.log(script.getAttribute('src'));
});

console.log(val);