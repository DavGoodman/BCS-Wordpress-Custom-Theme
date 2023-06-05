<?php
    function theme_support()
    {
        add_theme_support('title-tag');
        add_theme_support('custom-logo');
    }

    add_action('after_setup_theme', 'theme_support');



    
    function theme_menus()
    {
        $locations = array(
            'primary' => "Primary Menu Items",
            'footer' => "Footer Menu Items"
        );

        register_nav_menus($locations);
    }

    add_action('init', 'theme_menus');



    function register_styles()
    {
        $version = wp_get_theme()->get('Version');

        wp_enqueue_style('theme-style', get_template_directory_uri() . "/style.css",
            array(), $version, 'all');

        wp_enqueue_style('theme-fontawesome', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css',
            array("theme-style"), '6.1.2', 'all');
    }

    add_action('wp_enqueue_scripts', 'register_styles');



    function register_scripts()
    {
        wp_enqueue_script('theme-home', get_template_directory_uri() . "/assets/js/home.js",
            array(), '1.0', true);
    }

    add_action('wp_enqueue_scripts', 'register_scripts');

?>