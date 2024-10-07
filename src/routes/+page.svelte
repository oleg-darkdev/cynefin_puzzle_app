<script>
	import { cynefinDomains } from '$lib/shared';
	import { Footer, Hero, ArticlesDivider, ToolsSlider, Header, ContactForSales, AboutAuthor, AboutValues, PricingCta, Faq, FrameworksTable, PartnersLogos, OpensourceBlock, Articles, Testimonials, Price, AboutDomain, Stats, Cta, TagsCloud, HowItWork, Features, LaunchSteps} from '$lib/widgets';

  // import {  } from '$lib/entities'
</script>


<svelte:head>
  <title>CynefiPuzzle game</title>
</svelte:head>


<Header />

<Hero />

<!-- <PartnersLogos /> -->

<ToolsSlider />

<Features />

<section class="section padding-top-104">
  <HowItWork />
  <div class="container">
    <Stats />

    <a name="domains"></a>
    <AboutDomain domainData={cynefinDomains.simple}/>
    <AboutDomain domainData={cynefinDomains.complicated}/>
    <AboutDomain domainData={cynefinDomains.complex}/>
    <AboutDomain domainData={cynefinDomains.chaotic}/>
    <AboutDomain domainData={cynefinDomains.disorder}/>

    <!-- <FrameworksTable /> -->

    <LaunchSteps />
  </div>
</section>

<!-- <TagsCloud /> -->

<PricingCta />

<Price />

<OpensourceBlock />

<AboutAuthor />

<!-- <AboutValues /> -->

<!-- <Testimonials /> -->

<Faq>
  <ContactForSales />
</Faq>

<Cta />

<ArticlesDivider />

<Articles />

<Footer />

<style>

</style>
