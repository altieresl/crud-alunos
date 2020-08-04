-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 04, 2020 at 05:22 AM
-- Server version: 10.4.13-MariaDB
-- PHP Version: 7.4.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `alunos`
--

-- --------------------------------------------------------

--
-- Table structure for table `alunos`
--

CREATE TABLE `alunos` (
  `id` int(11) NOT NULL,
  `name` varchar(100) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `address` varchar(100) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `url_imagem` varchar(100) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Dumping data for table `alunos`
--

INSERT INTO `alunos` (`id`, `name`, `address`, `url_imagem`, `created_at`, `updated_at`) VALUES
(1, 'Teste nome1', 'End, 9482', 'teste_7.jpg', '2020-08-03 22:35:57', '2020-08-03 23:21:05'),
(2, 'dsadsadas', '3123dsasa', 'teste2.jpg', '2020-08-03 22:41:55', '2020-08-03 23:41:47'),
(4, 'ddasd', 'dasdsadasd', 'teste_8.jpg', '2020-08-03 23:42:37', '2020-08-03 23:42:37');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `alunos`
--
ALTER TABLE `alunos`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `alunos`
--
ALTER TABLE `alunos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
