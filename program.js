setInterval(function() {
  for(i=Game.UpgradesInStore.length-1; i >= 0; i--){
    Game.UpgradesInStore[i].buy();
  }
  for(i=Game.ObjectsById.length-1; i >= 0; i--){
    Game.ObjectsById[i].buy();
  }
  Game.Objects['Factory'].unlockSpecial();
  Game.ClickCookie();
  Game.Earn(9999999999999999999999999999999999999999999999999999999999999999999999);
}, 100);
