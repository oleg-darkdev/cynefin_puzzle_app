<script>
  import { TagLink } from '$shared';

  export let article;
</script>

<div role="listitem" class="w-dyn-item">
  <div class="c-blog-left-parent c-blog">
    <!-- {article.link} -->
    <a href="/articles/" class="blogright w-inline-block">
      <img src="{article.promoImg}" loading="lazy" alt="" class="coverphoto">
    </a>
    <div class="bloglist_content">
      <!-- {article.link} -->
      <a href="/articles/" class="g-bloginfo w-inline-block">
        <div class="paragraph-small margin-bottom-0">Время чтения: <span class="complex-domain-textColor">{article.timeToRead}</span> минут.</div>
        <h2 class="h2-blog h2-blog_list">{article.title}</h2>
        <p class="p_nomarg">{article.shortDesc}</p>
        <div class="learnmore-button max-w-[200px]">
          <div>Читать статью</div>
        </div>
      </a>
      <div class="tag_list">
        {#each article.tags as tag}
          <TagLink {tag}/>
        {/each}
      </div>
    </div>
  </div>
</div>


<style>

</style>
