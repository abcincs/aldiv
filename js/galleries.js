const data = [
  {
    id: 1,
    name: 'image-1',
    image: {
        img: '../images/galleries/gallery-8.png',
        alt: 'image-1'
    }
  },
  {
    id: 2,
    name: 'image-1',
    image: {
        img: '../images/galleries/gallery-12.png',
        alt: 'image-2'
    }
  },
  {
    id: 3,
    name: 'image-1',
    image: {
        img: '../images/galleries/p-culture-4.png',
        alt: 'image-3'
    }
  },
  {
    id: 4,
    name: 'image-1',
    image: {
        img: '../images/galleries/p-culture-5.png',
        alt: 'image-4'
    }
  },
  {
    id: 5,
    name: 'image-1',
    image: {
        img: '../images/galleries/p-famille-cikumbo.png',
        alt: 'image-5'
    }
  },
  {
    id: 6,
    name: 'image-1',
    image: {
        img: '../images/galleries/p-mine-1.png',
        alt: 'image-6'
    }
  },
  {
    id: 7,
    name: 'image-1',
    image: {
        img: '../images/galleries/gallery-1.png',
        alt: 'image-7'
    }
  },
  {
    id: 8,
    name: 'image-1',
    image: {
        img: '../images/galleries/gallery-2.png',
        alt: 'image-8'
    }
  },
  {
    id: 9,
    name: 'image-1',
    image: {
        img: '../images/galleries/gallery-4.png',
        alt: 'image-9'
    }
  },
  {
    id: 10,
    name: 'image-1',
    image: {
        img: '../images/galleries/gallery-5.png',
        alt: 'image-10'
    }
  },
  {
    id: 11,
    name: 'image-1',
    image: {
        img: '../images/galleries/gallery-6.png',
        alt: 'image-11'
    }
  },
  {
    id: 12,
    name: 'image-1',
    image: {
        img: '../images/galleries/gallery-7.png',
        alt: 'image-12'
    }
  },
  {
    id: 13,
    name: 'image-1',
    image: {
        img: '../images/galleries/gallery-9.png',
        alt: 'image-13'
    }
  },
  {
    id: 14,
    name: 'image-1',
    image: {
        img: '../images/galleries/gallery-10.png',
        alt: 'image-14'
    }
  },
  {
    id: 15,
    name: 'image-1',
    image: {
        img: '../images/galleries/gallery-11.png',
        alt: 'image-15'
    }
  },
  {
    id: 16,
    name: 'image-1',
    image: {
        img: '../images/galleries/gallery-13.png',
        alt: 'image-16'
    }
  },
  {
    id: 17,
    name: 'image-1',
    image: {
        img: '../images/galleries/p-culture-1.png',
        alt: 'image-17'
    }
  },
  {
    id: 18,
    name: 'image-1',
    image: {
        img: '../images/galleries/p-culture-2.png',
        alt: 'image-18'
    }
  },
  {
    id: 19,
    name: 'image-1',
    image: {
        img: '../images/galleries/p-culture-3.png',
        alt: 'image-19'
    }
  },
  {
    id: 20,
    name: 'image-1',
    image: {
        img: '../images/galleries/p-culture-6.png',
        alt: 'image-20'
    }
  },
  {
    id: 21,
    name: 'image-1',
    image: {
        img: '../images/galleries/p-famille-ishungu-1.png',
        alt: 'image-21'
    }
  },
  {
    id: 22,
    name: 'image-1',
    image: {
        img: '../images/galleries/p-famille-ishungu-2.png',
        alt: 'image-22'
    }
  },
  {
    id: 23,
    name: 'image-1',
    image: {
        img: '../images/galleries/p-mine-2.png',
        alt: 'image-23'
    }
  },
  {
    id: 24,
    name: 'image-1',
    image: {
        img: '../images/galleries/p-mine-3.png',
        alt: 'image-24'
    }
  },
  {
    id: 25,
    name: 'image-1',
    image: {
        img: '../images/galleries/p-mine-4.png',
        alt: 'image-25'
    }
  },
  {
    id: 26,
    name: 'image-1',
    image: {
        img: '../images/galleries/p-nature-1.png',
        alt: 'image-26'
    }
  },
  {
    id: 27,
    name: 'image-1',
    image: {
        img: '../images/galleries/p-nature-2.png',
        alt: 'image-27'
    }
  }
];

const imageContainer = document.querySelector('#Galleries .images');

// Function to create card with elements in the array
function createCard(dataInfo) {
  const li = document.createElement('li');
  li.className = 'card-image d-flex';
  li.innerHTML = `<div class="card-img">
        <img src="${dataInfo.image.img}" alt="${dataInfo.image.alt}">
      </div>`;
  return li;
}

data.forEach((info) => {
  const card = createCard(info);
  imageContainer.appendChild(card);
});

const imageList = () => document.querySelectorAll('#Galleries .images li');
const moreBtn = document.querySelector('#Galleries button');
const btnSpan = document.querySelector('#Galleries button span');
const btnIcon = document.querySelector('#Galleries button i');

let showingAll = false;
const INITIAL_VISIBLE = 6;

function updateGalleryView() {
  const images = imageList();
  images.forEach((img, idx) => {
    if (!showingAll && idx >= INITIAL_VISIBLE) {
      img.classList.add('hidden');
    } else {
      img.classList.remove('hidden');
    }
  });
  if (showingAll) {
    btnSpan.textContent = 'Voir Moins';
    btnIcon.classList.remove('fa-chevron-down');
    btnIcon.classList.add('fa-chevron-up');
    moreBtn.setAttribute('aria-expanded', 'true');
  } else {
    btnSpan.textContent = 'Voir Plus';
    btnIcon.classList.remove('fa-chevron-up');
    btnIcon.classList.add('fa-chevron-down');
    moreBtn.setAttribute('aria-expanded', 'false');
  }
}

function toggleGalleryImages() {
  showingAll = !showingAll;
  updateGalleryView();
}

// Initial state
document.addEventListener('DOMContentLoaded', updateGalleryView);
moreBtn.addEventListener('click', toggleGalleryImages);
  
