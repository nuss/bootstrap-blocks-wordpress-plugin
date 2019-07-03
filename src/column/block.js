/**
 * BLOCK: wp-bootstrap-blocks/column
 */
import edit from './edit';

const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks
const { InnerBlocks } = wp.editor;

registerBlockType( 'wp-bootstrap-blocks/column', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __( 'Column', 'wp-bootstrap-blocks' ), // Block title.
	icon: 'menu', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'wp-bootstrap-blocks', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__( 'Bootstrap Blocks', 'wp-bootstrap-blocks' ),
		__( 'Bootstrap', 'wp-bootstrap-blocks' ),
		__( 'Column', 'wp-bootstrap-blocks' ),
	],
	parent: [ 'wp-bootstrap-blocks/row' ],

	// attributes are defined server side with register_block_type(). This is needed to make default attributes available in the blocks render callback.

	getEditWrapperProps( attributes ) {
		const {
			sizeXl,
			indentXl,
			sizeLg,
			indentLg,
			sizeMd,
			indentMd,
			sizeSm,
			indentSm,
			sizeXs,
			indentXs,
			bgColor,
			padding,
			centerContent,
			columnID,
		} = attributes;

		return {
			'data-size-xs': sizeXs,
			'data-indent-xs': indentXs,
			'data-size-sm': sizeSm,
			'data-indent-sm': indentSm,
			'data-size-md': sizeMd,
			'data-indent-md': indentMd,
			'data-size-lg': sizeLg,
			'data-indent-lg': indentLg,
			'data-size-xl': sizeXl,
			'data-indent-xl': indentXl,
			'data-bg-color': bgColor,
			'data-padding':	padding,
			'data-center-content': centerContent,
			id: columnID,
		};
	},

	edit,

	save() {
		return (
			<InnerBlocks.Content />
		);
	},
} );
