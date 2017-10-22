<?php
header('content-type:text/html;charset="utf-8"');
	require_once("./data.class.php");//加载一个文件，加载一次
	$dataObj = new Data();//新建对象
	
	$news = $dataObj->getDataFromAngular();//调用对象里的一个方法
	$item = 'ceshi';
	$test = (object)$item;
	$test-> branchs = array();
	$test->branchs = $news;
	error_reporting(0);
	$callback = $_GET['callback'];//接收js传过来的值
	$result = json_encode($test);//将数组转成json格式  json_decode()将json转成数组
	echo $callback."($result)";//把返回值和json连成字符串
	exit;
