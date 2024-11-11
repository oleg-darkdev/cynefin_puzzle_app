<script>

  import { promoToolsSet } from '$lib/shared';
  import { DomainCard } from '$lib/entities';
</script>

<section class="testimonials-wrap">
  <div class="section s-hear">
    <div class="container">
      <div class="c-center_content margin-bottom-24">
        <!-- Они у всех на слуху! -->
        <h2>One są  na ustach wszystkich! <span>👇</span> </h2>
      </div>
    </div>
  </div>

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
    animation: marquee-horizontal 14s linear infinite;
  }

  @keyframes marquee-horizontal {
    from {
      transform: translateX(0);
    }

    to {
      transform: translateX(-150%);
    }
  }

  @media only screen and (min-width: 992px) {
    .marquee-track-testimonials:hover {
      animation-play-state: paused;
    }
  }
</style>
