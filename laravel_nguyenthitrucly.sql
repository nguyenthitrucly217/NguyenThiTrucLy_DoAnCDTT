-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 16, 2023 at 09:56 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.1.17

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `laravel_nguyenthitrucly`
--

-- --------------------------------------------------------

--
-- Table structure for table `nttl_brand`
--

CREATE TABLE `nttl_brand` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(1000) NOT NULL,
  `slug` varchar(1000) NOT NULL,
  `description` varchar(1000) NOT NULL,
  `image` varchar(1000) DEFAULT NULL,
  `sort_order` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `metakey` varchar(255) NOT NULL,
  `metadesc` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_by` int(10) UNSIGNED NOT NULL DEFAULT 1,
  `updated_by` int(10) UNSIGNED DEFAULT NULL,
  `status` tinyint(3) UNSIGNED NOT NULL DEFAULT 2
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `nttl_brand`
--

INSERT INTO `nttl_brand` (`id`, `name`, `slug`, `description`, `image`, `sort_order`, `metakey`, `metadesc`, `created_at`, `updated_at`, `created_by`, `updated_by`, `status`) VALUES
(1, 'Hoa Tươi', 'hoa-tuoi', 'hoa', 'hoa-tuoi.jpg', 0, 'hoa tươi', 'hoa tươi', '2023-10-04 20:30:49', '2023-10-11 04:13:40', 1, 1, 1),
(2, 'Lọ hoa', 'lo-hoa', '', 'lo-hoa.jpg', 0, 'lọ hoa', 'lọ hoa', '2023-10-04 20:31:27', '2023-10-04 20:31:27', 1, NULL, 1),
(7, 'hithrv', 'hithrv', 'vb dvcxv', 'hithrv.jpg', 0, 'bvgn', 'cbfb', '2023-11-13 20:38:11', '2023-11-13 22:44:46', 1, NULL, 0);

-- --------------------------------------------------------

--
-- Table structure for table `nttl_category`
--

CREATE TABLE `nttl_category` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(1000) NOT NULL,
  `slug` varchar(1000) NOT NULL,
  `description` varchar(1000) NOT NULL,
  `image` varchar(1000) DEFAULT NULL,
  `parent_id` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `sort_order` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `metakey` varchar(255) NOT NULL,
  `metadesc` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_by` int(10) UNSIGNED NOT NULL DEFAULT 1,
  `updated_by` int(10) UNSIGNED DEFAULT NULL,
  `status` tinyint(3) UNSIGNED NOT NULL DEFAULT 2
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `nttl_category`
--

INSERT INTO `nttl_category` (`id`, `name`, `slug`, `description`, `image`, `parent_id`, `sort_order`, `metakey`, `metadesc`, `created_at`, `updated_at`, `created_by`, `updated_by`, `status`) VALUES
(1, 'Hoa Baby', 'hoa-baby', '', 'hoa-baby.jpg', 0, 0, 'hoa baby', 'Hoa baby', '2023-10-04 20:32:45', '2023-10-04 20:32:45', 1, NULL, 1),
(2, 'Hoa Cúc Hoạ Mi', 'hoa-cuc-hoa-mi', '', 'hoa-cuc-hoa-mi.jpg', 0, 0, 'cúc học mi', 'cúc họa mi', '2023-10-04 20:33:54', '2023-10-04 20:33:54', 1, NULL, 1),
(3, 'Hoa Hồng', 'hoa-hong', '', 'hoa-hong.jpg', 0, 0, 'hoa hồng', 'hoa hồng', '2023-10-04 20:34:27', '2023-10-04 20:34:27', 1, NULL, 1),
(4, 'Hoa Hướng Dương', 'hoa-huong-duong', '', 'hoa-huong-duong.jpg', 0, 0, 'hướng dương', 'hướng dương', '2023-10-04 20:35:01', '2023-10-04 20:35:01', 1, NULL, 1),
(5, 'Hoa Ly', 'hoa-ly', '', 'hoa-ly.jpg', 0, 0, 'hoa ly', 'hoa ly', '2023-10-04 20:35:33', '2023-10-04 20:35:33', 1, NULL, 1),
(6, 'Hoa Tulip', 'hoa-tulip', '', 'hoa-tulip.jpg', 0, 0, 'hoa tulip', 'hao tulip', '2023-10-04 20:36:18', '2023-10-04 20:36:18', 1, NULL, 1),
(7, 'Lọ Gốm', 'lo-gom', '', 'lo-gom.jpg', 0, 0, 'lọ gốm', 'lọ gốm', '2023-10-04 20:36:55', '2023-10-04 20:36:55', 1, NULL, 1),
(8, 'Lọ Thủy Tinh', 'lo-thuy-tinh', 'lọ thủy tinh màu sắc bắt mắt, không độc hại cho sức khỏe', 'lo-thuy-tinh.jpg', 0, 0, 'lọ thủy tinh', 'lọ thủy tinh', '2023-10-04 20:37:35', '2023-10-11 04:29:15', 1, 1, 1),
(10, 'sadsfd', 'sadsfd', 'fdsfdsfds', 'sadsfd.jpg', 0, 0, 'fsdfd', 'fsdf', '2023-11-13 22:39:38', '2023-11-13 23:06:31', 1, NULL, 0);

-- --------------------------------------------------------

--
-- Table structure for table `nttl_config`
--

CREATE TABLE `nttl_config` (
  `id` bigint(20) NOT NULL,
  `author` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `zalo` varchar(255) NOT NULL,
  `facebook` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `youtube` varchar(255) NOT NULL,
  `metadesc` varchar(255) NOT NULL,
  `metakey` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_by` int(11) NOT NULL,
  `updated_by` int(11) NOT NULL,
  `status` tinyint(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `nttl_contact`
--

CREATE TABLE `nttl_contact` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` int(10) UNSIGNED NOT NULL DEFAULT 1,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `content` mediumtext NOT NULL,
  `replay_id` int(10) UNSIGNED NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_by` int(10) UNSIGNED NOT NULL DEFAULT 1,
  `updated_by` int(10) UNSIGNED DEFAULT NULL,
  `status` tinyint(3) UNSIGNED NOT NULL DEFAULT 2
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `nttl_contact`
--

INSERT INTO `nttl_contact` (`id`, `user_id`, `name`, `email`, `phone`, `title`, `content`, `replay_id`, `created_at`, `updated_at`, `created_by`, `updated_by`, `status`) VALUES
(1, 1, 'Truc Ly', 'ly@gmail.com', '0987644231', 'mua hoa', 'hoa dep', 0, '2023-10-04 23:45:51', '2023-10-04 23:45:51', 1, NULL, 1),
(2, 1, 'Truc', 'truc@gmail.com', '777777', 'asasasd', 'asdsd', 0, '2023-10-26 04:25:32', '2023-10-26 04:25:32', 1, NULL, 1),
(8, 1, 'aaa', 'aaa@gmail.com', '12345678', 'sdfgh', 'sdfgh', 0, '2023-11-14 07:20:55', '2023-11-14 07:20:55', 1, NULL, 1);

-- --------------------------------------------------------

--
-- Table structure for table `nttl_menu`
--

CREATE TABLE `nttl_menu` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(1000) NOT NULL,
  `user_id` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `position` varchar(255) NOT NULL,
  `link` varchar(255) NOT NULL,
  `table_id` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `parent_id` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `type` varchar(255) NOT NULL,
  `sort_order` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_by` int(10) UNSIGNED NOT NULL DEFAULT 1,
  `updated_by` int(10) UNSIGNED DEFAULT NULL,
  `status` tinyint(3) UNSIGNED NOT NULL DEFAULT 2
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `nttl_menu`
--

INSERT INTO `nttl_menu` (`id`, `name`, `user_id`, `position`, `link`, `table_id`, `parent_id`, `type`, `sort_order`, `created_at`, `updated_at`, `created_by`, `updated_by`, `status`) VALUES
(1, 'Trang chủ', 0, 'mainmenu', '/', 0, 0, 'post', 0, '2023-10-04 21:16:26', '2023-10-04 21:16:26', 1, NULL, 1),
(2, 'Sản phẩm', 0, 'mainmenu', 'san-pham', 0, 0, 'post', 0, '2023-10-04 21:16:56', '2023-10-04 21:16:56', 1, NULL, 1),
(3, 'Danh mục', 0, 'mainmenu', 'danh-muc-san-pham/hoa-tulip', 0, 2, 'post', 0, '2023-10-04 21:17:37', '2023-10-04 21:17:37', 1, NULL, 1),
(4, 'Liên hệ', 0, 'mainmenu', 'lien-he', 0, 0, 'post', 0, '2023-10-04 21:18:51', '2023-10-04 21:18:51', 1, NULL, 1),
(5, 'Khuyến mãi', 0, 'mainmenu', 'san-pham-sale', 0, 2, 'post', 0, '2023-10-04 21:20:23', '2023-10-04 21:20:23', 1, NULL, 1),
(6, 'Thương hiệu', 0, 'mainmenu', 'thuong-hieu/hoa-tuoi', 0, 2, 'post', 1, '2023-10-07 09:36:33', '2023-10-07 09:37:04', 1, 1, 1),
(8, 'Tin tức', 0, 'mainmenu', 'tintuc', 0, 0, 'post', 0, '2023-11-14 22:16:44', '2023-11-14 22:16:44', 1, NULL, 1),
(9, 'Tin tức', 0, 'mainmenu', 'tintuc', 0, 0, 'post', 0, '2023-11-14 22:16:44', '2023-11-14 22:16:57', 1, NULL, 0),
(10, 'Bài viết', 0, 'mainmenu', 'bai-viet', 0, 8, 'post', 0, '2023-11-14 22:17:50', '2023-11-14 22:18:10', 1, 1, 1),
(11, 'Chủ đề', 0, 'mainmenu', 'chu-de/hoa-tulip', 0, 8, 'post', 1, '2023-11-14 22:25:40', '2023-11-14 22:25:40', 1, NULL, 1),
(12, 'Tất cả sản phẩm', 0, 'mainmenu', 'san-pham', 0, 2, 'post', 0, '2023-11-15 10:37:03', '2023-11-15 10:37:03', 1, NULL, 1);

-- --------------------------------------------------------

--
-- Table structure for table `nttl_order`
--

CREATE TABLE `nttl_order` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` int(10) UNSIGNED NOT NULL DEFAULT 1,
  `name` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `note` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `created_by` int(11) NOT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `updated_by` int(10) UNSIGNED DEFAULT NULL,
  `status` tinyint(3) UNSIGNED NOT NULL DEFAULT 2
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `nttl_order`
--

INSERT INTO `nttl_order` (`id`, `user_id`, `name`, `phone`, `email`, `address`, `note`, `created_at`, `created_by`, `updated_at`, `updated_by`, `status`) VALUES
(1, 1, 'aaaaaaaaaaaaa', '0000009878', 'dgfgf@gmail.com', 'fgg', 'fggd', '2023-06-29 23:29:21', 0, '2023-11-15 13:40:11', 1, 1),
(2, 1, 'bbbbbbbbbbbbbb', '2345678', 'sdfghj@gmail.com', 'rtyu', 'df', '2023-11-15 13:13:45', 1, '2023-11-15 13:40:20', NULL, 1);

-- --------------------------------------------------------

--
-- Table structure for table `nttl_orderdetail`
--

CREATE TABLE `nttl_orderdetail` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `order_id` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `product_id` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `price` double(8,2) NOT NULL,
  `quality` int(10) UNSIGNED NOT NULL DEFAULT 1,
  `discount` double NOT NULL,
  `amount` double(8,2) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `created_by` int(11) NOT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `updated_by` int(10) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `nttl_orderdetail`
--

INSERT INTO `nttl_orderdetail` (`id`, `order_id`, `product_id`, `price`, `quality`, `discount`, `amount`, `created_at`, `created_by`, `updated_at`, `updated_by`) VALUES
(2, 1, 6, 1234.00, 12, 234567, 123456.00, '2023-11-15 13:17:29', 1, '2023-11-15 13:17:29', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `nttl_post`
--

CREATE TABLE `nttl_post` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `topic_id` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `title` varchar(1000) NOT NULL,
  `slug` varchar(1000) NOT NULL,
  `image` varchar(1000) NOT NULL,
  `detail` varchar(1000) NOT NULL,
  `description` varchar(1000) DEFAULT NULL,
  `type` varchar(1000) NOT NULL,
  `metakey` varchar(255) NOT NULL,
  `metadesc` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_by` int(10) UNSIGNED NOT NULL DEFAULT 1,
  `updated_by` int(10) UNSIGNED DEFAULT NULL,
  `status` tinyint(3) UNSIGNED NOT NULL DEFAULT 2
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `nttl_post`
--

INSERT INTO `nttl_post` (`id`, `topic_id`, `title`, `slug`, `image`, `detail`, `description`, `type`, `metakey`, `metadesc`, `created_at`, `updated_at`, `created_by`, `updated_by`, `status`) VALUES
(1, 1, 'Hoa moi', 'hoa-moi', 'hoa nhap khau ,mau sac bat mat, hoa decor, hoa cuoi.jpg', 'Hoa tulip trắng đại diện cho những ý nghĩa khác nhau, tùy thuộc vào dịp, văn hóa hoặc tôn giáo. Tuy nhiên, hoa tulip trắng thường gắn liền với sự ngây thơ, thuần khiết và tỏa sáng. Loài hoa tao nhã này thường được sử dụng trong các đám cưới và lễ rửa tội, vẻ đẹp và tính biểu tượng của nó truyền tải hy vọng về một cuộc sống sung túc và hạnh phúc.\r\n\r\nHoa tulip trắng có mối liên hệ sâu sắc với sự thuần khiết, ngây thơ và những khởi đầu mới. Màu trắng của những cánh hoa tulip và hình dáng mỏng manh của nó gợi lên cảm giác sạch sẽ và tươi mát. Hoa tulip trắng thường được sử dụng trong các nghi lễ và nghi lễ liên quan đến ngày sinh, lễ rửa tội và hôn nhân, nơi chúng tượng trưng cho hy vọng về một tương lai hạnh phúc.', '', 'post', 'hoa', 'hoa trang tri, hoa nhap khau du mau sac', '2023-10-04 23:02:37', '2023-11-15 04:12:36', 1, 1, 1),
(2, 1, 'hoa cam tu cau', 'hoa-cam-tu-cau', 'hoa cam tu cau.jpg', 'Hoa tulip trắng đại diện cho những ý nghĩa khác nhau, tùy thuộc vào dịp, văn hóa hoặc tôn giáo. Tuy nhiên, hoa tulip trắng thường gắn liền với sự ngây thơ, thuần khiết và tỏa sáng. Loài hoa tao nhã này thường được sử dụng trong các đám cưới và lễ rửa tội, vẻ đẹp và tính biểu tượng của nó truyền tải hy vọng về một cuộc sống sung túc và hạnh phúc.\r\nHoa tulip trắng có mối liên hệ sâu sắc với sự thuần khiết, ngây thơ và những khởi đầu mới. Màu trắng của những cánh hoa tulip và hình dáng mỏng manh của nó gợi lên cảm giác sạch sẽ và tươi mát. Hoa tulip trắng thường được sử dụng trong các nghi lễ và nghi lễ liên quan đến ngày sinh, lễ rửa tội và hôn nhân, nơi chúng tượng trưng cho hy vọng về một tương lai hạnh phúc.\r\nNgoài ra, hoa tulip trắng cũng gắn liền với sự tha thứ và hòa giải. Chúng thường được đưa ra như một cử chỉ xin lỗi hoặc bày tỏ mong muốn bắt', '', 'post', 'cam tu cau', 'hoa tron nhieu mau sac', '2023-10-04 23:44:45', '2023-11-15 04:12:04', 1, 1, 1),
(3, 0, 'Giới thiệu', 'gioi-thieu', 'Giới thiệu.jpg', 'Trên thực tế, hoa Tulip được phát hiện từ vùng Himalaya (thuộc Nepan ngày nay), sau đó chuyển đến vùng Trung Đông và được trồng nhiều ở Iran, Thổ Nhĩ Kỳ. Nó cũng được coi là quốc hoa của Iran và Afghanistan. Cái tên \"Tulip\" xuất phát từ chữ \"Tulbend\" trog tiếng Thổ Nhĩ Kỳ và \"Delband\" của người Ba Tư nghĩa là \"khăn quấn\" (dựa theo hình dáng của hoa). Đến thế kỷ XVI, loài hoa này được thâm nhập vào Châu Âu từ đế chế Ottoman.', '', 'footer', 'gioi thieu', 'shop Tucliee', '2023-10-05 00:06:22', '2023-11-15 08:54:50', 1, 1, 1),
(4, 0, 'hoa kho heo', 'hoa-kho-heo', 'hoa kho.jpg', 'đf', NULL, 'sdsf', 'sdsafd', 'sdf', '2023-11-14 07:24:46', '2023-11-14 15:17:19', 1, 1, 1),
(5, 0, 'Chính sách bảo hành', 'chinh-sach-bao-hanh', 'Chính sách bảo hành.jpg', '+ Bảo hành trong vòng 15 ngày (tính từ ngày TGDĐ nhận máy ở trạng thái lỗi và đến ngày gọi khách hàng ra lấy lại máy đã bảo hành).\r\n\r\n+ Sản phẩm không bảo hành lại lần 2 trong 30 ngày kể từ ngày máy được bảo hành xong.', NULL, 'footer', 'Chính sách bảo hành', 'Chính sách bảo hành', '2023-11-14 14:55:12', '2023-11-14 14:55:12', 1, NULL, 1),
(6, 0, 'Chính sách bảo hành', 'chinh-sach-bao-hanh', 'Chính sách bảo hành.jpg', '+ Bảo hành trong vòng 15 ngày (tính từ ngày TGDĐ nhận máy ở trạng thái lỗi và đến ngày gọi khách hàng ra lấy lại máy đã bảo hành).\r\n\r\n+ Sản phẩm không bảo hành lại lần 2 trong 30 ngày kể từ ngày máy được bảo hành xong.', NULL, 'Chính sách bảo hành', 'Chính sách bảo hành', 'Chính sách bảo hành', '2023-11-14 14:55:12', '2023-11-14 15:07:24', 1, NULL, 0),
(7, 0, 'Chính sách mua hàng', 'chinh-sach-mua-hang', 'Chính sách mua hàng.jpg', '+ Bảo hành trong vòng 15 ngày (tính từ ngày TGDĐ nhận máy ở trạng thái lỗi và đến ngày gọi khách hàng ra lấy lại máy đã bảo hành).\r\n\r\n+ Sản phẩm không bảo hành lại lần 2 trong 30 ngày kể từ ngày máy được bảo hành xong.', NULL, 'footer', 'Chính sách mua hàng', 'Chính sách mua hàng', '2023-11-14 14:56:35', '2023-11-14 14:56:35', 1, NULL, 1),
(8, 0, 'Chính sách vận chuyển', 'chinh-sach-van-chuyen', 'Chính sách vận chuyển.jpg', 'Phí giao hàng trong nội thành : 30.000/ đơn hàng.\r\nNhân viên giao hàng sẽ liên lạc trước với những khách hàng không có yêu cầu về thời gian để sắp xếp thời gian hợp lý với khách hàng.\r\nVới những khách hàng có yêu cầu về thời gian , nhân viên giao hàng sẽ liên lạc và sắp xếp giao đúng giờ khách hàng yêu cầu \r\nTrừ những trường hợp thời gian quá cấp bách, hoặc ngoài thời gian làm việc của cửa hàng, nhân viên sẽ liên lạc và thỏa thuận lại với thời gian của khách hàng cho hợp lý.\r\nQuý khách vui lòng trực tiếp kiểm tra kỹ sản phẩm ngay khi nhận được hàng từ nhân viên giao hàng, nếu có vấn đề liên quan tới chủng loại, mẫu mã, chất lượng, số lượng hàng hoá không đúng như trong đơn đặt hàng, Quý khách vui lòng báo ngay cho chúng tôi để phối hợp xử lý. Nếu không có bất cứ vấn đề gì, Quý khách vui lòng nhận hàng và thanh toán đầy đủ.\r\nTrường hợp vì một lý do nào đó nhân viên giao hàng không thể giao hàng kịp thời, chúng tôi sẽ liên hệ lại và thông báo cho Quý khách đượ', NULL, 'footer', 'Chính sách vận chuyển', 'Chính sách vận chuyển', '2023-11-14 15:01:06', '2023-11-14 15:01:06', 1, NULL, 1),
(9, 4, 'Lọ gốm mới nhập', 'lo-gom-moi-nhap', 'Lọ gốm mới nhập.jpg', 'Lọ hoa Gốm Sứ Bát Tràng là một tác phẩm nghệ thuật độc đáo, kết hợp giữa tinh hoa của nghệ thuật truyền thống và sự tận tâm của những nghệ nhân có kinh nghiệm và đam mê trong ngành gốm sứ. Tại Xưởng Sản Xuất Gốm Sứ Bát Tràng, chúng tôi tự hào về truyền thống lâu đời và danh tiếng uy tín của làng gốm sứ Bát Tràng, nơi mà nghệ thuật gốm sứ đã được thực hiện và phát triển qua hàng trăm năm.\r\n\r\nSản phẩm của chúng tôi được tạo ra bằng tay, từng bước một, bởi những nghệ nhân lành nghề, những người đã tham gia vào ngành công nghiệp gốm sứ suốt nhiều thế hệ. Họ đảm bảo rằng mỗi sản phẩm được chế tác với sự tỉ mỉ, kỹ thuật và khéo léo để đảm bảo chất lượng và vẻ đẹp tuyệt đẹp.\r\n\r\nChúng tôi không ngừng cải tiến và sáng tạo để mang đến cho khách hàng những mẫu lọ hoa gốm sứ độc đáo và mới mẻ nhất. Những mẫu thiết kế mới luôn được cập nhật để thể hiện sự đa dạng trong phong các', NULL, 'post', 'lọ', 'lọ', '2023-11-14 22:13:33', '2023-11-14 22:13:33', 1, NULL, 1),
(10, 1, 'hoa lay tu phap', 'hoa-lay-tu-phap', 'hoa lay tu phap.jpg', 'sdfghjnbgbc  gfhbbn gbn', NULL, 'post', 'fdb', 'bb', '2023-11-14 23:06:00', '2023-11-14 23:30:01', 1, NULL, 0),
(11, 1, 'fvdvbvb', 'fvdvbvb', 'fvdvbvb.jpg', 'bcv cb', NULL, 'footer', 'vbvc', 'vb', '2023-11-14 23:19:36', '2023-11-14 23:29:41', 1, NULL, 0);

-- --------------------------------------------------------

--
-- Table structure for table `nttl_product`
--

CREATE TABLE `nttl_product` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `category_id` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `brand_id` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `name` varchar(1000) NOT NULL,
  `slug` varchar(1000) NOT NULL,
  `type` varchar(255) NOT NULL,
  `price` double(8,2) NOT NULL,
  `pricesale` double(8,2) NOT NULL,
  `image` varchar(1000) NOT NULL,
  `quality` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `detail` mediumtext NOT NULL,
  `description` varchar(1000) DEFAULT NULL,
  `metakey` varchar(255) NOT NULL,
  `metadesc` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_by` int(10) UNSIGNED NOT NULL DEFAULT 1,
  `updated_by` int(10) UNSIGNED DEFAULT NULL,
  `status` tinyint(3) UNSIGNED NOT NULL DEFAULT 2
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `nttl_product`
--

INSERT INTO `nttl_product` (`id`, `category_id`, `brand_id`, `name`, `slug`, `type`, `price`, `pricesale`, `image`, `quality`, `detail`, `description`, `metakey`, `metadesc`, `created_at`, `updated_at`, `created_by`, `updated_by`, `status`) VALUES
(1, 1, 1, 'Baby Trắng', 'baby-trang', 'sale', 25000.00, 19000.00, 'baby-trang.jpg', 6, 'hoa trang trí, quà tặng,....', '', 'baby trắng', 'baby', '2023-10-04 20:39:52', '2023-10-04 21:25:03', 1, 1, 1),
(2, 1, 1, 'Baby Vàng', 'baby-vang', 'product', 25000.00, 25000.00, 'baby-vang.jpg', 7, 'hoa trang trí,decor phòng ...', '', 'baby vàng', 'baby vàng', '2023-10-04 21:24:51', '2023-10-04 21:24:52', 1, NULL, 1),
(3, 1, 1, 'Baby Tím', 'baby-tim', 'product', 25000.00, 25000.00, 'baby-tim.jpg', 7, 'hoa quà, trang trí', '', 'baby tím', 'baby tím', '2023-10-04 21:26:06', '2023-10-04 21:26:06', 1, NULL, 1),
(4, 1, 1, 'Baby Xanh', 'baby-xanh', 'product', 24000.00, 24000.00, 'baby-xanh.jpg', 4, 'hoa xinh decor phòng, bàn làm việc..', '', 'baby xanh', 'baby xanh', '2023-10-04 21:27:11', '2023-10-04 21:27:11', 1, NULL, 1),
(5, 2, 1, 'Họa Mi Trắng', 'hoa-mi-trang', 'sale', 35000.00, 31000.00, 'hoa-mi-trang.jpg', 56, 'hoa cảnh, trang trí', '', 'họa mi trắng', 'họa mi trắng', '2023-10-04 21:28:50', '2023-10-04 21:28:50', 1, NULL, 1),
(6, 2, 1, 'Họa Mi Vàng', 'hoa-mi-vang', 'product', 34000.00, 34000.00, 'hoa-mi-vang.jpg', 7, 'hoa xinh decor', '', 'họa mi vàng', 'họa mi vàng', '2023-10-04 21:30:03', '2023-10-04 21:32:45', 1, 1, 1),
(7, 2, 1, 'Họa Mi Hồng', 'hoa-mi-hong', 'product', 35000.00, 35000.00, 'hoa-mi-hong.jpg', 6, 'hoa xinh trang trí', '', 'họa mi hồng', 'họa mi hồng', '2023-10-04 21:31:06', '2023-10-04 21:31:06', 1, NULL, 1),
(8, 2, 1, 'Họa Mi Đơn', 'hoa-mi-don', 'product', 32000.00, 32000.00, 'hoa-mi-don.jpg', 6, 'hoa decor phòng', '', 'họa mi đơn', 'họa mi dơn', '2023-10-04 21:32:30', '2023-10-04 21:32:30', 1, NULL, 1),
(9, 3, 1, 'Hồng Đỏ', 'hong-do', 'product', 31000.00, 31000.00, 'hong-do.jpg', 8, 'hoa quà, trang trí', '', 'hồng đỏ', 'hồng đỏ', '2023-10-04 21:34:00', '2023-10-04 21:34:00', 1, NULL, 1),
(10, 3, 1, 'Hồng Đen', 'hong-den', 'product', 34000.00, 34000.00, 'hong-den.jpg', 8, 'hoa xinh làm quà tặng, decor', '', 'hồng đen', 'hồng đen', '2023-10-04 21:34:58', '2023-10-04 21:34:58', 1, NULL, 1),
(11, 3, 1, 'Hồng Xanh', 'hong-xanh', 'sale', 37000.00, 32000.00, 'hong-xanh.jpg', 78, 'hoa tươi làm quà, trang trí', '', 'hồng xanh', 'hồng xanh', '2023-10-04 21:36:05', '2023-10-04 21:36:05', 1, NULL, 1),
(12, 3, 1, 'Hồng Trắng', 'hong-trang', 'product', 36000.00, 36000.00, 'hong-trang.jpg', 9, 'hoa decor, hoa cưới, hoa tặng', '', 'hồng trắng', 'hoong trắng', '2023-10-04 21:37:09', '2023-10-04 21:37:09', 1, NULL, 1),
(13, 4, 1, 'Hướng Dương Vàng Đỏ', 'huong-duong-vang-do', 'product', 42000.00, 42000.00, 'huong-duong-vang-do.jpg', 6, 'hoa decor, quà tặng, hoa cưới', '', 'vàng đỏ', 'vàng đỏ', '2023-10-04 21:38:50', '2023-10-04 21:38:50', 1, NULL, 1),
(14, 4, 1, 'Hướng Dương Vàng', 'huong-duong-vang', 'sale', 45000.00, 39000.00, 'huong-duong-vang.jpg', 56, 'hoa xinh, hoa cưới,...', '', 'dương vàng', 'dương vàng', '2023-10-04 21:40:09', '2023-10-04 21:40:09', 1, NULL, 1),
(15, 4, 1, 'Hướng Dương Trắng', 'huong-duong-trang', 'product', 43000.00, 38000.00, 'huong-duong-trang.jpg', 5, 'hoa đẹp, decor', '', 'dương trắng', 'dương trắng', '2023-10-04 21:41:02', '2023-10-04 21:41:02', 1, NULL, 1),
(16, 4, 1, 'Hướng Dương Đỏ', 'huong-duong-do', 'product', 45000.00, 45000.00, 'huong-duong-do.jpg', 4, 'hoa decor,...', '', 'dương đỏ', 'dương đỏ', '2023-10-04 21:41:52', '2023-10-04 21:41:52', 1, NULL, 1),
(17, 5, 1, 'Ly Tím', 'ly-tim', 'product', 39000.00, 39000.00, 'ly-tim.jpg', 3, 'hoa decor', '', 'ly tím', 'ly tím', '2023-10-04 21:42:57', '2023-10-04 21:42:57', 1, NULL, 1),
(18, 5, 1, 'Ly Trắng', 'ly-trang', 'sale', 40000.00, 37000.00, 'ly-trang.jpg', 56, 'hoa decor', '', 'ly trắng', 'ly trắng', '2023-10-04 21:43:58', '2023-10-04 21:43:58', 1, NULL, 1),
(19, 5, 1, 'Ly Đỏ', 'ly-do', 'product', 41000.00, 41000.00, 'ly-do.jpg', 3, 'hoa trang trí', '', 'ly đỏ', 'ly dỏ', '2023-10-04 21:45:11', '2023-10-04 21:45:11', 1, NULL, 1),
(20, 5, 1, 'Ly Vàng', 'ly-vang', 'product', 39000.00, 39000.00, 'ly-vang.jpg', 6, 'hoa decor', '', 'ly vàng', 'ly vàng', '2023-10-04 21:46:02', '2023-10-04 21:46:02', 1, NULL, 1),
(22, 6, 1, 'Tulip Trắng', 'tulip-trang', 'sale', 47000.00, 44000.00, 'tulip-trang.jpg', 5, 'hoa decor, quà tặng, hoa cưới,...', '', 'tulip trắng', 'tulip trắng', '2023-10-04 21:47:58', '2023-10-04 21:47:58', 1, NULL, 1),
(23, 6, 1, 'Tulip Xanh Trắng', 'tulip-xanh-trang', 'product', 46000.00, 46000.00, 'tulip-xanh-trang.jpg', 5, 'hoa decor, quà tặng,...', '', 'tulip xanh trắng', 'tulip xanh trắng', '2023-10-04 21:49:20', '2023-10-04 21:49:20', 1, NULL, 1),
(24, 6, 1, 'Tulip Đen', 'tulip-den', 'product', 45000.00, 45000.00, 'tulip-den.jpg', 4, 'hoa decor,..', '', 'tulip đen', 'tulip đen huyền bí', '2023-10-04 21:50:20', '2023-10-04 21:50:20', 1, NULL, 1),
(25, 6, 1, 'Tulip Hồng', 'tulip-hong', 'product', 42000.00, 42000.00, 'tulip-hong.jpg', 4, 'hoa decor, tặng, hoa cưới,...', '', 'tulip hồng', 'tuli0p hồng', '2023-10-04 21:51:21', '2023-10-04 21:51:21', 1, NULL, 1),
(26, 7, 2, 'Lọ Xoắn Ốc', 'lo-xoan-oc', 'sale', 240000.00, 220000.00, 'lo-xoan-oc.jpg', 9, 'lọ hoa', '', 'lọ xoắn ốc', 'lọ xoắn ốc', '2023-10-04 21:52:37', '2023-10-04 21:52:37', 1, NULL, 1),
(28, 7, 2, 'Lọ Màu', 'lo-mau', 'product', 230000.00, 230000.00, 'lo-mau.jpg', 5, 'lọ hoa', '', 'lọ màu', 'lọ màu', '2023-10-04 21:54:38', '2023-10-04 21:54:38', 1, NULL, 1),
(29, 7, 2, 'Lọ Trắng', 'lo-trang', 'sale', 300000.00, 270000.00, 'lo-trang.jpg', 7, 'lọ hoa', '', 'lọ trắng', 'lọ trắng', '2023-10-04 21:56:40', '2023-10-04 21:56:40', 1, NULL, 1),
(30, 7, 2, 'Lọ Trắng Đen', 'lo-trang-den', 'product', 240000.00, 240000.00, 'lo-trang-den.jpg', 5, 'lọ hoa', '', 'trắng đen', 'trắng đen', '2023-10-04 21:57:42', '2023-10-04 21:57:42', 1, NULL, 1),
(31, 8, 2, 'Lọ Tím', 'lo-tim', 'product', 310000.00, 310000.00, 'lo-tim.jpg', 4, 'lọ hoa', '', 'lọ tím', 'lọ tim', '2023-10-04 21:58:58', '2023-10-04 21:58:58', 1, NULL, 1),
(32, 8, 2, 'Lọ Sao', 'lo-sao', 'sale', 320000.00, 290000.00, 'lo-sao.jpg', 9, 'lọ hoa', '', 'lọ sao', 'lọ sao', '2023-10-04 21:59:59', '2023-10-04 21:59:59', 1, NULL, 1),
(33, 8, 2, 'Lọ Trong Suốt', 'lo-trong-suot', 'product', 290000.00, 290000.00, 'lo-trong-suot.jpg', 6, 'lọ hoa', '', 'trong suốt', 'trong suốt', '2023-10-04 22:01:01', '2023-10-04 22:01:01', 1, NULL, 1),
(34, 8, 2, 'Lọ Tròn Tron', 'lo-tron-tron', 'product', 280000.00, 280000.00, 'lo-tron.jpg', 7, 'lọ hoa', '', 'lọ tròn', 'lọ tròn', '2023-10-04 22:01:52', '2023-11-14 07:56:23', 1, 1, 1),
(36, 0, 0, 'scdsv', 'scdsv', '43dfdv', 343.00, 3434.00, 'scdsv.jpg', 10, 'vcxv', NULL, 'cxvxcv', 'xcv', '2023-11-14 13:20:30', '2023-11-14 13:20:33', 1, NULL, 0);

-- --------------------------------------------------------

--
-- Table structure for table `nttl_productsale`
--

CREATE TABLE `nttl_productsale` (
  `id` bigint(20) NOT NULL,
  `product_id` int(11) NOT NULL,
  `pricesale` double NOT NULL,
  `quantity` int(11) NOT NULL,
  `date_begin` datetime NOT NULL,
  `date_end` datetime NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `status` tinyint(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `nttl_productsale`
--

INSERT INTO `nttl_productsale` (`id`, `product_id`, `pricesale`, `quantity`, `date_begin`, `date_end`, `created_at`, `updated_at`, `created_by`, `updated_by`, `status`) VALUES
(1, 4, 34, 7, '2023-10-19 11:15:28', '2023-10-19 11:15:28', '2023-10-19 11:15:28', '2023-10-19 04:15:28', 0, 1, 1),
(2, 6, 45, 8, '2023-10-19 11:22:53', '2023-10-19 11:22:53', '2023-10-19 04:22:53', '2023-10-19 04:22:53', 1, NULL, 1),
(3, 7, 34, 5, '2023-10-26 11:23:53', '2023-10-26 11:23:53', '2023-11-14 15:54:52', '2023-11-14 08:54:52', 1, NULL, 1),
(5, 22, 3467, 2, '2023-11-16 08:26:02', '2023-11-16 08:26:02', '2023-11-16 01:26:02', '2023-11-16 01:26:02', 1, NULL, 1);

-- --------------------------------------------------------

--
-- Table structure for table `nttl_productstore`
--

CREATE TABLE `nttl_productstore` (
  `id` bigint(20) NOT NULL,
  `product_id` int(11) NOT NULL,
  `price` double NOT NULL,
  `quantity` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `status` tinyint(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `nttl_productstore`
--

INSERT INTO `nttl_productstore` (`id`, `product_id`, `price`, `quantity`, `created_at`, `updated_at`, `created_by`, `updated_by`, `status`) VALUES
(1, 4, 13123, 23, '2023-10-19 05:11:03', '2023-10-19 05:11:03', 1, NULL, 1),
(4, 5, 21, 21, '2023-10-19 05:50:09', '2023-10-19 05:50:09', NULL, 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `nttl_slider`
--

CREATE TABLE `nttl_slider` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(1000) NOT NULL,
  `link` varchar(1000) NOT NULL,
  `sort_order` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `position` varchar(255) NOT NULL,
  `description` varchar(1000) NOT NULL,
  `image` varchar(1000) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_by` int(10) UNSIGNED NOT NULL DEFAULT 1,
  `updated_by` int(10) UNSIGNED DEFAULT NULL,
  `status` tinyint(3) UNSIGNED NOT NULL DEFAULT 2
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `nttl_slider`
--

INSERT INTO `nttl_slider` (`id`, `name`, `link`, `sort_order`, `position`, `description`, `image`, `created_at`, `updated_at`, `created_by`, `updated_by`, `status`) VALUES
(1, 'Slider 1', 'slider', 0, 'slidershow', '', 'Slider 1.jpg', '2023-10-04 20:41:04', '2023-10-04 20:41:04', 1, NULL, 1),
(2, 'slider 2', 'slider', 0, 'slidershow', '', 'slider 2.jpg', '2023-10-04 20:41:29', '2023-10-04 20:41:29', 1, NULL, 1),
(3, 'slider3', 'slider', 0, 'slidershow', '', 'slider3.jpg', '2023-10-04 20:41:56', '2023-10-04 20:41:56', 1, NULL, 1),
(4, 'slider 4', 'slider', 0, 'slidershow', '', 'slider 4.jpg', '2023-10-04 20:42:26', '2023-10-04 20:42:26', 1, NULL, 1),
(5, 'slider 5', 'slider', 0, 'slidershow', '', 'slider 5.jpg', '2023-10-04 20:42:54', '2023-10-04 20:42:55', 1, NULL, 1),
(6, 'slider6', 'slider', 0, 'slidershow', 'hoa', 'slider6.jpg', '2023-10-04 20:43:17', '2023-11-14 10:13:56', 1, 1, 1),
(7, 'qưerty', 'qưeg', 0, 'qưerg', 'sdfgh', 'qưerty.jpg', '2023-11-14 07:21:23', '2023-11-14 10:14:01', 1, NULL, 1);

-- --------------------------------------------------------

--
-- Table structure for table `nttl_topic`
--

CREATE TABLE `nttl_topic` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(1000) NOT NULL,
  `slug` varchar(1000) NOT NULL,
  `description` varchar(1000) DEFAULT NULL,
  `sort_order` int(11) DEFAULT NULL,
  `parent_id` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `metakey` varchar(255) NOT NULL,
  `metadesc` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_by` int(10) UNSIGNED NOT NULL DEFAULT 1,
  `updated_by` int(10) UNSIGNED DEFAULT NULL,
  `status` tinyint(3) UNSIGNED NOT NULL DEFAULT 2
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `nttl_topic`
--

INSERT INTO `nttl_topic` (`id`, `name`, `slug`, `description`, `sort_order`, `parent_id`, `metakey`, `metadesc`, `created_at`, `updated_at`, `created_by`, `updated_by`, `status`) VALUES
(1, 'Hoa Tulip', 'hoa-tulip', '0', 0, 0, 'hoa xinh', 'hoa xinh', '2023-06-29 23:29:21', NULL, 1, NULL, 1),
(4, 'Lọ trang trí', 'lo-trang-tri', NULL, NULL, 0, 'lọ', 'dfgdfbvd d', '2023-11-14 10:22:42', '2023-11-14 10:23:01', 1, NULL, 1),
(5, 'dgdb', 'dgdb', NULL, NULL, 0, 'fbvcb', 'bfbcb bf', '2023-11-14 23:06:32', '2023-11-14 23:06:35', 1, NULL, 0);

-- --------------------------------------------------------

--
-- Table structure for table `nttl_user`
--

CREATE TABLE `nttl_user` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `address` varchar(255) DEFAULT NULL,
  `image` varchar(255) NOT NULL,
  `roles` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_by` int(10) UNSIGNED NOT NULL DEFAULT 1,
  `updated_by` int(10) UNSIGNED DEFAULT NULL,
  `status` tinyint(3) UNSIGNED NOT NULL DEFAULT 2
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `nttl_user`
--

INSERT INTO `nttl_user` (`id`, `name`, `gender`, `email`, `phone`, `username`, `password`, `address`, `image`, `roles`, `created_at`, `updated_at`, `created_by`, `updated_by`, `status`) VALUES
(1, 'nguyen', '', 'nguyen@gmail.com', '1234567890', NULL, '123', NULL, 'avt.jpg', 'user', '2023-10-05 04:33:20', '2023-10-05 04:33:20', 1, NULL, 1),
(2, 'ABC', NULL, 'ABC@gmail.com', '0987654321', 'ABC', '123', '232ewdsc', 'ABC.jpg', 'user', '2023-10-17 09:05:06', '2023-11-14 10:45:30', 1, NULL, 1),
(3, 'LYNGUYEN', NULL, 'LYNGUYEN@gmail.com', '12356', NULL, '234', NULL, 'avt.jpg', 'user', '2023-10-17 19:46:15', '2023-11-14 12:06:07', 1, NULL, 1),
(4, 'truc', NULL, 'truc@gmail.com', '45655', NULL, '1111', NULL, 'avt.jpg', 'user', '2023-10-26 04:19:56', '2023-11-14 12:12:11', 1, NULL, 1),
(6, 'lyyyyyyyyyyyyyyyyyyyyyy', NULL, 'lyyyyyyyyyyyyyy@gmail.com', '123456', 'lylyyy', '2345', 'fdvv', 'lylyyy.jpg', 'customer', '2023-11-14 11:07:00', '2023-11-14 11:53:31', 1, NULL, 1),
(7, 'sdsfsdf', NULL, 'dfdsfds@gmail.com', '454657', 'fgvfbv', 'fbvcb', 'đf', 'fgvfbv.jpg', 'user', '2023-11-14 12:12:40', '2023-11-14 12:12:40', 1, NULL, 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `nttl_brand`
--
ALTER TABLE `nttl_brand`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `nttl_category`
--
ALTER TABLE `nttl_category`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `nttl_config`
--
ALTER TABLE `nttl_config`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `nttl_contact`
--
ALTER TABLE `nttl_contact`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `nttl_menu`
--
ALTER TABLE `nttl_menu`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `nttl_order`
--
ALTER TABLE `nttl_order`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `nttl_orderdetail`
--
ALTER TABLE `nttl_orderdetail`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `nttl_post`
--
ALTER TABLE `nttl_post`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `nttl_product`
--
ALTER TABLE `nttl_product`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `nttl_productsale`
--
ALTER TABLE `nttl_productsale`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `nttl_productstore`
--
ALTER TABLE `nttl_productstore`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `nttl_slider`
--
ALTER TABLE `nttl_slider`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `nttl_topic`
--
ALTER TABLE `nttl_topic`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `nttl_user`
--
ALTER TABLE `nttl_user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `nttl_brand`
--
ALTER TABLE `nttl_brand`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `nttl_category`
--
ALTER TABLE `nttl_category`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `nttl_config`
--
ALTER TABLE `nttl_config`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `nttl_contact`
--
ALTER TABLE `nttl_contact`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `nttl_menu`
--
ALTER TABLE `nttl_menu`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `nttl_order`
--
ALTER TABLE `nttl_order`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `nttl_orderdetail`
--
ALTER TABLE `nttl_orderdetail`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `nttl_post`
--
ALTER TABLE `nttl_post`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `nttl_product`
--
ALTER TABLE `nttl_product`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- AUTO_INCREMENT for table `nttl_productsale`
--
ALTER TABLE `nttl_productsale`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `nttl_productstore`
--
ALTER TABLE `nttl_productstore`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `nttl_slider`
--
ALTER TABLE `nttl_slider`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `nttl_topic`
--
ALTER TABLE `nttl_topic`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `nttl_user`
--
ALTER TABLE `nttl_user`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
