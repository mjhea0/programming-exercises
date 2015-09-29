var app = angular.module("guessApp", []);

app.controller("GuessController", function($scope) {

  $scope.compNum = getNumber(1, 100);
  $scope.compGuessNum = getNumber(1, 100);
  $scope.title = "Guessing Game!";
  $scope.userWins = 0;
  $scope.compWins = 0;

  $scope.pickNum = function(){
    $scope.compNum = getNumber(1, 100);
  };

  $scope.setUserNum = function(){
    $scope.userPicked = true;
  };

  //AI
  var max = 100;
  var min = 1;

  $scope.userGuess = function(){
    //check user guess
    if($scope.userNum === $scope.compNum){
      $scope.win = $scope.guess = true;
      $scope.userNumber = $scope.userNum;
      $scope.proximity = 'correct!';
      $scope.gameResult = 'You win!';
      $scope.userWins = +$scope.userWins + 1;
    }
    else if($scope.userNum > $scope.compNum){
      $scope.guess = true;
      $scope.userNumber = $scope.userNum;
      $scope.proximity = "too high.";
    }
    else{
      $scope.guess = true;
      $scope.userNumber = $scope.userNum;
      $scope.proximity = "too low.";
    }

    //check comp guess
    if($scope.compGuessNum === $scope.userPickedNum){
      $scope.win = true;
      $scope.gameResult = 'Computer Wins.';
      $scope.compWins = $scope.compWins + 1;
    }
    else if($scope.compGuessNum > $scope.userPickedNum){
      //gives comp a new max
      max = $scope.compGuessNum;
      $scope.compGuessNum = getNumber (+max, +min);
    }
    else{
      //gives comp a new min
      min = $scope.compGuessNum;
      $scope.compGuessNum = getNumber (+max, +min);
    }
  };

  $scope.startOver = function(){
    $scope.win = $scope.guess = $scope.userPicked = false;
    $scope.compNum = getNumber(1, 100);
    $scope.userPickedNum = $scope.userNum = '';
  };

});


//helper functions

function getNumber (max, min){
  var random = Math.floor(Math.random() * (max - min + 1)) + min;
  return random;
}
