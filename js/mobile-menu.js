$(function() {
  $(document).on("click", ".mobile_menu_container .parent", function(e) {
      e.preventDefault();
      $(".mobile_menu_container .activity").removeClass("activity");
      $(this).siblings("ul").addClass("loaded").addClass("activity");
  });
  $(document).on("click", ".mobile_menu_container .back", function(e) {
      e.preventDefault();
      $(".mobile_menu_container .activity").removeClass("activity");
      $(this).parent().parent().removeClass("loaded");
      $(this).parent().parent().parent().parent().addClass("activity");
  });
  $(document).on("click", ".mobile_menu", function(e) {
      e.preventDefault();
      $(".mobile_menu_container").addClass("loaded");
      $(".mobile_menu_overlay").fadeIn();
  });
  $(document).on("click", ".mobile_menu_overlay", function(e) {
      $(".mobile_menu_container").removeClass("loaded");
      $(this).fadeOut(function() {
          $(".mobile_menu_container .loaded").removeClass("loaded");
          $(".mobile_menu_container .activity").removeClass("activity");
      });
  });

  
  })
  