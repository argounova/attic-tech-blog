const newCommentHandler = async (event) => {
    event.preventDefault();
  
    const newComment = document.querySelector('#new-comment').value.trim();
  
    if (newComment) {
      const response = await fetch(`/api/comments`, {
        method: 'POST',
        body: JSON.stringify({ newComment }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/view-post');
      } else {
        alert('Unable to add comment');
      }
    }
  };
  
//   const delButtonHandler = async (event) => {
//     if (event.target.hasAttribute('data-id')) {
//       const id = event.target.getAttribute('data-id');
  
//       const response = await fetch(`/api/projects/${id}`, {
//         method: 'DELETE',
//       });
  
//       if (response.ok) {
//         document.location.replace('/profile');
//       } else {
//         alert('Failed to delete project');
//       }
//     }
//   };
  
document
.querySelector('#button-addon1')
.addEventListener('click', newCommentHandler);
  
//   document
//     .querySelector('.project-list')
//     .addEventListener('click', delButtonHandler);
  