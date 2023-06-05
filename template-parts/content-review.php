<div class="review">
        
    <div class="review-info">
        <h1 class="review-title"><?php the_title(); ?></h1>
        <span class="date"><?php the_date(); ?></span>
        <?php 
            the_tags('<span class="tag">', '</span> <span class="tag">', '</span>' );
        ?>
        <span class="comments"><?php comments_number(); ?></span>
    </div>
    <div class="review-text-container">
        <?php the_content(); ?>
    </div>
</div>