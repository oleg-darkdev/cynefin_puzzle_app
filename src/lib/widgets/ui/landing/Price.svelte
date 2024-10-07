<script>
  import { BlackOutlineBtn, prices} from '$lib/shared';
  import { PriceFreePlanCard, } from '$lib/entities';
</script>



<section class="section background_colorgradient s-pricing-table">
  <!-- <div class="hero-texture hero-texture-top hide-tablet">
    <div class="hero-texture-child--embed pricing-top w-embed">
      <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 1444 537" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M472 228.418C328 329.433 268 2 0 2V0H1444V478.681C1156 694.323 1217.6 241.887 1064 183.523C872 110.567 652 102.149 472 228.418Z" fill="white"></path>
      </svg>
    </div>
  </div>
  <div class="hero-texture hide-tablet">
    <div class="hero-texture-child--embed pricing-bottom w-embed">
      <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 1444 328" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M880 49.4915C1192 337.014 1322.67 347.009 1444 310.531V327.576H0V148.383C216 257.816 681.475 -133.458 880 49.4915Z" fill="white"></path>
      </svg>
    </div>
  </div> -->
  <div class="container">
    <div class="w-dyn-list">
      <div id='price' role="list" class="grid-4column grid-40 grid-pricing w-dyn-items">
        {#each prices as data}
        <PriceFreePlanCard {data}>
          <BlackOutlineBtn text={data.btnText} link='/'/>
        </PriceFreePlanCard>
        {/each}
      </div>
    </div>
  </div>
  <img src="images/pricing-background%201.png" loading="lazy" alt="" sizes="100vw"  class="coverphoto hide-tablet">
  <img src="images/pricingTopMobile.png" loading="lazy" alt="" sizes="100vw"  class="pricing-top-mobile">
  <img src="images/pricingBottomMobile.png" loading="lazy" alt="" sizes="100vw"  class="pricing-bot-mobile">
</section>




<style>

</style>
