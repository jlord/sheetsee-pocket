  function existingTagsList(data) {
  	var existingTags = []
  	data.forEach(function getTagArray(row) {
  		if (row.tags === "") return
  		row.tags.forEach(function parseTags(tag) {
  			var tagString = tag["tag"]
        if (existingTags.length === 0) existingTags.push(tagString)
        if (existingTags.indexOf(tagString) > -1) return
        existingTags.push(tagString)
      })
    })
    return existingTags
  }


  function separateTags(data) {
  	data.forEach(function findMultiTags(article) {
  		if (article.tags === "") return
  		if (article.tags.indexOf(',') >= 0) {
  			var tagArray = parseTags(article.tags)
  			var tagObjArray = arrayIntoObjects(tagArray)
  			article.tags = tagObjArray
  		}
  		else {
  			article.tags = [{"tag": article.tags}]
  		}
  	})
    return data
  }

  function parseTags(bulkTags) {
  	tagArray = bulkTags.split(', ')
  	return tagArray
  }

  function arrayIntoObjects(array) {
	  var tags = []
	  for (var i = 0; i < array.length; ++i)
	    if (array[i] !== undefined) tags.push({ "tag" : array[i]})
	  return tags
  }

  function getTagMatches(data, selectedTag) {
    var matches = []
    data.forEach(function (element) {
      var elTags = element.tags
      if (elTags === "") return
      elTags.forEach(function (tag) {
        if (tag["tag"] === selectedTag.trim()) matches.push(element)

      })
    })
    return matches
  }

  function drawTags(data) {
    var tag = existingTagsList(data)
    var contents = ich.tags({
      rows: tag
    })
    $('#tags').html(contents)
  }

  function pageTitle(data) {
  	var amount = data.length
  	var contents = ich.title({
    	numArticles: amount
  	})
  $('#title').html(contents)
  }

  function cleanDates(data) {
  	data.forEach(function (item) {
  		item.date = item.date.split(" at")[0]
  	})
  return data
  }