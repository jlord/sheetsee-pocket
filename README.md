# Hi!

![screenshot](https://raw.github.com/jlord/sheetsee-pocket/gh-pages/ss-pocket-ss.png)

A website for your Pocket article archive. Fork-n-Go set up.

### Fork-n-Go

This repository only has a **gh-pages branch** with web files - that means as soon as you **fork** it, you have a live version yourself! You'd be able to visit it at `yourGitHubName.github.io/sheetsee-pocket`. 

It would still be connected to my spreadsheet with my Pocket archive - but that's easy to change!

**Fork this!**

If you don't see your site, you may need to take [a few extra steps](https://help.github.com/articles/creating-pages-with-the-automatic-generator) to get gh-pages enables.

#### Use ifttt.com for Pocket -> Spreadsheet

If you don't have already have an account with both [Pocket](http://www.getpocket.com) (a read-it-later service) and [ifttt.com](http://www.ifttt.com) go ahead and create em. If you don't have a [Google](http://drive.google.com) account, get on that too. 

![ifttt](https://raw.github.com/jlord/sheetsee-pocket/gh-pages/ifttt.png)

In ifttt.com set up [this recipe](https://ifttt.com/recipes/111549) that will take each article you archive on Pocket and add it to a row in a Google Spreadsheet.

_Now go read some things in your Pocket and archive 'em. You know, make the datas._

#### Set up Spreadsheet

Once you've got some entries, checkout your spreadsheet, change (or create if they're not in there automatically) the column headers to: **date, article, tags, url, excerpt**. Renaming won't break anything. Also, even though it's archiving an except, I'm not using in this project. But maybe you can find a neat way to use them?

While you're at your spreadsheet, you'll want to pusblish it to the web and get it's unique key. You'll find that by clicking **File > Publish to the Web**. Then click the "Start publishing" button.

![start publishing](https://raw.github.com/polotek/sheetsee-pocket/gh-pages/ss-publish-web.png)  

It will then display the key in a window. Copy it!

![get key](https://raw.github.com/jllord/sheetsee-cache/master/img/key.png)

#### Paste Your Spreadsheet Key

Now, visit your fork of this repository. Click the `index.html` file, and then when that page loads, click Edit.

![ifttt](https://raw.github.com/jlord/sheetsee-pocket/gh-pages/indexedit.png)

Scroll to find **line 61** (or thereabouts), it looks like: 

```javascript
    document.addEventListener('DOMContentLoaded', function() {
	  	var gData
	  	var URL = "0Ao5u1U6KYND7dFVkcnJRNUtHWUNKamxoRGg4ZzNiT3c"
			Tabletop.init( { key: URL, callback: showInfo, simpleSheet: true } ) 
    }) 
```
Paste your spreadsheet's key in the place of `0Ao5u1U6K...`

**At the bottom of the page, click Commit. You're done! Visit your site!**
