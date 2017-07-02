
var myApp = angular.module("myApp",[]);

    myApp.controller("myController", function($scope){
    console.log ("in mumu");

    $scope.newUser = {};
    $scope.clickedUser = {};
    $scope.message = "";

    $scope.users = [
       {username:"Liubi",fullName:"Liubitsa", address:"Sofia", email:"bubi@gmail.com"},
       {username:"Rumi", fullName:"Rumen",  address:"Sofia", email:"rumi@gmail.com"},
       {username:"Lu",fullName:"Liubitsa",  address:"Sofia", email:"liubitsa.rumi@gmail.com"},
       {username:"Mili",fullName:"Milena", address:"Sofia", email:"millena_gi@gmail.com"}
    ];

    $scope.saveUser = function() {
   /* console.log($scope.newUser);*/

      $scope.users.push($scope.newUser);
     $scope.newUser = {};
     $scope.message = "New client added succesfully! ";

    };

    $scope.selectUser = function(user) {
        console.log(user);
        $scope.clickedUser = user;
    };
    
    $scope.updateUser = function() {
     $scope.message = "Client information updated! ";
    };

     $scope.deleteUser = function() {
        $scope.users.splice($scope.users.indexOf($scope.clickedUser), 1);
         $scope.message = "Client deleted! ";
    };

     $scope.clearMessage = function() {
        $scope.message = "";
    };
});