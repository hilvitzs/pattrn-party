var tabs = $('li');
var tabContent = $('.tab-content');

tabs.on('click', function() {
  tabs.removeClass('active');

  $(this).addClass('active');

  tabContent.removeClass('active');

  var activeTab = $(this).attr("rel");

  $("#"+activeTab).addClass('active');
});

var verticalHeader = $('.vertical-header');

verticalHeader.on('click', function() {
  verticalHeader.removeClass('active');

  $(this).addClass('active');

  tabContent.removeClass('active');

  var activeTab = $(this).attr("rel");

  $("#"+activeTab).addClass('active');
});

var navbar = $('.navbar');

navbar.on('click', function() {
  $('.nav-links-section').toggleClass('hidden');

  $('.nav-search-section').toggleClass('hidden');
})
