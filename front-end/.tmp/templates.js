angular.module("app.core").run(["$templateCache", function($templateCache) {$templateCache.put("index.html","<!doctype html><html data-ng-app=ngAPI ng-strict-di><head><meta charset=utf-8><meta http-equiv=X-UA-Compatible , content=\"IE=edge\"><base href=\"/\"><title>J.Ca</title><meta name=description content><meta name=viewport content=\"width=device-width\"><style>\n        .ng-hide {\n          display: none!important;\n        }\n        [ng\\:cloak], [ng-cloak], [data-ng-cloak], [x-ng-cloak], .ng-cloak, .x-ng-cloak {\n          display: none !important;\n        }\n    </style><link rel=stylesheet href=/bower/bootstrap/dist/css/bootstrap.css><link rel=stylesheet href=/bower/angular-motion/dist/angular-motion.css><link rel=stylesheet href=/bower/angular-loading-bar/build/loading-bar.css><link rel=stylesheet href=/bower/toastr/toastr.css><link rel=stylesheet href=/bower/ionicons/css/ionicons.css><link rel=stylesheet href=/bower/videojs/dist/video-js/video-js.css><link rel=stylesheet href=/bower/flat-ui/dist/css/flat-ui.css><link rel=stylesheet href=/.tmp/stylus/app.css></head><body><div ui-view></div><script src=/bower/jquery/dist/jquery.js></script><script src=/bower/angular/angular.js></script><script src=/bower/angular-animate/angular-animate.js></script><script src=/bower/angular-strap/dist/angular-strap.js></script><script src=/bower/angular-strap/dist/angular-strap.tpl.js></script><script src=/bower/angular-loading-bar/build/loading-bar.js></script><script src=/bower/angular-ui-router/release/angular-ui-router.js></script><script src=/bower/lodash/dist/lodash.compat.js></script><script src=/bower/restangular/dist/restangular.js></script><script src=/bower/satellizer/satellizer.js></script><script src=/bower/toastr/toastr.js></script><script src=/bower/videojs/dist/video-js/video.js></script><script src=/bower/flat-ui/dist/js/flat-ui.js></script><script src=/js/custom/layout.js></script><script src=/js/app.js></script><script src=/js/commons/commons.module.js></script><script src=/js/core/core.module.js></script><script src=/js/exception/exception.module.js></script><script src=/js/layout/layout.module.js></script><script src=/js/logger/logger.module.js></script><script src=/js/router/router.module.js></script><script src=/js/services/services.module.js></script><script src=/js/widgets/widgets.module.js></script><script src=/js/routes/admin/main/main.module.js></script><script src=/js/routes/client/main/main.module.js></script><script src=/js/routes/client/sample/sample.module.js></script><script src=/js/routes/client/signup/signup.module.js></script><script src=/js/services/restangular.js></script><script src=/js/commons/commons.js></script><script src=/js/commons/dataservice.js></script><script src=/js/commons/viewContentLoaded.js></script><script src=/js/core/config.js></script><script src=/js/core/constants.js></script><script src=/js/exception/exception-handler.provider.js></script><script src=/js/exception/exception.js></script><script src=/js/layout/shell.js></script><script src=/js/logger/logger.js></script><script src=/js/router/routerhelper.js></script><script src=/js/services/authInterceptor.js></script><script src=/js/services/authToken.js></script><script src=/js/services/strapAlert.js></script><script src=/js/services/strapModal.js></script><script src=/js/widgets/switches.js></script><script src=/js/routes/admin/main/admin_main.js></script><script src=/js/routes/admin/main/config.route.js></script><script src=/js/routes/client/main/config.route.js></script><script src=/js/routes/client/main/main.js></script><script src=/js/routes/client/sample/config.route.js></script><script src=/js/routes/client/sample/sample.js></script><script src=/js/routes/client/signup/buyer.js></script><script src=/js/routes/client/signup/config.route.js></script><script src=/js/routes/client/signup/farmer.js></script></body></html>");
$templateCache.put("commons/footer.html","<footer class=add-student><div class=container-fluid><div class=row><div class=\"col-sm-3 poweredBy\"><span><i class=\"fa fa-coffee fa-2x\"></i> Powered By</span><ul><li><img src=/images/paragala/codegeeks.png alt=\"Paragala Logo\" class=\"img-responsive hau\"></li><li><img src=/images/paragala/coml.png alt=\"Paragala Logo\" class=\"img-responsive hau\"></li><li><img src=/images/paragala/loop_2.png alt=\"Paragala Logo\" class=\"img-responsive hau\"></li></ul></div><div class=\"col-sm-6 text-center main-org\"><ul><li><img src=/images/paragala/paragala-logo.png alt=\"Paragala Logo\" class=\"img-responsive paragalaHau\"></li><li><img src=/images/paragala/HAU_logo.png alt=\"Paragala Logo\" class=\"img-responsive hau\"></li><li><img src=/images/paragala/cict-logo.png alt=\"Paragala Logo\" class=\"img-responsive hau\"></li></ul></div><div class=\"col-sm-3 developers\"><span><i class=\"fa fa-laptop fa-2x\"></i> Developers</span><ul><li><a href=https://www.facebook.com/canino.jories><i class=\"fa fa-fire\"></i> Jo-Ries Canino</a></li><li><a href=https://www.facebook.com/mikhael12bis target=_blank><i class=\"fa fa-fire\"></i> Michael Biscante</a></li><li><a href=https://www.facebook.com/gensler.manalastas target=_blank><i class=\"fa fa-fire\"></i> Gensler Manalastas</a></li><li><a href=https://www.facebook.com/renamil02 target=_blank><i class=\"fa fa-fire\"></i> Lorena Dayrit</a></li></ul></div></div></div><div class=sub-footer><div class=container><div class=\"row text-center\"><copyright>2014 © PARAGALA - COMMUNICATIONS\' LEAGUE. All rights reserved.</copyright></div></div></div></footer>");
$templateCache.put("commons/header.html","<nav class=\"navbar navbar-inverse navbar-sm\" role=navigation ng-cloak><div class=container-fluid><div class=navbar-header><button type=button class=\"navbar-toggle collapsed\" data-toggle=collapse data-target=#bs-example-navbar-collapse-1><span class=sr-only>Toggle navigation</span> <span class=icon-bar></span> <span class=icon-bar></span> <span class=icon-bar></span></button></div><div class=\"collapse navbar-collapse\" id=bs-example-navbar-collapse-1><ul class=\"nav navbar-nav navbar-left\"><li ui-sref-active=active></li></ul><ul class=\"nav navbar-nav navbar-right\"></ul></div></div></nav>");
$templateCache.put("commons/login.html","<div class=\"modal loginUserAccount\" tabindex=-1 role=dialog ng-controller=\"Login as vm\"><form ng-submit=\"vm.login(loginForm.$valid )\" class=modal-dialog name=loginForm novalidate><div class=modal-content><div class=modal-header><button type=button class=close ng-click=$hide()>&times;</button><h4 class=modal-title>Login</h4></div><div class=modal-body><div class=form-group ng-class=\"{ \'has-error\' : loginForm.email.$invalid &amp;&amp; !loginForm.email.$pristine}\"><alert-login></alert-login><div class=col-xs-12><input class=form-control type=email name=email placeholder=E-mail required ng-model=vm.email ng-minlength=0> <span class=\"glyphicon glyphicon-user\"></span></div><div class=help-block ng-show=\"loginForm.email.$error.required &amp;&amp; loginForm.email.$dirty\">An email address is required</div><div class=help-block ng-show=loginForm.email.$error.email>Please enter an email address</div></div><div class=form-group ng-class=\"{ \'has-error\' : loginForm.password.$invalid &amp;&amp; loginForm.password.$dirty}\"><div class=col-xs-12><input type=password ng-model=vm.password name=password placeholder=Password required ng-minlength=6 class=form-control> <span class=\"glyphicon glyphicon-lock\"></span></div><div class=help-block ng-show=\"loginForm.password.$error.required &amp;&amp; loginForm.password.$dirty\">Password is Required</div><div class=help-block ng-show=loginForm.password.$error.minlength>Password too Short</div></div></div><div class=modal-footer><input type=submit class=\"btn btn-primary btn-lg\" value=Login></div></div></form></div>");
$templateCache.put("commons/main.html","<div class=\"off-canvas-wrap docs-wrap\" data-offcanvas style=position:fixed><div class=inner-wrap><nav class=tab-bar><section class=left-small><a class=\"left-off-canvas-toggle menu-icon\" aria-expanded=false><span></span></a></section><section class=\"right tab-bar-section\"><h1 class=title>Paragala</h1></section></nav><aside class=left-off-canvas-menu><ul class=off-canvas-list><li><label>Paragala</label></li><li><a href=#/database>Database</a></li><li><a href=#/paragala>Paragala</a></li><li><a href=#/paragala/add-student>Add Student</a></li><li><a href=#/paragala/paragala-results>Results</a></li></ul></aside>{% block section %}{% endblock %} <a class=exit-off-canvas></a></div></div>");
$templateCache.put("commons/paragalaLogin.html","<div class=container><div class=row><div class=\"col-sm-6 col-md-4 col-md-offset-4\"><h1 class=\"text-center login-title\">Sign in to continue to Bootsnipp</h1><div class=account-wall><img class=profile-img src=\"https://lh5.googleusercontent.com/-b0-k99FZlyE/AAAAAAAAAAI/AAAAAAAAAAA/eu7opA4byxI/photo.jpg?sz=120\" alt><form class=form-signin><input type=text class=form-control placeholder=Email required autofocus> <input type=password class=form-control placeholder=Password required> <button class=\"btn btn-lg btn-primary btn-block\" type=submit>Sign in</button> <label class=\"checkbox pull-left\"><input type=checkbox value=remember-me> Remember me</label> <a href=# class=\"pull-right need-help\">Need help?</a><span class=clearfix></span></form></div><a href=# class=\"text-center new-account\">Create an account</a></div></div></div>");
$templateCache.put("commons/register.html","<div class=\"modal register\" tabindex=-1 role=dialog ng-controller=\"Register as vm\"><form ng-submit=\"vm.register(signupForm.$valid, vm.email, vm.username, vm.password, vm.confirmPassword )\" class=modal-dialog name=signupForm novalidate><div class=modal-content><div class=modal-header><button type=button class=close ng-click=$hide()>&times;</button><h4 class=modal-title>Create a Free Account</h4></div><div class=modal-body><div class=form-group ng-class=\"{ \'has-error\' : signupForm.email.$invalid &amp;&amp; !signupForm.email.$pristine}\"><div class=col-xs-12><input type=email name=email ng-model=vm.email class=form-control placeholder=E-mail required ng-blur=vm.checkEmailInBlurred(signupForm)> <span class=\"glyphicon glyphicon-envelope\"></span></div><div class=help-block ng-show=\"signupForm.email.$dirty && signupForm.email.$error.required\">An email address is required</div><div class=help-block ng-show=signupForm.email.$error.email>Please enter an email address</div><div class=help-block ng-show=signupForm.email.$error.taken>That email has been taken, try another one?</div></div><div class=form-group ng-class=\"{ \'has-error\' : signupForm.username.$invalid &amp;&amp; !signupForm.username.$pristine}\"><div class=col-xs-12><input type=text name=username placeholder=Username ng-model=vm.username class=form-control required> <span class=\"glyphicon glyphicon-user\"></span></div><div class=help-block ng-show=\"signupForm.username.$dirty && signupForm.username.$error.required\">A username is required</div><div class=help-block ng-show=signupForm.username.$error.taken>That username has been taken, try another one</div></div><div class=form-group ng-class=\"{ \'has-error\' : signupForm.password.$invalid &amp;&amp; !signupForm.password.$pristine}\"><div class=col-xs-12><input type=password name=password placeholder=Password ng-model=vm.password class=form-control required ng-minlength=6> <span class=\"glyphicon glyphicon-lock\"></span></div><div class=help-block ng-show=signupForm.$error.minlength>Your password must be at least 6 characters</div></div><div class=form-group ng-class=\"{ \'has-error\' : signupForm.confirmPassword.$invalid &amp;&amp; !signupForm.confirmPassword.$pristine}\"><div class=col-xs-12><input type=password name=confirmPassword placeholder=\"Confirm Password\" ng-model=vm.confirmPassword class=form-control required confirm-password=vm.password> <span class=\"glyphicon glyphicon-lock\"></span></div><div class=help-block ng-show=\"signupForm.confirmPassword.$dirty && signupForm.confirmPassword.$error.equal\">The passwords must match</div></div></div><div class=modal-footer><input type=submit class=\"btn btn-primary btn-lg\" value=Register></div></div></form></div>");
$templateCache.put("commons/sidebar.html","<div id=sidebar-wrapper><span id=sidebarOnandOff><a href><i class=\"fa fa-certificate faa-spin animated\"></i></a></span><ul class=sidebar-nav><li><a href=#/dashboard class=\"faa-parent animated-hover\"><i class=\"fa fa-tachometer\"></i> <span class=icon-hide>Dashboard</span></a></li><li><a ui-sref=database><i class=\"fa fa-database\"></i> <span class=icon-hide>Database</span></a></li><li><a ui-sref=paragala><i class=\"fa fa-trophy\"></i> <span class=icon-hide>Paragala</span></a></li><li><a ui-sref=paragala_add-student><i class=\"fa fa-male\"></i> <span class=icon-hide>Add Student</span></a></li><li><a ui-sref=paragala_paragala-results><i class=\"fa fa-file-text-o\"></i> <span class=icon-hide>Results</span></a></li><li><a ui-sref=rave><i class=\"fa fa-video-camera\"></i> <span class=icon-hide>Rave</span></a></li></ul></div>");
$templateCache.put("admin/main/index.html","<div id=site-wrapper><div id=site-canvas><div id=site-menu><a href=# class=\"toggle-nav btn btn-lg btn-success\" id=big-sexy><i class=\"fa fa-bars\"></i> Toggle Nav</a></div></div></div>");
$templateCache.put("client/main/index.html","<section ng-include=\"\'commons/header.html\'\"></section><div class=main_><div class=\"modal-dialog login_\"><div class=modal-content><div class=modal-body><form name=loginForm ng-submit=vm.login() novalidate><div class=\"col-sm-6 col-sm-offset-3\" style=margin-bottom:10px ng-class=\"{\'has-error\':( loginForm.email.$invalid && loginForm.email.$dirty || loginForm.email.$invalid && loginForm.$submitted)}\"><input name=email class=form-control type=email ng-model=vm.email placeholder=\"Enter email\" required><div class=help-block ng-show=\"loginForm.email.$dirty && loginForm.email.$error.required\">Email is required</div><div class=help-block ng-show=\"loginForm.email.$pristine && loginForm.email.$error.required && loginForm.$submitted\">Email is required</div><div class=help-block ng-show=\"loginForm.email.$dirty && loginForm.email.$invalid\">Must enter a valid email address</div></div><div class=\"col-sm-6 col-sm-offset-3\" style=margin-bottom:10px ng-class=\"{\'has-error\':( loginForm.password.$invalid && loginForm.password.$dirty || loginForm.password.$invalid && loginForm.$submitted)}\"><input name=password class=form-control type=password ng-model=vm.password placeholder=\"Enter password\" required><div class=help-block ng-show=\"loginForm.password.$dirty && loginForm.password.$error.required\">Password is required</div><div class=help-block ng-show=\"loginForm.password.$pristine && loginForm.password.$error.required && loginForm.$submitted\">Password is required</div></div><div class=row><div class=\"col-sm-6 col-sm-offset-3 text-center\"><p class=text-center style=float:left><a href>Forgot your password?</a></p><button type=submit class=\"btn btn-success btn-sm\" ui-sref=main style=float:right>Submit</button></div></div></form></div></div></div></div><footer class=footer style=\"position: absolute; bottom: 0; width: 100%; height: 70px; background-color: #f5f5f5;\"><div class=\"container pull-right\" style=width:auto;><p>New Here?</p><p style=color:black><a ui-sref=signup>Sign Up</a></p></div></footer>");
$templateCache.put("client/sample/index.html","Welcome to the Sample Page");
$templateCache.put("client/signup/account_signup.html","<section ng-include=\"\'commons/header.html\'\"></section><div class=main_><div class=\"modal-dialog login_\"><div class=modal-content><div class=modal-body><h4>Sign-up for an account</h4><p>What type of account are you interested in signing-up for?</p><div class=container-fluid><div class=row style=margin-top:50px><div class=\"col-sm-6 col-sm-offset-3 text-center\"><button class=\"btn btn-success btn-sm\" ui-sref=buyer style=\"width:100%;margin-bottom: 10px\">Buyer</button></div></div><div class=row><div class=\"col-sm-6 col-sm-offset-3 text-center\"><button class=\"btn btn-success btn-sm\" ui-sref=farmer style=width:100%>Farmer</button></div></div><div class=row style=\"margin-top: 100px;\"><p class=text-center>Already a member? <a href>Sign in</a></p></div></div></div></div></div></div>");
$templateCache.put("client/signup/buyer.html","<section ng-include=\"\'commons/header.html\'\"></section><div class=main_><div class=\"modal-dialog login_\"><div class=modal-content><form name=registerBuyerForm ng-submit=vm.register_buyer() novalidate><div class=modal-header><h4 class=modal-title>Sign up to be a buyer</h4></div><div class=modal-body><div class=form-group ng-class=\"{\'has-error\':( registerBuyerForm.firstName.$invalid && registerBuyerForm.firstName.$dirty || registerBuyerForm.firstName.$invalid && registerBuyerForm.$submitted)}\"><label class=control-label>First Name</label> <input name=firstName class=\"form-control input-md\" type=text ng-model=vm.first_name ng-minlength=2 required><div class=help-block ng-show=\"registerBuyerForm.firstName.$dirty && registerBuyerForm.firstName.$error.required\">First Name is required</div><div class=help-block ng-show=\"registerBuyerForm.firstName.$pristine && registerBuyerForm.firstName.$error.required && registerBuyerForm.$submitted\">First Name is required</div><div class=help-block ng-show=\"registerBuyerForm.firstName.$dirty && registerBuyerForm.firstName.$error.minlength\">Must not enter less than two (2) characters for name</div></div><div class=form-group ng-class=\"{\'has-error\':( registerBuyerForm.lastName.$invalid && registerBuyerForm.lastName.$dirty|| registerBuyerForm.lastName.$invalid && registerBuyerForm.$submitted)}\"><label class=control-label>Last Name</label> <input name=lastName class=\"form-control input-md\" type=text ng-model=vm.last_name ng-minlength=3 required><div class=help-block ng-show=\"registerBuyerForm.lastName.$dirty && registerBuyerForm.lastName.$error.required\">Last Name is required</div><div class=help-block ng-show=\"registerBuyerForm.lastName.$pristine && registerBuyerForm.lastName.$error.required && registerBuyerForm.$submitted\">Last Name is required</div><div class=help-block ng-show=\"registerBuyerForm.lastName.$dirty && registerBuyerForm.lastName.$error.minlength\">Must not enter less than two (2) characters for name</div></div><div class=form-group ng-class=\"{\'has-error\':( registerBuyerForm.email.$invalid && registerBuyerForm.email.$dirty || registerBuyerForm.email.$invalid && registerBuyerForm.$submitted)}\"><label class=control-label>Email</label> <input name=email class=form-control type=email ng-model=vm.email required><div class=help-block ng-show=\"registerBuyerForm.email.$dirty && registerBuyerForm.email.$error.required\">Email is required</div><div class=help-block ng-show=\"registerBuyerForm.email.$pristine && registerBuyerForm.email.$error.required && registerBuyerForm.$submitted\">Email is required</div><div class=help-block ng-show=\"registerBuyerForm.email.$dirty && registerBuyerForm.email.$invalid\">Must enter a valid email address</div></div><div class=form-group ng-class=\"{\'has-error\':( registerBuyerForm.password.$invalid && registerBuyerForm.password.$dirty || registerBuyerForm.password.$invalid && registerBuyerForm.$submitted)}\"><label class=control-label>Password</label> <input name=password class=form-control type=password ng-model=vm.password ng-minlength=8 required><div class=help-block ng-show=\"registerBuyerForm.password.$dirty && registerBuyerForm.password.$error.required\">Password is required</div><div class=help-block ng-show=\"registerBuyerForm.password.$pristine && registerBuyerForm.password.$error.required && registerBuyerForm.$submitted\">Password is required</div><div class=help-block ng-show=\"registerBuyerForm.password.$dirty && registerBuyerForm.password.$error.minlength\">Must not enter less than eight (8) characters for password</div></div><div class=form-group ng-class=\"{\'has-error\':( registerBuyerForm.companyNames.$invalid && registerBuyerForm.companyName.$dirty || registerBuyerForm.companyName.$invalid && registerBuyerForm.$submitted)}\"><label class=control-label>Company Name</label> <input name=companyName class=form-control type=text ng-model=vm.company_name required><div class=help-block ng-show=\"registerBuyerForm.companyName.$dirty && registerBuyerForm.companyName.$error.required\">Company name is required</div><div class=help-block ng-show=\"registerBuyerForm.companyName.$pristine && registerBuyerForm.companyName.$error.required && registerBuyerForm.$submitted\">Company name is required</div></div><div class=form-group ng-class=\"{\'has-error\':( registerBuyerForm.address.$invalid && registerBuyerForm.address.$dirty || registerBuyerForm.address.$invalid && registerBuyerForm.$submitted)}\"><label class=control-label>Address</label> <input name=address class=form-control type=text ng-model=vm.address required><div class=help-block ng-show=\"registerBuyerForm.address.$dirty && registerBuyerForm.address.$error.required\">Address is required</div><div class=help-block ng-show=\"registerBuyerForm.address.$pristine && registerBuyerForm.address.$error.required && registerBuyerForm.$submitted\">Address is required</div></div><div><div class=form-group ng-class=\"{\'has-error\':( registerBuyerForm.city.$invalid && registerBuyerForm.city.$dirty || registerBuyerForm.city.$invalid && registerBuyerForm.$submitted)}\"><label class=control-label>City</label> <input name=city class=form-control type=text ng-model=vm.city required><div class=help-block ng-show=\"registerBuyerForm.city.$dirty && registerBuyerForm.city.$error.required\">City is required</div><div class=help-block ng-show=\"registerBuyerForm.city.$pristine && registerBuyerForm.city.$error.required && registerBuyerForm.$submitted\">City is required</div></div><div class=form-group ng-class=\"{\'has-error\':( registerBuyerForm.state.$invalid && registerBuyerForm.state.$dirty || registerBuyerForm.state.$invalid && registerBuyerForm.$submitted)}\"><label class=control-label>State</label> <input name=state class=form-control type=text ng-model=vm.state required><div class=help-block ng-show=\"registerBuyerForm.state.$dirty && registerBuyerForm.state.$error.required\">State is required</div><div class=help-block ng-show=\"registerBuyerForm.state.$pristine && registerBuyerForm.state.$error.required && registerBuyerForm.$submitted\">State is required</div></div><div class=form-group ng-class=\"{\'has-error\':( registerBuyerForm.zip.$invalid && registerBuyerForm.zip.$dirty || registerBuyerForm.zip.$invalid && registerBuyerForm.$submitted)}\"><label class=control-label>Zip</label> <input name=zip class=form-control type=text ng-model=vm.zip required><div class=help-block ng-show=\"registerBuyerForm.zip.$dirty && registerBuyerForm.zip.$error.required\">Zip is required</div><div class=help-block ng-show=\"registerBuyerForm.zip.$pristine && registerBuyerForm.zip.$error.required && registerBuyerForm.$submitted\">Zip is required</div></div></div><div class=form-group ng-class=\"{\'has-error\':( registerBuyerForm.phone.$invalid && registerBuyerForm.phone.$dirty || registerBuyerForm.phone.$invalid && registerBuyerForm.$submitted)}\"><label class=control-label>Phone Number</label> <input name=phone class=form-control type=text ng-model=vm.phone ng-pattern=\"/^[\\d]*$/\" required><div class=help-block ng-show=\"registerBuyerForm.phone.$dirty && registerBuyerForm.phone.$error.required\">Phone number is required</div><div class=help-block ng-show=\"registerBuyerForm.phone.$pristine && registerBuyerForm.phone.$error.required && registerBuyerForm.$submitted\">Phone number is required</div><div class=help-block ng-show=\"registerBuyerForm.phone.$dirty && registerBuyerForm.phone.$invalid\">Must enter numeric characters</div></div><div class=form-group><label class=control-label>Description (Optional)</label> <textarea class=form-control type=text ng-model=vm.desc>\n          </textarea></div><div class=form-group ng-class=\"{\'has-error\':( registerBuyerForm.monthlyExpense.$invalid && registerBuyerForm.monthlyExpense.$dirty || registerBuyerForm.monthlyExpense.$invalid && registerBuyerForm.$submitted)}\"><label class=control-label>What is your current monthly expense for produce?</label><select name=monthlyExpense class=form-control ng-model=vm.monthly_expense required><option value disabled selected>Select Amount</option><option value=1>1</option><option value=2>2</option></select><div class=help-block ng-show=\"registerBuyerForm.phone.$dirty && registerBuyerForm.monthlyExpense.$error.required\">Please select monthly expense</div><div class=help-block ng-show=\"registerBuyerForm.phone.$pristine && registerBuyerForm.monthlyExpense.$error.required && registerBuyerForm.$submitted\">Please select monthly expense</div></div><div class=form-group ng-class=\"{\'has-error\':( registerBuyerForm.businessType.$invalid && registerBuyerForm.businessType.$dirty || registerBuyerForm.businessType.$invalid && registerBuyerForm.$submitted)}\"><label class=control-label>What is your business type?</label><select name=businessType class=form-control ng-model=vm.business_type required><option value disabled selected>Select Type</option><option value=a>a</option><option value=b>b</option></select><div class=help-block ng-show=\"registerBuyerForm.businessType.$dirty && registerBuyerForm.businessType.$error.required\">Please select business type</div><div class=help-block ng-show=\"registerBuyerForm.businessType.$pristine && registerBuyerForm.businessType.$error.required && registerBuyerForm.$submitted\">Please select business type</div></div></div><div class=modal-footer><div class=text-center><button type=submit class=\"btn btn-primary text-center\">Sign up</button></div><div class=row style=\"margin-top: 60px;\"><p class=text-center>Already a member? <a href>Sign in</a></p></div></div></form></div></div></div>");
$templateCache.put("client/signup/farmer.html","<section ng-include=\"\'commons/header.html\'\"></section><div class=main_><div class=\"modal-dialog login_\"><div class=modal-content><form name=registerFarmerForm ng-submit=vm.register_farmer() novalidate><div class=modal-header><h4 class=modal-title>Sign up to be a Farmer</h4></div><div class=modal-body><div class=form-group ng-class=\"{ \'has-error\' : (registerFarmerForm.ffirst_name.$invalid && registerFarmerForm.ffirst_name.$dirty) || (registerFarmerForm.ffirst_name.$invalid && registerFarmerForm.$submitted)}\"><label class=control-label>First Name</label> <input type=text name=ffirst_name class=\"form-control input-md\" ng-model=vm.ffirst_name ng-minlength=2 required><div class=help-block ng-show=\"registerFarmerForm.ffirst_name.$dirty && registerFarmerForm.ffirst_name.$error.required\">First Name is required</div><div class=help-block ng-show=\"registerFarmerForm.ffirst_name.$dirty && registerFarmerForm.ffirst_name.$error.minlength\">First Name must be atleast 2 characters</div><div class=help-block ng-show=\"registerFarmerForm.ffirst_name.$pristine && registerFarmerForm.ffirst_name.$error.required && registerFarmerForm.$submitted\">First Name is required</div></div><div class=form-group ng-class=\"{ \'has-error\' : (registerFarmerForm.flast_name.$invalid && registerFarmerForm.flast_name.$dirty) || (registerFarmerForm.flast_name.$invalid && registerFarmerForm.$submitted)}\"><label class=control-label>Last Name</label> <input type=text name=flast_name class=\"form-control input-md\" ng-model=vm.flast_name ng-minlength=2 required><div class=help-block ng-show=\"registerFarmerForm.flast_name.$dirty && registerFarmerForm.flast_name.$error.required\">Last Name is required</div><div class=help-block ng-show=\"registerFarmerForm.flast_name.$dirty && registerFarmerForm.flast_name.$error.minlength\">Last Name must be atleast 2 characters</div><div class=help-block ng-show=\"registerFarmerForm.flast_name.$pristine && registerFarmerForm.flast_name.$error.required && registerFarmerForm.$submitted\">Last Name is required</div></div><div class=form-group ng-class=\"{ \'has-error\' : (registerFarmerForm.femail.$invalid && registerFarmerForm.femail.$dirty) || (registerFarmerForm.femail.$invalid && registerFarmerForm.$submitted)}\"><label class=control-label>Email</label> <input type=email name=femail class=\"form-control input-md\" ng-model=vm.femail required><div class=help-block ng-show=\"registerFarmerForm.femail.$dirty && registerFarmerForm.femail.$error.required\">Email is required</div><div class=help-block ng-show=\"registerFarmerForm.femail.$dirty && registerFarmerForm.femail.$error.email\">Invalid email address</div><div class=help-block ng-show=\"registerFarmerForm.femail.$pristine && registerFarmerForm.femail.$error.required && registerFarmerForm.$submitted\">Email is required</div></div><div class=form-group ng-class=\"{ \'has-error\' : (registerFarmerForm.fpassword.$invalid && registerFarmerForm.fpassword.$dirty) || (registerFarmerForm.fpassword.$invalid && registerFarmerForm.$submitted)}\"><label class=control-label>Password</label> <input type=password name=fpassword class=\"form-control input-md\" ng-model=vm.fpassword ng-minlength=8 required><div class=help-block ng-show=\"registerFarmerForm.fpassword.$dirty && registerFarmerForm.fpassword.$error.required\">Company name is required</div><div class=help-block ng-show=\"registerFarmerForm.fpassword.$pristine && registerFarmerForm.fpassword.$error.required && registerFarmerForm.$submitted\">Company name is required</div></div><div class=form-group ng-class=\"{ \'has-error\' : (registerFarmerForm.fcompany_name.$invalid && registerFarmerForm.fcompany_name.$dirty) || (registerFarmerForm.fcompany_name.$invalid && registerFarmerForm.$submitted)}\"><label class=control-label>Password</label> <input type=text name=fcompany_name class=\"form-control input-md\" ng-model=vm.fcompany_name ng-minlength=8 required><div class=help-block ng-show=\"registerFarmerForm.fcompany_name.$dirty && registerFarmerForm.fcompany_name.$error.required\">Password is required</div><div class=help-block ng-show=\"registerFarmerForm.fcompany_name.$dirty && registerFarmerForm.fcompany_name.$error.minlength\">Last Name must be atleast 8 characters</div><div class=help-block ng-show=\"registerFarmerForm.fcompany_name.$pristine && registerFarmerForm.fcompany_name.$error.required && registerFarmerForm.$submitted\">Password is required</div></div><div class=form-group ng-class=\"{ \'has-error\' : (registerFarmerForm.faddress.$invalid && registerFarmerForm.faddress.$dirty) || (registerFarmerForm.faddress.$invalid && registerFarmerForm.$submitted)}\"><label class=control-label>Address</label> <input type=text name=faddress class=\"form-control input-md\" ng-model=vm.faddress required><div class=help-block ng-show=\"registerFarmerForm.faddress.$dirty && registerFarmerForm.faddress.$error.required\">Address is required</div><div class=help-block ng-show=\"registerFarmerForm.faddress.$pristine && registerFarmerForm.faddress.$error.required && registerFarmerForm.$submitted\">Address is required</div></div><div class=col-lg-4 ng-class=\"{ \'has-error\' : (registerFarmerForm.fcity.$invalid && registerFarmerForm.fcity.$dirty) || (registerFarmerForm.fcity.$invalid && registerFarmerForm.$submitted)}\"><label class=control-label>City</label> <input type=text name=fcity class=\"form-control input-md\" ng-model=vm.fcity required><div class=help-block ng-show=\"registerFarmerForm.fcity.$dirty && registerFarmerForm.fcity.$error.required\">City is required</div><div class=help-block ng-show=\"registerFarmerForm.fcity.$pristine && registerFarmerForm.fcity.$error.required && registerFarmerForm.$submitted\">City is required</div></div><div class=col-lg-4 ng-class=\"{ \'has-error\' : (registerFarmerForm.fstate.$invalid && registerFarmerForm.fstate.$dirty) || (registerFarmerForm.fstate.$invalid && registerFarmerForm.$submitted)}\"><label class=control-label>State</label> <input type=text name=fstate class=\"form-control input-md\" ng-model=vm.fstate required><div class=help-block ng-show=\"registerFarmerForm.fstate.$dirty && registerFarmerForm.fstate.$error.required\">State is required</div><div class=help-block ng-show=\"registerFarmerForm.fstate.$pristine && registerFarmerForm.fstate.$error.required && registerFarmerForm.$submitted\">State is required</div></div><div class=col-lg-4 ng-class=\"{ \'has-error\' : (registerFarmerForm.fzip.$invalid && registerFarmerForm.fzip.$dirty) || (registerFarmerForm.fzip.$invalid && registerFarmerForm.$submitted)}\"><label class=control-label>Zip</label> <input type=text name=fzip class=\"form-control input-md\" ng-model=vm.fzip required><div class=help-block ng-show=\"registerFarmerForm.fzip.$dirty && registerFarmerForm.fzip.$error.required\">Zip is required</div><div class=help-block ng-show=\"registerFarmerForm.fzip.$pristine && registerFarmerForm.fzip.$error.required && registerFarmerForm.$submitted\">Zip is required</div></div><div class=form-group><label class=control-label>Description (optional)</label> <textarea class=form-control ng-model=vm.fdescription></textarea></div><div class=form-group ng-class=\"{ \'has-error\' : (registerFarmerForm.ffarm_size.$invalid && registerFarmerForm.ffarm_size.$dirty) || (registerFarmerForm.ffarm_size.$invalid && registerFarmerForm.$submitted)}\"><label class=control-label>Farm size (planted acres)</label> <input type=text name=ffarm_size class=\"form-control input-md\" ng-model=vm.ffarm_size ng-pattern=\"/^\\d*$/\" required><div class=help-block ng-show=\"registerFarmerForm.ffarm_size.$dirty && registerFarmerForm.ffarm_size.$error.required\">Farm size is required</div><div class=help-block ng-show=\"registerFarmerForm.ffarm_size.$dirty && registerFarmerForm.ffarm_size.$invalid\">Invalid farm size</div><div class=help-block ng-show=\"registerFarmerForm.ffarm_size.$pristine && registerFarmerForm.ffarm_size.$error.required && registerFarmerForm.$submitted\">Farm size is required</div></div><div class=form-group ng-class=\"{ \'has-error\' : (registerFarmerForm.fphone.$invalid && registerFarmerForm.fphone.$dirty) || (registerFarmerForm.fphone.$invalid && registerFarmerForm.$submitted)}\"><label class=control-label>Phone Number</label> <input type=text name=fphone class=\"form-control input-md\" ng-model=vm.fphone ng-pattern=\"/^\\d*$/\" required><div class=help-block ng-show=\"registerFarmerForm.fphone.$dirty && registerFarmerForm.fphone.$error.required\">Phone number is required</div><div class=help-block ng-show=\"registerFarmerForm.fphone.$dirty && registerFarmerForm.fphone.$invalid\">Invalid phone number</div><div class=help-block ng-show=\"registerFarmerForm.fphone.$pristine && registerFarmerForm.fphone.$error.required && registerFarmerForm.$submitted\">Phone number is required</div></div></div><div class=modal-footer><div class=text-center><button type=submit class=\"btn btn-primary text-center\">Sign up</button></div><div class=row style=\"margin-top: 60px;\"><p class=text-center>Already a member? <a href>Sign in</a></p></div></div></form></div></div></div>");
$templateCache.put("client/signup/forgot_pass.html","<section ng-include=\"\'commons/header.html\'\"></section><div class=main_><div class=\"modal-dialog login_\"><div class=modal-content><div class=modal-body><h4>Forgot your password?</h4><p>Send your email and recover your password.</p><div class=container-fluid><div class=row style=margin-top:50px><div class=\"col-sm-6 col-sm-offset-3 text-center\" ng-class=\"{\'has-error\':( email.$invalid && email.$dirty )}\"><label class=control-label>Email Address</label> <input name=email class=form-control type=email ng-model=vm.email required><div class=help-block ng-show=\"email.$dirty && email.$error.required\">Email is required</div><div class=help-block ng-show=\"email.$pristine && email.$error.required\">Email is required</div><div class=help-block ng-show=\"email.$dirty && email.$invalid\">Must enter a valid email address</div></div><div class=\"col-sm-6 col-sm-offset-3 text-center\"><button type=submit class=\"btn btn-primary text-center\">Submit</button></div></div><div class=row style=\"margin-top: 100px;\"><p class=text-center>New to Locaverse? <a ui-sref=sign_up>Sign up</a></p></div></div></div></div></div></div>");}]);
