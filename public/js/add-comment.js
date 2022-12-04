async function comment(event) {
    event.preventDefault();
    const commentEl = document.querySelector('#comment').value;
    // const blogId = req.params.id -- When I uncomment this, the code doesn't move past this
    console.log('comment', commentEl)
    // RESULT: new comment req.body { commentEl: 'Comment test 8:54pm' }

    /// Can I do a GET fetch to get the id value? 11-Express > 07-Ins GET Fetch 

    const response = await fetch(`api/posts/comments`, {
        method: 'POST', 
        body: JSON.stringify({
            commentEl
        }),
        headers: {'Content-Type': 'application/json'} 
    })
    if (response.ok) {
        document.location.replace('/')
        // document.location.replace(`/${req.params.id}`)
        // How do you get it to return to the same page? 
    } else {
        alert('Failed to add post')
    }
    
    

}

document.querySelector('#submit').addEventListener('click', comment)
// 'submit' a form
// 'click' a button

// btn.on('submit', () => {btn.hide()})


// var text = $('<textarea>')
        // text.remove("form-control")
        // text.addClass('form-control-plaintext')
        // var btn = $('<button>')
        // btn.hide()