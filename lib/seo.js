SEO = new FlowRouterSEO();

SEO.setDefaults(
{
	title: orion.dictionary.get('seo.title'),
	description: orion.dictionary.get('seo.description'),
	meta: 
	{
		'property="og:type"': 'website',
		'property="og:title"': orion.dictionary.get('seo.title'),
		'property="og:description"': orion.dictionary.get('seo.description'),
		'property="og:url"': FlowRouter.url(''),
		//'property="og:image"': 'og.png' //OG IMAGE HERE
	}
});