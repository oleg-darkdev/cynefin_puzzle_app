<script>
  import { fade } from 'svelte/transition';
  import { selectedTool} from '$lib/shared';

  export let tool;

  const setToolData = (tool) => $selectedTool = tool;
  const clearToolData = (tool) => $selectedTool = false;
</script>

<div on:click={()=> tool.showData = !tool.showData} role="listitem" class="tool-item mb-4 w-dyn-item">
  <div class="tool-child {tool.brandColorBg} radius-24 shadow-smaller padding-32 w-dropdown">

    <div class="tool-question flex flex-row " >
      <div style="" class="show-tablet is-tool-arrow mr-10">
        <img src="/images/dropdownArrow.svg" loading="lazy" class='ease-linear transform  transition duration-200 {tool.showData ? 'rotate-180': ''}' alt="dropdown">
      </div>
      <h5 class="tool-q-default margin-bottom-0 margin-top-0"> <span class=''>{tool.abbr}</span>  {tool.title}</h5>
    </div>

    {#if  tool.showData}
      <div on:click={()=> setToolData(tool)} class="tool-answer-wrap tablet-padding-right-32" transition:fade>
        <div style="" class="mb-4" >
          <div style="" class="">
            <p>{tool.shortDesc}</p>
          </div>
        </div>
        <slot />
      </div>
    {/if}
  </div>
</div>



<style>
.tool-child {
  position: relative;
  width: 100%;
  margin-right: 0;
  margin-left: 0;
  padding-right: 0;
  padding-left: 40px;
  /* background-color: #fff; */
}
.tool-child.radius-24.shadow-smaller.padding-32 {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  overflow: visible;
  padding-right: 80px;
  padding-bottom: 32px;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: start;
  -webkit-align-items: flex-start;
  -ms-flex-align: start;
  align-items: flex-start;
  /* background-color: rgba(232, 116, 255, 0.24); */
  cursor: pointer;
}

.tool-list {
  display: -ms-grid;
  display: grid;
  margin-bottom: 120px;
  grid-auto-columns: 1fr;
  grid-column-gap: 16px;
  grid-row-gap: 40px;
  -ms-grid-columns: 1fr;
  grid-template-columns: 1fr;
  -ms-grid-rows: auto auto;
  grid-template-rows: auto auto;
}
.tool-question {
  width: 100%;
  padding: 32px 0 0;
}

@media screen and (max-width: 991px) {
  .tool-list {
    grid-row-gap: 0px;
  }
  .tool-item:last-child {
    border-bottom: 2px solid #020044;
  }
  .tool-question {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    margin-left: 0;
    padding-top: 16px;
    padding-bottom: 16px;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
  }
  .tool-child.radius-24.shadow-smaller.padding-32 {
    padding-right: 0;
    padding-bottom: 0;
    padding-left: 0;
    border-top: 2px solid #020044;
    border-radius: 0;
    background-color: transparent;
    box-shadow: none;
  }
}
@media screen and (max-width: 767px) {
  .tool-list {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
  }
  .tool-child.radius-24.shadow-smaller.padding-32 {
    padding-left: 0;
  }
}
@media screen and (max-width: 479px) {
  .tool-question {
    padding-right: 42px;
  }
  .tool-child.radius-24.shadow-smaller.padding-32 {
    padding: 0;
  }
}
</style>
