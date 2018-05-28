$(document).ready(function() {
  // Characters triggered by buttons
  $('button.sonic').click(function() {
    // Removes question mark
    $('.middle h1').addClass('hidden');
    // Removes other character currently selected
    $('.middle img.knuckles').addClass('hidden');
    $('.middle img.tails').addClass('hidden');
    $('.middle img.amy').addClass('hidden');
    // Selects character
    $('.middle img.sonic').toggleClass('hidden');
  });
  $('button.tails').click(function() {
    // Removes question mark
    $('.middle h1').addClass('hidden');
    // Removes other character currently selected
    $('.middle img.sonic').addClass('hidden');
    $('.middle img.knuckles').addClass('hidden');
    $('.middle img.amy').addClass('hidden');
    // Selects character
    $('.middle img.tails').toggleClass('hidden');
  });
  $('button.knuckles').click(function() {
    // Removes question mark
    $('.middle h1').addClass('hidden');
    // Removes other character currently selected
    $('.middle img.sonic').addClass('hidden');
    $('.middle img.tails').addClass('hidden');
    $('.middle img.amy').addClass('hidden');
    // Selects character
    $('.middle img.knuckles').toggleClass('hidden');
  });
  $('button.amy').click(function() {
    // Removes question mark
    $('.middle h1').addClass('hidden');
    // Removes other character currently selected
    $('.middle img.sonic').addClass('hidden');
    $('.middle img.tails').addClass('hidden');
    $('.middle img.knuckles').addClass('hidden');
    // Selects character
    $('.middle img.amy').toggleClass('hidden');
  });
  // Saving value of selected Character
  
})
