module.exports = angular.module( 'app', [] );
// default params
function printMessage( status = 'working' ) {
  // let
  const message = 'ES6';
  // template string
  console.log( `${message} is ${status}` );
}
printMessage();
