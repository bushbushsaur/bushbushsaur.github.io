var pages = [["Home","https://bushbushsaur.github.io/"],["About Me","aboutme.html"]];
var nav = $("<nav>");
for (var i = 0;i < pages.length;i++) {
  var a = $("<a>");
  a.text(pages[i][0]);
  a.attr("href",pages[i][1]);
  a.appendTo(nav);
}
nav.prependTo("body");
