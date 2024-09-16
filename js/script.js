
// pagination start
     // Sample property data (replace with your actual data)
     const totalPages = 7;
     let currentPage = 1;
     
     // Select pagination elements
     const pagination = document.querySelector('.pagination');
     
     // Function to render pagination items dynamically
     function renderPagination() {
         // Clear previous pagination items
         pagination.innerHTML = `
             <li class="page-item ${currentPage === 1 ? 'disabled' : ''}">
                 <a class="page-link" href="#" tabindex="-1" onclick="goToPage(1)">« First</a>
             </li>
             <li class="page-item ${currentPage === 1 ? 'disabled' : ''}">
                 <a class="page-link" href="#" tabindex="-1" onclick="goToPage(${currentPage - 1})">Previous</a>
             </li>
         `;
     
         // Add page number items
         for (let i = 1; i <= totalPages; i++) {
             pagination.innerHTML += `
                 <li class="page-item ${i === currentPage ? 'active' : ''}">
                     <a class="page-link" href="#" onclick="goToPage(${i})">${i}</a>
                 </li>
             `;
         }
     
         // Add Next and Last buttons
         pagination.innerHTML += `
             <li class="page-item ${currentPage === totalPages ? 'disabled' : ''}">
                 <a class="page-link" href="#" onclick="goToPage(${currentPage + 1})">Next »</a>
             </li>
             <li class="page-item ${currentPage === totalPages ? 'disabled' : ''}">
                 <a class="page-link" href="#" onclick="goToPage(${totalPages})">Last »</a>
             </li>
         `;
     }
     
     // Function to handle page change
     function goToPage(page) {
         if (page >= 1 && page <= totalPages) {
             currentPage = page;
             renderPagination();
             loadContentForPage(page); // Call a function to load content for the current page
         }
     }
     
     // Example function to load content based on the current page (replace with actual content loading)
     function loadContentForPage(page) {
         console.log(`Loading content for page ${page}`);
     }
     
     // Initial render of the pagination
     renderPagination();
     




var swiper = new Swiper(".Swiperjs", {
    slidesPerView: 5,
    spaceBetween: 0,
    freeMode: true,
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
    },
    
    navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    },
    });
    
    
    
    
      var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
    },
    
    navigation: {
    nextEl: ".sb_next",
    prevEl: ".sb_prev",
    },
    on: {
        reachBeginning: function() {
          swiper.navigation.prevEl.disabled = true;
        },
        reachEnd: function() {
          swiper.navigation.nextEl.disabled = true;
        },
        fromEdge: function() {
          swiper.navigation.prevEl.disabled = false;
          swiper.navigation.nextEl.disabled = false;
        },
      },
    });
    
    
    
    function activateTab(element) {
        var tabs = document.querySelectorAll('.tab');
        tabs.forEach(function(tab) {
            tab.classList.remove('active');
        });
        element.classList.add('active');
    }



    function toggleText() {
      var summaryText = document.getElementById("summaryText");
      var readMoreBtn = document.getElementById("readMoreBtn");
      var hideBtn = document.getElementById("hideBtn");

      if (summaryText.classList.contains("expanded")) {
        summaryText.classList.remove("expanded");
        readMoreBtn.style.display = "inline-block";
        hideBtn.style.display = "none";
      } else {
        summaryText.classList.add("expanded");
        readMoreBtn.style.display = "none";
        hideBtn.style.display = "inline-block";
      }
    }