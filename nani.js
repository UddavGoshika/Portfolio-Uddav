let lastScrollTop = 0;
const navbar = document.querySelector(".navbar");
const hoverArea = document.getElementById("hover-area");
let navbarHidden = false; // Track navbar state

// Handle scrolling
window.addEventListener("scroll", function () {
    let currentScroll = window.pageYOffset;

    if (currentScroll > lastScrollTop) {
        // Scrolling down - hide navbar
        navbar.style.top = "-60px";
        navbarHidden = true;
    } else {
        // Scrolling up - show navbar
        navbar.style.top = "0";
        navbarHidden = false;
    }
    lastScrollTop = currentScroll;
});

// Show navbar when mouse enters the hover area (only if hidden)
hoverArea.addEventListener("mouseenter", function () {
    if (navbarHidden) {
        navbar.style.top = "0"; // Slide down
        navbarHidden = false;
    }
});

// function toggleCertList(box) {
//     document.querySelectorAll('.service-card').forEach(b => {
//         if (b !== box) {
//             b.classList.remove('shrink');
//             b.querySelector('.cert-list').classList.remove('active');
//         }
//     });

//     let certList = box.querySelector('.cert-list');
//     let isActive = certList.classList.contains('active');

//     box.classList.toggle('shrink', !isActive);
//     certList.classList.toggle('active', !isActive);
// }

// function showCertificate(event, element, certSrc) {
//     event.stopPropagation(); // Prevents triggering parent click
//     let certImg = element.parentElement.nextElementSibling;
//     let isVisible = certImg.style.display === 'block';

//     // Hide all certificates first
//     document.querySelectorAll('.certificate').forEach(img => img.style.display = 'none');
//     document.querySelectorAll('.arrow').forEach(arrow => arrow.textContent = '▶');

//     if (!isVisible) {
//         certImg.src = certSrc;
//         certImg.style.display = 'block';
//         element.textContent = '▼';
//     } else {
//         certImg.style.display = 'none';
//         element.textContent = '▶';
//     }
// }


 
//   function toggleCertList(clickedCard) {
//     const allCards = document.querySelectorAll('.service-grid > div');

//     allCards.forEach(card => {
//       const certList = card.querySelector('.cert-list');
//       if (card === clickedCard) {
//         certList.style.display = 'block'; // show for clicked
//       } else {
//         certList.style.display = 'none'; // hide for others
//       }
//     });
//   }

//   function showCertificate(event, arrow, imgSrc) {
//     event.stopPropagation(); // prevent click bubble to card
//     const certificateImg = arrow.parentElement.nextElementSibling;

//     if (certificateImg && certificateImg.tagName === 'IMG') {
//       certificateImg.style.display =
//         certificateImg.style.display === 'block' ? 'none' : 'block';
//       arrow.textContent = certificateImg.style.display === 'block' ? '▼' : '▶';
//     }
//   }

//   // Optional: Hide all cert-lists on load
//   document.addEventListener('DOMContentLoaded', () => {
//     document.querySelectorAll('.cert-list').forEach(list => {
//       list.style.display = 'none';
//     });
//   });



function toggleCertList(clickedCard) {
    const allCards = document.querySelectorAll('.service-grid > div');
    const clickedCertList = clickedCard.querySelector('.cert-list');
    const isAlreadyVisible = clickedCertList.style.display === 'block';
  
    allCards.forEach(card => {
      const certList = card.querySelector('.cert-list');
      if (card === clickedCard) {
        // Toggle clicked card's list
        certList.style.display = isAlreadyVisible ? 'none' : 'block';
      } else {
        // Always hide others
        certList.style.display = 'none';
      }
    });
  
    // Also hide any visible certificate image when card is clicked
    document.querySelectorAll('.certificate').forEach(img => {
      img.style.display = 'none';
    });
    document.querySelectorAll('.arrow').forEach(arrow => {
      arrow.textContent = '▶';
    });
  }
  
  function showCertificate(event, arrow, imgSrc) {
    event.stopPropagation();
    const certificateImg = arrow.parentElement.nextElementSibling;
  
    if (certificateImg && certificateImg.tagName === 'IMG') {
      const isVisible = certificateImg.style.display === 'block';
      certificateImg.src = imgSrc;
      certificateImg.style.display = isVisible ? 'none' : 'block';
      arrow.textContent = isVisible ? '▶' : '▼';
    }
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.cert-list').forEach(list => {
      list.style.display = 'none';
    });
  
    document.querySelectorAll('.certificate').forEach(img => {
      img.style.display = 'none';
    });
  });
  






//   function toggleTheme() {
//     const themeLink = document.getElementById("themeStylesheet");
//     const currentHref = themeLink.getAttribute("href");
//     const newHref = currentHref.endsWith("styles-light.css") ? "styles-dark.css" : "styles-light.css";
    
//     // Append a query parameter to force reload
//     const timestamp = new Date().getTime();
//     themeLink.setAttribute("href", `${newHref}?v=${timestamp}`);
// }





function toggleProjectDetails(clickedCard, detailsId) {
  const allCards = document.querySelectorAll('.project-card');
  const allDetails = document.querySelectorAll('.project-details');
  const thisDetails = document.getElementById(detailsId);

  const isVisible = thisDetails.style.display === 'block';

  if (!isVisible) {
    // Hide all other project cards and details
    allCards.forEach(card => {
      if (card !== clickedCard) card.style.display = 'none';
    });
    allDetails.forEach(detail => {
      detail.style.display = 'none';
    });

    // Show the clicked one
    thisDetails.style.display = 'block';
  } else {
    // Collapse all and show all project cards
    allDetails.forEach(detail => {
      detail.style.display = 'none';
    });
    allCards.forEach(card => {
      card.style.display = 'block';
    });
  }
}


function toggleProjectDetails(clickedCard, detailsId) {
  const allCards = document.querySelectorAll('.project-card');
  const allDetails = document.querySelectorAll('.project-details');
  const selectedDetail = document.getElementById(detailsId);
  const isVisible = selectedDetail.style.display === 'block';

  if (!isVisible) {
    allCards.forEach(card => {
      if (card !== clickedCard) card.style.display = 'none';
    });
    allDetails.forEach(detail => detail.style.display = 'none');
    selectedDetail.style.display = 'block';
  } else {
    allCards.forEach(card => card.style.display = 'block');
    allDetails.forEach(detail => detail.style.display = 'none');
  }
}


const text = "🚀 The Future is Loading...";
const dynamicText = document.getElementById("dynamicText");
let i = 0;

function type() {
  if (i < text.length) {
    dynamicText.innerHTML += text.charAt(i);
    i++;
    setTimeout(type, 100);
  }
}

document.addEventListener("DOMContentLoaded", type);


