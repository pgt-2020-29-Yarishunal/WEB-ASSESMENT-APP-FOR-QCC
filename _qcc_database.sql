-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: sql101.byetcluster.com
-- Generation Time: Jan 13, 2022 at 09:30 PM
-- Server version: 5.7.36-39
-- PHP Version: 7.2.22

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `qcc_database`
--

-- --------------------------------------------------------

--
-- Table structure for table `data_nilai`
--

CREATE TABLE `data_nilai` (
  `id` int(11) NOT NULL,
  `username` varchar(20) NOT NULL,
  `waktu` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `circle_team` varchar(20) NOT NULL,
  `kriteria_A1` double NOT NULL,
  `kriteria_A2` double NOT NULL,
  `kriteria_A3` double NOT NULL,
  `kriteria_B1` double NOT NULL,
  `kriteria_B2` double NOT NULL,
  `kriteria_B3` double NOT NULL,
  `kriteria_C1` double NOT NULL,
  `kriteria_C2` double NOT NULL,
  `kriteria_C3` double NOT NULL,
  `kriteria_D1` double NOT NULL,
  `kriteria_D2` double NOT NULL,
  `kriteria_E1` double NOT NULL,
  `kriteria_F1` double NOT NULL,
  `kriteria_G1` double NOT NULL,
  `kriteria_H1` double NOT NULL,
  `kriteria_H2` double NOT NULL,
  `kriteria_H3` double NOT NULL,
  `kriteria_H4` double NOT NULL,
  `kriteria_I1` double NOT NULL,
  `kriteria_J1` double NOT NULL,
  `kriteria_J2` double NOT NULL,
  `kriteria_J3` double NOT NULL,
  `kriteria_K1` double NOT NULL,
  `kriteria_K2` double NOT NULL,
  `kriteria_L1` double NOT NULL,
  `kriteria_L2` double NOT NULL,
  `kriteria_M1` double NOT NULL,
  `kriteria_N1` double NOT NULL,
  `kriteria_N2` double NOT NULL,
  `kriteria_O1` double NOT NULL,
  `kriteria_O2` double NOT NULL,
  `kriteria_O3` double NOT NULL,
  `kriteria_P1` double NOT NULL,
  `kriteria_Q1` double NOT NULL,
  `kriteria_Q2` double NOT NULL,
  `kriteria_Q3` double NOT NULL,
  `kriteria_Q4` double NOT NULL,
  `kriteria_Q5` double NOT NULL,
  `kriteria_R1` double NOT NULL,
  `kriteria_R2` double NOT NULL,
  `kriteria_S1` double NOT NULL,
  `komen` varchar(10000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `data_nilai`
--

INSERT INTO `data_nilai` (`id`, `username`, `waktu`, `circle_team`, `kriteria_A1`, `kriteria_A2`, `kriteria_A3`, `kriteria_B1`, `kriteria_B2`, `kriteria_B3`, `kriteria_C1`, `kriteria_C2`, `kriteria_C3`, `kriteria_D1`, `kriteria_D2`, `kriteria_E1`, `kriteria_F1`, `kriteria_G1`, `kriteria_H1`, `kriteria_H2`, `kriteria_H3`, `kriteria_H4`, `kriteria_I1`, `kriteria_J1`, `kriteria_J2`, `kriteria_J3`, `kriteria_K1`, `kriteria_K2`, `kriteria_L1`, `kriteria_L2`, `kriteria_M1`, `kriteria_N1`, `kriteria_N2`, `kriteria_O1`, `kriteria_O2`, `kriteria_O3`, `kriteria_P1`, `kriteria_Q1`, `kriteria_Q2`, `kriteria_Q3`, `kriteria_Q4`, `kriteria_Q5`, `kriteria_R1`, `kriteria_R2`, `kriteria_S1`, `komen`) VALUES
(28, '14-0382', '2022-01-05 04:49:57', 'Enviro', 0.5, 0.5, 0.75, 0.75, 0.5, 0.75, 0.5, 0.5, 0.75, 0.5, 0.75, 1.5, 1, 1, 0.5, 0.5, 0.5, 0.5, 1, 0.5, 0.5, 0.5, 1, 1.5, 5, 5, 5, 2.5, 2.5, 1.6, 1.7, 1.7, 7.5, 0.75, 0.75, 0.5, 0.75, 0.5, 0.75, 0.75, 1, 'Perdalam kembali pengetahuan tentang metode penulisan risalah 8 step dan penggunaan 7 tools.Pengetahuan tersebut mestinya harus merata ke semua anggota team.'),
(30, '06-0063', '2022-01-05 06:26:43', 'Enviro', 0.75, 0.75, 1, 0.75, 0.5, 0.75, 0.5, 0.5, 0.75, 0.75, 0.5, 1.5, 1.5, 1, 0.75, 0.75, 0.5, 0.75, 1, 0.75, 0.5, 0.5, 1.5, 1.5, 7.5, 7.5, 5, 3.75, 3.75, 1.6, 2.5, 1.7, 7.5, 0.75, 0.75, 0.5, 0.5, 0.5, 0.75, 1.13, 1.5, 'Dari koordinasi tim perlu ditingkatkan, knowledge masing2 anggota belum terdistribusi scr efektif'),
(31, '91-0842', '2022-01-05 07:28:41', 'Enviro', 0.75, 1, 0.75, 0.5, 0.5, 0.75, 0.75, 0.75, 0.75, 1, 0.75, 2, 1.5, 1.5, 0.5, 0.75, 0.75, 0.75, 1.5, 0.5, 0.5, 0.5, 1, 1.5, 7.5, 5, 5, 3.75, 2.5, 2.5, 2.5, 2.5, 7.5, 0.5, 0.75, 0.75, 0.75, 0.75, 1.13, 1.13, 1, 'Di harapkan dapat mengurangi pemakaian plastik gudang ban B lebih luas lagi'),
(32, '91-0842', '2022-01-05 08:12:32', 'Maxio', 0.5, 0.75, 0.5, 0.5, 0.75, 0.5, 0.5, 0.75, 0.5, 0.75, 0.5, 1.5, 1.5, 1, 0.5, 0.5, 0.5, 0.5, 1, 0.5, 0.5, 0.75, 1.5, 1, 5, 7.5, 7.5, 2.5, 2.5, 1.6, 1.7, 1.7, 7.5, 0.5, 0.75, 0.75, 0.5, 0.5, 1.13, 1.13, 1, 'Diharapkan ke depannya lebih baik lagi'),
(33, '14-0382', '2022-01-05 11:42:28', 'Maxio', 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.75, 0.5, 0.5, 1, 1, 1, 0.5, 0.5, 0.75, 0.5, 1.5, 0.75, 0.75, 0.75, 1.5, 1.5, 5, 5, 5, 2.5, 2.5, 2.5, 2.5, 1.7, 7.5, 0.75, 0.75, 0.75, 0.75, 0.75, 1.13, 0.75, 1, 'Perlu mempersiapkan bahan presentasi dengan komprehensif dan matang, sehingga tidak ada potensi kesalahan dalam pengambilan data. Seluruh member harus berperan aktif dalam segala kegiatan improvement.'),
(34, '14-0382', '2022-01-05 11:46:46', 'Manise', 0.5, 0.75, 0.5, 0.5, 0.5, 0.75, 0.5, 0.5, 0.75, 0.5, 0.5, 1.5, 1.5, 1, 0.5, 0.5, 0.5, 0.5, 1.5, 0.5, 0.5, 0.75, 1.5, 1, 5, 5, 5, 2.5, 2.5, 2.5, 2.5, 2.5, 7.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.75, 0.75, 0.5, 'Perlu mempersiapkan bahan presentasi dengan komprehensif dan matang, sehingga tidak ada potensi kesalahan dalam pengambilan data. Seluruh member harus berperan aktif dalam segala kegiatan improvement.'),
(37, '12-0816', '2022-01-05 15:16:52', 'Enviro', 0.5, 0.5, 0.5, 0.5, 0.3, 0.3, 0.3, 0.3, 0.3, 0.5, 0.3, 0.6, 1, 0.6, 0.5, 0.3, 0.3, 0.3, 1, 0.3, 0.3, 0.3, 0.6, 0.6, 3, 3, 5, 1.5, 1.5, 1.6, 1, 1, 7.5, 0.3, 0.3, 0.3, 0.3, 0.3, 0.5, 0.5, 1, 'pemahaman tentang langkah langkah QCC dari setiap anggotanya masih kurang dan perlu ditingkatkann'),
(39, '12-0816', '2022-01-05 15:24:36', 'Maxio', 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.5, 0.3, 0.6, 1, 0.6, 0.3, 0.3, 0.5, 0.3, 0.6, 0.3, 0.3, 0.3, 0.6, 1, 3, 5, 5, 1.5, 1.5, 1.6, 1, 1, 3, 0.3, 0.3, 0.5, 0.5, 0.3, 0.5, 0.5, 0.5, 'team QCC langsung jump solution,'),
(41, '12-0816', '2022-01-05 15:39:37', 'Manise', 0.5, 0.5, 0.5, 0.5, 0.5, 0.75, 0.3, 0.3, 0.3, 0.5, 0.3, 1, 1, 0.6, 0.5, 0.5, 0.75, 0.3, 1, 0.5, 0.3, 0.3, 1, 0.6, 3, 3, 5, 1.5, 1.5, 2.5, 2.5, 1, 5, 0.3, 0.3, 0.3, 0.3, 0.3, 0.5, 0.5, 0.5, 'kemampuan setiap anggota dalam melakukan kegiatan QCC perlu ditingkatkan'),
(46, '06-0063', '2022-01-06 01:43:25', 'Maxio', 0.5, 0.5, 0.75, 0.75, 0.5, 0.75, 0.5, 0.5, 0.75, 0.75, 0.75, 1.5, 1.5, 1.5, 0.5, 0.75, 0.75, 0.75, 1, 0.5, 0.5, 0.5, 1, 1.5, 7.5, 5, 5, 2.5, 3.75, 1.6, 1.7, 1.7, 7.5, 0.75, 0.5, 0.75, 0.5, 0.5, 1.13, 1.13, 1, 'Identifikasi masalah dan akar penyebab perlu dikembangkan lagi, analisa hasil angkut vs produksi harus diverifikasi kembali'),
(48, '06-0063', '2022-01-06 02:35:03', 'Manise', 0.5, 0.75, 0.5, 0.75, 0.5, 0.5, 0.5, 0.5, 0.75, 0.75, 0.75, 1.5, 1.5, 1, 0.5, 0.75, 0.5, 0.75, 1, 0.5, 0.5, 0.5, 1.5, 1, 5, 5, 5, 2.5, 3.75, 1.6, 2.5, 2.5, 7.5, 0.5, 0.5, 0.75, 0.5, 0.5, 0.75, 1.13, 1, 'Scr hasil improvement sudah cukup baik, namun scr penulisan risalah dan identifikasi masalah akar penyebab masih perlu bbrp perbaikan, blm ada standarisasi thp improvement'),
(52, '91-0842', '2022-01-06 13:39:02', 'Selektif', 0.75, 0.75, 0.75, 0.5, 0.75, 0.5, 0.75, 0.75, 0.5, 0.75, 0.5, 1.5, 1.5, 1, 0.75, 0.5, 0.75, 0.5, 1.5, 0.75, 0.75, 0.5, 1.5, 1, 7.5, 7.5, 5, 3.75, 2.5, 1.6, 2.5, 2.5, 10, 0.75, 0.75, 0.75, 0.5, 0.75, 1.13, 1.13, 1.5, 'Diharapkan rencana QCC selanjutnya yang mengarah pada digitalisasi dapat segera diwujudkan'),
(53, '91-0842', '2022-01-06 13:53:40', 'Misqueen', 0.5, 0.75, 0.75, 0.75, 0.5, 0.75, 0.5, 0.5, 0.5, 0.75, 0.5, 1, 1, 1, 0.75, 0.5, 0.5, 0.5, 1, 0.5, 0.5, 0.5, 1.5, 1, 5, 5, 5, 2.5, 3.75, 1.6, 1.7, 2.5, 7.5, 0.75, 0.75, 0.75, 0.5, 0.5, 1.13, 1.13, 1.5, 'Semoga target yang telah ditetapkan dapat segera diwujudkan'),
(54, '91-0842', '2022-01-06 14:09:01', 'Masker', 0.75, 0.75, 0.5, 0.75, 0.75, 0.5, 0.75, 0.5, 0.5, 0.75, 0.75, 1.5, 1.5, 1.5, 0.75, 0.5, 0.75, 0.75, 1.5, 0.75, 0.5, 0.75, 1.5, 1, 7.5, 5, 7.5, 3.75, 3.75, 1.6, 1.7, 1.7, 7.5, 0.75, 0.5, 0.5, 0.5, 0.5, 1.13, 0.75, 1.5, 'Semoga dengan dilakukannya QCC ini penyebab claim dari Mixing karena FM dapat tereleminasi'),
(56, '12-0816', '2022-01-07 02:17:42', 'Selektif', 0.5, 0.3, 0.5, 0.5, 0.5, 0.75, 0.5, 0.3, 0.3, 0.5, 0.3, 1, 1, 0.6, 0.5, 0.3, 0.3, 0.3, 0.6, 0.3, 0.3, 0.5, 0.6, 0.6, 5, 3, 5, 1.5, 2.5, 1, 1, 1.7, 7.5, 0.3, 0.5, 0.5, 0.3, 0.3, 0.75, 0.75, 1, 'Evidence standarisasi tidak dilampirkan pada risalah'),
(58, '12-0816', '2022-01-07 02:39:12', 'Misqueen', 0.5, 0.3, 0.5, 0.3, 0.3, 0.5, 0.3, 0.3, 0.3, 0.3, 0.3, 0.6, 1, 0.6, 0.3, 0.3, 0.3, 0.3, 0.6, 0.3, 0.3, 0.3, 1, 1, 3, 3, 7.5, 1.5, 1.5, 1, 1, 1, 3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.5, 0.5, 0.5, 'Risalah tolong dilengkapi'),
(59, '12-0816', '2022-01-07 02:44:34', 'Masker', 0.75, 0.75, 0.75, 0.75, 0.75, 0.75, 0.5, 0.5, 0.5, 0.5, 0.75, 1, 1.5, 1, 0.75, 0.75, 0.5, 0.75, 1, 0.75, 0.75, 0.75, 1.5, 1.5, 5, 5, 7.5, 3.75, 3.75, 2.5, 2.5, 1.7, 5, 0.5, 0.75, 0.75, 0.5, 0.5, 0.75, 0.75, 1.5, 'Standarisasi tolong dilengkapi di risalah'),
(61, '06-0063', '2022-01-09 04:54:29', 'Selektif', 0.5, 0.75, 0.5, 0.5, 0.75, 0.75, 0.5, 0.5, 0.75, 0.75, 0.75, 1.5, 1.5, 1.5, 0.5, 0.75, 0.5, 0.75, 1, 0.5, 0.5, 0.5, 1.5, 1.5, 7.5, 7.5, 5, 2.5, 3.75, 1.6, 2.5, 1.7, 7.5, 0.5, 0.75, 0.5, 0.75, 0.5, 0.75, 1.13, 1.5, 'Dalam penentuan tema perlu direvisi, blm menunjukkan kaedah SMART'),
(62, '06-0063', '2022-01-09 05:00:27', 'Misqueen', 0.5, 0.5, 0.75, 0.5, 0.5, 0.75, 0.5, 0.5, 0.75, 0.5, 0.5, 1.5, 1, 1.5, 0.5, 0.5, 0.5, 0.5, 1, 0.5, 0.5, 0.5, 1, 1, 7.5, 5, 5, 2.5, 2.5, 1.6, 1.7, 1.7, 7.5, 0.75, 0.5, 0.75, 0.5, 0.5, 0.75, 1.13, 1, 'Kesesuaian tema dengan aktual perbaikan perlu direview dan tool yg digunakan kurang informatif'),
(63, '06-0063', '2022-01-09 05:08:54', 'Masker', 0.75, 0.5, 0.75, 0.75, 0.75, 0.75, 0.75, 0.75, 0.75, 0.75, 0.75, 1.5, 1, 1.5, 0.75, 0.5, 0.75, 0.75, 1, 0.5, 0.5, 0.5, 1.5, 1.5, 7.5, 7.5, 5, 2.5, 3.75, 1.6, 2.5, 1.7, 7.5, 0.75, 0.75, 0.5, 0.5, 0.5, 1.13, 0.75, 1, 'Secara identifikasi masalah dan temuan akar penyebab sdh cukup baik, dlm melakukan rencana perbaikan perlu diperhatikan lagi tema yg diangkat'),
(64, '06-0063', '2022-01-09 05:20:50', 'Satgas1', 0.5, 0.5, 0.75, 0.5, 0.75, 0.75, 0.5, 0.5, 0.75, 0.75, 0.5, 1.5, 1, 1, 0.5, 0.75, 0.5, 0.75, 1, 0.5, 0.5, 0.5, 1, 1, 5, 7.5, 7.5, 2.5, 2.5, 1.6, 1.7, 1.7, 5, 0.5, 0.5, 0.75, 0.5, 0.5, 0.75, 0.75, 1, 'Identifikasi tema perlu direview kembali, blm sesuai dengan spesifik masalah utamanya dan standar yg dibuat blm menunjukkan monitoring yg efektif'),
(65, '06-0063', '2022-01-09 05:41:36', 'Maxtour', 0.5, 0.5, 0.75, 0.5, 0.5, 0.75, 0.5, 0.5, 0.5, 0.75, 0.5, 1, 1, 1.5, 0.5, 0.5, 0.75, 0.5, 1, 0.5, 0.5, 0.5, 1, 1, 5, 5, 5, 2.5, 3.75, 1.6, 1.7, 1.7, 7.5, 0.75, 0.5, 0.5, 0.5, 0.5, 0.75, 0.75, 1, 'Tema dan temuan masalah perlu direview kembali, blm ada validasi perbaikan. Kreatifitas perbaikan perlu dikembangkan'),
(66, '91-0842', '2022-01-09 14:25:58', 'Satgas1', 0.75, 0.5, 0.5, 0.75, 0.75, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 1, 1, 1, 0.5, 0.5, 0.5, 0.5, 1, 0.75, 0.5, 0.75, 1, 1, 7.5, 7.5, 5, 2.5, 2.5, 2.5, 1.7, 1.7, 7.5, 0.5, 0.75, 0.75, 0.5, 0.75, 1.13, 1.13, 1.5, 'Semoga dengan QCC ini area hold dapat lebih terkontrol'),
(67, '91-0842', '2022-01-09 14:41:38', 'Maxtour', 0.5, 0.5, 0.75, 0.75, 0.5, 0.75, 0.5, 0.5, 0.75, 0.5, 0.5, 1.5, 1.5, 1, 0.75, 0.5, 0.5, 0.5, 1.5, 0.75, 0.5, 0.75, 1.5, 1, 5, 5, 7.5, 2.5, 3.75, 2.5, 1.7, 2.5, 7.5, 0.75, 0.5, 0.5, 0.5, 0.75, 0.75, 0.75, 1.5, 'Semoga dengan QCC ini dapat meningkatkan produktivitas gudang ban'),
(71, '12-0816', '2022-01-10 01:39:51', 'Satgas1', 0.3, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.3, 0.5, 0.3, 0.5, 0.6, 1, 1, 0.3, 0.5, 0.5, 0.3, 1, 0.3, 0.3, 0.3, 0.6, 1, 5, 5, 5, 1.5, 1.5, 1.6, 1.7, 1, 5, 0.3, 0.5, 0.3, 0.3, 0.3, 0.5, 0.75, 0.5, 'Perbaikan stratifikasi data pada thema'),
(73, '12-0816', '2022-01-10 01:45:41', 'Maxtour', 0.3, 0.3, 0.3, 0.3, 0.3, 0.5, 0.3, 0.3, 0.3, 0.3, 0.3, 0.6, 1, 0.6, 0.3, 0.5, 0.3, 0.3, 0.6, 0.3, 0.5, 0.3, 1, 0.6, 3, 5, 5, 1.5, 1.5, 1.6, 1.7, 1, 3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.5, 0.5, 0.5, 'Stratifikasi tema perlu d perbaiki'),
(75, '12-0816', '2022-01-10 03:14:54', 'Gemesin', 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.6, 0.6, 0.6, 0.5, 0.5, 0.3, 0.3, 0.6, 0.3, 0.3, 0.3, 0.6, 0.6, 5, 3, 5, 1.5, 1.5, 1.6, 1.7, 1.7, 3, 0.3, 0.3, 0.5, 0.5, 0.3, 0.5, 0.75, 0.5, 'Stratifikasi masalah belum detail'),
(78, '14-0382', '2022-01-10 03:48:42', 'Selektif', 0.5, 0.75, 0.5, 0.5, 0.5, 0.75, 0.5, 0.5, 0.75, 0.5, 0.5, 1, 1, 1.5, 0.5, 0.5, 0.5, 0.5, 1, 0.5, 0.5, 0.5, 1, 1, 7.5, 5, 7.5, 2.5, 2.5, 2.5, 1.7, 1.7, 5, 0.5, 0.5, 0.75, 0.5, 0.5, 0.75, 0.75, 1, 'Buat data serunut mungkin agar dapat menjelaskan permasalahan sejelas mungkin. Perlu juga ditingkatkan kreatifitasannya agar materi dapat digali lebih dalam'),
(79, '14-0382', '2022-01-10 03:56:26', 'Satgas1', 0.5, 0.5, 0.5, 0.75, 0.5, 0.75, 0.5, 0.5, 0.75, 0.5, 0.5, 1.5, 1, 1, 0.5, 0.5, 0.5, 0.5, 1, 0.5, 0.5, 0.5, 1, 1, 7.5, 5, 7.5, 2.5, 2.5, 1.6, 1.7, 1.7, 5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.75, 0.75, 1, 'Mempersiapkan segala sesuatunya dengan baik dan koordinasi dengan sesama team agar segala aktifitas improvement dapat dirasakan oleh semua member'),
(80, '14-0382', '2022-01-10 03:59:30', 'Maxtour', 0.3, 0.5, 0.3, 0.5, 0.5, 0.5, 0.75, 0.5, 0.5, 0.5, 0.5, 1, 1, 1, 0.75, 0.5, 0.5, 0.5, 1, 0.3, 0.75, 0.75, 1, 1, 5, 5, 5, 2.5, 2.5, 1.6, 1.7, 1.7, 7.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.75, 0.75, 1, 'Mempersiapkan segala sesuatunya dengan baik dan koordinasi dengan sesama team agar segala aktifitas improvement dapat dirasakan oleh semua member'),
(81, '14-0382', '2022-01-10 04:04:22', 'Gemesin', 0.3, 0.3, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.6, 1, 1, 0.5, 0.5, 0.5, 0.5, 0.6, 0.5, 0.5, 0.3, 1, 1, 5, 5, 5, 2.5, 2.5, 1.6, 1.7, 1.7, 5, 0.75, 0.5, 0.5, 0.75, 0.5, 1.13, 0.75, 0.5, 'Semangat improvement harus ada ditiap member dan diharapkan setiap member dapat berperan aktif di dalam kegiatan QCC di team ini'),
(113, '06-0063', '2022-01-10 04:19:56', 'Gemesin', 0.5, 0.5, 0.75, 0.5, 0.5, 0.75, 0.75, 0.75, 0.5, 0.75, 0.75, 1, 1, 1.5, 0.5, 0.5, 0.5, 0.75, 1, 0.75, 0.5, 0.5, 1.5, 1.5, 7.5, 5, 5, 2.5, 2.5, 1.6, 1.7, 2.5, 7.5, 0.75, 0.5, 0.75, 0.75, 0.5, 0.75, 1.13, 1, 'Bukti2 VoC perlu ditambahkan, rencana berikutnya perlu dilengkapi, problem statement perlu didetailkan permasalahannya'),
(115, '91-0842', '2022-01-10 15:44:55', 'BensAe', 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 1, 1, 1, 0.75, 0.5, 0.5, 0.5, 1.5, 0.5, 0.5, 0.5, 1.5, 1, 7.5, 5, 7.5, 2.5, 2.5, 1.6, 1.7, 1.7, 7.5, 0.75, 0.5, 0.5, 0.5, 0.75, 0.75, 1.13, 1, 'Semoga dengan QCC ini dapat meningkatkan produktivitas karyawan gudang ban'),
(116, '91-0842', '2022-01-10 15:50:59', 'Pasti', 0.5, 0.5, 0.5, 0.75, 0.5, 0.75, 0.5, 0.5, 0.5, 0.5, 0.5, 1, 1.5, 1, 0.75, 0.5, 0.5, 0.5, 1.5, 0.5, 0.75, 0.75, 1, 1, 5, 7.5, 7.5, 3.75, 2.5, 2.5, 1.7, 1.7, 5, 0.75, 0.5, 0.75, 0.5, 0.5, 0.75, 1.13, 1.5, 'Semoga dengan QCC ini dapat mempercepat proses setting dan harus dipastikan barang yang akan di setting sudah di check dengan benar'),
(117, '91-0842', '2022-01-10 15:58:04', 'Manise', 0.5, 0.75, 0.5, 0.5, 0.5, 0.75, 0.5, 0.5, 0.75, 0.5, 0.5, 1.5, 1, 1, 0.5, 0.5, 0.5, 0.5, 1, 0.75, 0.5, 0.5, 1, 1, 5, 7.5, 5, 2.5, 2.5, 2.5, 1.7, 1.7, 7.5, 0.5, 0.5, 0.75, 0.5, 0.5, 0.75, 0.75, 1, 'Semoga hasil QCC ini benar-benar dapat bermanfaat dalam proses pengiriman bukan hanya untuk Export Zeneos saja'),
(119, '14-0382', '2022-01-11 05:49:41', 'Pasti', 0.3, 0.3, 0.3, 0.3, 0.3, 0.5, 0.5, 0.3, 0.5, 0.5, 0.5, 1, 1, 0.6, 0.5, 0.5, 0.5, 0.5, 0.6, 0.5, 0.5, 0.3, 0.6, 0.6, 3, 3, 3, 2.5, 2.5, 1.6, 1.7, 1.7, 5, 0.5, 0.5, 0.5, 0.3, 0.5, 0.5, 0.5, 1, '- Usahakan dalam pembuatan materi presentasi dibuat agar lebih komprehensif, sehingga problem serta perbaikan dapat diterima dengan jelas.- Penguasaan materi harus ditingkatkan- Semangat improvement harus merata ke semua member'),
(120, '14-0382', '2022-01-11 05:52:07', 'BensAe', 0.3, 0.3, 0.3, 0.3, 0.3, 0.5, 0.5, 0.3, 0.5, 0.5, 0.5, 1, 1, 0.6, 0.5, 0.5, 0.5, 0.5, 0.6, 0.5, 0.5, 0.3, 0.6, 0.6, 3, 3, 3, 2.5, 2.5, 1.6, 1.7, 1.7, 5, 0.5, 0.5, 0.5, 0.3, 0.5, 0.5, 0.5, 1, '- Usahakan dalam pembuatan materi presentasi dibuat agar lebih komprehensif, sehingga problem serta perbaikan dapat diterima dengan jelas.- Penguasaan materi harus ditingkatkan- Semangat improvement harus merata ke semua member'),
(122, '14-0382', '2022-01-11 10:00:12', 'Semongko', 0.5, 0.5, 0.75, 0.75, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.75, 1.5, 1.5, 1, 0.75, 0.75, 0.5, 0.5, 1, 0.5, 0.75, 0.75, 1.5, 1.5, 5, 5, 7.5, 2.5, 2.5, 2.5, 2.5, 2.5, 5, 0.5, 0.5, 0.5, 0.75, 0.5, 1.13, 0.75, 1.5, 'Semangat improvement harus tetap dijaga dan tetap terus ditingkatkan.'),
(123, '14-0382', '2022-01-11 10:04:14', 'Sosis', 0.5, 0.5, 0.5, 0.75, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.75, 1, 1, 1, 0.5, 0.5, 0.75, 0.5, 1.5, 0.75, 0.5, 0.5, 1, 1.5, 5, 5, 7.5, 2.5, 2.5, 2.5, 2.5, 2.5, 7.5, 0.75, 0.5, 0.75, 0.75, 0.5, 0.75, 0.75, 1, 'Semangat improvement harus tetap dijaga dan tetap ditingkatkan'),
(125, '14-0382', '2022-01-11 10:29:08', 'Masker', 0.5, 0.75, 0.75, 0.5, 0.5, 0.5, 0.75, 0.5, 0.75, 0.5, 0.5, 1, 1, 1, 0.5, 0.5, 0.5, 0.5, 1.5, 0.5, 0.5, 0.75, 1, 1, 5, 5, 5, 2.5, 2.5, 2.5, 2.5, 1.7, 7.5, 0.5, 0.5, 0.5, 0.3, 0.5, 0.75, 0.75, 1, 'Semangat improvement harus merata ke semua member dan harus diperlukannya brainstorming dengan team'),
(126, '14-0382', '2022-01-11 10:31:50', 'Misqueen', 0.5, 0.75, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 1.5, 1, 1, 0.5, 0.5, 0.5, 0.5, 1, 0.5, 0.5, 0.75, 1.5, 1, 5, 5, 5, 2.5, 2.5, 2.5, 1.7, 1.7, 7.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.75, 0.75, 0.5, '- Perlu mempersiapkan bahan presentasi dengan komprehensif dan matang.- Butuh dilakukannya kembali brainstorming dengan team.- Pergunakan metode why-why analysis dengan tujuan untuk mengurai dan dapat menemukan sumber akar penyebab utama'),
(130, '91-0842', '2022-01-11 23:00:37', 'Semongko', 0.5, 0.75, 0.75, 0.75, 0.75, 0.75, 0.75, 0.75, 0.75, 0.75, 0.75, 1.5, 1.5, 1.5, 0.75, 0.75, 0.75, 0.75, 1.5, 0.75, 0.75, 0.75, 1.5, 1.5, 7.5, 7.5, 7.5, 3.75, 3.75, 2.5, 2.5, 2.5, 7.5, 0.75, 0.75, 0.75, 0.75, 0.75, 0.75, 1.13, 1.5, 'Semoga dengan QCC ini dapat meningkatkan produktivitas gudang ban R dan dapat di implementasi kan di gudang lain'),
(131, '91-0842', '2022-01-11 23:01:35', 'Sosis', 0.5, 0.5, 0.75, 0.75, 0.5, 0.75, 0.5, 0.5, 0.75, 0.5, 0.5, 2, 1.5, 1.5, 0.75, 0.75, 0.75, 0.75, 1.5, 0.75, 0.75, 0.75, 1.5, 1, 5, 7.5, 7.5, 3.75, 3.75, 2.5, 2.5, 1.7, 7.5, 0.75, 0.5, 0.75, 0.75, 0.75, 1.13, 0.75, 1.5, 'Semoga dengan QCC ini dapat mempercepat dalam pembuatan report data gudang ban R serta dapat ditingkatkan lagi'),
(133, '06-0063', '2022-01-12 03:28:28', 'Pasti', 0.5, 0.5, 0.5, 0.5, 0.5, 0.75, 0.5, 0.5, 0.5, 0.5, 0.5, 1.5, 1, 1.5, 0.5, 0.5, 0.5, 0.5, 1, 0.5, 0.5, 0.5, 1, 1, 3, 3, 5, 2.5, 2.5, 1.6, 2.5, 1.7, 7.5, 0.5, 0.5, 0.5, 0.3, 0.3, 0.75, 0.75, 1, 'Dalam identifikasi tema yg diambil tdk fokus pd pokok permasalahan, kaidah QCDSMPE dan pengambilan tema berikutnya perlu direview kembali'),
(135, '12-0816', '2022-01-12 03:42:58', 'Sosis', 0.3, 0.3, 0.3, 0.5, 0.3, 0.5, 0.5, 0.3, 0.3, 0.3, 0.5, 1, 1.5, 1, 0.5, 0.5, 0.5, 0.3, 0.6, 0.3, 0.3, 0.3, 1, 0.6, 5, 3, 5, 1.5, 1.5, 1, 1, 1, 5, 0.5, 0.3, 0.75, 0.3, 0.5, 0.5, 0.5, 0.5, 'Stratifikasi masalah masih belum terlihat jelas'),
(136, '12-0816', '2022-01-12 03:54:12', 'Semongko', 0.5, 0.5, 0.75, 0.5, 0.5, 0.75, 0.5, 0.3, 0.3, 0.5, 0.5, 1, 1, 1, 0.75, 0.75, 0.75, 0.5, 1, 0.5, 0.5, 0.75, 1, 1, 5, 5, 5, 2.5, 3.75, 2.5, 2.5, 1.7, 5, 0.5, 0.5, 0.5, 0.5, 0.3, 0.75, 0.75, 1, 'Standard baru belum tercantum di area kerja'),
(137, '12-0816', '2022-01-12 05:24:33', 'BensAe', 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.6, 1, 0.6, 0.3, 0.3, 0.3, 0.3, 0.6, 0.3, 0.3, 0.3, 0.6, 0.6, 3, 3, 3, 1.5, 1.5, 1, 1, 1, 3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.5, 0.5, 0.5, 'Cara menyampaikan problem masih belum jelas dan harus diperbaiki'),
(138, '12-0816', '2022-01-12 06:03:36', 'Pasti', 0.5, 0.5, 0.5, 0.5, 0.3, 0.5, 0.3, 0.3, 0.3, 0.3, 0.3, 0.6, 1, 0.6, 0.5, 0.5, 0.3, 0.3, 0.6, 0.5, 0.3, 0.3, 1, 0.6, 7.5, 7.5, 5, 1.5, 2.5, 1, 1, 1, 7.5, 0.5, 0.5, 0.5, 0.5, 0.3, 0.75, 0.75, 1, 'Stratifikasi masalah perlu diperbaiki'),
(140, '06-0063', '2022-01-12 06:23:32', 'Sosis', 0.75, 0.75, 0.75, 0.75, 0.5, 0.75, 0.75, 0.75, 0.75, 0.5, 0.5, 1.5, 1.5, 2, 0.5, 0.75, 0.75, 0.75, 1, 0.5, 0.5, 0.75, 1.5, 1.5, 7.5, 5, 5, 2.5, 2.5, 1.6, 2.5, 1.7, 7.5, 0.5, 0.75, 0.75, 0.75, 1, 0.75, 1.13, 1.5, 'Sudah cukup bagus, utk rencana berikutnya perlu memasukkan alasan (dari KPI, VOC, temuan Audit, dll) knapa tema harus diambil'),
(141, '06-0063', '2022-01-12 16:25:36', 'BensAe', 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.75, 0.5, 0.5, 1.5, 1, 1.5, 0.5, 0.5, 0.5, 0.5, 1, 0.5, 0.5, 0.5, 1, 1, 3, 5, 5, 2.5, 2.5, 1.6, 1.7, 1.7, 7.5, 0.5, 0.5, 0.5, 0.3, 0.5, 0.75, 0.75, 1, 'Faktor temuan permasalahan perlu dikembangkan krn potensi akar masalah bisa lebih berkembang'),
(142, '06-0063', '2022-01-13 06:19:29', 'Semongko', 0.75, 1, 1, 1, 0.75, 1, 1, 0.75, 1, 1, 0.75, 2, 2, 2, 1, 0.75, 1, 1, 1.5, 1, 0.75, 1, 1.5, 2, 7.5, 7.5, 7.5, 3.75, 5, 2.5, 2.5, 2.5, 10, 1, 0.75, 0.75, 1, 0.75, 1.13, 1.5, 1.5, 'Dari sisi identifikasi masalah dan tema sdh cukup bagus, analisa temuan dan akar penyebab sdh menunjukkan perbaikan yg akurat');

-- --------------------------------------------------------

--
-- Table structure for table `data_nilai_presentasi`
--

CREATE TABLE `data_nilai_presentasi` (
  `id` int(11) NOT NULL,
  `username` varchar(40) NOT NULL,
  `waktu` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `circle_team` varchar(40) NOT NULL,
  `nilai_1` double NOT NULL,
  `nilai_2` double NOT NULL,
  `nilai_3` double NOT NULL,
  `nilai_4` double NOT NULL,
  `nilai_5` double NOT NULL,
  `nilai_6` double NOT NULL,
  `nilai_7` double NOT NULL,
  `komen` varchar(10000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `data_nilai_presentasi`
--

INSERT INTO `data_nilai_presentasi` (`id`, `username`, `waktu`, `circle_team`, `nilai_1`, `nilai_2`, `nilai_3`, `nilai_4`, `nilai_5`, `nilai_6`, `nilai_7`, `komen`) VALUES
(3, '15-0034', '2022-01-12 02:33:50', 'Maxtour', 4, 2, 3.5, 5.4, 1, 9, 0.92, 'Section di bawah DPW sebaiknya juga dijelaskan, sebaiknya semua KPI disebutkan terlebih dahulu sebelum merujuk ke KPI tertentu sebagai temaPemindahan ini pemindahan apa?Proses-nya seperti apa?INi berpengaruh pada AnankondaTarget ditentukan berdasarkan apa?'),
(4, '20-0745', '2022-01-12 02:34:18', 'Maxtour', 8, 10, 7, 12.6, 11, 6, 1.84, 'cukup baik'),
(8, '20-0745', '2022-01-12 02:57:04', 'Enviro', 15, 8, 4.5, 14.4, 10, 10, 0.92, 'kompak!'),
(9, '15-0034', '2022-01-12 02:58:07', 'Enviro', 11, 8, 5.5, 9, 1, 9, 1.38, 'Kenapa tim yakin targetnya nol?Dasarnya apa?'),
(11, '15-0034', '2022-01-12 03:15:45', 'Manise', 11, 3, 4.5, 8.1, 1, 9, 1.84, 'VOC-nya VOC siapa?Bongkar muat tire dari mana ke mana?Masalahnya apa?Cycle Time tidak ada hubungan dengan Delivery?Kurang mengeskplor prosesPerbaikanmya:Tire TL export zeneos ketika proses muat tidak ada lagi proses potong tali rapia??1 orang Operator ikat itu karyawan tetap?'),
(12, '20-0745', '2022-01-12 03:21:27', 'Manise', 4, 10, 6.5, 12.6, 11, 6, 0.92, 'semua anggota sangat bersemangat. Tahapan Anakonda belum menggambarkan step by step proses.'),
(15, '15-0034', '2022-01-12 03:50:31', 'Maxio', 5, 5, 4, 6.3, 1, 9, 0.92, 'Berpengaruh terhadap pencatatan produksi atau tidak?Jadi target KPI atau tidak?satuannya?'),
(16, '20-0745', '2022-01-12 03:51:37', 'Maxio', 14, 12, 6.5, 11.7, 11, 7, 0.92, 'Dipertimbangkan untuk cost sharing dengan project sebelumnya'),
(18, '94-0455', '2022-01-12 05:59:31', 'Maxtour', 7, 12, 3, 5.4, 11, 3, 1.38, 'Penentuan tema belum secara spesifik merupakan problem yg terbesar'),
(20, '94-0455', '2022-01-12 06:01:19', 'Enviro', 8, 8, 4, 10.8, 13, 8, 1.38, 'Untuk alternatif perbaikan yg tidak diaplikasikan harusnya diberi tanda atau lebih diperjalas'),
(21, '94-0455', '2022-01-12 06:03:17', 'Manise', 14, 14, 5, 10.8, 14, 8, 2.3, 'Standar cycle time blm dimasukkan dalam standarisasi'),
(23, '94-0455', '2022-01-12 06:04:05', 'Maxio', 18, 9, 6, 8.1, 14, 9, 1.38, '1. Perlu penambahan unit presentase (%), utk memperjelas perbandingan jumlah produksi dengan kapasitas angkut2. Analisa sebab akibat kurang sistematis utk mendapatkan root causenya'),
(24, '20-0745', '2022-01-12 06:29:25', 'Sosis', 13, 10, 7.5, 11.7, 11, 6, 3.68, 'disarankan evaluasi lebih lanjut mengenai akurasi pelaporan'),
(25, '94-0455', '2022-01-12 06:30:10', 'Sosis', 13, 13, 7, 11.7, 14, 9, 2.3, 'Sudah ada notifikasi / Reminder namun belum terlihat monitoring konsistensi entry data'),
(26, '15-0034', '2022-01-12 06:30:23', 'Sosis', 13, 5, 2.5, 13.5, 1, 9, 4.6, 'Sesuai dengan Priority Projects, namun sebaiknya tetap disampaikan bahwa KPI utama dari Departemen juga sudah dianalisa dan bahkan kalau sudah tercapai, juga disampaikanKenapa temanya all laporanFrekuensi itu untuk berapa lamaAnalisa kondisi yang ada bisa lebih detail by laporanRoot cause di fisbone beda dengan yang di validasiPerbaikan tidak boleh sosialisasi dan target pada perbaikan harus by item'),
(30, '94-0455', '2022-01-12 07:06:48', 'BensAe', 8, 12, 7, 12.6, 14, 8, 1.84, '1. Data pencapaian kinerja wraping perlu ada penjelasan persentase pencapaiannya2. Analisa sebab akibat belum sistematis untuk mendapatkan root causenya3. Penetapan target wrapping sebaiknya berdasarkan kebutuhan'),
(31, '20-0745', '2022-01-12 07:08:36', 'BensAe', 6, 9, 3.5, 10.8, 9, 6, 0.46, 'project yang bagus untuk efisiensi, namun dalam pelaporan perlu lebih diperjelas. good job.'),
(34, '15-0034', '2022-01-12 16:26:28', 'BensAe', 8, 3, 3.5, 12.6, 1, 9, 0.46, 'Pemilihan satuan KPI / Indicator kinerja project bisa diperjelasANAKONDA dan ANASEBA seharusnya lebih detail'),
(36, '20-0745', '2022-01-13 02:33:36', 'Selektif', 17, 16, 7.5, 16.2, 13, 8, 0.46, 'flow presentasi sangat baik'),
(37, '15-0034', '2022-01-13 02:35:42', 'Selektif', 8, 3, 5.5, 5.4, 1, 7, 0.46, 'Cukup baik, hanya saja perlu ditambah penekanan di awal kenapa project ini penting'),
(39, '94-0455', '2022-01-13 02:40:07', 'Selektif', 13, 14, 5, 12.6, 14, 9, 1.38, '1. Aspek QCDSMPE untuk item moral  perlu ditinjau juga dampak diinterrnal2. Hasil improvement sebaiknya diusulkn sebagai triger untuk review kontrak dengan perusaahaan angkutan'),
(41, '15-0034', '2022-01-13 03:06:57', 'Pasti', 3, 2, 3.5, 5.4, 1, 6, 0.92, 'ANAKONDA bisa memggunakan flow yang ditampilkan di step 1Grafik Target, sebelum itu bukan target sebelum QCC, tp aktual sebelum QCCDampaknya apa?QCDSMnya bisa lebih kuantitatifPenetapan rencana setting berdasarkan schedule OEM  tidak ada di flow'),
(42, '20-0745', '2022-01-13 03:08:41', 'Pasti', 16, 8, 4.5, 12.6, 13, 5, 0.46, 'untuk proses improvement pengurangan check tube flap dari semula 2x menjadi 1x, mohon dicek terlebih dahulu ke OEM apakah diperbolehkan?'),
(43, '94-0455', '2022-01-13 03:10:56', 'Pasti', 13, 13, 6, 11.7, 14, 9, 2.3, '1. Data target awal bukan merupakan target namun actula yang tercapai2. Penetapan standard buffer stock baru belum dijelaskan secara spesifik'),
(45, '15-0034', '2022-01-13 03:37:24', 'Misqueen', 5, 7, 3, 4.5, 1, 9, 0.92, 'Mengapa fokus ke proses: MRP PACKAGING CONTROLKinerja Penerimaan Sticker itu menggambarkan apa?Root cause di fishbone dan merencanakan perbaikan ada dua, kenapa di melaksanakan perbaikan ada 3, yang distandarkan hanya 1'),
(47, '20-0745', '2022-01-13 03:42:16', 'Misqueen', 8, 13, 4.5, 15.3, 11, 8, 0.46, 'next project agar di-align dengan KPI'),
(48, '94-0455', '2022-01-13 03:44:02', 'Misqueen', 13, 8, 4.5, 10.8, 14, 9, 1.38, '1. Alasan penetapan tema tidak mencerminkan problem prioritas yang ada di departement'),
(51, '15-0034', '2022-01-13 04:10:51', 'Satgas1', 4, 3, 5.5, 7.2, 1, 9, 0.46, '\"Menurunkan Jumlah Stock Di Area Hold Gudang Ban PCR\", ini bisa dikendalikan oleh DPW?Kapasitas DPW berapa, dan berapa asumsi kapasitas untuk Ban Hold, penjelasan ini bisa membantu dalam medefinisikan Dampak secara QCDSM dan juga targetForklift itu maintenance-nya tgg jawab DPW?Forklift diatur bagaiamana?Di evaluasi hasil, inputnya ban hold berapa?'),
(53, '94-0455', '2022-01-13 04:23:47', 'Satgas1', 19, 14, 7, 12.6, 13, 8, 1.38, '1. Kategori Afkir harusnya sudah bisa diseleksi untuk tidak masuk gudang2. Grafik pencampaian tidk sinkron dengan actual pencapaian'),
(54, '20-0745', '2022-01-13 06:01:00', 'Satgas1', 18, 16, 8, 12.6, 11, 6, 0.46, 'Good project. Semoga bisa lanjut hingga 0 ban hold'),
(56, '20-0745', '2022-01-13 06:27:43', 'Semongko', 17, 17, 9, 15.3, 13, 6, 3.68, 'project yang komprehensif, didukung dengan hasil yang baik. good job.'),
(57, '15-0034', '2022-01-13 06:30:42', 'Semongko', 8, 8, 7.5, 8.1, 1, 9, 3.68, 'KPI yang lain bagaimana?Jumlah mesin jahit kurang, ada hitungannya?Belum ada meja kerja--> solusinya pasti mengadakan meja kerjaUrutan proses belum efektif itu bagiamana?Grafik target di langkah 5 - target per 1 tindakan perbaikanStandarisasi harus sesuai jumlah perbaikan'),
(61, '94-0455', '2022-01-13 06:31:59', 'Semongko', 13, 14, 5, 12.6, 14, 9, 2.3, '1. Penetapan tema tidak menunjukkan problem prioritas yang terjadi di departemen2. target perbaikan pada step 5 tidak dijelaskan per item'),
(63, '15-0034', '2022-01-13 06:50:39', 'Masker', 9, 7, 4.5, 5.4, 1, 9, 7, 'Fishbone, penyebab langsung satu dan dua berhubunganKenapa palet rusakPerbaikan 1 dan 2 itu berurutan?Standarisasi kenapa ada dua saja?Urutan standarisasi: root cause, perbaikan, metode kontrol, dan standarisasi'),
(64, '20-0745', '2022-01-13 06:51:15', 'Masker', 14, 13, 9, 15.3, 12, 6, 2.3, 'penyampain lugas dan jelas. Untuk next project perlu dipertimbangkan ketahanan dari palet yang sudah diperbaiki.'),
(65, '94-0455', '2022-01-13 06:55:46', 'Masker', 13, 13, 7, 7.2, 13, 8, 2.3, '1. Pallet rusak perlu ada analisa lebih lanjut bila dijadikan root cause2. Standarisasi belum ada eviden sudah disosialisasikan'),
(66, '15-0034', '2022-01-13 07:13:41', 'Gemesin', 4, 3, 5.5, 5.4, 1, 9, 0.92, 'Judul sebaiknya ada kata kerjanya'),
(68, '20-0745', '2022-01-13 07:21:05', 'Gemesin', 3, 7, 4, 11.7, 11, 7, 0.46, 'project bisa dibuat lebih komprehensif'),
(69, '94-0455', '2022-01-13 07:33:03', 'Gemesin', 9, 13, 6, 10.8, 14, 9, 1.84, 'Belum dilakukan identifikasi dan stratifikasi semua pencapaian dalam mentukan tema');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `nama` varchar(100) NOT NULL,
  `user` varchar(20) NOT NULL,
  `pass` varchar(20) NOT NULL,
  `status` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `nama`, `user`, `pass`, `status`) VALUES
(1, 'INDRA TRI WINTOKO', '06-0063', '06-0063', 'Juri Lapangan'),
(7, 'FRISDA ', '14-0382', '14-0382', 'Juri Lapangan'),
(8, 'MUHAMAD HANDIKI', '12-0816', '12-0816', 'Juri Lapangan'),
(9, 'HARRY PURWOTJAHYONO', '91-0842', '91-0842', 'Juri Lapangan'),
(10, 'DWINANDA SEPTIADHI', '15-0034', '15-0034', 'Juri Presentasi'),
(11, 'LUKAS FIRMANTO', '94-0455', '94-0455', 'Juri Presentasi'),
(12, 'ISMAIL SALEH', '20-0745', '20-0745', 'Juri Presentasi'),
(13, 'admin', '20-1425', '20-1425', 'admin');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `data_nilai`
--
ALTER TABLE `data_nilai`
  ADD UNIQUE KEY `id` (`id`);

--
-- Indexes for table `data_nilai_presentasi`
--
ALTER TABLE `data_nilai_presentasi`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `data_nilai`
--
ALTER TABLE `data_nilai`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=143;

--
-- AUTO_INCREMENT for table `data_nilai_presentasi`
--
ALTER TABLE `data_nilai_presentasi`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=70;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
