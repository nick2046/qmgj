app.controller('personalhomepageController',['$scope',function($scope){
	console.log('personalhomepageController');
	$scope.nav = [
	{name:'个人主页',view:'personalhomepage.personal'},
	{name:'个人信息',view:'personalhomepage.personalmessage'},
	{name:'安全设置',view:'personalhomepage.personalshezhi.password'},
	{name:'关注的圈子',view:'personalhomepage.personalguanzhu'},
	{name:'购买记录',view:'personalhomepage.personaljilu'}
	];
	$scope.showIndex = function (a){
		$scope.show = a;
	}	
}])