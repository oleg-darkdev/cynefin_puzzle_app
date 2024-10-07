<script>
  import { fade } from 'svelte/transition';
  import { faqData, CloseBtn } from '$lib/shared';
</script>

<section class="section s-faq">
  <div class="container">
    <div class="c-center_content">
      <h2 class="margin-bottom-80">F.A.Q.</h2>
    </div>
  </div>

  <div id='faq' class="container">
    <div class="w-dyn-list">
      <div role="list" class="faq-list w-dyn-items">
        {#each faqData as faq}
        <div  role="listitem" class="faq-item w-dyn-item">
          <div class="faq-child radius-24 shadow-smaller padding-32 w-dropdown">
            <div class="faq-question flex flex-row justify-between content-center items-center" on:click={()=> faq.showFaq = !faq.showFaq}>
              <!-- <div style="" class="  show-tablet is-faq-arrow">
                <img src="images/dropdownDark.svg" loading="lazy" alt="">
              </div> -->
              <h5 class="faq-q-default margin-bottom-0 margin-top-0">{faq.q}? </h5>
              <CloseBtn bind:indicator={faq.showFaq} />
            </div>

            {#if faq.showFaq}
            <div style="" class="faq-answer-wrap tablet-padding-right-32 " transition:fade>
              {#each faq.a as answer}
              <div style="" class="">
                <p>{answer}</p>
              </div>
              {/each}
            </div>
            {/if}
          </div>
        </div>
        {/each}
      </div>
    </div>
  </div>

  <slot>

  </slot>
</section>

<style>
.close-icon-wrapper {
  position: relative;
  margin-left: 15px;
  margin-top: -6px;
}

.close-icon {
  position: relative;
}

.line {
  width: 28px;
  height: 7px;
  background-color: #fff;
}

.line.right {
  position: absolute;
  top: 0px;
  width: 36px;
}

.line.left {
  position: absolute;
  width: 36px;
}

@media screen and (max-width: 991px) {
  .close-icon-wrapper.nft-accordion {
    top: -2px;
    font-size: 15px;
  }
}

@media screen and (max-width: 767px) {
  .close-icon-wrapper {
    right: 30px;
  }

  .close-icon-wrapper.nft-accordion {
    top: 0px;
    font-size: 19px;
  }

  .line.right {
    width: 30px;
  }

  .line.left {
    width: 30px;
  }
}

@media screen and (max-width: 479px) {
  .close-icon-wrapper {
    right: 26px;
  }

  .close-icon-wrapper.nft-accordion {
    top: -2px;
    font-size: 16px;
  }
    .line.right {
    width: 26px;
    height: 5px;
  }

  .line.left {
    width: 26px;
    height: 5px;
  }

}
</style>
