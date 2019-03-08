<?php

namespace Drupal\paragraphs_overrides\Plugin\Block;

use Drupal\Core\Block\BlockBase;

/**
 * Provides the Site Navigation Block.
 *
 * @Block(
 *   id = "site_navigation",
 *   admin_label = @Translation("Site Navigation"),
 *   category = @Translation("Custom"),
 * )
 */
class SiteNavigation extends BlockBase {

	/**
	 * {@inheritdoc}
	 */
	public function build() {
		return [
			'#theme' => 'site_navigation_experience',
		];
	}

}
