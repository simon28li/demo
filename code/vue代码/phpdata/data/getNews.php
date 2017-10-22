<?php
	header('content-type:text/html;charset="utf-8"');
	require_once("./data.class.php");
	//给类实例化 
	$dataObj = new Data();
	$news = $dataObj->getDataFromAjax();//调用类下面的函数
	//print_r($news);
	//exit();
	$callback = $_GET['callback'];
	$result = json_encode($news);//将数组转json数据
	echo $callback."($result)";
	exit();
	
?>