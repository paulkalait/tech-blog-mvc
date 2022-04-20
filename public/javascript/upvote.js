async function upvoteClickHandler(event){
    event.preventDefault();

    // grab the last part of url (the id number) to use to update
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ]

    const response = await fetch('/api/posts/upvote', {
        method: 'PUT',
        body: JSON.stringify({
            post_id: id
        }),
        header: {
            'Content-Type': 'application/json'
        }
    })

    if(response.ok){
        document.location.reload()
    }else{
        alert(response.statusText)
    }
}

document.querySelector('.upvote-btn').addEventListener('click', upvoteClickHandler);