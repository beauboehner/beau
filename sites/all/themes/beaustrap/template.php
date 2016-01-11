<?php
/**
 * Created by PhpStorm.
 * User: beauboehner
 * Date: 1/11/16
 * Time: 2:42 PM
 */

function beaustrap_preprocess_page(&$vars) {
    if ($vars['node']->type == 'page' && $vars['node']->nid != 4) {
        $vars['breadcrumb'] = '<div class="breadcrumb"><a href="/"><div class="home-button"><i class="fa fa-arrow-circle-o-left fa-2x"></i>Back To Home</a></div></div>';
    }
}