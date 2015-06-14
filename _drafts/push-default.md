---
layout: post
<!-- customCSS: post-atom.css -->
---

<div class="article-header">
	<span class="asset">
		<div class="art">
			<span class="screen"></span>
		</div>
	</span>
</div>

<article>
<h1>$ git push.default</h1>

<p>Each time I setup a new machine and pushed my first commit I found myself wondering, why is git screaming at me. This time I've decided to figure out exactly why, and what 'option' I wanted to set as my push.default; so I thought I'd try to spell it out for you as well, hoping maybe you also may benefit from my findings. First, the error you've also most likely seen:</p>

```
git push warning: push.default is unset; its implicit value has changed in Git 2.0 from 'matching' to 'simple'. To squelch this message and maintain the traditional behavior, use:

  git config --global push.default matching

To squelch this message and adopt the new behavior now, use:

  git config --global push.default simple

When push.default is set to 'matching', git will push local branches
to the remote branches that already exist with the same name.

Since Git 2.0, Git defaults to the more conservative 'simple'
behavior, which only pushes the current branch to the corresponding
remote branch that 'git pull' uses to update the current branch.

See 'git help config' and search for 'push.default' for further information.
(the 'simple' mode was introduced in Git 1.7.11. Use the similar mode
'current' instead of 'simple' if you sometimes use older versions of Git)
```

</article>
