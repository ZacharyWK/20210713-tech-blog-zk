const newFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#blogPost-title').value.trim();
  const post_body = document.querySelector('#blogPost-postBody').value.trim();

  if (title && post_body) {
    const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({title, post_body }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to create post');
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/posts/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete post');
    }
  }
};

document
  .querySelector('.new-blogPost-form')
  .addEventListener('submit', newFormHandler);

document
  .querySelector('.blogPost-list')
  .addEventListener('click', delButtonHandler);
