/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { InnerBlocks, InspectorControls } = wp.editor;
const { TextControl, CheckboxControl, ColorPalette, PanelBody, RangeControl, SelectControl } = wp.components;
const { Component, Fragment } = wp.element;
const { applyFilters } = wp.hooks;

const ColumnIDField = ( { label, attributeName, value, setAttributes } ) => {
	return (
		<TextControl
			label={ label }
			value={ value }
			onChange={ ( idString ) => {
				setAttributes( {
					[ attributeName ]: idString,
				} );
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

let bgColorOptions = [
	{ name: 'primary', color: '#007bff' },
	{ name: 'secondary', color: '#6c757d' },
];

bgColorOptions = applyFilters( 'wpBootstrapBlocks.column.bgColorOptions', bgColorOptions );

let paddingOptions = [
	{ label: __( 'None', 'wp-bootstrap-blocks' ), value: '' },
	{ label: __( 'Small', 'wp-bootstrap-blocks' ), value: 'p-2' },
	{ label: __( 'Medium', 'wp-bootstrap-blocks' ), value: 'p-3' },
	{ label: __( 'Large', 'wp-bootstrap-blocks' ), value: 'p-5' },
];

paddingOptions = applyFilters( 'wpBootstrapBlocks.column.paddingOptions', paddingOptions );

export default class BootstrapColumnEdit extends Component {
	render() {
		const { attributes, className, setAttributes } = this.props;
		const {
			columnID,
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
		} = attributes;

		return (
			<Fragment>
				<InspectorControls>
					<PanelBody
						title={ __( 'Column size', 'wp-bootstrap-blocks' ) }
						initialOpen={ false }
					>
						<ColumnSizeRangeControl
							label={ __( 'Xl Columns', 'wp-bootstrap-blocks' ) }
							attributeName="sizeXl"
							value={ sizeXl }
							setAttributes={ setAttributes }
						/>
						<ColumnSizeRangeControl
							label={ __( 'Xl Columns offset', 'wp-bootstrap-blocks' ) }
							attributeName="indentXl"
							value={ indentXl }
							setAttributes={ setAttributes }
						/>
						<hr />
						<ColumnSizeRangeControl
							label={ __( 'Lg Columns', 'wp-bootstrap-blocks' ) }
							attributeName="sizeLg"
							value={ sizeLg }
							setAttributes={ setAttributes }
						/>
						<ColumnSizeRangeControl
							label={ __( 'Lg Columns offset', 'wp-bootstrap-blocks' ) }
							attributeName="indentLg"
							value={ indentLg }
							setAttributes={ setAttributes }
						/>
						<hr />
						<ColumnSizeRangeControl
							label={ __( 'Md Columns', 'wp-bootstrap-blocks' ) }
							attributeName="sizeMd"
							value={ sizeMd }
							setAttributes={ setAttributes }
						/>
						<ColumnSizeRangeControl
							label={ __( 'Md Columns offset', 'wp-bootstrap-blocks' ) }
							attributeName="indentMd"
							value={ indentMd }
							setAttributes={ setAttributes }
						/>
						<hr />
						<ColumnSizeRangeControl
							label={ __( 'Sm Columns', 'wp-bootstrap-blocks' ) }
							attributeName="sizeSm"
							value={ sizeSm }
							setAttributes={ setAttributes }
						/>
						<ColumnSizeRangeControl
							label={ __( 'Sm Columns offset', 'wp-bootstrap-blocks' ) }
							attributeName="indentSm"
							value={ indentSm }
							setAttributes={ setAttributes }
						/>
						<hr />
						<ColumnSizeRangeControl
							label={ __( 'Xs Columns', 'wp-bootstrap-blocks' ) }
							attributeName="sizeXs"
							value={ sizeXs }
							setAttributes={ setAttributes }
						/>
						<ColumnSizeRangeControl
							label={ __( 'Xs Columns offset', 'wp-bootstrap-blocks' ) }
							attributeName="indentXs"
							value={ indentXs }
							setAttributes={ setAttributes }
						/>
					</PanelBody>
					<PanelBody
						title={ __( 'Column ID', 'wp-bootstrap-blocks' ) }
						initialOpen={ false }
					>
						<ColumnIDField
							label={ __( 'Unique ID of the html element', 'wp-bootstrap-blocks' ) }
							attributeName="columnID"
							value={ columnID }
							setAttributes={ setAttributes }
						/>
					</PanelBody>
					<PanelBody
						title={ __( 'Background color', 'wp-bootstrap-blocks' ) }
						initialOpen={ false }
					>
						<ColorPalette
							colors={ bgColorOptions }
							value={ bgColor }
							onChange={ ( value ) => {
								// Value is undefined if color gets cleared
								if ( ! value ) {
									setAttributes( {
										bgColor: '',
									} );
								} else {
									const selectedColor = bgColorOptions.find( c => c.color === value );
									if ( selectedColor ) {
										setAttributes( {
											bgColor: selectedColor.name,
										} );
									}
								}
							} }
							disableCustomColors
						/>
						{ bgColor ?
							<CheckboxControl
								label={ __( 'Center content vertically in row', 'wp-bootstrap-blocks' ) }
								checked={ centerContent }
								onChange={ ( isChecked ) => setAttributes( { centerContent: isChecked } ) }
								help={ __( 'This setting only applies if there is no vertical alignment set on the parent row block.', 'wp-bootstrap-blocks' ) }
							/> : null
						}
					</PanelBody>
					<PanelBody
						title={ __( 'Padding (inside column)', 'wp-bootstrap-blocks' ) }
						initialOpen={ false }>
						<SelectControl
							label={ __( 'Size', 'wp-bootstrap-blocks' ) }
							value={ padding }
							options={ paddingOptions }
							onChange={ ( value ) => {
								setAttributes( {
									padding: value,
								} );
							} }
							title={ __( 'Column ID', 'wp-bootstrap-blocks' ) }
							initialOpen={ false }
						/>
						<ColumnIDField
							label={ __( 'Column ID', 'wp-bootstrap-blocks' ) }
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
