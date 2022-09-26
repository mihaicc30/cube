SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `cube_events`
--
CREATE DATABASE IF NOT EXISTS `cube_events` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `cube_events`;

-- --------------------------------------------------------

--
-- Table structure for table `contact_messages`
--

DROP TABLE IF EXISTS `contact_messages`;
CREATE TABLE IF NOT EXISTS `contact_messages` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `message` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=23 DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `lineup`
--

DROP TABLE IF EXISTS `lineup`;
CREATE TABLE IF NOT EXISTS `lineup` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `attributes` varchar(255) NOT NULL,
  `performing_on` varchar(255) NOT NULL,
  `year` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `lineup`
--

INSERT INTO `lineup` (`id`, `name`, `attributes`, `performing_on`, `year`, `image`) VALUES
(1, 'DJ HEARTY HALL', 'DANCE, ELECTRO, DUBSTEP, HIPHOP', '1 - 31 OCT 2022', '2022', '../img/artist/pic (1).jpg'),
(2, 'DJ BIG STONE', 'JUNGLE, ELECTRO, TECHNO, HIPHOP', '1 - 31 OCT 2022', '2022', '../img/artist/pic (2).jpg'),
(3, 'DJ DEEPMIND', 'JUNGLE, HOUSE, DUBSTEP', '1 - 31 OCT 2022', '2022', '../img/artist/pic (3).jpg'),
(4, 'DJ RANDOMIO', 'JUNGLE, HOUSE, DUBSTEP', '1 - 31 OCT 2021', '2021', '../img/artist/pic (4).jpg'),
(5, 'DJ CHOCOLATE', 'ROCK, CLASSIC', '1 - 31 OCT 2021', '2021', '../img/artist/pic (5).jpg');

-- --------------------------------------------------------

--
-- Table structure for table `subscribers`
--

DROP TABLE IF EXISTS `subscribers`;
CREATE TABLE IF NOT EXISTS `subscribers` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
