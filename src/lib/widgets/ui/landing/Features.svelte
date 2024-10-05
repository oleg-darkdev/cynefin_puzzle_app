<script>
  import {features} from '$shared';
</script>

<div class="section">
  <div class="container">
    <div id='about' class="c-center_content">
      <h2 class="margin-bottom-80">Lorem Ipsum is + simply dummy text = of the printing </h2>
    </div>
    <div class="grid-40">
      {#each features as {title, desc, img, brandColor}}
      <div class="content-layout-center card {brandColor}">
        <img src="{img}" loading="lazy" width="180" alt="" class="margin-bottom-40 instant_answers">
        <h3>{title}</h3>
        <p class="margin-bottom-0">
          {desc}
        </p>
      </div>
      {/each}
    </div>
  </div>
</div>


<style>


</style>
