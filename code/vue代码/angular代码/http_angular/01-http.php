<?php
	header('Access-Allow-Origin:*');
	$name=$_REQUEST['username'];
	$pwd=$_REQUEST['pwd'];
	$data=array('username'=>$name,'passowrd'=>$pwd);
	
	echo json_encode($data);
?>