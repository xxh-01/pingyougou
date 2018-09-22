 //品牌控制层 
app.controller('baseController' ,function($scope){	

	$scope.searchEntity = {};//封装的搜索条件，默认为空
    $scope.selectIds = [];//选中的ID集合 
    $scope.flag = false;//全选框默认为false
    //重新加载列表 数据
    $scope.reloadList=function(){
		//重新加载列表时，将之前选择的复选框清空
        $scope.flag = false;
        $scope.selectAll = false;
        $scope.selectIds = [];
    	//切换页码  
    	$scope.search( $scope.paginationConf.currentPage, $scope.paginationConf.itemsPerPage);	   	
    }
    
	//分页控件配置 
	$scope.paginationConf = {
         currentPage: 1,
         totalItems: 10,
         itemsPerPage: 10,
         perPageOptions: [10, 20, 30, 40, 50],
         onChange: function(){
        	 $scope.reloadList();//重新加载
     	 }
	}; 
	

	//批量删除时，点击复选框，更新选择的要删除的选项,同时判断全选框选则状态
    $scope.updateSelection = function ($event, id) {
        if ($event.target.checked) {
            $scope.selectIds.push(id);
        } else {
            $scope.selectIds.splice($scope.selectIds.indexOf(id), 1);
        }
        //判断全选框选则状态----如果选则的复选框数量跟当前页显示的数量一致，就勾选，否则不勾选
        if ($scope.selectIds.length == $scope.paginationConf.itemsPerPage) {
            $scope.selectAll = true;
        } else {
            $scope.selectAll = false;
        }
    }
	
	 //全选/全不选
    $scope.updateSelect = function (event) {
        if (event.target.checked) {
            $scope.flag = true;
            $scope.selectIds = [];
            for (var i = 0; i < $scope.list.length; i++) {
                var object = $scope.list[i];
                $scope.selectIds.push(object.id);
            }
        } else {
            $scope.flag = false;
            $scope.selectIds = [];
        }
    }
	
});	