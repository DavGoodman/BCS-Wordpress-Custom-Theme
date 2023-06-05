<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

   
    <?php 
    wp_head(); 
    ?>

</head>

<body>
    
<div class="container">
    <nav class="">
        <div class="nav-main">
            <div class="nav-header">

                <?php 
                if(function_exists('the_custom_logo'))
                    $custom_logo_id = get_theme_mod('custom_logo');
                    $logo = wp_get_attachment_image_src($custom_logo_id);
                ?>

                <img class="logo" src="<?php echo $logo[0] ?>" alt="logo">
                <i onclick="showMenu()" class="fa-solid fa-bars"></i>
            </div>
            
            <?php 
                wp_nav_menu(
                    array(
                        'menu' => 'primary',
                        'container' => '',
                        'theme_location' => 'primary',
                        'items_wrap' => '<ul id="" class="menu">%3$s</ul>'
                    )
                );
            ?>
                
        </div>
    </nav>
    <div style="margin-bottom: 110px;"></div>