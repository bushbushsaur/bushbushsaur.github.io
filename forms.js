var el = document.createElement("script");
el.setAttribute("src","https://cdn.jsdelivr.net/gh/bushbushsaur/bushbushsaur.github.io/jquery.js");
document.body.appendChild(el);
function formJSPro() {
    $("form[formjspro] input:not(:first-child)").each(function() {
        $(this).css("margin-top","8px");
    }); // Seperate stacked elements.

    $("form[formjspro] input").each(function() {
        var $this = $(this);
        $this
            .css("border","2px solid green")
            .css("padding","4px")
            .css("outline","0px");
    }); // Change border, add padding, remove highlight.

    $("form[formjspro] input[type=submit]").css("border","2px solid grey")

    $("form[formjspro] input[required]").each(function() {
        var $this = $(this);
        $this.css("border","2px solid red");
    }); // Add a red border to all "required" elements.

    $("form[formjspro] input[tooltip]").each(function() {
        var $this = $(this);
        $this.attr("placeholder",$this.attr("tooltip"));
    }); // Add "tooltips" to elements with them.

    $("form[formjspro] input").each(function() {
        var $this = $(this);
        $this.attr("border",$this.css("border"));
    }); // Give everything a "border" attribute, to be set after blur.

    $("form[formjspro] input").on("focus",function() {
        $(this)
            .css("background","rgb(192,192,255)");
    }); // Give elements a blue background on focus.

    $("form[formjspro] input").on("blur",function() {
        var $this = $(this);
        $this
            .css("border",$this.attr("border"))
            .css("background","white");

        if ($this.prop("required") && $this.val().length >= 1) {
            $this.css("border","2px solid green")
        };
    }); // Give elements their original border on blur.

    $("form[formjspro] input[required]").on("keyup",function() {
        var $this = $(this);
        if ($this.val().length >= 1) {
            $this.css("border","2px solid green");
        } else {
            $this.css("border","2px solid red");
        };
    });

    $("form[formjspro]").on("submit",function(event) {
        event.preventDefault(); // Prevent reload of page.
        var $this = $(this);
        $this.find("input")
            .css("border","2px solid green")
            .css("background","rgb(192,255,192)")
            .prop("disabled",true); // Disable all elements.
        $this.find("input[answers]").each(function() {
            var $this = $(this);
            if (!($this.attr("answers").split(";").includes($this.val()))) {
                $this
                    .css("border","2px solid red")
                    .css("background","rgb(255,192,192)");
            }; // Give incorrect answers a red border.
        });
        return false;
    });
};

function formJS(title,array) {
	var is = function(string) {
		return typeof(string) === "string";
	}; // Is the input a string?

	var process = function(obj) {
		if (typeof(obj) === "string") {
			return $(obj);
		} else if (typeof(obj) === "object" && obj.q != undefined && is(obj.q)) {
			var $label = $("<label>").text(obj.q).append("<input>");
			if (obj.a != undefined && is(obj.a)) {
				$label.find("input").attr("answers",obj.a).appendTo($label);
			}; // Are there correct answers?
			if (obj.tooltip != undefined && is(obj.tooltip)) {
				$label.find("input").attr("tooltip",obj.tooltip);
			}; // Is there a tooltip?
			if (obj.value != undefined && is(obj.value)) {
				$label.find("input").attr("value",obj.value);
			}; // Is there a preset value?
			return $label.append("<br>");
		} else {
			return $("<span>");
		};
	}; // Process an object.

	$set = $("<fieldset>").append($("<legend>").text(title));
	$form = $("<form>").attr("formjspro",true);
	for (var x = 0;x < array.length;x++) {
		process(array[x]).appendTo($form);
	};
	$form.append('<input type="submit">').appendTo($set);
	return $set;
};
