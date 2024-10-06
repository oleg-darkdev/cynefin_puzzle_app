<script>
  import { TagLink } from '$shared';

  export let id, icon, abbr, shortDesc, brandColorBg, tags;
</script>


<div role="listitem" class="w-dyn-item">
  <div class="testimonial-item {brandColorBg} ">
    <div class="quote w-richtext">
      <div class="grid grid-cols-2 gap-6">
        {#each tags as tag}
          <TagLink {tag}/>
        {/each}
      </div>

      <p>
        <!-- <span class="textcolor_white">super appreciative</span> -->
        {shortDesc}
      </p>
    </div>
    <div class="quote-author">
      <div class="coverphoto-parent quote-avatar">
        <img src="{icon}" loading="lazy" alt="" class="coverphoto">
      </div>
      <p class="quote-author-name">{abbr}</p>
    </div>
  </div>
</div>



<style>
.testimonial-item {
  display: -ms-grid;
  display: grid;
  max-width: 400px;
  min-width: 400px;
  margin-right: 40px;
  padding: 24px 40px;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-align-content: center;
  -ms-flex-line-pack: center;
  align-content: center;
  -ms-grid-row-align: center;
  align-self: center;
  grid-auto-flow: row;
  grid-auto-columns: auto;
  grid-column-gap: 16px;
  grid-row-gap: 8px;
  -ms-grid-columns: auto;
  grid-template-columns: auto;
  -ms-grid-rows: auto;
  grid-template-rows: auto;
  border-radius: 24px;
  /* background-color: #fec753; */
  background-clip: border-box;
  -webkit-text-fill-color: inherit;
}

@media screen and (max-width: 767px) {
  .testimonial-item {
    max-width: none;
    min-width: 0;
    margin-right: 0;
    padding: 16px 24px;
  }
}
</style>
