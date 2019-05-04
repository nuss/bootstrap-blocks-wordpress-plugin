/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { InnerBlocks, InspectorControls } = wp.editor;
const { PanelBody, RangeControl, TextControl } = wp.components;
const { Component, Fragment } = wp.element;
const { compose } = wp.compose;

/**
 * Internal dependencies
 */
import { withBlockEditContext } from '../block-edit-context';

const ColumnIDField = ( { label, attributeName, value, setAttributes } ) => {
	return (
		<TextControl
			label={ label }
			value={ value }
			onChange={ ( idString ) => {
				setAttributes( {
					[ attributeName ]: idString
				} )
			} }
		/>
	);
};

const ColumnSizeRangeControl = ( { label, attributeName, value, setAttributes } ) => {
	return (
		<RangeControl
			label={ label }
			value={ value }
			onChange={ ( selectedSize ) => {
				setAttributes( {
					[ attributeName ]: selectedSize,
				} );
			} }
			min={ 0 }
			max={ 12 }
		/>
	);
};

class BootstrapColumnEdit extends Component {
	render() {
		const { attributes, className, setAttributes } = this.props;
		const { columnID, sizeXl, sizeLg, sizeMd, sizeSm, sizeXs } = attributes;

		return (
			<Fragment>
				<InspectorControls>
					<PanelBody
						title={ __( 'Column size', 'wp-bootstrap-blocks' ) }
						initialOpen={ true }
					>
						<ColumnSizeRangeControl
							label={ __( 'Xl Columns', 'wp-bootstrap-blocks' ) }
							attributeName="sizeXl"
							value={ sizeXl }
							setAttributes={ setAttributes }
						/>
						<ColumnSizeRangeControl
							label={ __( 'Lg Columns', 'wp-bootstrap-blocks' ) }
							attributeName="sizeLg"
							value={ sizeLg }
							setAttributes={ setAttributes }
						/>
						<ColumnSizeRangeControl
							label={ __( 'Md Columns', 'wp-bootstrap-blocks' ) }
							attributeName="sizeMd"
							value={ sizeMd }
							setAttributes={ setAttributes }
						/>
						<ColumnSizeRangeControl
							label={ __( 'Sm Columns', 'wp-bootstrap-blocks' ) }
							attributeName="sizeSm"
							value={ sizeSm }
							setAttributes={ setAttributes }
						/>
						<ColumnSizeRangeControl
							label={ __( 'Xs Columns', 'wp-bootstrap-blocks' ) }
							attributeName="sizeXs"
							value={ sizeXs }
							setAttributes={ setAttributes }
						/>
					</PanelBody>
					<PanelBody
						title={ __('Column ID', 'wp-bootstrap-blocks') }
						initialOpen={ false }
					>
						<ColumnIDField
							label={ __('Column ID', 'wp-bootstrap-blocks') }
							attributeName="columnID"
							value={ columnID }
							setAttributes={ setAttributes }
						/>
					</PanelBody>
				</InspectorControls>
				<div className={ className }>
					<InnerBlocks templateLock={ false } />
				</div>
			</Fragment>
		);
	}
}

export default compose(
	withBlockEditContext( ( { clientId } ) => {
		return {
			clientId,
		};
	} )
)( BootstrapColumnEdit );
