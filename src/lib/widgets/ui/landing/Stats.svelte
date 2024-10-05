<script>
  const stats = [
    {
      count: '97',
      // модели кеневин
      desc: 'Фреймворков и практик, для всех доменов: простого, сложного, комплексного и хаотичного доменов.'
    },
    {
      count: '234',
      desc: 'Ссылок на первоисточники для персонального изучения информации.'
    },
    {
      count: '90',
      desc: 'Минут игрового времени занимает одна партия.'
    },
    {
      count: '16',
      desc: '16+ реккомендованый возраст для игроков.'
    },
  ]

</script>

<div class="grid-40 tablet-stack">
  <div >
    <div>
      <img src="/images/621524e92f2a22990fdb6235_Monitor%20Mockup%25402x.png" loading="lazy" alt="" width="661"  class="monitor_mockup">
    </div>
  </div>

  <div  class="width-max-510 center-tablet">
    <div class="callout textcolor_green">В цифрах</div>
    <h3 class="margin-top-24 margin-bottom-24">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    </h3>
    <div class="content-bullet-items">
      {#each stats as {count, desc}}
        <div class="icon_text_monitor">
          <div class="h2">{count}</div>
          <div class="line hide-tablet"></div>
          <div>
            {desc}
        </div>
        </div>
      {/each}
    </div>
    <!-- <div class="button-wrap margin-top-40">
      <div>
        <a href="/" class="learnmore-button w-button">Get started</a>
      </div>
    </div> -->
  </div>
</div>


<style>


</style>
