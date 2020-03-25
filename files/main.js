$(document).ready(function() {
  var navBar =
    '<nav>' +
      '<a href="/index.html">Home</a>' +
      '<a href="/about-me.html">About Me</a>' +
      '<span name="learn-html">Learn HTML & CSS</span>' +
        '<div for="learn-html">' +
          '<a href="/learn-html/index.html">Home</a>' +
          '<a name="learn-html/h_">&lt;h_&gt;</a>' +
        '</div>' +
      '<span name="developers">For Developers</span>' +
        '<div for="developers">' +
          '<a href="/pages/developers/index.html">Home</a>' +
          '<a href="/source">Source Code</a>' +
        '</div>' +
      '<span name="editor">Code Editor</span>' +
        '<div for="editor">' +
          '<a href="/editor.html">Code Editor</a>' +
        '</div>' +
    '</nav>'
  ;
  $(navBar).prependTo("body");
  
  $("nav span").click(function() {
    var $span = $(this);
    var $div = $("nav div[for=" + $span.attr("name") + "]");
    var $parentSpans = $("");
    var $parentDivs = $("");
    $div.parents("div").each(function() {
      $parentDivs = $parentDivs.add($(this));
      $parentSpans = $parentSpans.add($("nav span[name=" + $(this).attr("for") + "]"));
    });
    $div.css("top",$span.offset().top + $span.height() + 21);
    if ($div.is(":hidden")) {
      $div.show();
      $("nav span").removeClass("active");
      $span.addClass("active");
      $parentSpans.addClass("active");
      $span.siblings("span").each(function() {
        $("nav div[for=" + $(this).attr("name") + "]").hide();
      });
    } else {
      $div.hide();
      $div.find("div").hide();
      $("nav span").removeClass("active");
      $parentSpans.addClass("active");
    }
  });
  
  $("[syntax]").each(function() {
    $(this).syntax($(this).attr("syntax"));
  });
  
  var iframeData = '<style> html { background: black; overflow: hidden; } pre, iframe { width: 50%; height: calc(100% - 40px); position: absolute; top: 40px; margin: 0px; border: 0px; overflow: scroll; } iframe { background: white; left: 50%; } pre { outline: none; padding: 4px; border-radius: 4px; color: white; font-weight: bold; left: 0px; width: calc(50% - 8px); height: calc(100% - 48px); font-size: 16px; user-select: none; } h1 { font-style: italic; position: absolute; margin: 0px; border: 0px; color: white; text-align: center; height: 20px; font-size: 20px; text-align: center; background: #404040; display: block; width: calc(100% - 80px); top: 0px; left: 80px; padding: 10px 0px; user-select: none; } pre { font-size: 16px; } #input { color: transparent; -webkit-caret-color: white; -moz-caret-color: white; -ms-caret-color: white; caret-color: white; } #input::selection { color: transparent; background: rgba(255,255,255,0.5); } button { position: absolute; background: #404040; border: 0px; border-right: 1px solid black; display: block; width: 40px; height: 40px; top: 0px; left: 0px; font-size: 24px; font-weight: bold; font: monospace; transition: 0.3s; cursor: pointer; user-select: none; color: white; outline: 0px; } button:hover { background: #808080; } #plus { left: 40px; } </style> <iframe></iframe> <pre id="output"></pre> <pre id="input" contenteditable>&lt;!DOCTYPE html&gt;<div>&lt;html&gt;</div><div> &lt;head&gt;</div><div> &lt;meta charset="utf-8"&gt;</div><div> &lt;title&gt;&lt;/title&gt;</div><div> &lt;/head&gt;</div><div> &lt;body&gt;</div><div> </div><div> &lt;/body&gt;</div><div>&lt;/html&gt;</div></pre> <h1>Untitled document</h1> <button id="plus" onclick="font(2);">+</button> <button id="minus" onclick="font(-2);">-</button> <script> function font(x) { var size = Number($("#input").css("font-size").match(/[0-9]+/)[0]); size += x; size = size < 8 ? 8 : size; size = size > 40 ? 40 : size; $("pre").css("font-size",size + "px"); } var $code = $("#output"); $("#input").on("keypress keyup change scroll",function() { $code.html($("#input").html()).syntax(); var frame = $("iframe")[0].contentDocument; frame.body.innerHTML = $code.text(); if ($($("iframe")[0].contentDocument.body).find("title").length > 0 && $($("iframe")[0].contentDocument.body).find("title").text() != "") { $("h1").text($($("iframe")[0].contentDocument.body).find("title").text()).css("font-style","normal"); } else { $("h1").text("Untitled document").css("font-style","italic"); } $("#output").scrollLeft($("#input").scrollLeft()); $("#output").scrollTop($("#input").scrollTop()); }); $("#input").keyup(); </script>';
  
  $("samp").each(function() {
    var $samp = $(this);
    var frame = document.createElement("iframe");
    frame.setAttribute("src","/editor.html");
    frame = ($(frame.contentDocument.getElementById("input")).html($samp.html()))[0];
    $(frame).placeAfter($samp);
    $samp.remove();
  });

  $("input[inline][placeholder]").each(function() {
    $(this).css("width",$(this).attr("placeholder").length * 9.6);
  });
  $("input[inline][value]").each(function() {
    $(this).css("width",$(this).attr("value").length * 9.6);
  });
  $("input[inline]").on("keyup change",function() {
    if ($(this).val() === "" && $(this).attr("placeholder") !== undefined) {
      $(this).css("width",$(this).attr("placeholder").length * 9.6);
    } else if ($(this).val() === "") {
      $(this).width("60");
    } else {
      $(this).css("width",$(this).val().length * 9.6);
    }
  });
  $("input[value]").on("blur",function() {
    if ($(this).val() === "") {
      $(this).val($(this).attr("value"));
      if ($(this).is("[inline]")) {
        $(this).css("width",$(this).attr("value").length * 9.6);
      }
    }
  });
});
