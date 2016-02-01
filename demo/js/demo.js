'use strict';

angular.module('ngAvailabilityCalendarDemo', ['ng-availability-calendar'])
    .controller('DemoController', [
        '$scope',
        function($scope) {
            $scope.options = {};
            $scope.weekData = [
                [-1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, -1, -1, -1, -1, -1], // Mon.
                [-1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, -1, -1, -1, -1], // Tues.
                [-1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, -1, -1, -1, -1, -1], // Wed.
                [-1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, -1, -1, -1, -1], // Thu.
                [-1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, -1, -1, -1, -1], // Fri.
                [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], // Sat.
                [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1] // Sun.
            ];
            $scope.onSlotClick = function(slot) {
                // If available, provisionally book.
                if(slot.status === 0) {
                    slot.status = 1;
                }
                else if(slot.status === 1) {
                    slot.status = 0;
                }
            };
        }
    ]);