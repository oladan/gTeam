angular.module('ui.bootstrap.demo', ['ui.bootstrap']);
angular.module('ui.bootstrap.demo').controller('AccordionDemoCtrl', function ($scope) {
  $scope.oneAtATime = true;

  $scope.groups = [
    { 
      "type": "Build",
      "title": "Tenrox-R1_1235",
      "state": "Pending",
    },
    {
      "type": "Firewall",
      "title": "432462",
      "owner": "jtuck",
      "time_started": "4/18/2014 12:12pm",
      "state": "Running",
      "metrics": "60"
    },
    {
      "type": "Firewall",
      "title": "432461",
      "owner": "samy",
      "time_started": "4/18/2014 10:53pm",
      "state": "Rejected",
      "metrics": "-1",
      "build": "100",
      "unit_test": "100",
      "functional_test": "100",
    },
    {
      "type": "Build",
      "title": "Tenrox-R1_1234",
      "time_started": "4/17/2014 9:42am",
      "state": "Complete",
      "metrics": "100",
      "build": "100",
      "unit_test": "100",
      "functional_test": "100",
    },
    {
      "type": "Firewall",
      "title": "432460",
      "owner": "samy",
      "time_started": "4/17/2014 7:51am",
      "state": "Rejected",
      "metrics": "-1",
    },
    {
      "type": "Firewall",
      "title": "432459",
      "owner": "samy",
      "time_started": "4/16/2014 6:43am",
      "state": "Accepted",
      "metrics": "100",
      "build": "100",
      "unit_test": "100",
      "functional_test": "100",
    }
  ];

});
