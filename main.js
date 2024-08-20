

   // SCROLL HEADER -  STICKY  //

    window.onscroll = (e) => {
   
    const header = document.querySelector('.navigation');
    
    const sticky = e.target.defaultView.scrollY;
    const halfHeader = e.target.defaultView.innerHeight/3;
    
      if (sticky > halfHeader) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    };


    //  RESERVATION //

    const buttonReservation = document.getElementById('buttonReservation');
    const divReservation = document.getElementById('modalReservation');
    const buttonClose = document.getElementById('close');

    buttonReservation.addEventListener('click', ()=> {
      divReservation.style.display = 'block';
    })
    buttonClose.addEventListener('click', ()=> {
      divReservation.style.display = 'none';
    })

    //  MODAL GALLERY //

  const images = document.querySelectorAll('.galleryItem');
  let imgSrc;
  let imgIndex;

  let imgModal = (index) => {
      console.log(index);
      const modal = document.createElement("div");
      modal.setAttribute("class", "modal");
     
      document.querySelector("#gallery").append(modal);
      const newImage = document.createElement("img");
      newImage.setAttribute("src", `img/gallery/g${index+1}.jpg`);

 
      const closeBtn = document.createElement("i");
      closeBtn.setAttribute("class", "fas fa-times closeBtn");
  
      closeBtn.onclick = () => {
        modal.remove();
      };
  
      const nextBtn = document.createElement("i");
      nextBtn.setAttribute("class", "fas fa-angle-right nextBtn");

      nextBtn.onclick = () => {
        newImage.setAttribute("src", nextImg())
      };

      const prevBtn = document.createElement("i");
      prevBtn.setAttribute("class", "fas fa-angle-left prevBtn");

      prevBtn.onclick = () => {
        newImage.setAttribute("src", prevImg())
      };
      modal.append(newImage, closeBtn, nextBtn, prevBtn);
    };

  images.forEach((img, i) => {
      img.addEventListener("click", () => {
          imgModal(i);
          imgIndex = i+1;
      });
  });


  let nextImg = () => {
      imgIndex++;
      if (imgIndex > images.length) {
          imgIndex = 1
      }
      return `img/gallery/g${imgIndex}.jpg`
  };

  let prevImg = () => {
      imgIndex--;
      if (imgIndex < 1) {
          imgIndex = images.length 
      }
      return `img/gallery/g${imgIndex}.jpg`
  }

  //  MENU HAMBURGER 

  const btnHamburger = document.querySelector('nav#mobile button.hamburger i');
  const btnClose = document.querySelector('nav#mobile button.close i');
  const navMobile = document.querySelector('nav#mobile ul');

  btnHamburger.addEventListener('click', ()=> {
    console.log('ok')
    navMobile.style.display = 'flex';
    btnHamburger.style.display = 'none';
  })

  btnClose.addEventListener('click', ()=> {
    navMobile.style.display = 'none';
    btnHamburger.style.display = 'block'
  })