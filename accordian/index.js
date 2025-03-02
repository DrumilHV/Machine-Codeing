$(document).ready(function () {
  $("body").css("background-color", "");
  console.log("jQuery Loaded!");
});

let objs = [];
let open;

// Function to display details for an object
function display(obj) {
  // Remove the previous open paragraph if one exists
  if (obj.key === open) {
    $(`#${open}`).children("p").last().remove();
    open = undefined;
    return;
  }
  if (open !== undefined) {
    $(`#${open}`).children("p").last().remove();
  }

  open = obj.key; // Set the currently open object's key

  // Select the div using the object's key as its id
  const $div = $(`#${obj.key}`);
  // Create a new paragraph element with the object's value
  const $p = $("<p></p>").text(obj.value);
  $div.append($p);
}

// Function to create the accordion layout
function makeAccordian() {
  const $accordian = $("#accordianLayout");
  console.log("here in makeAccordian");
  // Clear the accordion to avoid duplicate entries
  $accordian.empty();

  objs.forEach((obj) => {
    const $li = $("<li></li>");
    // Use the object's key as the div id (make sure keys are unique)
    const $div = $("<div></div>").attr("id", obj.key);
    const $btn = $("<button></button>").text(obj.key);
    $btn.on("click", function () {
      display(obj);
    });

    $div.append($btn);
    $li.append($div);
    $accordian.append($li);
  });
}

// Function to add a new object and update the accordion
function doit() {
  console.log("here in doit");
  // Use .val() to get the input values

  const key = $("#key").val();
  const value = $("#value").val();

  // Create a new object with the provided key and value
  const tempObj = {
    key: key,
    value: value,
  };
  objs.push(tempObj);

  // Clear the input fields
  $("#key").val("");
  $("#value").val("");

  // Rebuild the accordion layout
  makeAccordian();
}
