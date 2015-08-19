Meteor.subscribe("reports");

canUpvote = function(docId) {
  if (docId == null) return true;
  return Session.get(docId) == null;
}

Template.report.helpers({
  canUpvote: canUpvote,
  normal: function(reportType) {
    return (reportType === 'normal');
  },
  stationIssue: function(reportType) {
    return (reportType === 'station');
  },
  serviceIssue: function(reportType) {
    return (reportType === 'service');
  },
  isPatco: function (line) {
    return line.substring(0, 5) === "PATCO";
  }
});

Template.report.events({
  // Upvote the current event
  'click .upvote': function() {
    if (canUpvote(this._id)) {
      // Prevent future upvotes
      Session.setPersistent(this._id, 'upvoted');
      Meteor.call("upvoteReport", this._id);
      toast("Thanks for your confirmation!", 2000);
    }
  },
  'click .downvote': function() {
    if (canUpvote(this._id)) {
      // Prevent future downvotes
      Session.setPersistent(this._id, 'downvoted');
      Meteor.call("downvoteReport", this._id);
      toast("Thanks for your report!", 2000);
    }
  }
});

Template.report.rendered = function() {
  // Enable modal triggering with button on a "Normal conditions" event.
  $('.modal-trigger').leanModal();
};

Template.report.events({
  'click .modal-trigger': function(e) {
    $('#locationInput').val(this.location);
  }
});