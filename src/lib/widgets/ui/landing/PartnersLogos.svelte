<script>
  import {partners} from '$shared';
</script>

<section class="section s-logos">
  <div class="container">
    <div class="grid_logos">
      {#each partners as partner}
        <img src="{partner}" loading="lazy" width="212" alt="partner logo" class="merchants">
      {/each}
    </div>
  </div>
</section>


<style>


</style>
