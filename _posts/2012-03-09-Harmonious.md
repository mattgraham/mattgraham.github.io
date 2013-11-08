---
layout: post
---

<div class="article-header">
</div>

<article>
<h1>Harmonious</h1>
<p>In recent months you've not heard much about Harmony (Our / Ordered List's first product to market), but as we continue to use and build upon it, I wanted to quickly share some of my favorite features that you may not know are already built into Harmony.</p>

<h2>SCSS / SASS / Compass built in</h2>
<p>Using Compass in Harmony is easy. Simply open up your stylesheet in the theme editor and change the processor to Scss or Sass.</p>
<img src="http://get.harmonyapp.com/assets/4e5baf95dabe9d48b4000eb6/blog_post/scss.png">
<p>Then you can import Compass and any of your other theme stylesheets, and when you save your stylesheets, Harmony will process them with Compass. You do not have to have anything running locally on your machine. For those of you who have not started the journey into SASS/SCSS/Compass, I have no clue what you're waiting for. Head over to http://sass-lang.com/ or start following @thesassway and take a look at what you've been missing.</p>

<h2>Dynamic Navigations</h2>
<p>I took some time in the past few weeks to redevelop (after 12 years) the first site I had ever designed / developed. I was bringing it out of the tables and flash text days and into the CSS3 era. The main goal was to give the client the power to add / edit their site without losing design. Creating the navigation / sub-navigation was beautifully simple.</p>

<h3>nav.inc file:</h3>

<!-- code !-->

<p>The result a main navigation and sub-navigation built dynamically from the pages that the user creates:
</p>

<img src="http://f.cl.ly/items/2r233I2Y1l2o3X0F0M3t/Image%2525202012.png" alt="">

<h2>Data Feeds</h2>
<p>Another simple yet powerful feature is the ability to add your feeds right into Harmony and list them on your site. As you see on the homepage of madebygraham.com, my Dribbble feed is pulled directly through Harmony. There are some great js features to do this out there, but why add them when we’ve already done the work? Add JSON Data, RSS/Atom Feeds, Twitter, Twitter Search, Dribbble, Flickr Photos, and Google Events out of the box right now.</p>

<img src="http://get.harmonyapp.com/assets/4d868274dabe9d46a9000054/selecting_a_predefined_data_feed.png" alt="">

<p>Here is an example of my dribbble feed include used on this site:</p>

<div class="multiline_code"><div class="CodeRay">
{% highlight html %}
	<a href="{{ dribbble.short_url }}" target="_blank">
	<div class="shot">
	  <img src="{{ dribbble.image_url }}"/>
	    <div class="stats-wrap">
	      <div class="stats">
	        <div>
	          <span class="views">{{ dribbble.views_count }}</span>
	          <span class="comments">{{ dribbble.comments_count }}</span>
	          <span class="likes">{{ dribbble.likes_count }}</span>
	        </div>
	      </div>
	    </div>
	</div>
	</a>
{% endhighlight %}
</div></div>

<h2>Finishing Up</h2>
<p>We know that one of the challenges we have ahead of us for Harmony is lowering the bar for onboarding. Many of these features are unknown, and our marketing ahead of us will need to reflect that. This is just a quick glimpse into some of my favorite features the CMS has to offer. For more take a look at the docs at http://docs.harmonyapp.com</p>
</article>