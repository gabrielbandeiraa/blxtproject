 $(window).on("load", function(){
  var $button = $("#get-friend");
  var $friendsContainer = $("#friendspic-container");
  var friendimg
  var friends = ["mule.jpeg","preto.jpeg","adm.jpeg","be.jpeg",'joao.jpeg',"kaian.jpeg","miled.jpeg","mini.jpeg","muri.jpeg","nog.jpeg","pacoca.jpeg","pedrin.jpeg"]

  $button.click(function(){
    $friendsContainer.html("")
    friendimg = friends[Math.floor(Math.random() * friends.length)];
    $friendsContainer.append(`<img src="${friendimg}" height="300" width="300">`);

  })
  })
