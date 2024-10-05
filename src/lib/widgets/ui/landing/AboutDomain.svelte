<script>
  // const benefits = [
  //   'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
  //   'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
  //   'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
  // ]

  export let domainData;
</script>


<section class="flex {domainData.align == 'r' ? 'flex-row-reverse flex-wrap':'flex-row flex-wrap-reverse'} tablet-stack margin-bottom-160">
  <div class="max-w-lg center-tablet">
    <!-- textcolor_yellow -->
    <div class="callout  hyphenated {domainData.brandColorText}">{domainData.domain}</div>
    <p class="margin-top-24 margin-bottom-24">{domainData.shortDesc}</p>

    <div class="content-bullet-items max-w-[250px]">
      {#each domainData.stats as {title, count}}
        <div class="icon_text_monitor max-w-[150px]">
          <h2 class="h2 {domainData.brandColorText}">{count}</h2>
          <div style='height: 50px;' class="line hide-tablet"></div>
          <div>
          <h2 class="h2">{title}</h2>

        </div>
        </div>
      {/each}
    </div>

    <div class="list-frameworks mb-14">
      {#each domainData.favoriteTools as tool}
        <div class="flex flex-row px-6 h-12 mb-10">
          <img src="/images/starBullet.svg" loading="lazy" class='my-auto mr-6 h-8' alt="">
          <a href='/app/{tool.id}' target="_blank" class=" flex flex-row   no-underline icon_text learnmore-button">
            <h3 class='my-auto'><span class='{domainData.brandColorText}'>{tool.abbr}</span> {tool.title}</h3>
          </a>
        </div>
      {/each}
    </div>

    <div class="button--wrap margin-top-40">
      <div  class="playbutton_wrap">
        <div udesly-audio-player="/" class="audio-player-button">
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
        <a href="/app" target="_blank"  class="learnmore-button w-button">Full list frameworks in simple domain!</a>
      </div>
    </div>
  </div>
  
    <div class="ascend-mockup w-full ">
      <img src={domainData.promoImg} loading="lazy" alt="{domainData.title} promo image." width="655"  class="ascend-mockup-img">
    </div>
</section>
