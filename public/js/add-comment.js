async function comment(event) {
    event.preventDefault();
    const commentEl = document.querySelector('#comment').value;
    console.log('comment', commentEl)

    const response = await fetch(`api/posts/comments`, {
        method: 'POST', 
        body: JSON.stringify({
            commentEl
        }),
        headers: {'Content-Type': 'application/json'} 
    })
    
    if (response.ok) {
        console.log(response)
        // document.location.replace('/')
        // var text = $('<textarea>')
        // text.remove("form-control")
        // text.addClass('form-control-plaintext')
        // var btn = $('<button>')
        // btn.hide()
    } else {
        alert('Failed to add post')
    }
}

document.querySelector('#submit').addEventListener('click', comment)
// 'submit' a form
// 'click' a button

// btn.on('submit', () => {btn.hide()})