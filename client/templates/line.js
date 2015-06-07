Meteor.subscribe('reports');

Template.line.helpers({
  numberReports: function(alertType) {
    return Reports.find({
      expired: false,
      line: this.path,
      type: alertType
    }).count();
  },
  lineAlerts: function(alertType){
    var directions = this.directions;
    for (var i = 0; i < directions.length; i++) {
      var path = directions[i].path
      var path_reports = Reports.find({
        expired: false,
        line: path,
        type: alertType
      }).count();
      if (path_reports) {
        return true
      }
    };
  },
  station: function(){
    return 'station';
  },
  service: function(){
    return 'service';
  }
});
