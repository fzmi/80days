$(document).ready(function () {
  console.log("This project is now archived on nifu.me.");

  // Navigation Bar
  // Dropdown menu for "More".
  var dropDown = $('.more-dropdown');

  $('.more').click(function (event) {
    if (dropDown.css("display") === "none") {
      dropDown.css("display", "flex");
      event.preventDefault();
    } else {
      dropDown.css("display", "none");
    }
  });

  window.onclick = function (event) {
    if (!event.target.matches('.more')) {
      $('.more-dropdown').css('display', 'none');
    }
  };

  // story-xx.html
  var page = 1;

  // User clicks next button.
  $('.story-next').click(function () {
    if (page === 1) {

      // Go to page 2.
      $('.page-1').css("display", "none");
      $('.page-2').css("display", "block");
      $('.page-3').css("display", "none");
      $('.story-previous').css("display", "block");
      page = 2;
    } else if (page === 2) {

      // Go to page 3.
      $('.page-1').css("display", "none");
      $('.page-2').css("display", "none");
      $('.page-3').css("display", "block");
      $('.story-next').css("display", "none");
      page = 3;
    }
  });

  // User clicks previous button.
  $('.story-previous').click(function () {
    if (page === 2) {

      // Go to page 1.
      $('.page-1').css("display", "block");
      $('.page-2').css("display", "none");
      $('.page-3').css("display", "none");
      $('.story-previous').css("display", "none");
      page = 1;
    } else if (page === 3) {

      // Go to page 2.
      $('.page-1').css("display", "none");
      $('.page-2').css("display", "block");
      $('.page-3').css("display", "none");
      $('.story-next').css("display", "block");
      page = 2;
    }
  });


  // explore.html
  var exploreItem = $('.explore-item a');

  // Move text to the right if the user's cursor enters the image.
  exploreItem.mouseenter(function (event) {
    $(this).find("p").animate({ margin: "-2em 0 0 1em" }, 300);
    event.preventDefault();
  });

  // Move text to the left if the user's cursor leaves the image.
  exploreItem.mouseleave(function (event) {
    $(this).find("p").animate({ margin: "-2em 0 0 0" }, 300);
    event.preventDefault();
  });


  // shop.html
  // ScrollClass jQuery Plugin
  $('.item').scrollClass({
    threshold: 50
  });

  // Shopping Cart
  var shopTotal = 0;
  var itemCount = 0;

  // "Add to Cart" buttons.
  $('.add-to-cart').click(function (event) {

    // Calculate the total value of the items.
    shopTotal += parseFloat($(this).parent().prev().text().substring(1));
    itemCount += 1;

    // Display the total value.
    $('#shop-total').html("$" + shopTotal.toFixed(1));

    if (itemCount === 1) {
      $('#shopping-cart-view p:nth-child(2)').html("You have 1 item.");
    } else {
      $('#shopping-cart-view p:nth-child(2)').html("You have " + itemCount + " items.");
    }

    event.preventDefault();
  });

  // "Clear Shopping Cart" button.
  $('#shop-clear').click(function (event) {
    shopTotal = 0;
    itemCount = 0;

    // Clear the screen.
    $('#shop-total').html("$0.0");
    $('#shopping-cart-view p:nth-child(2)').html("You have 0 items.");
    event.preventDefault();
  });

  // "Proceed to Checkout" button.
  $('#shop-checkout').click(function (event) {
    shopTotal = 0;
    itemCount = 0;

    // Clear the screen.
    $('#shop-total').html("$0.0");
    $('#shopping-cart-view p:nth-child(2)').html("You have 0 items.");
    alert("An order has been submitted. Thank you for your purchase.");
    event.preventDefault();
  });


  // contact.html
  $('#contact-form').submit(function (event) {

    var email = $("#form-email").val();
    var name = $("#form-name").val();
    var comments = $("#form-comments").val();
    var incomplete = false;

    // Check whether each field contains texts.
    if (email === "") {
      $("#form-email").addClass("error").parent().parent().find("label").addClass("error");
      incomplete = true;
    }

    if (name === "") {
      $("#form-name").addClass("error").parent().parent().find("label").addClass("error");
      incomplete = true;
    }

    if (comments === "") {
      $("#form-comments").addClass("error").parent().parent().find("label").addClass("error");
      incomplete = true;
    }

    if (!incomplete) {
      // Form successfully submitted.
      $('#contact-form button').attr("disabled", true);
      alert("Thank you, " + name + "! You are truly determined.");
    }

    event.preventDefault();
  });

  // Remove the red border if the user reenters the text field.
  $("#form-email, #form-name, #form-comments").keydown(function () {
    $(this).removeClass("error").parent().parent().find("label").removeClass("error");
  });
});
