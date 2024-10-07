<script>
  import { CloseBtn, selectedDomain, UlList} from '$lib/shared';
  import { DomainStatsCard, LibraryCard  } from '$lib/entities';

  let showFullCard = false;

  export let domain;

  function handleShowData(event) {
    changeShowFullCard()
		event.detail.indicator = showFullCard;
    $selectedDomain = false;
  }

  const changeShowFullCard = () => showFullCard = !showFullCard;
  const setDomainData = (domain) => $selectedDomain = domain;
</script>


<div role="listitem" class="w-dyn-item w-full ">
  {#if !showFullCard}
    <div on:click={()=> {
      changeShowFullCard()
      setDomainData(domain)
      }} class=" px-6 h-10 mb-2 ">

      <div class="flex flex-row mb-10">
        <img src="{domain.icon}" loading="lazy" class='my-auto mr-6 h-8' alt="">
          <!-- /{tool.id} -->

        <button on:click={()=> {}} class="my-auto flex flex-row no-underline icon_text learnmore-button">
          <!-- <span class='{brandColorText}'>{domain.id}</span>  -->
          <h3 class='my-auto {domain.brandColorText}'>{domain.domain}</h3>
        </button>
      </div>
    </div>
  {:else}
    <LibraryCard domain={$selectedDomain}>
      <div slot='closeBtn'>
        <CloseBtn on:showData={handleShowData} bind:indicator={showFullCard} />
      </div>
      <div slot='body'>
        <DomainStatsCard domainData={$selectedDomain}/>
        <UlList listData={$selectedDomain.characteristics}/>
      </div>

      <div slot='footer'>
        <div style="display:flex" class="yearly">
          <a href='/app/library'
            class="button button--dark button--pricing w-button">Подробнее в библиотеке
          </a>
        </div>
      </div>
    </LibraryCard>
  {/if}
</div>



<style>

</style>
