/// Reference: 14-MVC > 10-Stu_Handlebars > js > add-dish.js

async function newPost(event) {
    event.preventDetault();
    const blog_title = document.querySelector('#blog_title').value;
    const blog_body = document.querySelector('#blog_body').value;

    const response = await fetch(`/api/posts`, {
        method: 'POST',
        body: JSON.stringify({
            blog_title,
            blog_body
        })
    })
    if (response.ok) {
        document.location.replace('/')
    } else {
        alert('Failed to add post') // ACTION: Change this action
    }
}

document.querySelector('new-blog-form').addEventListener('submit', newPost)

// QUESTION: How do you POST the entry?
// QUESTION: How do you GET the entry? 