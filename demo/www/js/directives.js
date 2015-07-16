'use strict';

/*
 @see
 http://www.bennadel.com/blog/2751-scope-applyasync-vs-scope-evalasync-in-angularjs-1-3.htm
 http://www.bennadel.com/blog/2605-scope-evalasync-vs-timeout-in-angularjs.htm

 */
angular.module('starter.directives', [])

    .directive('inkDisplayEffect', function () {
        return {
            restrict: 'A', //This menas that it will be used as an attribute and NOT as an element. I don't like creating custom HTML elements
            replace: true,
            template: '',
            controller: ['$scope', 'ionicMaterialInk', function ($scope, ionicMaterialInk) {

                $scope.$applyAsync(
                    function () {
                        console.log('ionicMaterialInk.displayEffect() applied async')
                        ionicMaterialInk.displayEffect();
                    });


            }]
        }
    })

    .directive('motionSlideInRight', function () {
        return {
            restrict: 'A', //This menas that it will be used as an attribute and NOT as an element. I don't like creating custom HTML elements
            replace: true,
            template: '',
            controller: ['$scope', 'ionicMaterialMotion', function ($scope, ionicMaterialMotion) {

                $scope.$applyAsync(
                    function () {
                        console.log('ionicMaterialMotion.fadeSlideInRight() applied async')
                        ionicMaterialMotion.fadeSlideInRight();
                    });


            }]
        }
    })

    .directive('motionSlideIn', function () {
        return {
            restrict: 'A', //This menas that it will be used as an attribute and NOT as an element. I don't like creating custom HTML elements
            replace: true,
            template: '',
            controller: ['$scope', 'ionicMaterialMotion', '$timeoutx', function ($scope, ionicMaterialMotion, $timeout) {

                $timeout(function () {
                    ionicMaterialMotion.fadeSlideIn({
                        selector: '.animate-fade-slide-in .item'
                    });
                }, 200);
                return;

                $scope.$applyAsync(
                    function () {
                        console.log('ionicMaterialMotion.fadeSlideIn() applied async')
                        ionicMaterialMotion.fadeSlideIn(
                            {
                                selector: '.animate-fade-slide-in .item'
                            }
                        );
                    });


            }]
        }
    })
