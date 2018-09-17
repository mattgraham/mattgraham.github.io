---
layout: post
permalink: /blog/archives/2012/06/14/octokindle/
thumb: /assets/images/thumb-octokindle.jpg
customCSS: post-octokindle.css
---

<div class="article-header">
</div>

<article>

<h1 id="fittext_2">Octokindle</h1>
<h3 id="fittext_3">Your kindle, your way.</h3>

<script type="text/javascript">
	$("#fittext_2").fitText(.7, { minFontSize: '42px', maxFontSize: '125px' });
	$("#fittext_3").fitText(1, { minFontSize: '16px', maxFontSize: '32px' });
</script>

<p>I'm a big fan of customization. Hardware, software, etc. so when I found some of the details on hacking the kindle I jumped all over it. I also do what I can to be fair and not cheat the system so hack away, but don't steal (even if the bill isn't worth it). Enjoy the octokindle resources.</p>

<img src="http://distilleryimage11.s3.amazonaws.com/39668d96b56c11e1abb01231382049c1_7.jpg" class="large">

<p>Download everything you'll need at <a href="http://github.com/mattgraham/octokindle" target="_blank">mattgraham/octokindle</a> via GitHub. These modifications should work with the v5.1.0 firmware version of Kindle Touch. Make all changes at your own risk. (It was a very smooth install for myself) I am just the screensaver orginizer if you have any questions hit me up on twitter: <a href="http://twitter.com/mattgraham">@mattgraham</a></p>
<p>Huge thanks to <a href="http://github.com/cobyism">@cobyism<a/> and <a href="http://github.com/dreww">@dreww</a> for getting things rolling on this, much of this content is because they got it started.</p>

<p>Feel free to submit pull requests with new octocat screensavers. I'll accept and reject them based on my personal biases, and taste in design.</p>

<h2>Removing Advertisements</h2>
<p>There are ways on the interweb to remove the advertisements from your kindle. However, my recommendation is, pay for them. Goto "Manage Your Devices" tab in your amazon account and unsubscribe from special offers. Its annoying I understand, but the right thing to do.</p>

<h2>Jailbreak</h2>
<ol>
	<li>Download the <a href="http://gr4m.com/LAmdhG">jailbreak file</a></li>
	<li>Plug in the Kindle via <span class="caps">USB</span> and copy all the files and directories contained in the downloaded zip file (data.tar.gz, ENABLE_DIAGS, diagnostic_logs) directly to the Kindle’s <span class="caps">USB</span> drive’s root.</li>
	<li>Safely remove/eject the Kindle from <span class="caps">USB</span> and restart it (<strong>Menu &#8594; Settings &#8594; Menu &#8594; Restart</strong>)</li>
	<li>Once the device restarts into diagnostics mode, select &#8220;<strong>D) Exit, Reboot or Disable Diags</strong>&#8221; (by tapping on the appropriate entries)</li>
	<li>Select &#8220;<strong>R) Reboot System</strong>&#8221; and &#8220;<strong>Q) To continue</strong>&#8221;</li>
	<li>You should see the Jailbreak screen and the device should restart back into diagnostics mode; Select &#8220;<strong>D) Exit, Reboot or Disable Diags</strong>&#8221; again</li>
	<li>Select &#8220;<strong>D) Disable Diagnostics</strong>&#8221; and then &#8220;<strong>Q) To continue</strong>&#8221;</li>
</ol>
<p>Once your Kindle reboots into the normal firmware, it should be jailbroken. At this point you can safely delete the diagnostic_logs folder on the Kindle <span class="caps">USB</span> drive.</p>
<h2><span class="caps">GUI</span> Launcher</h2>
<p>To manage extensions on your jailbroken Kindle, it&#8217;s best to use this thing called the <span class="caps">GUI</span> Launcher. Here&#8217;s how to get it:</p>
<ol>
	<li>Download <a href="http://gr4m.com/NyKFBR">launcher file</a></li>
	<li>Plug the Kindle to your computer via <span class="caps">USB</span>.</li>
	<li>Copy the file named &#8220;<strong>update_launcher_1.2.1_install.bin</strong>&#8221; to your Kindle. Make sure to place it directly in the top-level directory of the <span class="caps">USB</span> drive, not in the &#8220;documents&#8221; subdirectory or in any other subdirectory.</li>
	<li>Safely eject the Kindle from the computer.</li>
	<li>On the Kindle, choose <strong>Menu &#8594; Settings &#8594; Menu &#8594; Update Your Kindle</strong></li>
</ol>
<p>The device will add the <span class="caps">GUI</span> Launcher to your Kindle, which you can access by choosing Menu &#8594; Launcher.</p>
<h2>Custom Screensavers</h2>
<p>The default screensavers aren&#8217;t terrible, but the entire purpose of custom screensavers is to make your kindle, yours. To do this you need to run terminal commands on the kindle. The easiest way in my opinion is to use the XTerm extension instead:</p>
<ol>
	<li>Download <a href="http://gr4m.com/KFZTih">xterm extension</a></li>
	<li>Extract the extension folder into &#8216;<strong>/extensions</strong>&#8217; folder on your Kindle.</li>
	<li>Safely eject your Kindle, and then restart it (<strong>Menu &#8594; Launcher &#8594; Reboot</strong>).</li>
	<li>Launch xterm via: <strong>Menu &#8594; Launcher &#8594; Start XTerm</strong></li>
	<li>In the Xterm prompt, run the following commands (be mindful of the spaces):</li>
</ol>

<div class="multiline_code"><div class="CodeRay">
{% highlight html %}
mntroot rw
mkdir /mnt/us/screensavers
cp /usr/share/blanket/screensaver/*.png /mnt/us/screensavers/
rm -rf /usr/share/blanket/screensaver
ln -sfn /mnt/us/screensavers /usr/share/blanket/screensaver
exit
{% endhighlight %}
</div></div>

</div><p>Finshed! You&#8217;ll be able to use any images you like as the screensavers on your Kindle by uploading them in the &#8216;screensavers&#8217; folder that will now appear on the Kindle drive. In order for the screensavers to be recognized however, there are some requirements you need to adhere to:</p>
<ul>
	<li>Screensavers must be <span class="caps">PNG</span> images</li>
	<li>They must be 600px by 800px grayscale images.</li>
	<li>All image names must be: &#8216;<strong>bg_xsmall_ss##.png</strong>&#8217; (the ## are two digits starting at 00 and increasing sequentially, i.e. bg_xsmall_ss00.png, bg_xsmall_ss01.png, etc…).</li>
</ul>
<h2>Octocat Screensavers</h2>
<p>The purpose of this repo is to fill your kindle with octocat screensavers. Check the &#8216;<a href="https://github.com/mattgraham/octokindle/tree/master/screensavers">/screensavers</a>&#8217; folder in the octokindle repo4 for my collected Octocat images.</p>
<h2>Credits</h2>
<p>Again thanks to <a href="https://github.com/cobyism">@cobyism</a> and <a href="https://github.com/dreww">@dreww</a> for putting some of these details together and many thanks to the following sites in which many of the instructions and files above were taken from:</p>
<ul>
	<li><a href="http://wiki.mobileread.com/wiki/Kindle_Touch_Hacking">http://wiki.mobileread.com/wiki/Kindle_Touch_Hacking</a></li>
	<li><a href="http://www.mobileread.com/forums/showthread.php?p=2075539#post2075539">http://www.mobileread.com/forums/showthread.php?p=2075539#post2075539</a></li>
	<li><a href="http://ebookjuggler.com/kindle/removing-ads-on-the-kindle-touch/">http://ebookjuggler.com/kindle/removing-ads-on-the-kindle-touch/</a></li>
	<li><a href="http://www.fabiszewski.net/kindle-xterm/">http://www.fabiszewski.net/kindle-xterm/</a></li>
</ul></div>




</article>
