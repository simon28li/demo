<?php
header('content-type:text/html;charset="utf-8"');
require_once("./data.class.php");//引入**文件
//实例化类
$stuObj = new Data();
//调用类里面的方法
$stu = $stuObj->getDataFromStu();
print_r($stu);
exit(0);
?>