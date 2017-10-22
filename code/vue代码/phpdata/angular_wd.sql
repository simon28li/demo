-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 2017-06-26 12:56:27
-- 服务器版本： 10.1.13-MariaDB
-- PHP Version: 5.6.20

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `angular`
--

-- --------------------------------------------------------

--
-- 表的结构 `angular_wd`
--

CREATE TABLE `angular_wd` (
  `branch_id` int(11) NOT NULL,
  `branch_type` varchar(20) COLLATE utf8_bin NOT NULL,
  `branch_name` varchar(100) COLLATE utf8_bin NOT NULL,
  `branch_logo` varchar(200) COLLATE utf8_bin NOT NULL,
  `branch_tel` varchar(50) COLLATE utf8_bin NOT NULL,
  `branch_addr` varchar(100) COLLATE utf8_bin NOT NULL,
  `branch_remark` text COLLATE utf8_bin NOT NULL,
  `view_count` int(11) NOT NULL,
  `favorite_count` bigint(20) NOT NULL,
  `branch_score` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- 转存表中的数据 `angular_wd`
--

INSERT INTO `angular_wd` (`branch_id`, `branch_type`, `branch_name`, `branch_logo`, `branch_tel`, `branch_addr`, `branch_remark`, `view_count`, `favorite_count`, `branch_score`) VALUES
(1, '社区支行', '平安银行广州奥林匹克花园社区支行', 'http://pic.baike.soso.com/p/20140211/20140211112400-668472408.jpg', '020-38889807,020-38889808', '广州市番禺区桥南街市良路9号番禺奥林匹克花园运动城21号商铺', '<table width=''990'' align=''center'' style=''text-transform: none; text-indent: 0px; letter-spacing: normal; font-family: 宋体; word-spacing: 0px; -webkit-text-stroke-width: 0px;'' border=''0'' cellspacing=''0'' cellpadding=''0''><tbody><tr><td height=''8'' style=''color: rgb(102, 102, 102); font-family: 宋体; font-size: 12px;'' colspan=''3''></td></tr><tr valign=''top''><td width=''252'' height=''100%'' style=''color: rgb(102, 102, 102); font-family: 宋体; font-size: 12px;''><table width=''100%'' height=''100%'' class=''box'' style=''border: 1px solid rgb(174, 207, 227); background-color: rgb(241, 250, 255);'' border=''0'' cellspacing=''3'' cellpadding=''2''><tbody><tr><td class=''box'' valign=''top'' style=''color: rgb(102, 102, 102); font-family: 宋体; font-size: 12px; background-color: rgb(255, 255, 255);''><div class=''blockhead'' style=''width: 236px; color: rgb(255, 255, 255); padding-top: 5px; padding-bottom: 5px; padding-left: 10px; font-family: 宋体; font-size: 14px; font-weight: bold; background-color: rgb(255, 0, 0);''>在线演示V9.8版</div><table width=''100%'' border=''0'' cellspacing=''5'' cellpadding=''0''><tbody><tr><td class=''title'' style=''width: 218px; height: 17px; color: rgb(63, 166, 0); padding-bottom: 3px; padding-left: 8px; font-family: 宋体; font-size: 12px; font-weight: bold; background-image: url(''http://www.ewebeditor.net/images/bg_title0.gif'');''><span style=''padding-right: 4px; padding-left: 4px; font-size: 14px; background-color: rgb(255, 255, 255);''>新手上路</span></td></tr><tr><td class=''sub1'' style=''color: rgb(102, 102, 102); padding-left: 18px; font-family: 宋体; font-size: 12px; background-image: url(''http://www.ewebeditor.net/images/arrow1.gif''); background-repeat: no-repeat no-repeat;''><a style=''color: rgb(102, 102, 102); font-size: 12px; text-decoration: underline;'' href=''http://www.ewebeditor.net/demo/''>系统自带样式方案</a></td></tr><tr><td class=''sub1'' style=''color: rgb(102, 102, 102); padding-left: 18px; font-family: 宋体; font-size: 12px; background-image: url(''http://www.ewebeditor.net/images/arrow1.gif''); background-repeat: no-repeat no-repeat;''><a style=''color: rgb(102, 102, 102); font-size: 12px; text-decoration: underline;'' href=''http://www.ewebeditor.net/ewebeditor/_example/'' target=''_blank''>系统自带示例程序</a></td></tr><tr><td class=''sub1'' style=''color: rgb(102, 102, 102); padding-left: 18px; font-family: 宋体; font-size: 12px; background-image: url(''http://www.ewebeditor.net/images/arrow1.gif''); background-repeat: no-repeat no-repeat;''><a style=''color: rgb(102, 102, 102); font-size: 12px; text-decoration: underline;'' href=''http://www.ewebeditor.net/demo/backend.asp''>系统自带后台管理</a></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table>', 10, 1256, 5),
(2, '社区支行', '平安银行广州东山一品社区支行', 'http://pic.baike.soso.com/p/20140211/20140211112444-1429123385.jpg', '020-38889807,020-38889808', '广州市越秀区水荫路49号116房', '', 0, 0, 0),
(3, '小微支行', '平安银行广州新塘牛仔城小微支行', 'http://pic.baike.soso.com/p/20140211/20140211112444-1429123385.jpg', '020-38889807,020-38889808', '广州市增城新塘镇新南大道东82号28幢393号首层', '', 0, 0, 0),
(4, '小微支行', '平安银行广州步云天地小微支行', 'http://pic.baike.soso.com/p/20140211/20140211112444-1429123385.jpg', '020-38889807,020-38889808', '广州市荔湾区站西路26号D217、D218、D219商铺', '', 0, 0, 0);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
