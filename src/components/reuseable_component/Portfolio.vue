<template>
  <!--================ Start Portfolio Area =================-->
  <section class="portfolio_area" id="portfolio">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="main_title">
            <p class="top_text">My Portfolio <span></span></p>
            <h2>
              Check My Recent <br />
              Client Work
            </h2>
          </div>
        </div>
      </div>

      <div class="filters portfolio-filter">
        <ul>
          <li class="active" data-filter="*">all</li>
          <li data-filter=".popular">favourite</li>
          <li data-filter=".popular">html/css</li>
          <li data-filter=".latest">vue</li>
          <li data-filter=".following">react</li>
          <li data-filter=".following">api</li>
          <li data-filter=".following">node</li>
          <li data-filter=".following">freelance designs</li>
        </ul>
      </div>

      <div class="filters-content">
        <div class="row portfolio-grid">
          <div class="grid-sizer col-md-3 col-lg-3"></div>
          <div class="col-lg-6 col-md-6 all following">
            <div class="single_portfolio">
              <img
                class="img-fluid w-100"
                src="@/assets/images/portfolio/p1.jpg"
                alt=""
              />
              <div class="overlay"></div>
              <div class="short_info">
                <h4><a href="#">Lens Mockup Design</a></h4>
                <p>Art, Illustration</p>
              </div>
            </div>
          </div>

          <div class="col-lg-6 col-md-6 all latest popular upcoming">
            <div class="single_portfolio">
              <img
                class="img-fluid w-100"
                src="@/assets/images/portfolio/p4.jpg"
                alt=""
              />
              <div class="overlay"></div>
              <div class="short_info">
                <h4><a href="portfolio-details.html">Lens Mockup Design</a></h4>
                <p>Art, Illustration</p>
              </div>
            </div>
          </div>

          <div class="col-lg-3 col-md-6 all latest following">
            <div class="single_portfolio">
              <img
                class="img-fluid w-100"
                src="@/assets/images/portfolio/p2.jpg"
                alt=""
              />
              <div class="overlay"></div>
              <div class="short_info">
                <h4><a href="portfolio-details.html">Lens Mockup Design</a></h4>
                <p>Art, Illustration</p>
              </div>
            </div>
          </div>

          <div class="col-lg-3 col-md-6 all latest upcoming">
            <div class="single_portfolio">
              <img
                class="img-fluid w-100"
                src="@/assets/images/portfolio/p3.jpg"
                alt=""
              />
              <div class="overlay"></div>
              <div class="short_info">
                <h4><a href="portfolio-details.html">Lens Mockup Design</a></h4>
                <p>Art, Illustration</p>
              </div>
            </div>
          </div>

          <div class="col-lg-6 col-md-6 all popular">
            <div class="single_portfolio">
              <img
                class="img-fluid w-100"
                src="@/assets/images/portfolio/p6.jpg"
                alt=""
              />
              <div class="overlay"></div>
              <div class="short_info">
                <h4><a href="portfolio-details.html">Lens Mockup Design</a></h4>
                <p>Art, Illustration</p>
              </div>
            </div>
          </div>

          <div class="col-lg-6 col-md-6 all popular latest following">
            <div class="single_portfolio">
              <img
                class="img-fluid w-100"
                src="@/assets/images/portfolio/p5.jpg"
                alt=""
              />
              <div class="overlay"></div>
              <div class="short_info">
                <h4><a href="portfolio-details.html">Lens Mockup Design</a></h4>
                <p>Art, Illustration</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--================ End Portfolio Area =================-->
</template>

<script>
export default {
  name: "portfolio"
};
</script>

<script src="@/assets/theme.js"></script>

<style></style>
