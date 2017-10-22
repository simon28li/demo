<?php
	//加载文件
	require_once("./data.class.php");
	
	//进行实例化
	$dataObj = new Data();
	//调用类里面的方法
	$news = $dataObj->getDataFromAjax();
	//打印数组
	//print_r($news);
	//遇到错误返回
	error_reporting(0);
	
	//json  string 
	//跨域  后台 写下面
	$callback = $_GET['cb'];//获取前台传过来的get数据   $_POST
	$result = json_encode($news);//将数组转json数据
	echo $callback."($result)";
	exit;//结束		
?>