<script>
  import { Input,  UlList, selectedDomain, selectedTool } from '$lib/shared';
  import { DomainStatsCard, LibraryCard, ToolCardApp } from '$lib/entities';
</script>

<svelte:head>
  <title>CynefiPuzzle - linrary</title>
</svelte:head>



{#if $selectedDomain != false && $selectedTool == false}
  <main class="">
    <section class="w-dyn-list w-full mb-10">
    <div class=" max-w-2xl mx-auto">
      <LibraryCard domain={$selectedDomain}>
        <div slot='body'>
          <DomainStatsCard domainData={$selectedDomain}/>
          <UlList listData={$selectedDomain.characteristics}/>
        </div>
      </LibraryCard>
    </div>
  </section>

  <section class="w-full mx-auto max-w-3xl">
    <Input data={{title: 'Поиск среди фреймоворков'}}/>

    <h3 class="margin-top-24 margin-bottom-24">
      Список фреймворк в домене {$selectedDomain.domain}
    </h3>
    <div role="list" class="tool-list w-dyn-items">
      {#each $selectedDomain.frameworks as tool}
        <ToolCardApp {tool}>
          <div style="display:flex" class="yearly">
            <button on:click={()=> {
              $selectedDomain = false;
              $selectedTool = tool;
            }} class="button button--dark button--pricing w-button">Подробнее о инструменте</button>
          </div>
        </ToolCardApp>
      {/each}
    </div>
  </section>

  <section class="w-full mx-auto max-w-3xl">
    <Input data={{title: 'Поиск среди практик'}}/>

    <h3 class="margin-top-24 margin-bottom-24">
      Список практик в домене {$selectedDomain.domain}
    </h3>
    <div role="list" class="tool-list w-dyn-items">
      {#each $selectedDomain.practices as tool}
        <ToolCardApp {tool}>
          <div style="display:flex" class="yearly">
            <button on:click={()=> {
              $selectedDomain = false;
            }} class="button button--dark button--pricing w-button">Подробнее о инструменте</button>
          </div>
        </ToolCardApp>
      {/each}
    </div>
  </section>
</main>
{:else}
  <main>
      <h3 class="margin-top-24 margin-bottom-24">
      Информация о инструменте
    </h3>
  </main>
{/if}
<style>

</style>
