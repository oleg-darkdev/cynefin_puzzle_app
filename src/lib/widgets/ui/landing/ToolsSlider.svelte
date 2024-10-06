<script>

  import { promoToolsSet } from '$lib/shared';
  import { DomainCard } from '$lib/entities';
</script>

<section class="testimonials-wrap">
  <div class="section s-hear">
    <div class="container">
      <div class="c-center_content margin-bottom-24">
        <h2>Возможно вы слышали о них! <span>👇</span> </h2>
      </div>
    </div>
  </div>
    <!-- <div class="container hide show-landscape"> -->
      <!-- <div class="button--wrap swiper-buttons">
        <div class="custom_prev_testimonial">
          <div class="prev_arrow w-embed">
            <svg width="11" height="100%" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.07996 1.14014L9.11996 9.09994L1.16015 17.1399" stroke="currentColor" stroke-width="2"></path>
            </svg>
          </div>
        </div>
        <div class="custom_next_testimonial">
          <div class="next_arrow w-embed">
            <svg width="11" height="100%" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.07996 1.14014L9.11996 9.09994L1.16015 17.1399" stroke="currentColor" stroke-width="2"></path>
            </svg>
          </div>
        </div>
      </div>
      <div class="swiper-container swiper-testimonial w-dyn-list">
        <div role="list" class=" w-dyn-items">
          {#each promoToolsSet as {id, icon, abbr, shortDesc, brandColorBg, cynefinDomain, type}}
            <DomainCard {id} {icon} {abbr} {shortDesc} {brandColorBg} tags={[cynefinDomain, type]}/>
          {/each} -->


          <!-- <div role="listitem" class="swiper-slide slide_testimonial w-dyn-item">
            <div id="w-node-e7f1f173-d5f9-a9a3-7491-244ee36aa443-7cdb613c"  class="testimonial-item">
              <div class="quote w-richtext">
                <p>
                  Every one of our managers has been
                  <span class="textcolor_white">super appreciative</span>
                  of this product. We had 700 voicemails before we launched Slang. Now we don’t worry about them. </p>
              </div>
              <div id="w-node-be032a70-8548-bb62-351d-0c44e9088c25-7cdb613c"></div>
              <div class="quote-author">
                <div id="w-node-be032a70-8548-bb62-351d-0c44e9088c27-7cdb613c" class="coverphoto-parent quote-avatar">
                  <img src="" loading="lazy" alt="" class="coverphoto">
                </div>
                <p class="quote-author-name">Dustin @ Weimann Maclise </p>
              </div>
            </div>
          </div> -->

<!--

        </div>
      </div>
    </div> -->
  <!-- </div> -->

  <div class="marquee-wrapper ">
    <div class="marquee-track-testimonials">
      <div class="w-dyn-list">
        <div role="list" class="testimonial-list w-dyn-items">
          {#each promoToolsSet as {id, icon, abbr, shortDesc, brandColorBg, cynefinDomain, type}}
            <DomainCard {id} {icon} {abbr} {shortDesc} {brandColorBg} tags={[cynefinDomain, type]}/>
          {/each}
      </div>
    </div>
  </div>
</section>


<style>
  .marquee-track-testimonials {
    position: relative;
    white-space: nowrap;
    will-change: transform;
    animation: marquee-horizontal 40s linear infinite;
    /* manipulate the speed of the marquee by changing "40s" line above*/
  }

  @keyframes marquee-horizontal {
    from {
      transform: translateX(0);
    }

    to {
      transform: translateX(-50%);
    }
  }

  @media only screen and (min-width: 992px) {
    .marquee-track-testimonials:hover {
      animation-play-state: paused;
    }
  }
</style>
