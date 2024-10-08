<script>
  import { DomainStatsCard } from '$lib/entities';

  export let domainData;
</script>


<section class="flex {domainData.align == 'r' ? 'flex-row-reverse flex-wrap-reverse':'flex-row flex-wrap-reverse'} tablet-stack margin-bottom-160">
  <div class="max-w-lg center-tablet">
    <div id={domainData.anchor} class="callout hyphenated {domainData.brandColorText}">{domainData.domain}</div>
    <p class="margin-top-24 margin-bottom-24">{domainData.shortDesc}</p>

    <DomainStatsCard {domainData}/>

    <div class="list-frameworks mb-14">
      {#each domainData.favoriteTools as tool}
        <div class="flex flex-row px-6 min-h-12 max-h-20 mb-10">
          <img src="/images/starBullet.svg" loading="lazy" class='my-auto mr-6 h-8' alt="">
          <!-- /{tool.id} -->
          <a href='/app' target="_blank" class=" flex flex-row no-underline icon_text learnmore-button">
            <h3 class='my-auto'><span class='{domainData.brandColorText}'>{tool.abbr}</span> {tool.title}</h3>
          </a>
        </div>
      {/each}
    </div>

    <div class="button--wrap margin-top-40">
      <div  class="playbutton_wrap">
        <div  class="audio-player-button">
          <div class="control-wrapper small">
            <a href='/app' target="_blank" class="no-underline play-wrapper is-grid">
              <img src="/images/player.svg"  alt="" class="h-12">
              <span  class="textcolor_pink">Play the game!</span>
            </a>
          </div>
          <div class="background_pink background-hearit">
            <div class="playbutton_pinkborder"></div>
          </div>
        </div>
      </div>
      <div class='my-auto '>
        <a href="/app" target="_blank"  class="learnmore-button w-button">Full list frameworks in <span class='{domainData.brandColorText}'>{domainData.domain}</span> domain!</a>
      </div>
    </div>
  </div>

    <div class="ascend-mockup w-full ">
      <img src={domainData.promoImg} loading="lazy" alt="{domainData.domain} promo image." width="655"  class="ascend-mockup-img">
    </div>
</section>


<style>

</style>
