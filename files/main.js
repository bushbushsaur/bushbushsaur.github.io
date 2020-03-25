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
    
  $("samp").each(function() {
    var $samp = $(this).hide();
    var frame = document.createElement("iframe");
    frame.setAttribute("src","/editor.html");
    frame.setAttribute("code",$samp.html());
    $(frame).hide().insertAfter($samp);
  });
  
  window.setTimeout(function() {
    $("iframe[code]").each(function() {
      $(this)[0].contentDocument.getElementById("input").innerHTML = $(this)[0].getAttribute("code");
      $($(this)[0].contentDocument.getElementById("output")).html($(this)[0].getAttribute("code")).syntax();
      $($(this)[0].contentDocument.getElementById("input")).keyup();
      
      $(this).find("#output").html($(this).find("#input").html()).syntax();
      var frame = $(this).find("iframe")[0].contentDocument;
      frame.body.innerHTML = $(this).find("#output").text();
      if ($(this).find($(this).find("iframe")[0].contentDocument.body).find("title").length > 0 && $(this).find($(this).find("iframe")[0].contentDocument.body).find("title").text() != "") {
        $("h1").text($(this).find($(this).find("iframe")[0].contentDocument.body).find("title").text()).css("font-style","normal");
      } else {
        $(this).find("h1").text("Untitled document").css("font-style","italic");
      }
      
      $(this).show();
    });
  },1000);

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
