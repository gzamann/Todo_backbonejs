var TodoItemView = Backbone.View.extend({
    tagName: 'li',

    className: 'todoitem',

    events: {
        'click #toggle': 'onToggle',
        'click #remove': 'removeTodo'
    },

    initialize: function () {
        this.model.on('change', this.render, this)
    },

    onToggle: function () {
        this.model.toggle()
        console.log('toggle hap')
        this.$el.toggleClass('done', this.model.get('completed'))
        this.model.save()
    },

    removeTodo: function () {
        this.model.destroy()
    },

    initialize: function (options) {
        if (!(options && options.model))
            throw new Error('Model is not specified')
    },
    render: function () {
        this.$el.attr('id', this.model.id)

        this.$el.toggleClass('done', this.model.get('completed'))
        // let status = this.model.get('completed') ? 'checked' : ''

        // let title = this.model.escape('title')
        // this.$el.append("<input id='toggle' type='checkbox' " + status + "/>" +
        //     "<span>" + title + "</span>" +
        //     "<i id='remove' class='icon ion-ios-trash'></i>")
        let completed = this.model.get('completed')
        let source = document.getElementById('todoTemplate').innerHTML
        
        var template = Handlebars.compile(source)
        
        let title = this.model.get('title')
        
        var html = template({title, completed})
        
        this.$el.html(html)

        return this
    }
})