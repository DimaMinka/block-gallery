/**
 * Internal dependencies
 */
import * as helper from './../utils/helper';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const { MediaPlaceholder } = wp.editor;

/**
 * Gallery Image Component
 */
class GalleryPlaceholder extends Component {

	constructor() {
		super( ...arguments );
		this.onSelectImages = this.onSelectImages.bind( this );
	}

	onSelectImages( images ) {
		this.props.setAttributes( {
			images: images.map( ( image ) => helper.pickRelevantMediaFiles( image ) ),
		} );
	}

	render() {

		const {
			attributes,
			className,
			noticeOperations,
			noticeUI,
		} = this.props;

		return (
			<Fragment>
				<MediaPlaceholder
					icon={ this.props.icon }
					className={ className }
					labels={ {
						title: this.props.label,
						name: __( 'images' ),
					} }
					onSelect={ this.onSelectImages }
					accept="image/*"
					allowedTypes={ helper.ALLOWED_MEDIA_TYPES }
					multiple
					notices={ noticeUI }
					onError={ noticeOperations.createErrorNotice }
				/>
			</Fragment>
		);
	}
}

export default GalleryPlaceholder;

