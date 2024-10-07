<script>
    import {socialLinks} from '$shared';
</script>

<section class="grid-40 tablet-stack margin-bottom-160">
  <div>
    <div class="launch-mockup">
      <img src="/images/stable/steps.svg" loading="lazy" alt="Go, go, go! "  class="launch-mockup-img">
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
        <div>Выберите и приобретите комплект, для <a href="#price" class='complex-domain-textColor link--light'>самостоятельной игры</a> или <a href="#price" class='simple-domain-textColor link--light '>проведения воркшопа</a> . Этот комплект включает в себя все необходимые материалы для начала.</div>
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
          <div class="flex flex-row justify-center">
            {#each socialLinks as {icon, title, link}}
              <a href="{link}" target="_blank" class="footer-link mr-4 footer-link-social w-inline-block">
                <img src="{icon}" class='w-10 h-10' alt="{title}">
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
</section>


<style>

</style>
