<?php

    require_once("./db.class.php");//加载文件一次
 
  	class Data{
  		
		//获取学生信息表数据
		public function getDataFromStu(){
			$db = new DB();//实例化类
			@$data = $db->getObjListBySql("SELECT `name`,`age`,`score` FROM `student` order by `score` desc ");
			//从数据库查询信息
			if(count($data)!=0){
				return $data;
			}else {
				return null;
			}
			
			
		}
		
		//获取ajax的数据
		public function getDataFromAjax(){
			$db = new DB();//实例化类
			@$data = $db->getObjListBySql("SELECT * FROM `ajax` order by `date` desc ");
			//从数据库查询信息
			if(count($data)!=0){
				return $data;
			}else {
				return null;
			}
		}

		//获取angular_wd的数据
		public function getDataFromAngular(){
			$db = new DB();
			@$data = $db->getObjListBySql("SELECT * FROM `angular_wd` ");
			//从数据库查询信息
			if(count($data)!=0){
				return $data;
			}else {
				return null;
			}
		}
		
		
		//获取angular_ajax的数据
		public function getDataFromAngularById($id){
			$db = new DB();
			@$data = $db->getObjListBySql("SELECT * FROM `angular_wd` where branch_id = ".$id);
			//从数据库查询信息
			if(count($data)!=0){
				return $data[0];
			}else {
				return null;
			}
		}
		//获取angular_shop所有的数据
		public function getDataFromAnShop(){
			$db = new DB();
			@$data = $db->getObjListBySql("SELECT * FROM `angular_shop`");
			//从数据库查询信息
			if(count($data)!=0){
				return $data;
			}else {
				return null;
			}
		}
		
		//获取angular_shop指定id的数据
		public function getDataFromAnShopById($id){
			$db = new DB();
			@$data = $db->getObjListBySql("SELECT * FROM `angular_shop` where shop_id = ".$id);
			//从数据库查询信息
			if(count($data)!=0){
				return $data[0];
			}else {
				return null;
			}
		}
		
	} 
  
?>