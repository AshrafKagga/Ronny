$(document).ready(function () {
  var url = "assets/js/data/data.json"

  var id = new URLSearchParams(window.location.search).get('id');

  // fetch(url)
  //   .then(response => response.json())
  //   .then(function (data) {
  //     var portfolio = data.portfolio;
  //     var selected = portfolio.find(item => item.id == id);
  //     if (selected) {
  //       createPortofiloInfo(selected);
  //     } else {
  //       console.error('Not item with this id');
  //     }
  //   })
  //   .catch(error => console.error('Error:', error));


  // Define the getData function



  getSingleRecord(url, id, 'portfolio', createPortofiloInfo)

  function createPortofiloInfo(data) {
    var parent = document.getElementById('parent');
    var parent2 = document.createElement('div');
    parent2.className = "row gy-4";
    var projectInfo = document.createElement('div');
    projectInfo.className = "col-lg-4";
    projectInfo.innerHTML = details(data)
    var projectimages = document.createElement('div');
    projectimages.className = "col-lg-8";
    projectimages.innerHTML = htmlTemplate(data.images)



    parent2.appendChild(projectimages);
    parent2.appendChild(projectInfo);
    parent.appendChild(parent2);

    new Swiper('.portfolio-details-slider', {
      speed: 400,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      }
    });
  }

  function htmlTemplate(data) {
    let html = `
        <div class="portfolio-details-slider swiper">
          <div class="swiper-wrapper align-items-center">`;

    data.forEach(image => {
      html += `
            <div class="swiper-slide">
              <img src="${image}" alt="">
            </div>`;
    });

    html += `
          </div>
          <div class="swiper-pagination"></div>
        </div>`;

    return html;
  }

  function details(data) {
    return `
            <div class="portfolio-info">
              <h3>Project information</h3>
              <ul>
                <li><strong>Category</strong>: ${data.project_information.category}</li>
                <li><strong>Client</strong>: ${data.project_information.client}</li>
                <li><strong>Project date</strong>: ${data.project_information.date}</li>
                <li><strong>Project URL</strong>: <a href="#">${data.project_information.url}</a></li>
              </ul>
            </div>
            <div class="portfolio-description">
              <h2>This is an example of portfolio detail</h2>
              <p>
                Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque inventore commodi labore quia quia. Exercitationem repudiandae officiis neque suscipit non officia eaque itaque enim. Voluptatem officia accusantium nesciunt est omnis tempora consectetur dignissimos. Sequi nulla at esse enim cum deserunt eius.
              </p>
            </div>
    `;
  }

  getRecords(url,allportfiolo)
function allportfiolo(data){
  console.log(data);
}
});