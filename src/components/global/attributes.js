/**
 * Internal dependencies
 */
import Lightbox, { LightboxAttributes } from '../../components/lightbox';
import BackgroundPanel, { BackgroundAttributes } from '../../components/background';

/**
 * Set global attributes that every block uses.
 * @type {Object}
 */
const GlobalAttributes = {
	images: {
		type: 'array',
		default: [],
		source: 'query',
		selector: '.blockgallery--item',
		query: {
			url: {
				source: 'attribute',
				selector: 'img',
				attribute: 'src',
			},
			link: {
				source: 'attribute',
				selector: 'img',
				attribute: 'data-link',
			},
			alt: {
				source: 'attribute',
				selector: 'img',
				attribute: 'alt',
				default: '',
			},
			id: {
				source: 'attribute',
				selector: 'img',
				attribute: 'data-id',
			},
			caption: {
				type: 'array',
				source: 'children',
				selector: 'figcaption',
			},
		},
	},
	linkTo: {
		type: 'string',
		default: 'none',
	},
	gutter: {
		type: 'number',
		default: 15,
	},
	gutterMobile: {
		type: 'number',
		default: 15,
	},
	radius: {
		type: 'number',
		default: 0,
	},
	shadow: {
		type: 'string',
		default: 'none',
	},
	filter: {
		type: 'string',
		default: 'none',
	},
	captionStyle: {
		type: 'string',
		default: 'dark',
	},
	captionColor: {
		type: 'string',
	},
	customCaptionColor: {
		type: 'string',
	},
	fontSize: {
		type: 'string',
	},
	customFontSize: {
		type: 'number',
	},
	primaryCaption: {
		type: 'array',
		source: 'children',
		selector: '.blockgallery--primary-caption',
	},
	...LightboxAttributes,
	...BackgroundAttributes,
};

export default GlobalAttributes;