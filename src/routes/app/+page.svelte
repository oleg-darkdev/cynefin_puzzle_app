<script>

	import { Input, cynefinDomains, UlList } from '$lib/shared';
  import { DomainCardApp, DomainStatsCard, ToolCardApp } from '$lib/entities';
	// import { } from '$lib/widgets';
  // import {  } from '$lib/entities'

  let allTools = [].concat(
    cynefinDomains.simple.frameworks, cynefinDomains.simple.practices,
    cynefinDomains.complicated.frameworks, cynefinDomains.complicated.practices,
    cynefinDomains.complex.frameworks, cynefinDomains.complex.practices,
    cynefinDomains.chaotic.frameworks, cynefinDomains.chaotic.practices,
    cynefinDomains.disorder.frameworks, cynefinDomains.disorder.practices
  )

</script>

<svelte:head>
  <title>CynefiPuzzle - app</title>
</svelte:head>

<section class="w-dyn-list w-full mb-10">
  <div role="list" class="grid grid-col-1 gap-1 max-w-2xl mx-auto">

    {#each cynefinDomains.all as domain}
      <DomainCardApp {domain} />
    {/each}
  </div>
</section>

<section class="w-full mx-auto max-w-3xl">
  <Input data={{title: 'Поиск среди практик'}}/>

  <div role="list" class="tool-list w-dyn-items">
    {#each allTools as tool}
      <ToolCardApp {tool}>
        <div style="display:flex" class="yearly">
          <a href='/app/library/' class="button button--dark button--pricing w-button">Подробнее в библиотеке</a>
        </div>
      </ToolCardApp>
    {/each}
  </div>

</section>


<style>

</style>
