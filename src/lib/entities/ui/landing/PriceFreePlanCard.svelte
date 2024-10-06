<script>
  export let data;

  console.log(data.subTitle.length)
</script>

<div role="listitem" class="w-dyn-item">
  <div class="price-wrap">
    <div style="color:hsla(0, 0.00%, 7.84%, 1.00);" class="{data.borderColor} price-top">
      <img src="{data.promoImg}" loading="lazy" alt="" class="pricing_icon">
      <div class="price">
        <!-- <div  style="display:none" class="monthly">
          <h2 style="color:hsla(0, 0.00%, 7.84%, 1.00)" class="margin-bottom-0 h2-price">$199</h2>
          <div class="h2 h2-price">/ <span class="h4">mo</span>
          </div>
        </div> -->
        <div style="display:flex" class="yearly">
          <h2 style="color:hsla(0, 0.00%, 7.84%, 1.00)" class="margin-bottom-0 h2-price">{data.price}</h2>
          <!-- <div class="h2 h2-price">/ <span class="h4">mo</span></div> -->
        </div>
      </div>
      <div class="price w-condition-invisible">
        <!-- <div  style="display:none" class="monthly">
          <h2 class="margin-bottom-0 h2-price">$199</h2>
        </div> -->
        <div style="display:flex" class="yearly">
          <h2 class="margin-bottom-0 h2-price">{data.price}</h2>
        </div>
      </div>
      <h3 style="" class="margin-bottom-0 pricing-plan {data.textColor}">{data.title}</h3>
      {#if data.subTitle.length > 0 }
        <p style="color:hsla(0, 0.00%, 7.84%, 1.00)" class="textcolor_white weight_700 margin-bottom-0 paragraph-small text-center">{data.subTitle}</p>
      {/if}
    </div>

    <slot></slot>

    <!-- {#if data.subTitle.length > 0 }
      <div class="tier-pre {data.textColor}">
        {data.subTitle}
        <div class="w-condition-invisible">Everything <span class="textcolor_pink">Starter</span> has + </div>
        <div class="w-condition-invisible">Everything <span class="textcolor_yellow">Growth</span> has + </div>
        <div class="w-condition-invisible">Everything <span class="textcolor_green">Rocket</span> has + </div>
      </div>
    {/if} -->
    <div>
      <div class="rtb-price w-richtext">
        {#each data.available as availableItem}
          <div class="my-1 {data.availableColor}">{availableItem}</div>
        {/each}

        {#each data.unavailable as unavailableItem}
          <div class="my-1 no-price">{unavailableItem}</div>
        {/each}
      </div>
    </div>
  </div>
</div>


<style>
.free-price-text {
  color: var(--free-price-textColor);
}
.free-price-border {
  border-color:var(--free-price-borderColor);
}

.bussines-price-text {
  color: var(--bussines-price-textColor);
}
.bussines-price-border {
  border-color:var(--bussines-price-borderColor);
}


.coach-price-text {
  color: var(--coach-price-textColor);
}
.coach-price-border {
  border-color:var(--coach-price-borderColor);
}


.custom-price-text {
  color: var(--custom-price-textColor);
}
.custom-price-border {
  border-color:var(--custom-price-borderColor);
}



.price-wrap {
  display: -ms-grid;
  display: grid;
  height: 100%;
  padding: 24px;
  -webkit-align-content: start;
  -ms-flex-line-pack: start;
  align-content: start;
  grid-auto-columns: 1fr;
  grid-column-gap: 16px;
  grid-row-gap: 24px;
  -ms-grid-columns: 1fr;
  grid-template-columns: 1fr;
  -ms-grid-rows: auto auto;
  grid-template-rows: auto auto;
  border-radius: 24px;
  background-color: #fff;
  box-shadow: 0 4px 32px 0 rgba(0, 0, 0, 0.1);
}

.price-top {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  padding: 24px 16px;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  border-style: solid;
  border-width: 4px;
  border-radius: 16px;
  color: #141414;
}

@media screen and (min-width: 1440px) {
 .price-wrap {
    display: -ms-grid;
    display: grid;
    grid-auto-columns: 1fr;
    grid-column-gap: 16px;
    grid-row-gap: 24px;
    -ms-grid-columns: 1fr;
    grid-template-columns: 1fr;
    -ms-grid-rows: auto auto;
    grid-template-rows: auto auto;
    border-radius: 24px;
    background-color: #fff;
    box-shadow: 0 4px 32px 0 rgba(0, 0, 0, 0.1);
  }
  .price-top {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    padding: 24px 21px;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    border-radius: 16px;
  }
  .price-top.price-top_orange {
    background-color: #fec753;
  }
}
</style>
