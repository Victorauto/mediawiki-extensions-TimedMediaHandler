<?php
/**
 * WebM handler
 */
class WebMHandler extends TimedMediaHandler {
	// XXX match GETID3_VERSION ( too bad version is not a getter )
	const METADATA_VERSION = 2;

	/**
	 * @param $image File
	 * @param $path string
	 * @return string
	 */
	function getMetadata( $image, $path ) {
		// Create new id3 object:
		$getID3 = new getID3();

		// Don't grab stuff we don't use:
		$getID3->option_tag_id3v1         = false;  // Read and process ID3v1 tags
		$getID3->option_tag_id3v2         = false;  // Read and process ID3v2 tags
		$getID3->option_tag_lyrics3       = false;  // Read and process Lyrics3 tags
		$getID3->option_tag_apetag        = false;  // Read and process APE tags
		$getID3->option_tags_process      = false;  // Copy tags to root key 'tags' and encode to $this->encoding
		$getID3->option_tags_html         = false;  // Copy tags to root key 'tags_html' properly translated from various encodings to HTML entities

		// Analyze file to get metadata structure:
		$id3 = $getID3->analyze( $path );

		// Unset some parts of id3 that are too detailed and matroska specific:
		unset( $id3['matroska'] );
		// remove file paths
		unset( $id3['filename'] );
		unset( $id3['filepath'] );
		unset( $id3['filenamepath']);

		// Update the version
		$id3['version'] = self::METADATA_VERSION;

		return serialize( $id3 );
	}

	/**
	 * Get the "media size"
	 * @param $file File
	 * @param $path string
	 * @param $metadata bool
	 * @return array|bool
	 */
	function getImageSize( $file, $path, $metadata = false ) {
		// Just return the size of the first video stream
		if ( $metadata === false ) {
			$metadata = $file->getMetadata();
		}
		$metadata = $this->unpackMetadata( $metadata );
		if ( isset( $metadata['error'] ) ) {
			return false;
		}

		$size = array( false, false );
		// display_x/display_y is only set if DisplayUnit
		// is pixels, otherwise display_aspect_ratio is set
		if ( isset( $metadata['video']['display_x'] )
				&&
			isset( $metadata['video']['display_y'] )
		){
			$size = array (
				$metadata['video']['display_x'],
				$metadata['video']['display_y']
			);
		}
		else if ( isset( $metadata['video']['resolution_x'] )
				&&
			isset( $metadata['video']['resolution_y'] )
		){
			$size = array (
				$metadata['video']['resolution_x'],
				$metadata['video']['resolution_y']
			);
			if ( isset($metadata['video']['crop_top']) ) {
				$size[1] -= $metadata['video']['crop_top'];
			}
			if ( isset($metadata['video']['crop_bottom']) ) {
				$size[1] -= $metadata['video']['crop_bottom'];
			}
			if ( isset($metadata['video']['crop_left']) ) {
				$size[0] -= $metadata['video']['crop_left'];
			}
			if ( isset($metadata['video']['crop_right']) ) {
				$size[0] -= $metadata['video']['crop_right'];
			}
		}
		if ( $size[0] && $size[1] && isset( $metadata['video']['display_aspect_ratio'] ) ) {
			//for wide images (i.e. 16:9) take native height as base
			if ( $metadata['video']['display_aspect_ratio'] >= 1 ) {
				$size[0] = intval( $size[1] * $metadata['video']['display_aspect_ratio'] );
			} else { //for tall images (i.e. 9:16) take width as base
				$size[1] = intval( $size[0] / $metadata['video']['display_aspect_ratio'] );
			}
		}
		return $size;
	}

	/**
	 * @param $metadata
	 * @return bool|mixed
	 */
	function unpackMetadata( $metadata ) {
		wfSuppressWarnings();
		$unser = unserialize( $metadata );
		wfRestoreWarnings();
		if ( isset( $unser['version'] ) && $unser['version'] == self::METADATA_VERSION ) {
			return $unser;
		} else {
			return false;
		}
	}

	/**
	 * @param $image
	 * @return string
	 */
	function getMetadataType( $image ) {
		return 'webm';
	}

	/**
	 * @param $file File
	 * @return String
	 */
	function getWebType( $file ) {
		return 'video/webm; codecs="vp8, vorbis"';
	}

	/**
	 * @param $file File
	 * @return array|bool
	 */
	function getStreamTypes( $file ) {
		$streamTypes = array();
		$metadata = $this->unpackMetadata( $file->getMetadata() );
		if ( !$metadata || isset( $metadata['error'] ) ) {
			return false;
		}
		if( isset( $metadata['audio'] ) && $metadata['audio']['dataformat'] == 'vorbis' ){
			$streamTypes[] =  'Vorbis';
		}
		// id3 gives 'V_VP8' for what we call VP8
		if( $metadata['video']['dataformat'] == 'vp8' ){
			$streamTypes[] =  'VP8';
		}

		return $streamTypes;
	}

	/**
	 * @param $file File
	 * @return mixed
	 */
	function getBitrate( $file ){
		$metadata = self::unpackMetadata( $file->getMetadata() );
		return $metadata['bitrate'];
	}

	/**
	 * @param $file File
	 * @return int
	 */
	function getLength( $file ) {
		$metadata = $this->unpackMetadata( $file->getMetadata() );
		if ( !$metadata || isset( $metadata['error'] ) ) {
			return 0;
		} else {
			return $metadata['playtime_seconds'];
		}
	}

	/**
	 * @param $file File
	 * @return bool|int
	 */
	function getFramerate( $file ){
		$metadata = $this->unpackMetadata( $file->getMetadata() );
		if ( !$metadata || isset( $metadata['error'] ) ) {
			return 0;
		} else {
			// return the frame rate of the first found video stream:
			if( isset( $metadata['video']['frame_rate'] ) ){
				return $metadata['video']['frame_rate'];
			}
			return false;
		}
	}

	/**
	 * @param $file File
	 * @return String
	 */
	function getShortDesc( $file ) {
		global $wgLang;

		$streamTypes = $this->getStreamTypes( $file );
		if ( !$streamTypes ) {
			return parent::getShortDesc( $file );
		}
		return wfMessage( 'timedmedia-webm-short-video', implode( '/', $streamTypes ),
			$wgLang->formatTimePeriod( $this->getLength( $file ) ) )->text();
	}

	/**
	 * @param $file File
	 * @return String
	 */
	function getLongDesc( $file ) {
		global $wgLang;
		$streamTypes = $this->getStreamTypes( $file );
		if ( !$streamTypes ) {
			return parent::getLongDesc( $file );
		}
		return wfMessage('timedmedia-webm-long-video',
			implode( '/', $streamTypes ),
			$wgLang->formatTimePeriod( $this->getLength($file) ),
			$wgLang->formatBitrate( $this->getBitRate( $file ) )
		)->numParams(
			$file->getWidth(),
			$file->getHeight()
		)->text();

	}

}
