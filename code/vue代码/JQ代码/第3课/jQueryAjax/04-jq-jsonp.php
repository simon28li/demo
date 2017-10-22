<?php
	$name=$_REQUEST['username'];
	$pwd=$_REQUEST['password'];
	
	$array=array("name"=>$name,"password"=>$pwd);
	
	if(isset($_REQUEST['callback'])){
		$cb=$_REQUEST['callback'];
		echo ';'.$cb.'('.json_encode($array).');';
	}else{		
		echo json_encode($array);
	}
?>