-- phpMyAdmin SQL Dump
-- version 3.5.8
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Aug 21, 2013 at 09:03 PM
-- Server version: 5.5.32
-- PHP Version: 5.4.17

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `695107`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE IF NOT EXISTS `admin` (
  `id` int(10) NOT NULL,
  `username` varchar(50) NOT NULL,
  `passcode` varchar(50) NOT NULL,
  `zipcode` int(10) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`id`, `username`, `passcode`, `zipcode`) VALUES
(1, 'anant', 'anant', 110092),
(2, 'test', 'test', 0),
(3, 'amrit', 'a', 110029),
(4, 'help', 'help', 110099),
(5, 'bocar', 'bocar', 92100),
(6, 'yo', 'yo', 110029);

-- --------------------------------------------------------

--
-- Table structure for table `admin_merchant`
--

CREATE TABLE IF NOT EXISTS `admin_merchant` (
  `id` int(10) NOT NULL,
  `username` varchar(50) NOT NULL,
  `passcode` varchar(50) NOT NULL,
  `zipcode` int(10) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `admin_merchant`
--

INSERT INTO `admin_merchant` (`id`, `username`, `passcode`, `zipcode`) VALUES
(1, 'yo', 'yo', 110029),
(2, 'Gucci', 'a', 90210),
(3, 'Louis Vuitton', 'a', 90210);

-- --------------------------------------------------------

--
-- Table structure for table `amrit`
--

CREATE TABLE IF NOT EXISTS `amrit` (
  `category` varchar(50) NOT NULL,
  `product` varchar(50) NOT NULL,
  `brand` varchar(50) NOT NULL,
  `Store` varchar(50) NOT NULL,
  `size` varchar(50) NOT NULL,
  `color` varchar(50) NOT NULL,
  `regularpriCe` varchar(50) NOT NULL,
  `yourprice` varchar(50) NOT NULL,
  `wheretofindit` varchar(50) NOT NULL,
  `promocode` varchar(50) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `amrit`
--

INSERT INTO `amrit` (`category`, `product`, `brand`, `Store`, `size`, `color`, `regularpriCe`, `yourprice`, `wheretofindit`, `promocode`) VALUES
('Tshirt', 'Bowery Slim in Oxford', 'Gucci', 'Green Park', '11', '22', '128$', '88$', 'Online', 'On Sale'),
('Tshirt', 'Bowery Slim in Oxford', 'Gucci', 'Green Park', 'large', 'green', '128$', '88$', 'Online', 'On Sale'),
('Tshirt', 'Bowery Slim in Oxford', 'Gucci', 'Green Park', 'small', 'blue', '128$', '88$', 'Online', 'On Sale'),
('SweatShirt', 'Tailored', 'Gucci', 'Green Park', 'small', 'blue', '299 $', '239$', 'Online', 'yes'),
('Pants', 'Melo M9', 'Gucci', 'Green Park', 'small', 'blue', '199 $', '139$', 'Online', 'Jeff124'),
('Tshirt', 'Bowery Slim in Oxford', 'Gucci', 'Green Park', 'small', 'blue', '128$', '88$', 'Online', 'On Sale'),
('Tshirt', 'Bowery Slim in Oxford', 'Louis Vuitton', 'Hauz Khas', 'small', 'green', '128$', '88$', 'Online', 'On Sale'),
('Tshirt', 'Bowery Slim in Oxford', 'Gucci', 'Green Park', 'small', 'blue', '128$', '88$', 'Online', 'On Sale'),
('Tshirt', 'Bowery Slim in Oxford', 'Gucci', 'Green Park', 'large', 'blue', '128$', '88$', 'Online', 'On Sale'),
('Tshirt', 'Bowery Slim in Oxford', 'Gucci', 'Green Park', 'small', 'blue', '128$', '88$', 'Online', 'On Sale'),
('Tshirt', 'Bowery Slim in Oxford', 'Gucci', 'Green Park', 'large', 'blue', '128$', '88$', 'Online', 'On Sale'),
('Tshirt', 'Bowery Slim in Oxford', 'Gucci', 'Green Park', 'small', 'green', '128$', '88$', 'Online', 'On Sale'),
('Tshirt', 'Bowery Slim in Oxford', 'Gucci', 'Green Park', 'large', 'blue', '128$', '88$', 'Online', 'On Sale'),
('Tshirt', 'Bowery Slim in Oxford', 'Gucci', 'Green Park', 'small', 'blue', '128$', '88$', 'Online', 'On Sale'),
('Tshirt', 'Bowery Slim in Oxford', 'Louis Vuitton', 'Green Park', 'small', 'blue', '128$', '88$', 'Online', 'On Sale'),
('SweatShirt', 'Tailored', 'Louis Vuitton', 'Hauz Khas', 'small', 'red', '299 $', '239$', 'Online', 'yes'),
('Tshirt', 'Bowery Slim in Oxford', 'Gucci', 'Green Park', 'xxl', 'green', '128$', '88$', 'Online', 'On Sale');

-- --------------------------------------------------------

--
-- Table structure for table `anant`
--

CREATE TABLE IF NOT EXISTS `anant` (
  `category` varchar(50) NOT NULL,
  `product` varchar(50) NOT NULL,
  `brand` varchar(50) NOT NULL,
  `Store` varchar(50) NOT NULL,
  `size` varchar(50) NOT NULL,
  `color` varchar(50) NOT NULL,
  `regularpriCe` varchar(50) NOT NULL,
  `yourprice` varchar(50) NOT NULL,
  `wheretofindit` varchar(50) NOT NULL,
  `promocode` varchar(50) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `anant`
--

INSERT INTO `anant` (`category`, `product`, `brand`, `Store`, `size`, `color`, `regularpriCe`, `yourprice`, `wheretofindit`, `promocode`) VALUES
('Tshirt', 'Bowery Slim in Oxford', 'Gucci', 'Green Park', 'small', 'green', '128$', '88$', 'Online', 'On Sale'),
('Tshirt', 'Bowery Slim in Oxford', 'Gucci', 'Green Park', 'large', 'red', '128$', '88$', 'Online', 'On Sale'),
('SweatShirt', 'Tailored', 'Gucci', 'Green Park', 'xl', 'green', '299 $', '239$', 'Online', 'yes'),
('Tshirt', 'Bowery Slim in Oxford', 'Gucci', 'Green Park', 'small', 'green', '128$', '88$', 'Online', 'On Sale'),
('Tshirt', 'Bowery Slim in Oxford', 'Gucci', 'Green Park', 'xl', 'black', '128$', '88$', 'Online', 'On Sale'),
('Pants', 'Melo M9', 'Gucci', 'Green Park', 'small', 'green', '199 $', '139$', 'Online', 'Jeff124'),
('Pants', 'Melo M9', 'Gucci', 'Green Park', 'small', 'red', '199 $', '139$', 'Online', 'Jeff124'),
('Pants', 'Melo M9', 'Gucci', 'Green Park', 'small', 'red', '199 $', '139$', 'Online', 'Jeff124');

-- --------------------------------------------------------

--
-- Table structure for table `bocar`
--

CREATE TABLE IF NOT EXISTS `bocar` (
  `category` varchar(50) NOT NULL,
  `product` varchar(50) NOT NULL,
  `brand` varchar(50) NOT NULL,
  `Store` varchar(50) NOT NULL,
  `size` varchar(50) NOT NULL,
  `color` varchar(50) NOT NULL,
  `regularpriCe` varchar(50) NOT NULL,
  `yourprice` varchar(50) NOT NULL,
  `wheretofindit` varchar(50) NOT NULL,
  `promocode` varchar(50) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `bocar`
--

INSERT INTO `bocar` (`category`, `product`, `brand`, `Store`, `size`, `color`, `regularpriCe`, `yourprice`, `wheretofindit`, `promocode`) VALUES
('Tshirt', 'Bowery Slim in Oxford', 'Gucci', 'Green Park', 'small', 'green', '128$', '88$', 'Online', 'On Sale'),
('SweatShirt', 'Tailored', 'Gucci', 'Green Park', 'small', 'green', '299 $', '239$', 'Online', 'yes');

-- --------------------------------------------------------

--
-- Table structure for table `help`
--

CREATE TABLE IF NOT EXISTS `help` (
  `category` varchar(50) NOT NULL,
  `product` varchar(50) NOT NULL,
  `brand` varchar(50) NOT NULL,
  `Store` varchar(50) NOT NULL,
  `size` varchar(50) NOT NULL,
  `color` varchar(50) NOT NULL,
  `regularpriCe` varchar(50) NOT NULL,
  `yourprice` varchar(50) NOT NULL,
  `wheretofindit` varchar(50) NOT NULL,
  `promocode` varchar(50) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `help`
--

INSERT INTO `help` (`category`, `product`, `brand`, `Store`, `size`, `color`, `regularpriCe`, `yourprice`, `wheretofindit`, `promocode`) VALUES
('SweatShirt', 'Tailored', 'Gucci', 'Green Park', 'small', 'blue', '299 $', '239$', 'Online', 'yes');

-- --------------------------------------------------------

--
-- Table structure for table `notification`
--

CREATE TABLE IF NOT EXISTS `notification` (
  `merchant` varchar(50) NOT NULL,
  `msg` varchar(50) NOT NULL,
  `time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `notification`
--

INSERT INTO `notification` (`merchant`, `msg`, `time`) VALUES
('Louis Vuitton', '60% off on sweatshirts', '2013-08-22 01:38:51'),
('Gucci', '50% off on t shirts this weekend', '2013-08-22 01:37:59'),
('Louis Vuitton', '70% off on tshirts', '2013-08-22 01:40:30');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
