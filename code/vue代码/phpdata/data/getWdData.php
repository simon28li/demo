<?php
header('content-type:text/html;charset="utf-8"');
	require_once("./data.class.php");//加载一个文件，加载一次
	$dataObj = new Data();//新建对象
	$id= $_GET['id'];
	$news = $dataObj->getDataFromAngularById($id);//调用对象里的一个方法
	
//	print_r($news);exit(0);
	
	$items = array();
	$items = $dataObj->getDataFromAnShop();
	
	$item = 'ceshi';
	$news->shops = (object)$item;
	$news->shops->items = $items;
	$news->shops->pagination =  '2';
	error_reporting(0);
//	print_r($news);//打印数组
//	exit;//程序结束

	$callback = $_GET['callback'];//接收js传过来的值
	$result = json_encode($news);//将数组转成json格式  json_decode()将json转成数组
	echo $callback."($result)";//把返回值和json连成字符串
	exit;
