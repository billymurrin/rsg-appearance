window.addEventListener('message', (event) => {
  if (event.data.action === 'open') {
    document.body.style.display = 'flex';
  } else if (event.data.action === 'close') {
    document.body.style.display = 'none';
  }
});

const resourceName = typeof GetParentResourceName === 'function' ? GetParentResourceName() : 'rsg-appearance';

document.getElementById('close').addEventListener('click', () => {
  document.body.style.display = 'none';
  fetch(`https://${resourceName}/close`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({})
  });
});

document.body.style.display = 'none';
