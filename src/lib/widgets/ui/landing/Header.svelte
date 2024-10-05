<script>
  import {navigation} from '$shared';
</script>

<header class="s-wrap">
  <div class="s-nav">
    <div class="container c-nav">
      <a href="/" aria-current="page" class="brand w-inline-block w--current">
        <img src="/images/logo_black.svg" class='h-10' alt="">
      </a>
      <div class="s-nav--menu">
        {#each navigation as {title, link}}
        <div  class="menu_link hide-tablet">
          <a href="{link}" class="nav-link">{title}</a>
          <div class="linklink--line small background_dark"></div>
        </div>
        {/each}

        <a href="/app" target="_blank" class="button button--dark button--dark-small w-button">
          Начать игру
        </a>
        <div class="dropdown-menu-mobile w-dropdown">
          <nav class="dropdown-list-mobile w-dropdown-list">
            <div class="menu-mobile-bottom">
              <a href="/" target="_blank" class="button w-button">Lorem Ipsum</a>
              <a href="/" target="_blank" class="button button--hollow w-button">Lorem Ipsum</a>
            </div>
            <div class="mobile-menu-links">
              {#each navigation as {title, link}}
                <a href="{link}" class="nav-link">{title}</a>
              {/each}

              <a href="/app" target="_blank" class="nav-link">APP.</a>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </div>
</header>


<style>

</style>
