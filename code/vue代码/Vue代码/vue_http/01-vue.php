<?php
	$name=$_REQUEST['username'];
	$pwd=$_REQUEST['password'];
	$data=array('username'=>$name,"password"=>$pwd);
	
	$cb=isset($_GET['cb'])?$_GET['cb']:null;
	if($cb){
		echo $cb.'('.json_encode($data).')';
	}else{
		echo json_encode($data);
	}
	
?>