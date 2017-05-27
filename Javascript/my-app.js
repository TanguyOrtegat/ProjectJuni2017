// Initialize your app
var myApp = new Framework7();
// Export selectors engine
var $$ = Dom7;
//Add view
var mainView = myApp.addView('.view-main', {
        domCache: true
    });


myApp.onPageInit('index', function (page) {
    "use strict";
    var pageContainer = $$(page.container);
    pageContainer.find('.list-button').on('click', function () {
        var username = pageContainer.find('input[name="username"]').val();
        var password = pageContainer.find('input[name="password"]').val();
        // Handle username and password
        if (username === "test" && password === "test") {
            myApp.alert("ingelogd");
            mainView.router.loadPage("#about");
            
        } else {
            myApp.alert("verkeerde inloggegevens");
        }
        
    });
});
myApp.init();