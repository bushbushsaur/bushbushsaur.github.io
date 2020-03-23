$(document).ready(function() {
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
  
  $("pre[syntax]").each(function() {
    $(this).syntax($(this).attr("syntax"));
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
    }
  });
});
