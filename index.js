var tabs = $('li');
var tabContent = $('.tab-content');

console.log(tabContent);

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
  
  tabContent.removeClass('active')

  var activeTab = $(this).attr("rel");

  $("#"+activeTab).addClass('active');
})
