var UserProfile = (function() {
    var emailID = "";
  
    var getUserID = function() {
      return emailID;                           //TODO: Get this from cookie/localStorage
    };
  
    var setUserID = function(emailAddress) {
        emailID = emailAddress;                 //TODO: Also set this in cookie/localStorage
    };
  
    return {
        getUserID: getUserID,
        setUserID: setUserID
    }
  
})();
  
export default UserProfile;