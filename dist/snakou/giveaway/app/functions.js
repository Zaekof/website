// Parse des commandes avec un prefix "!"
function commandParser(message){
  let prefixEscaped = prefix.replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1");
  let regex = new RegExp("^" + prefixEscaped + "([a-zA-Z]+)\s?(.*)");
  return regex.exec(message);
}

// L'utilisateur est un Subscriber ?
function isSubscriber(user){
  return user.subscriber;
}

// L'utilisateur est un Moderator ?
function isModerator(user){
  return user.mod;
}

// L'utilisateur est un Broadcaster ?
function isBroadcaster(user){
  return user.badges.broadcaster == '1';
}