const faq_modal = document.getElementById('faq');

// Close modal if the user clicks outside of it
window.addEventListener('click', function(event) {
    if (event.target === faq_modal) {
        faq_modal.close();
    }
});

const crack_modal = document.getElementById('crack');

// Close modal if the user clicks outside of it
window.addEventListener('click', function(event) {
    if (event.target === crack_modal) {
        crack_modal.close();
    }
});

  function scrollToNextContainer() {
const element = document.elementFromPoint(0, 0);
    if(element && element.parentElement)
      {
       const nextContainer = element.parentElement.nextElementSibling; 
if (nextContainer && nextContainer.classList.contains('container')) {
        nextContainer.scrollIntoView({ behavior: 'smooth' });
}
      }
  }

function scrollToPrevContainer() {
const element = document.elementFromPoint(0, 0);
    if(element && element.parentElement)
      {
       const nextContainer = element.parentElement.previousElementSibling; 
if (nextContainer && nextContainer.classList.contains('container')) {
        nextContainer.scrollIntoView({ behavior: 'smooth' });
}
      }
  }

document.addEventListener('keydown', function(event) {
if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') {
scrollToPrevContainer();
}
});

document.addEventListener('keydown', function(event) {
if (event.key === 'ArrowRight' || event.key === 'ArrowDown' || event.key === ' ') {
scrollToNextContainer();
}
});

let scrollTimeout;
const prevButton = document.getElementById('goPrev');
const nextButton = document.getElementById('goNext');

window.addEventListener('scroll', function () {
clearTimeout(scrollTimeout);

scrollTimeout = setTimeout(function () {
const element = document.elementFromPoint(0, 0);
    if(element && element.parentElement)
      {
        const next = element.parentElement.nextElementSibling; 
        if(next && next.classList.contains('container'))
        {
          nextButton.classList.remove('fade-out');
        }
        else
        {
          nextButton.classList.add('fade-out');
        }
        const prev = element.parentElement.previousElementSibling; 
        if(prev && prev.classList.contains('container'))
        {
          prevButton.classList.remove('fade-out');
        }
        else
        {
          prevButton.classList.add('fade-out');
        }
      }
}, 200);
});
