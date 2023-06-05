

<?php 
    get_header(); 
?>


<div class="text">

    <?php 
        if(have_posts())
        {
            while(have_posts())
            {
                the_post();
                
                get_template_part('template-parts/content', 'review');

            }
        }
    ?>

</div>


<?php 
    get_footer();
?>
