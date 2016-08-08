var loadAnnouncements = function(onlyRecent, threshold) {
  var list = [];
  $.each(announcements, function(key, val) {
    var date = new Date(key);
    stringKey = keyForAnnouncement(date);
    
    var boundary = date;
    boundary.setDate(boundary.getDate() + threshold);

    if (onlyRecent) {
      if (boundary >= Date.now()) {
        if (typeof val === 'object') {
          for (i = 0; i < val.length; i++) {
            list.push(generateAnnouncementString(stringKey, val[i]));
          }
        } else {
          list.push(generateAnnouncementString(stringKey, val));
        }
      }
    } else {
      if (boundary < Date.now()) {
        if (typeof val === 'object') {
          for (i = 0; i < val.length; i++) {
            list.push(generateAnnouncementString(stringKey, val[i]));
          }
        } else {
          list.push(generateAnnouncementString(stringKey, val));
        }
      }
    }
  });

  $('#announcement-list').append(list.join(""));
};

var keyForAnnouncement = function(date) {
  return (date.getMonth() + 1) + "/" + (date.getDate() + 1) + "/" + date.getFullYear();
};

var generateAnnouncementString = function(key, val) {
  return "<li> <b>" + stringKey + "</b>: " + val;
};
