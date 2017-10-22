<?php
	$name=$_REQUEST['username'];
	$pwd=$_REQUEST['password'];
	
	$array=array("name"=>$name,"password"=>$pwd);
	
	echo json_encode($array);
?>