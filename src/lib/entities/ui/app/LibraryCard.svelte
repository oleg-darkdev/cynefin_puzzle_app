<script>
  export let domain;
</script>

<div class="testimonial-item ease-linear transform  transition duration-200 {domain.brandColorBg} ">
  <div class="flex flex-row justify-between">
    <h3 class='my-auto '>{domain.domain}</h3>

    <slot name='closeBtn'>

    </slot>
  </div>
    <!-- <span class='{brandColorText}'>{domain.id}</span>  -->
  <slot name='body'>

  </slot>

  <div class="quote w-richtext">
    <p>
      <!-- <span class="textcolor_white">super appreciative</span> -->
      {domain.shortDesc}
    </p>
  </div>

  <slot name='footer'>

  </slot>
  <!-- <div class="quote-author">
    <div class="coverphoto-parent quote-avatar">
      <img src="{icon}" loading="lazy" alt="" class="coverphoto">
    </div>
    <p class="quote-author-name">{domain.domain}</p>
  </div> -->
</div>



<style>
.testimonial-item {
  display: -ms-grid;
  display: grid;
  max-width: 800px;
  min-width: 800px;
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

