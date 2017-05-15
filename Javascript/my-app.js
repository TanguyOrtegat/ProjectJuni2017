// Initialize your app
var myApp = new Framework7();
// Export selectors engine
var $$ = Dom7;
// Add view
//var mainView = myApp.addView('.view-main', {
// Because we use fixed-through navbar we can enable dynamic navbar
//  dynamicNavbar: true
//});
myApp.onPageInit('index', function (page) {
    var pageContainer = $$(page.container);
    pageContainer.find('.list-button').on('click', function () {
        //var username = pageContainer.find('input[name="username"]').val();
        //var password = pageContainer.find('input[name="password"]').val();
        // Handle username and password
        myApp.alert('Username: ' + username + ', Password: ' + password);
    });
});
myApp.init();