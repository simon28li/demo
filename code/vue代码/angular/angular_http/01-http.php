<?php
	$name=$_REQUEST['username'];
	$pwd=$_REQUEST['password'];
	
	$data=array('username'=>$name,'password'=>$pwd);
	echo json_encode($data);
?>
