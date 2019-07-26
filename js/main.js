$(document).ready(function(){

    var todoItems = new TodoItems()
    todoItems.fetch()

    var todoItemsView = new TodoItemsView({model : todoItems})

    $('#app').append(todoItemsView.render().$el)
})