function addToList() {
  $('#note-form').submit(function(event) {
    let value = $("#note-form-text").val()
    let comment = new Comment(value)
    $('#comments-list').append(comment.render())
    event.preventDefault()
  })
}

function filterList() {
  $("#search-form").submit(function(event) {
    let filterValue = $("#filter-form-text").val()
    $("#comments-list li").each(function() {
      if ($(this).text().search(filterValue) !== -1) {
        $(this).show()
      } else {
        $(this).hide()
      }
    })
    event.preventDefault()
  })
}

$(function() {
  addToList()
  filterList()
})
