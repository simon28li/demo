-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 2017-06-26 12:55:22
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
-- 表的结构 `angular_shop`
--

CREATE TABLE `angular_shop` (
  `shop_id` int(11) NOT NULL,
  `shop_name` varchar(50) COLLATE utf8_bin NOT NULL,
  `shop_type` varchar(20) COLLATE utf8_bin NOT NULL,
  `shop_logo` varchar(200) COLLATE utf8_bin NOT NULL,
  `shop_preferential` varchar(200) COLLATE utf8_bin NOT NULL,
  `view_count` int(11) NOT NULL,
  `favorite_count` int(11) NOT NULL,
  `capita_consumption` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- 转存表中的数据 `angular_shop`
--

INSERT INTO `angular_shop` (`shop_id`, `shop_name`, `shop_type`, `shop_logo`, `shop_preferential`, `view_count`, `favorite_count`, `capita_consumption`) VALUES
(1, '商户名称1', '美食', 'http://sh.sskk.com/uploadpics/201012/tp201012231134165686p.jpg', '优惠说明：使用平安信用卡全场8折优惠', 125, 36, 45),
(2, '商户名称2', '电影', 'http://sh.sskk.com/uploadpics/201012/tp201012231134165686p.jpg', '优惠说明：使用平安信用卡全场8折优惠', 1256, 698, 0);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
