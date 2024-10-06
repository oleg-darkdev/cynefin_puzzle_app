<script>
  import { articles, cynefinDomains, socialLinks} from '$shared';
</script>

<section class="section s-footer">
  <div class="container">
    <div class="flex flex-row flex-wrap-reverse w-full max-w-5xl mx-auto justify-between">
      <div class='mb-12'>
        <div class="margin-bottom-24">
        <h3 class="chaos-domain-textColor">Domains.</h3>
        </div>
        <div class="footer-links">
          {#each cynefinDomains.all as {domain}}
          <div class="menu_link ">
            <a href="/app" class="footer-link hyphenated">{domain} domain.</a>
            <div class="linklink--line small"></div>
          </div>
          {/each}
        </div>
      </div>

      <div class='mb-12'>
        <div class="margin-bottom-24">
        <h3 class="chaos-domain-textColor">Articles.</h3>
        </div>
        <div class="footer-links max-w-md">
          {#each articles as {title, link}}
          <div class="menu_link ">
            <a href="{link}" class="footer-link  hyphenated">{title}</a>
            <div class="linklink--line small"></div>
          </div>
          {/each}
        </div>
      </div>


      <div class='mb-14'>
        <a href='/app' target="_blank" class="button button--submit w-button -mb-10" >
          Начать игру!
        </a>
        <div class="footer-logo mt-16">
          <img src="/images/logo_light.svg" loading="lazy" alt="" height="48">
        </div>
        <div class="flex flex-row">
          {#each socialLinks as {icon, title, link}}
            <a href="{link}" target="_blank" class="footer-link mr-4 footer-link-social w-inline-block">
              <img src="{icon}" class='w-10 h-10' alt="{title}">
            </a>
          {/each}
        </div>

        <div>
            <div class="margin-bottom-24">
              <img src="images/asteriskGreen.svg" loading="lazy" alt="" class="footer-asterisk-form">
              <h3 class="textcolor_white">Get in touch<span></span>
              </h3>
            </div>
          </div>
      </div>
    </div>
  </div>
</section>


<style>
.footer-link {
  color: #fff;
  font-size: 20px;
  line-height: 32px;
  font-weight: 700;
  text-decoration: none;
}
.footer-link:hover {
  color: #e874ff;
}
.footer-links {
  display: -ms-grid;
  display: grid;
  -webkit-box-pack: start;
  -webkit-justify-content: start;
  -ms-flex-pack: start;
  justify-content: start;
  -webkit-box-align: start;
  -webkit-align-items: start;
  -ms-flex-align: start;
  align-items: start;
  -webkit-align-content: start;
  -ms-flex-line-pack: start;
  align-content: start;
  grid-auto-columns: 1fr;
  grid-column-gap: 16px;
  grid-row-gap: 16px;
  -ms-grid-columns: 1fr;
  grid-template-columns: 1fr;
  -ms-grid-rows: auto auto;
  grid-template-rows: auto auto;
}

@media screen and (max-width: 767px) {
.footer-links {
    -webkit-box-pack: start;
    -webkit-justify-content: start;
    -ms-flex-pack: start;
    justify-content: start;
    justify-items: start;
    text-align: start;
  }
  .footer-asterisk {
    width: 2ch;
    height: 2ch;
  }
  .footer-star {
    top: 160px;
  }
  .footer-logo {
    text-align: center;
  }
}
</style>
