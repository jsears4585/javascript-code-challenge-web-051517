class CommentList {

  constructor (commentsTextArray) {
    this.commentsArray = commentsTextArray.map(function(commentText) {
      return new Comment(commentText)
    })
  }

  render() {
    let returnString = "<ul>"
    this.commentsArray.forEach(function(comment) {
      returnString += comment.render()
    })
    return returnString + "</ul>"
  }

  addComment(comment) {
    this.commentsArray.push(new Comment(comment))
  }

}
