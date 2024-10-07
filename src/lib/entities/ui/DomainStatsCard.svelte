<script>
  export let domainData;
</script>

<div class="content-bullet-items max-w-[250px]">
  {#each domainData.stats as {title, count}}
    <div class="stats-text max-w-[150px]">
      <!-- {domainData.brandColorText} -->
      <h3 class="h3 ">{count}</h3>
      <div style='height: 50px;' class="line "></div>
      <div>
        <h3 class="h3">{title}</h3>
      </div>
    </div>
  {/each}
</div>


<style>
  .content-bullet-items {
    display: -ms-grid;
    display: grid;
    grid-auto-columns: 1fr;
    grid-column-gap: 24px;
    grid-row-gap: 16px;
    -ms-grid-columns: 1fr;
    grid-template-columns: 1fr;
    -ms-grid-rows: auto auto;
    grid-template-rows: auto auto;
  }
  .stats-text {
    display: -ms-grid;
    display: grid;
    -webkit-box-pack: start;
    -webkit-justify-content: start;
    -ms-flex-pack: start;
    justify-content: start;
    justify-items: start;
    grid-auto-columns: 1fr;
    grid-column-gap: 16px;
    grid-row-gap: 16px;
    -ms-grid-columns: 0.45fr auto 1fr;
    grid-template-columns: 0.45fr auto 1fr;
    -ms-grid-rows: auto;
    grid-template-rows: auto;
  }

@media screen and (max-width: 991px) {
  .content-bullet-items {
    margin-top: 16px;
    margin-bottom: 17px;
    -webkit-box-pack: start;
    -webkit-justify-content: start;
    -ms-flex-pack: start;
    justify-content: start;
    justify-items: center;
    grid-row-gap: 32px;
    -ms-grid-columns: 1fr;
    grid-template-columns: 1fr;
    text-align: center;
  }
}
</style>
