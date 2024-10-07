<script>
  import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

  export let indicator;

  function showDataFunc() {
    dispatch('showData', {
      data: indicator
		});
	}
</script>


<div on:click={showDataFunc} class="h-16 w-16 flex items-center content-center rounded-full complex-domain-bgColor" >
  <div class=" close-icon-wrapper">
    <div class="close-icon">
      <div class="line left ease-linear transform  transition duration-200 {indicator ? '-rotate-45': 'rotate-90'}"></div>
      <div class="line right ease-linear transform  transition duration-200 {indicator ? 'rotate-45': ''}"></div>
    </div>
  </div>
</div>


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
