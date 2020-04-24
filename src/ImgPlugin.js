import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';
import imageIcon from '@ckeditor/ckeditor5-core/theme/icons/image.svg';

class InsertImagePlugin extends Plugin {
	insertImg() {
		const { editor } = this;
		const conf = editor.config.get( 'insertImage' );
		if ( conf && conf.openMediaLibrary ) {
			conf.openMediaLibrary();
		}
	}

	init() {
		const { editor } = this;

		editor.ui.componentFactory.add( 'insertImage', locale => {
			const view = new ButtonView( locale );

			view.set( {
				label: 'Insert image',
				icon: imageIcon,
				tooltip: true
			} );

			// Callback executed once the image is clicked.
			view.on( 'execute', () => this.insertImg() );

			return view;
		} );
	}
}

export default InsertImagePlugin;
