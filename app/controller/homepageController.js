app.controller("homepageController", ["$scope", "$interval", function($scope, $interval) {
    $scope.slideImg = [{
        proImg: 'img/banner.png',
        proId: '1'
    }, {
        proImg: 'img/hot-img.png',
        proId: '2'
    }];
    // 轮播图
    $scope.showIndex = 0;
    var inter = $interval(function() {
        if ($scope.showIndex >= $scope.slideImg.length - 1) {
            $scope.showIndex = 0;
            return;
        }
        $scope.showIndex++;
    }, 2500);

    $scope.showCurrentFn = function(index) {
        $scope.showIndex = index;
        $interval.cancel(inter);
        inter = $interval(function() {
            if ($scope.showIndex >= $scope.slideImg.length - 1) {
                $scope.showIndex = 0;
                return;
            }
            $scope.showIndex++;
        }, 2500);
    };

    var hotPro = [{
        imgSrc: 'img/hot-img.png',
        proName: '《晚秋》再现江湖',
        proCon: 'by 韩国宝蓝影业有限公司',
        proInfo: '《晚秋》根据李满熙导演1966年的同名电影改编而成，影片以美国西雅图为背景，讲述两名男女在异国他乡的爱情故事。',
        proType: 1,
        proProcess: '46%',
        proMoney: '1234',
        proPeople: '123',
        proDays: '12'
    }, {
        imgSrc: 'img/hot-img2.png',
        proName: '《封神传奇》再现江湖',
        proCon: '中国星',
        proInfo: '超模明星足球队授权电影制作公司超模明星足球队授权电影制作公司超模明星足球队授权电影制作公司超模明星足球队授权电影制作公司',
        proType: 2,
        proProcess: '12%',
        proMoney: '3789',
        proPeople: '323',
        proDays: '22'
    }, {
        imgSrc: 'img/hot-img3.png',
        proName: '《超脑特工》再现江湖',
        proCon: '东印度',
        proInfo: '超模明星足球队授权电影制作公司超模明星足球队授权电影制作公司超模明星足球队授权电影制作公司超模明星足球队授权电影制作公司',
        proType: 0,
        proProcess: '50%',
        proMoney: '1423',
        proPeople: '1223',
        proDays: '5'
    }, {
        imgSrc: 'img/hot-img4.png',
        proName: '《11111》再现江湖',
        proCon: '2222',
        proInfo: '超模明星足球队授权电影制作公司超模明星足球队授权电影制作公司超模明星足球队授权电影制作公司超模明星足球队授权电影制作公司',
        proType: 3,
        proProcess: '30%',
        proMoney: '14232',
        proPeople: '12233',
        proDays: '0'
    }];
    $scope.prosType = ['微电影', '话剧', '电影','电视剧'];
    $scope.showPro = hotPro[0];
    $scope.showProIndex = $scope.showPro.proType;
    $scope.showProFn = function(i){
    	$scope.showProIndex = i;
    	for(var j = 0;j < hotPro.length;j++){
    		if( i == hotPro[j].proType ){
    			$scope.showPro = hotPro[j];
    			break;
    		}
    	}
    }

}]);
