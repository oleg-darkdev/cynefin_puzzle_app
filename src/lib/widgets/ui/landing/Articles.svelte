<script>
  import { ArticleCard } from '$lib/entities';
  import { articles } from '$shared';
</script>

<section class="section">
  <div class="container">
    <div class="collection-list-wrapper w-dyn-list">
      <div id='articles' role="list" class="list_blog w-dyn-items">

        {#each articles as article}
          <ArticleCard {article} />
        {/each}

      </div>
    </div>
  </div>
</section>
