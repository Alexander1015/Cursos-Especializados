//Forma Original
//import React, { Component } from 'react';

//Con plugin de React (ES7)
import React, { Component } from 'react'

            //Lo nombra como Posts pq es el nombre del archivo
export default class Posts extends Component {
    
    state = {
        posts: []
    }

    //Se ejecuta cuando el componente ha sido montado
    async componentDidMount() {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await res.json();
        this.setState({posts: data});
    }
    
    render() {
        return (
            <div>
                <h1>Posts</h1>
                {
                    this.state.posts.map(post => {
                        return <div>
                            <h1>{post.title}</h1>
                            <p>{post.body}</p>
                        </div>
                    })
                }
            </div>
        )
    }
}
