<?php
/**
 * Register wp-bootstrap-blocks/column block type.
 *
 * @package wp-bootstrap-blocks/column
 */

namespace WP_Bootstrap_Blocks\Column;

use WP_Bootstrap_Blocks\Block_Type;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! class_exists( '\WP_Bootstrap_Blocks\Column\Column_Block_Type', false ) ) :

	/**
	 * Class Column_Block_Type
	 */
	class Column_Block_Type extends Block_Type {
		/**
		 * Name of block type including namespace.
		 *
		 * @var string
		 */
		protected $name = 'wp-bootstrap-blocks/column';

		/**
		 * Block attributes.
		 *
		 * @var array
		 */
		protected $attributes = array(
			'sizeXl' => array(
				'type' => 'number',
			),
			'sizeLg' => array(
				'type' => 'number',
			),
			'sizeMd' => array(
				'type' => 'number',
			),
			'sizeSm' => array(
				'type' => 'number',
			),
			'sizeXs' => array(
				'type' => 'number',
			),
			'columnID' => array(
				'type' => 'string',
			),
			'bgColor' => array(
				'type' => 'string',
			),
		);

		/**
		 * Default values of block attributes.
		 *
		 * @var array
		 */
		protected $default_attributes = array(
			'sizeXl' => 0,
			'sizeLg' => 0,
			'sizeMd' => 0,
			'sizeSm' => 0,
			'sizeXs' => 12,
			'columnID' => '',
			'bgColor' => '',
		);
	}

endif;
