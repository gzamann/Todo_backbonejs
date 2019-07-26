var TodoItem = Backbone.Model.extend({
    defaults:{
        completed: false
    },
    
    urlRoot: 'https://jsonplaceholder.typicode.com/todos',

    validate: function(attr){
        if(!attr.title)
            return "title is not provided"
    },
    toggle: function(){
        this.set('completed', !this.get('completed'))
        console.log(this.get('completed'))
    }
});