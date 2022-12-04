const newPostHandler = async (event) => {
  event.preventDefault();

  const blogTitle = document.querySelector('#blog-title').value.trim();
  const blogContent = document.querySelector('#blog-content').value.trim();
  const category = document.querySelector('#category').value.trim();

  if (blogTitle && blogContent && category) {
    const response = await fetch(`/api/blogs`, {
      method: 'POST',
      body: JSON.stringify({ blogTitle, blogContent, category }),
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

// const delButtonHandler = async (event) => {
//   if (event.target.hasAttribute('data-id')) {
//     const id = event.target.getAttribute('data-id');

//     const response = await fetch(`/api/projects/${id}`, {
//       method: 'DELETE',
//     });

//     if (response.ok) {
//       document.location.replace('/profile');
//     } else {
//       alert('Failed to delete project');
//     }
//   }
// };

document
  .querySelector('.new-post-form')
  .addEventListener('submit', newPostHandler);

// document
//   .querySelector('.project-list')
//   .addEventListener('click', delButtonHandler);
