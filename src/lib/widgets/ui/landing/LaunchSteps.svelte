<script>
    import {socialLinks} from '$shared';
</script>

<div class="grid-40 tablet-stack margin-bottom-160">
  <div>
    <div class="launch-mockup">
      <img src="/images/621524e92f2a2263f9db6238_Launch%20Mockup%25402x.png" loading="lazy" sizes="(max-width: 479px) 93vw, (max-width: 767px) 94vw, (max-width: 991px) 95vw, (max-width: 1439px) 46vw, 620px" alt=""  class="launch-mockup-img">
    </div>
  </div>

  <div  id='how-to-start' class="width-max-510 center-tablet">
    <div class="callout textcolor_pink">Как начать:</div>
    <h3 class="margin-top-24 margin-bottom-24">Изученить основы cynefin за 90 минут.
    </h3>
    <div class="content-bullet-items">
      <!-- {#each steps as {title, desc, img}}
      <div class="icon_text">
        <img src="{img}" loading="lazy"  alt="{title} icon">
        <div>{desc}</div>
      </div>
      {/each} -->
      <!--  second -->
      <div class="icon_text">
        <img src="/images/first.svg" loading="lazy"  alt="icon">
        <div>Выберите и приобретите комплект, для <a href="/" class='complex-domain-textColor link--light'>самостоятельной игры</a> или <a href="/" class='simple-domain-textColor link--light '>проведения воркшопа</a> . Этот комплект включает в себя все необходимые материалы для начала.</div>
      </div>
      <div class="icon_text">
        <img src="/images/second.svg" loading="lazy"  alt="icon">
        <div>
          <p>
            Изучите <a href="/" class='complex-domain-textColor link--light'>инструкции самостоятельно для проведения игры</a>, чтобы подготовиться к эффективному использованию комплекта.
          </p>
          <p>
            Или закажите <a href="/" class='simple-domain-textColor link--light'>фасилитатора — автора это игры</a>, который поможет организовать и провести воркшоп на высоком уровне.
          </p>
        </div>
      </div>
      <div class="icon_text">
        <img src="/images/third.svg" loading="lazy"  alt="icon">
        <div>
          Приобретайте новые знания в процессе игры и взаимодействия с участниками.
        </div>
      </div>
      <div class="icon_text">
        <img src="/images/third.svg" loading="lazy"  alt="icon">
        <div>
          <p>Делитесь полученными идеями и открытиями, предлагайте свои идеи - приглашайте других в процесс совместного обучения и обмена опытом.</p>
          <div class="flex flex-row">
            {#each socialLinks as social}
            <a href="#" class="footer-link footer-link-social w-inline-block mr-4">
              <div class="w-embed bg-black">
                <svg width="32" height="26" viewBox="0 0 32 26" fill="#000" xmlns="http://www.w3.org/2000/svg">
                  <path d="M28.6875 6.5C28.6875 6.8125 28.6875 7.0625 28.6875 7.375C28.6875 16.0625 22.125 26 10.0625 26C6.3125 26 2.875 24.9375 0 23.0625C0.5 23.125 1 23.1875 1.5625 23.1875C4.625 23.1875 7.4375 22.125 9.6875 20.375C6.8125 20.3125 4.375 18.4375 3.5625 15.8125C4 15.875 4.375 15.9375 4.8125 15.9375C5.375 15.9375 6 15.8125 6.5 15.6875C3.5 15.0625 1.25 12.4375 1.25 9.25V9.1875C2.125 9.6875 3.1875 9.9375 4.25 10C2.4375 8.8125 1.3125 6.8125 1.3125 4.5625C1.3125 3.3125 1.625 2.1875 2.1875 1.25C5.4375 5.1875 10.3125 7.8125 15.75 8.125C15.625 7.625 15.5625 7.125 15.5625 6.625C15.5625 3 18.5 0.0625 22.125 0.0625C24 0.0625 25.6875 0.8125 26.9375 2.125C28.375 1.8125 29.8125 1.25 31.0625 0.5C30.5625 2.0625 29.5625 3.3125 28.1875 4.125C29.5 4 30.8125 3.625 31.9375 3.125C31.0625 4.4375 29.9375 5.5625 28.6875 6.5Z" fill="currentColor"></path>
                </svg>
              </div>
            </a>
            {/each}
          </div>
        </div>
      </div>
    </div>
    <div class="button--wrap margin-top-40">
      <div >
        <!-- Start the game -->
        <a href="/app"  class="learnmore-button w-button">Начать изучение Cynefin!</a>
      </div>
    </div>
  </div>
</div>


<style>

</style>
