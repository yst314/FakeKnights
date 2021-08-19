const Counter = {
    data() {
        return {
            counter: 0,
        };
    },
    mounted() {
        setInterval(() => {
            this.counter++;
        }, 1000);
    },
};

const AttributeBinding = {
    data() {
        return {
            message: 'You loaded this page on ' + new Date().toLocaleString()
        }
    }
}

const EventHandling = {
    data() {
        return {
            message: "Hello Vue.js!",
        };
    },
    methods: {
        reverseMessage() {
            this.message = this.message.split("").reverse().join("");
        },
    },
};

const TwoWayBinding = {
    data() {
        return {
            message: 'Hello Vue!'
        }
    }
}

const ConditionalRendering = {
    data() {
        return {
            seen: true
        }
    }
}

const ListRendering = {
    data() {
        return {
            todos: [
                { text: 'Learn JavaScript' },
                { text: 'Learn Vue' },
                { text: 'Build something awesome' },
                { text: 'Learn DOM' }
            ]
        }
    }
}

const TodoList = {
    data() {
        return {
            groceryList: [
                { id: 0, text: 'Vegetables' },
                { id: 1, text: 'Cheese' },
                { id: 2, text: 'Whatever else humans are supposed to eat' }
            ]
        }
    }
}

const app = Vue.createApp(TodoList)

app.component('todo-item', {
    props: ['todo'],
    template: `<li>{{ todo.text }}</li>`
})

app.mount('#todo-list-app')

Vue.createApp(AttributeBinding).mount('#bind-attribute')
Vue.createApp(EventHandling).mount("#event-handling");
Vue.createApp(Counter).mount("#counter");
Vue.createApp(TwoWayBinding).mount('#two-way-binding')
Vue.createApp(ConditionalRendering).mount('#conditional-rendering')
Vue.createApp(ListRendering).mount('#list-rendering')
