<script>
  export let listData;
</script>

<div class="blog_rich w-richtext">
  <p>
    {listData.desc}
  </p>

  <ul role="list">
    {#each listData.values as {title, desc}}
      <li class='mb-2'>
        <strong>{title}</strong>
        {desc}
      </li>
    {/each}
  </ul>
</div>

<style>

</style>
