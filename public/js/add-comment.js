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

    // var text = $('<textarea>')
    // text.remove("form-control")
    // text.addClass('form-control-plaintext')
    // var btn = $('<button>')
    // btn.hide()

    if (response.ok) {
        document.location.replace('/')
    } else {
        alert('Failed to add post')
    }
}

document.querySelector('#submit').addEventListener('submit', comment)

// btn.on('submit', () => {btn.hide()})