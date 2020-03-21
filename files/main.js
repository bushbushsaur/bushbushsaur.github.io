$(document).ready(function() {
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
