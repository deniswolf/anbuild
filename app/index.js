const app = angular.module( 'app', [] );
// default params
function printMessage( status = 'working' ) {}
printMessage();

app.factory( 'AngelloHelper', function () {} );
app.service( 'AngelloModel', function () {} );
app.controller( 'MainCtrl', function () {
  let main = this;
  main.bubu = 122;

  main.stories = [
    {
      title: 'First story',
      description: 'Our first story.',
      criteria: 'Criteria pending.',
      status: 'To Do',
      type: 'Feature',
      reporter: 'Lukas Ruebbelke',
      assignee: 'Brian Ford'
        },
    {
      title: 'Second story',
      description: 'Do something.',
      criteria: 'Criteria pending.',
      status: 'Back Log',
      type: 'Feature',
      reporter: 'Lukas Ruebbelke',
      assignee: 'Brian Ford'
        },
    {
      title: 'Another story',
      description: 'Just one more.',
      criteria: 'Criteria pending.',
      status: 'Code Review',
      type: 'Enhancement',
      reporter: 'Lukas Ruebbelke',
      assignee: 'Brian Ford'
          }
        ];

} );
app.directive( 'story', function () {} );

module.exports = app;
