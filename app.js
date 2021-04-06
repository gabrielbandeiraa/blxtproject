 $(window).on("load", function(){
  var $button = $("#get-friend");
  var $friendsContainer = $("#friendspic-container");
  var friendimg
  var friends = ["mule.jpeg","preto.jpeg"]

  $button.click(function(){
    $friendsContainer.html("")
    friendimg = friends[Math.floor(Math.random() * friends.length)];
    $friendsContainer.append(`<img src="${friendimg}" height="200" width="300">`);

  })
  })
