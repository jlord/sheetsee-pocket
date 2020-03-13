// goes through all the tags and generates
// an array of the different tags used 
function existingTagsList(data) {
	var existingTags = []
	data.forEach(function getTagArray(row) {
		if (row.category === "") return
		if (existingTags.length === 0) existingTags.push(row.category)
        if (existingTags.indexOf(row.category) > -1) return
        existingTags.push(row.category)
    })
  return existingTags
}

// find articles that match a tag
function getTagMatches(data, selectedTag) {
  var matches = []
  data.forEach(function (element) {
    var elTags = element.category
    if (elTags === "") return
    if (elTags === selectedTag.trim()) matches.push(element)
    })
  return matches
}

function existingTypeList(data) {
	var existingType = []
	data.forEach(function getTypeList(row) {
		if (row.option === "") return
		if(row.option.trim()==="Remove listing") return
		if (existingType.length === 0) existingType.push(row.option)
      if (existingType.indexOf(row.option) > -1) return
      existingType.push(row.option)
    })
   return existingType
}

function getType(data, selectedTag) {
  var matches1 = []
  data.forEach(function (element) {
    var elTags = element.option
    if (elTags === "") return
  if (elTags === selectedTag.trim()) matches1.push(element)
  })
  return matches1
}
function getSoldCount(data) {
	var count = 0;
	data.forEach(function (element) {
    var elTags = element.option
    if (elTags === "") return
	if (elTags === "Remove listing") 
	{
		if(element.yremove==="Item sold") 
		count++;  
	}
  })
  return count
}

function parseData(data){
	var pData=[];
	var type = existingTypeList(data) 
    var typebutton =[]; 
    type.forEach(function(ele,index){
	pData.push(getType(data,ele))
	var temp={type:ele, count: pData[index].length}
	typebutton.push(temp)
		})
	var contents = ich.types({
    rows: typebutton
  })

  $('#types').html(contents)
	var amount = getSoldCount(data)
	var contents = ich.title({
	numArticles: amount
	})
	$('#title').html(contents)
	return pData	
}
function drawTags(data)
{
	var tag = existingTagsList(data) 
	var contents1 = ich.tags({
    rows: tag
  })
	$('#tags').html(contents1)

}
// render the page title with its
// article count
function pageTitle(data) {
	var amount = [data.length,data.length,data.length]
	var contents = ich.title({
  	numArticles: amount
	})
$('#title').html(contents)
}
