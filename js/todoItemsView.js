var TodoItemsView = Backbone.View.extend({
    tagName: 'ul',

    className: 'todolist',

    initialize: function(options){
        if(!(options && options.model))
            throw new Error('Model is not specified')

        this.model.on('add', this.onAddingItem, this)
        this.model.on('remove', this.onRemovingItem, this)
    },

    events: {
        'click .addbutton': 'onAdd',
        'keypress #todoInput' : 'onKeyPress'
    },

    onKeyPress: function(e){
        if(e.keyCode == 13)
        this.onAdd()
    },
    // happens on clicking button
    onAdd: function(){
        var $text = this.$('#todoInput')
        if($text.val() !== ''){
        var newitem = new TodoItem({title: $text.val()})
        
        this.model.create(newitem)

        $text.val('')
        }
    },

    onRemovingItem: function(todoItem){
        console.log("okay removed")
        this.$('li#'+todoItem.id).remove()
        console.log($('li#'+todoItem.id))
    },

    // happens when TodoItems model changes
    onAddingItem: function(todoItem){
        var view = new TodoItemView({model : todoItem})
        
        this.$el.append(view.render().$el)
    },

    render: function(){
        self = this

        this.$el.append("<div> <input type='text' placeholder='add a todo' class='inputbox' id='todoInput'></input> <i class='addbutton icon ion-ios-create'> </div>")
        // this.$el.append("<button class='addbutton'>Add</button>")

        this.model.each(function(todoItem){
            var view = new TodoItemView({model : todoItem})

            self.$el.append(view.render().$el)
        })
        return this
    }
})