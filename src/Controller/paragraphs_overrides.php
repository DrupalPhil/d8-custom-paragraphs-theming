<?php

namespace Drupal\paragraphs_overrides\Controller;

use Drupal\Core\Controller\ControllerBase;

/**
 * Controller routines for page example routes.
 */
class ParagraphsOverrides extends ControllerBase {


	/**
	 * {@inheritdoc}
	 */
	public function getModuleName() {
		return 'paragraphs_overrides';
	}

	/**
	 * Constructs a simple page.
	 *
	 * The router _controller callback, maps the path
	 * 'examples/page-example/simple' to this method.
	 *
	 * _controller callbacks return a renderable array for the content area of the
	 * page. The theme system will later render and surround the content with the
	 * appropriate blocks, navigation, and styling.
	 */
	public function simple() {
		return [
			'#markup' => '<p>' . $this->t('Simple page: The quick brown fox jumps over the lazy dog.') . '</p>',
		];
	}

}
