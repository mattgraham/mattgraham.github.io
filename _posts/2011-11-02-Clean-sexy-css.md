---
layout: post
customCSS: post-css-button.css
permalink: /blog/archives/2011/11/02/clean-sexy-css/
---

<div class="article-header">
</div>

<article>
<p>Inspired by Norm&#8217;s <a href="http://drbl.in/cjus" target="_blank">dribbble shot</a> I set out to recreate his elements in html/css. Design was completely Norm&#8217;s (<a href="http://twitter.com/#!/cazoobi">@cazoobi</a>), I just wrote a little code to bring it to life. This is where I&#8217;ve come to so far. I used <a href="http://twitter.com/#!/handlino" target="_blank">@handlino&#8217;s</a> CompassApp to build. Developed using <span class="caps">SCSS</span> without any images.</p>

<div id="button">
	<div class="button-outside"><a class="button" href="#">Home</a></div>
</div>

(Please, for the sake of all man kind use a modern day web browser while viewing, Chrome, Safari or Firefox. All IE users, please give in, your missing out on much of the web).

###Here is the SCSS:

{% highlight SCSS %}

/* Welcome to Compass.
 * In this file you should write your main styles. (or centralize your imports)
 * Import this file using the following HTML or equivalent:
 * <link href="/stylesheets/screen.css" media="screen, projection" rel="stylesheet" type="text/css" /> */

@import "compass/css3";

@mixin animate($speed:100ms) {
  -webkit-transition:all $speed ease-in;
  -moz-transition:all $speed ease-in;
}

#wrapper{
  width: 100px;
  height: 60px;
  margin: 40px auto;
  padding: 40px;
  background-color: #f6f6f6;
  background-image: -webkit-gradient(linear, top, bottom, from(rgb(255, 255, 255)),to(rgb(229, 229, 229)));
  background-image: -webkit-linear-gradient(top, rgb(255, 255, 255), rgb(229, 229, 229));
  background-image: -moz-linear-gradient(top, rgb(255, 255, 255), rgb(229, 229, 229));
  background-image: -o-linear-gradient(top, rgb(255, 255, 255), rgb(229, 229, 229));
  background-image: -ms-linear-gradient(top, rgb(255, 255, 255), rgb(229, 229, 229));
  background-image: linear-gradient(top, rgb(255, 255, 255), rgb(229, 229, 229));
  @include box-shadow(inset rgba(255,255,255,1) 0px -1px 0px, rgba(#000, .1) 0 1px 3px);
  @include border-radius(4px);

.button-outside {
  @include background(top, linear-gradient(#e6e6e6, #f5f5f5));
  padding: 23px 0px 25px 0;
  margin: 0;
  float: left;
  @include border-radius(4px);
  @include box-shadow(inset rgba(255,255,255,1) 0px -1px 0px, inset rgba(#333, .1) 0 1px 1px);
  margin-top: -5px;
}

.button {
  @include background(top, linear-gradient(#f0f0f0, #FFF));
  border: 3px solid #FFF;
  font: 14px/16px "Lucida Grande", "Lucida Sans Unicode", Helvetica, Arial, Verdana, sans-serif;
  color: #c1c1c1;
  font-weight: normal;
  -webkit-font-smoothing: antialiased;
  letter-spacing: -0.02em;
  @include text-shadow(rgba(#FFF, 1) 0 2px 0px);
  text-decoration: none;
  padding: 8px 16px;
  margin: 10px;
  @include border-radius(4px);
  @include box-shadow(
    inset rgba(#FFF, 1) 0 -1px 0,
    inset rgba(#333, .05) 0 1px 3px,
    inset rgba(#f1f1f1, 1) 0 2px 0px,
    rgba(#f4f2f3, 1) 0 -1px 0px,
    rgba(#f3f3f3, 1) 0 1px 0px,
    rgba(#333, 0.3) 0px 6px 4px,
    rgba(#333, .1) 0px 2px 0px,
    rgba(#333, 0.3) 0px 4px 1px);
  @include animate();

 &:hover {
    @include background(top, linear-gradient(#f1f1f1, #fbfbfb));
    border: 3px solid #FFF;
    color: #aaaaaa;
    @include text-shadow(rgba(#FFF, 1) 0 1px 0px);
    @include box-shadow(
    inset rgba(#FFF, 1) 0 -1px 0,
    inset rgba(#333, .08) 0 1px 3px,
    rgba(#f4f2f3, 1) 0 -1px 0px,
    rgba(#f3f3f3, 1) 0 1px 0px,
    rgba(#333, 0.01) 0px 6px 6px,
    rgba(#999, 0.3) 0px 1px 2px,
    rgba(#333, 0.4) 0px 1px 2px)
    }
  }
}
{% endhighlight %}
</article>