<?php
/**
 * Plugin Name: Bootstrap Blocks
 * Plugin URI: https://github.com/nuss/bootstrap-blocks-wordpress-plugin/tree/bootstrap-blocks-enhanced
 * Description: Bootstrap 3 Gutenberg Blocks for WordPress, a legacy version of the Bootstrap 4 Gutenberg Blocks for Wordpress plugin.
 * Author: Stefan Nussbaumer
 * Author URI: http://pustota.basislager.org
 * Version: 1.0.0
 * License: GPL2+
 * License URI: https://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain: wp-bootstrap-blocks
 * Domain Path: /languages/
 *
 * @package wp-bootstrap-blocks
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// Define WP_BOOTSTRAP_BLOCKS_PLUGIN_FILE.
if ( ! defined( 'WP_BOOTSTRAP_BLOCKS_PLUGIN_FILE' ) ) {
	define( 'WP_BOOTSTRAP_BLOCKS_PLUGIN_FILE', __FILE__ );
}

// Include the main WP_Bootstrap_Blocks class.
if ( ! class_exists( \WP_Bootstrap_Blocks\WP_Bootstrap_Blocks::class ) ) {
	require_once plugin_dir_path( WP_BOOTSTRAP_BLOCKS_PLUGIN_FILE ) . 'src/class-wp-bootstrap-blocks.php';
}

// Initialize plugin
\WP_Bootstrap_Blocks\WP_Bootstrap_Blocks::instance();
