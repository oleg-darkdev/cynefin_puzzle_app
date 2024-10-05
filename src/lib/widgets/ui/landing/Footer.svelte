<script>
  import {navigation, cynefinDomains, socialLinks} from '$shared';

  const articles = [
    {
      title: 'Взгляд на мир через модель Cynefin.',
      link: '/'
    },
    {
      title: 'Применение модели Cynefin в Agile-командах.',
      link: '/'
    },
    {
      title: 'От простого к хаотическому.',
      link: '/'
    },
    {
      title: 'Путеводитель по модели Cynefin.',
      link: '/'
    },
    {
      title: 'Навигация в хаосе: модель Cynefin для кризисного менеджмента.',
      link: '/'
    },
  ]
</script>

<section class="section s-footer">
  <div class="container">
    <div class="grid-4column grid-footer">
      <div>
        <div class="margin-bottom-24">
        <h3 class="textcolor_white">Domains.</h3>
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
      <div>
        <div class="margin-bottom-24">
        <h3 class="textcolor_white">Articles.</h3>
        </div>
        <div class="footer-links">
          {#each articles as {title, link}}
          <div class="menu_link ">
            <a href="{link}" class="footer-link hyphenated">{title}</a>
            <div class="linklink--line small"></div>
          </div>
          {/each}
        </div>
      </div>
      <!-- <div>
        <div class="margin-bottom-24">
        <h3 class="textcolor_white">Cynefin domains.</h3>
        </div>
        <div class="footer-links">
          {#each cynefinDomains.all as {domain}}
          <div class="menu_link ">
            <a href="/app" class="footer-link hyphenated">{domain} domain.</a>
            <div class="linklink--line small"></div>
          </div>
          {/each}
        </div>
      </div> -->
      <!-- <div>
        <div class="margin-bottom-24">
        <h3 class="textcolor_white">{cynefinDomains.simple.domain} domain.</h3>
        </div>
        <div class="footer-links">
          {#each cynefinDomains.simple.frameworks as {title, abbr, links,}}
          <div class="menu_link ">
            <a href="{links.articleLink}" class="footer-link hyphenated">{title}</a>
            <div class="linklink--line small"></div>
          </div>
          {/each}
        </div>
      </div>
      <div>
        <div class="margin-bottom-24">
        <h3 class="textcolor_white">{cynefinDomains.complicated.domain} domain.</h3>
        </div>
        <div class="footer-links">
          {#each cynefinDomains.complicated.frameworks as {title, abbr, links,}}
          <div class="menu_link ">
            <a href="{links.articleLink}" class="footer-link hyphenated">{title}</a>
            <div class="linklink--line small"></div>
          </div>
          {/each}
        </div>
      </div>
        <div>
        <div class="margin-bottom-24">
        <h3 class="textcolor_white">{cynefinDomains.complex.domain} domain.</h3>
        </div>
        <div class="footer-links">
          {#each cynefinDomains.complex.frameworks as {title, abbr, links,}}
          <div class="menu_link ">
            <a href="{links.articleLink}" class="footer-link hyphenated">{title}</a>
            <div class="linklink--line small"></div>
          </div>
          {/each}
        </div>
      </div>
       <div>
        <div class="margin-bottom-24">
        <h3 class="textcolor_white">{cynefinDomains.chaotic.domain} domain.</h3>
        </div>
        <div class="footer-links">
          {#each cynefinDomains.chaotic.frameworks as {title, abbr, links,}}
          <div class="menu_link ">
            <a href="{links.articleLink}" class="footer-link hyphenated">{title}</a>
            <div class="linklink--line small"></div>
          </div>
          {/each}
        </div>
      </div> -->

      <div>
          <div class="footer-logo mt-16">
          <img src="/images/logo_light.svg" loading="lazy" alt="" height="48">
        </div>

        <!-- <div class="margin-bottom-24">
          <h3 class="textcolor_white">Follow us</h3>
        </div> -->
        <div class="flex flex-row">
          {#each socialLinks as social}
          <a href="#" class="footer-link mr-4 footer-link-social w-inline-block">
            <div class="w-embed">
              <svg width="32" height="26" viewBox="0 0 32 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M28.6875 6.5C28.6875 6.8125 28.6875 7.0625 28.6875 7.375C28.6875 16.0625 22.125 26 10.0625 26C6.3125 26 2.875 24.9375 0 23.0625C0.5 23.125 1 23.1875 1.5625 23.1875C4.625 23.1875 7.4375 22.125 9.6875 20.375C6.8125 20.3125 4.375 18.4375 3.5625 15.8125C4 15.875 4.375 15.9375 4.8125 15.9375C5.375 15.9375 6 15.8125 6.5 15.6875C3.5 15.0625 1.25 12.4375 1.25 9.25V9.1875C2.125 9.6875 3.1875 9.9375 4.25 10C2.4375 8.8125 1.3125 6.8125 1.3125 4.5625C1.3125 3.3125 1.625 2.1875 2.1875 1.25C5.4375 5.1875 10.3125 7.8125 15.75 8.125C15.625 7.625 15.5625 7.125 15.5625 6.625C15.5625 3 18.5 0.0625 22.125 0.0625C24 0.0625 25.6875 0.8125 26.9375 2.125C28.375 1.8125 29.8125 1.25 31.0625 0.5C30.5625 2.0625 29.5625 3.3125 28.1875 4.125C29.5 4 30.8125 3.625 31.9375 3.125C31.0625 4.4375 29.9375 5.5625 28.6875 6.5Z" fill="currentColor"></path>
              </svg>
            </div>
          </a>
          {/each}
        </div>

        <div id="w-node-b16e074b-6acb-c41d-7ea4-3b5c8a8d1571-8a8d153d">
            <div class="margin-bottom-24">
              <img src="images/asteriskGreen.svg" loading="lazy" alt="" class="footer-asterisk-form">
              <h3 class="textcolor_white">Get the latest <span></span>
              </h3>
              <div class="w-form">
                <form id="wf-form-Footer-Newsletter" name="wf-form-Footer-Newsletter" data-name="Footer Newsletter" method="get" class="footer-form" data-wf-page-id="621524e92f2a22257cdb613c" data-wf-element-id="b16e074b-6acb-c41d-7ea4-3b5c8a8d1579">
                  <input class="input-field w-input" maxlength="256" name="email-2" data-name="Email 2" placeholder="Your email" type="email" id="email-2" required="">
                  <input type="submit" data-wait="Please wait..." id="w-node-b16e074b-6acb-c41d-7ea4-3b5c8a8d157b-8a8d153d" class="button button--submit w-button" value="Sign up">
                  <img src="images/starYellow.svg" loading="lazy" alt="" class="footer-star">
                </form>
                <div class="success w-form-done">
                  <div>Your submission has been received!</div>
                </div>
                <div class="error paragraph-extrasmall w-form-fail">
                  <div>Oops! Something went wrong while submitting the form.</div>
                </div>
              </div>
            </div>
          </div>


      </div>

    </div>
  </div>
</section>


<style>

</style>
