<template>
  <span class="pt-10 mt-10 mb-6 text-3xl font-bold text-center">
    Siwon's Web and Mobile Portfolio
  </span>

  <!-- Project One -->

  <div class="flex flex-col mt-6 md:flex-row">
    <!-- carousel start -->
    <div class="w-full mb-6 mr-6 md:w-3/5 md:mb-0" align="center">
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-ride="carousel"
      >
        <ol class="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            class="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              class="w-full rounded shadow-lg d-block img-fluid"
              src="../assets/img/1-1.png"
              alt="First slide"
            />
          </div>
          <div class="carousel-item">
            <img
              class="w-full rounded shadow-lg d-block img-fluid"
              src="../assets/img/1-2.png"
              alt="Second slide"
            />
          </div>
          <div class="carousel-item">
            <img
              class="w-full rounded shadow-lg d-block img-fluid"
              src="../assets/img/1-3.png"
              alt="Third slide"
            />
          </div>
          <div class="carousel-item">
            <img
              class="w-full rounded shadow-lg d-block img-fluid"
              src="../assets/img/1-4.png"
              alt="Fourth slide"
            />
          </div>
          <div class="carousel-item">
            <img
              class="w-full rounded shadow-lg d-block img-fluid"
              src="../assets/img/1-5.png"
              alt="Fifth slide"
            />
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
    <!-- carousel end -->

    <div class="w-full ml-0 text-left md:w-1/3 md:ml-3">
      <div class="mb-3 text-xl font-bold md:text-2xl">
        MD (Maryland) APL Management
      </div>
      <p class="mb-3">Key Features:</p>
      <ul class="mb-3 ml-3 list-disc list-outside">
        <li>
          UPC Review: Approve or deny incoming UPCs from the UPC collector or
          vendor UPC upload site.
        </li>
        <li>APL Management: Search, edit, and add UPCs to the APL.</li>
        <li>
          Automation: Automate formatting approved UPCs for generating the APL.
        </li>
        <li>
          Food Category Management: Organize food categories within the APL.
        </li>
        <li>
          Tools: Includes a check digit checker, UPC-E/UPC-A converter, and an
          option to reserve deactivation of a UPC.
        </li>
        <li>
          File Generation: Create the Maryland APL file for MIS (WOW) to send to
          the EBT processor (SOAR).
        </li>
      </ul>
      <p class="mb-3">Target Users: Nutritionists, Vendor Staff</p>
      <div
        class="flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2"
      >
        <a class="btn btn-primary" target="_blank" href="https://md.wicapl.org"
          >View Project</a
        >
        <a
          class="btn btn-info"
          target="_blank"
          href="https://md.wicapl.org/storage/manual_apl_management.pdf"
          >Manual</a
        >
        <a
          class="btn btn-danger"
          target="_blank"
          href="https://wicapl.org/tutorial/index.html"
          >Video</a
        >
      </div>
    </div>
  </div>

  <!-- /.row -->

  <hr />

  <!-- Project Two -->
  <div class="flex flex-col mt-6 md:flex-row">
    <div class="w-full mb-6 mr-6 md:w-3/5 md:mb-0" align="center">
      <a href="#">
        <img
          class="mb-3 rounded shadow-lg img-fluid mb-md-0"
          src="../assets/img/1.jpg"
          alt=""
        />
      </a>
    </div>
    <div class="w-full ml-0 text-left md:w-1/3 md:ml-3">
      <div class="mb-3 text-2xl font-bold">
        VI(Virgin Islands) APL Management
      </div>
      <p class="mb-3">Key Features:</p>
      <ul class="mb-3 ml-3 list-disc list-outside">
        <li>
          UPC Review: Approve or deny incoming UPCs from the UPC collector or
          vendor UPC upload site.
        </li>
        <li>APL Management: Search, edit, and add UPCs to the APL.</li>
        <li>
          Automation: Automate formatting approved UPCs for generating the APL.
        </li>
        <li>
          Food Category Management: Organize food categories within the APL.
        </li>
        <li>
          Tools: Includes a check digit checker, UPC-E/UPC-A converter, and an
          option to reserve deactivation of a UPC.
        </li>
        <li>
          File Generation: Create the Maryland APL file for MIS (WOW) to send to
          the EBT processor (SOAR).
        </li>
      </ul>
      <p class="mb-3">Target users : Nutritionist, Vendor Staff</p>

      <div
        class="flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2"
      >
        <a class="btn btn-primary" target="_blank" href="https://vi.wicapl.org"
          >View Project</a
        >
        <a
          class="btn btn-info"
          target="_blank"
          href="https://md.wicapl.org/storage/manual_apl_management.pdf"
          >Manual</a
        >
        <a
          class="btn btn-danger"
          target="_blank"
          href="https://wicapl.org/tutorial/index.html"
          >Video</a
        >
      </div>
    </div>
  </div>
  <!-- /.row -->

  <hr />

  <!-- Project Three -->
  <div class="flex flex-col mt-6 md:flex-row">
    <div class="w-full mb-6 mr-6 md:w-3/5 md:mb-0" align="center">
      <a href="#">
        <img
          class="mb-3 rounded shadow-lg img-fluid mb-md-0"
          src="../assets/img/3.png"
          alt=""
        />
      </a>
    </div>
    <div class="w-full ml-0 text-left md:w-1/3 md:ml-3">
      <div class="mb-3 text-2xl font-bold">
        UPC Collector(for Maryland)

        <span
          class="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full"
          >Mobile</span
        >
      </div>
      <p class="mb-3">
        <span class="text-base font-bold"
          >The window tablet based application</span
        >
        to collect upcs at the stores with the attached barcode scanner and to
        generate an Excel and a SQL file for uploading the collected upcs to the
        APL Management site.
      </p>

      <p class="mb-3">Target users : Nutritionist, Vendor Staff</p>
      <div
        class="flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2"
      >
        <a
          class="btn btn-info"
          target="_blank"
          href="https://wicapl.org/manuals/manual_UPC_Collector_MD_12312018.pdf"
          >Manual</a
        >
        <a
          class="btn btn-danger"
          target="_blank"
          href="https://wicapl.org/tutorial/index_collector.html
"
          >Video</a
        >
      </div>
    </div>
  </div>
  <!-- /.row -->

  <hr />

  <!-- Project Four -->
  <div class="flex flex-col mt-6 md:flex-row">
    <div class="w-full mb-6 mr-6 md:w-3/5 md:mb-0" align="center">
      <a href="#">
        <img
          class="mb-3 rounded shadow-lg img-fluid mb-md-0"
          src="../assets/img/4.png"
          alt=""
        />
      </a>
    </div>
    <div class="w-full ml-0 text-left md:w-1/3 md:ml-3">
      <div class="mb-3 text-2xl font-bold">
        UPC Collector(for Virgin Islands)
        <span
          class="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full"
          >Mobile</span
        >
      </div>
      <p class="mb-3">
        <span class="text-base font-bold">The web based PWA application</span>
        to collect upcs at the stores with the attached bluetooth barcode
        scanner or with the embeded barcode plugin and to upload them to the APL
        Management site.
      </p>

      <p class="mb-3">Target users : Nutritionist, Vendor Staff</p>

      <div
        class="flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2"
      >
        <a
          class="btn btn-info"
          target="_blank"
          href="https://wicapl.org/manuals/manual_UPC_Collector_MD_12312018.pdf"
          >Manual</a
        >
        <a
          class="btn btn-danger"
          target="_blank"
          href="https://wicapl.org/tutorial/index_collector.html
"
          >Video</a
        >
      </div>
    </div>
  </div>
  <!-- /.row -->

  <hr />

  <!-- Project Three -->
  <div class="flex flex-col mt-6 md:flex-row">
    <div class="w-full mb-6 mr-6 md:w-3/5 md:mb-0" align="center">
      <!-- carousel start -->
      <div
        id="carouselExampleIndicators_collect"
        class="carousel slide"
        data-ride="carousel"
      >
        <ol class="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators_collect"
            data-slide-to="0"
            class="active"
          ></li>
          <li
            data-target="#carouselExampleIndicators_collect"
            data-slide-to="1"
          ></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              class="w-full rounded shadow-lg d-block img-fluid"
              src="../assets/img/collect1.png"
              alt="First slide"
            />
          </div>
          <div class="carousel-item">
            <img
              class="w-full rounded shadow-lg d-block img-fluid"
              src="../assets/img/collect2.png"
              alt="Second slide"
            />
          </div>
          <div class="carousel-item">
            <img
              class="w-full rounded shadow-lg d-block img-fluid"
              src="../assets/img/collect3.png"
              alt="Second slide"
            />
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleIndicators_collect"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleIndicators_collect"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>

      <!-- carousel end -->

      <!-- <a href="#">
        <img
          class="mb-3 rounded shadow-lg img-fluid mb-md-0"
          src="../assets/img/3.png"
          alt=""
        />
      </a> -->
    </div>

    <div class="w-full ml-0 text-left md:w-1/3 md:ml-3">
      <div class="mb-3 text-2xl font-bold">UPC Collect(for Maryland)</div>
      <p class="mb-3">
        <span class="text-base font-bold">The web based PWA application</span>
        to collect upcs at the stores with the attached bluetooth barcode
        scanner or with the embeded barcode plugin and to upload them to the APL
        Management site.
      </p>

      <p class="mb-3">Target users : Nutritionist, Vendor Staff</p>
      <div
        class="flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2"
      >
        <a
          class="btn btn-primary"
          target="_blank"
          href="https://collect.wicapl.org
"
          >View Project</a
        >
        <a
          class="btn btn-info"
          target="_blank"
          href="https://collect.wicapl.org/storage/upc_collect_manual.pdf"
          >Manual</a
        >
        <!-- <a class="btn btn-danger" target="_blank">Video</a> -->
      </div>
    </div>
  </div>
  <!-- /.row -->

  <hr />

  <!-- Project Three -->
  <div class="flex flex-col mt-6 md:flex-row">
    <div class="w-full mb-6 mr-6 md:w-3/5 md:mb-0" align="center">
      <!-- carousel start -->
      <div
        id="carouselExampleIndicators_collect_vi"
        class="carousel slide"
        data-ride="carousel"
      >
        <ol class="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators_collect_vi"
            data-slide-to="0"
            class="active"
          ></li>
          <li
            data-target="#carouselExampleIndicators_collect_vi"
            data-slide-to="1"
          ></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              class="w-full rounded shadow-lg d-block img-fluid"
              src="../assets/img/collect1-1.png"
              alt="First slide"
            />
          </div>
          <div class="carousel-item">
            <img
              class="w-full rounded shadow-lg d-block img-fluid"
              src="../assets/img/collect2.png"
              alt="Second slide"
            />
          </div>
          <div class="carousel-item">
            <img
              class="w-full rounded shadow-lg d-block img-fluid"
              src="../assets/img/collect3.png"
              alt="Second slide"
            />
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleIndicators_collect_vi"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleIndicators_collect_vi"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>

      <!-- carousel end -->

      <!-- <a href="#">
        <img
          class="mb-3 rounded shadow-lg img-fluid mb-md-0"
          src="../assets/img/3.png"
          alt=""
        />
      </a> -->
    </div>

    <div class="w-full ml-0 text-left md:w-1/3 md:ml-3">
      <div class="mb-3 text-2xl font-bold">UPC Collect(for Virgin Islands)</div>
      <p class="mb-3">
        <span class="text-base font-bold">The web based PWA application</span>
        to collect upcs at the stores with the attached barcode scanner or with
        the embeded barcode scanner and to upload them to the APL Management
        site.
      </p>

      <p class="mb-3">Target users : Nutritionist, Vendor Staff</p>

      <div
        class="flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2"
      >
        <a
          class="btn btn-primary"
          target="_blank"
          href="https://vicollect.wicapl.org
"
          >View Project</a
        >
        <a
          class="btn btn-info"
          target="_blank"
          href="https://vicollect.wicapl.org/storage/upc_collect_manual.pdf"
          >Manual</a
        >
        <!-- <a class="btn btn-danger" target="_blank">Video</a> -->
      </div>
    </div>
  </div>
  <!-- /.row -->

  <hr />
  <!-- Project Four -->
  <div class="flex flex-col mt-6 md:flex-row">
    <div class="w-full mb-6 mr-6 md:w-3/5 md:mb-0" align="center">
      <a href="#">
        <img
          class="mb-3 rounded shadow-lg img-fluid mb-md-0"
          src="../assets/img/5.png"
          alt=""
          align="center"
        />
      </a>
    </div>
    <div class="w-full ml-0 text-left md:w-1/3 md:ml-3">
      <div class="mb-3 text-2xl font-bold">Vendor UPC Upload</div>
      <p class="mb-3">Key Features:</p>
      <ul class="mb-3 ml-3 list-disc list-outside">
        <li>Single upload / Multiple upcs upload with a file</li>
        <li>Food Category Search</li>
        <li>Tools: Includes a check digit checker, UPC-E/UPC-A converter</li>
      </ul>
      <p class="mb-3">
        Target users : Vendors, manufacturers, suppliers,participants
      </p>

      <div
        class="flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2"
      >
        <a
          class="btn btn-primary"
          target="_blank"
          href="https://up.wicapl.org
"
          >View Project</a
        >
        <a
          class="btn btn-info"
          target="_blank"
          href="https://up.wicapl.org/storage/upc_upload_manual.pdf
"
          >Manual</a
        >
        <a
          class="btn btn-danger"
          target="_blank"
          href="https://youtu.be/h3WiOUCeOKA?si=s_G7d7xwCKAGnmGA
"
          >Video</a
        >
      </div>
    </div>
  </div>
  <!-- /.row -->

  <hr />
  <!-- Project Four -->
  <div class="flex flex-col mt-6 md:flex-row">
    <div class="w-full mb-6 mr-6 md:w-3/5 md:mb-0" align="center">
      <a href="#">
        <img
          class="mb-3 rounded shadow-lg img-fluid mb-md-0"
          src="../assets/img/6.png"
          alt=""
        />
      </a>
    </div>
    <div class="w-full ml-0 text-left md:w-1/3 md:ml-3">
      <div class="mb-3 text-2xl font-bold">Product Submission</div>
      <p class="mb-3">
        The site has been developed for the following purpose(s).
      </p>
      <ul class="mb-3 ml-3 list-disc list-outside">
        <li>
          In order to update the contents of the Authorized Food List(normally
          it happens every other year), the state needs to collect new product
          information from the manufacturers and food suplliers. The application
          helps them to submit their new food product information to the state.
        </li>
        <li></li>
      </ul>
      <p class="mb-3">Target users : manufacturers and suppliers</p>
      <!-- <a
        class="btn btn-primary"
        target="_blank"
          href="https://wicapl.org/old_upc_submit_template"  

        >View Project</a
      > -->

      <div
        class="flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2"
      >
        <a
          class="btn btn-info"
          target="_blank"
          href="https://wicapl.org/old_upc_submit_template/manual_UPC_Submit_01292018.pdf 
"
          >Manual</a
        >
        <a
          class="btn btn-danger"
          target="_blank"
          href="https://wicapl.org/tutorial/index_manufacturer.html
"
          >Video</a
        >
      </div>
    </div>
  </div>
  <!-- /.row -->

  <hr />
  <!-- Project Four -->
  <div class="flex flex-col mt-6 md:flex-row">
    <div class="w-full mb-6 mr-6 md:w-3/5 md:mb-0" align="center">
      <a href="#">
        <img
          class="mb-3 rounded shadow-lg img-fluid mb-md-0"
          src="../assets/img/7.png"
          alt=""
          width="250px"
        />
      </a>
    </div>
    <div class="w-full ml-0 text-left md:w-1/3 md:ml-3">
      <div class="mb-3 text-2xl font-bold">MD APL Checker</div>
      <p class="mb-3">
        The site has been developed for the following purpose(s).
      </p>
      <ul class="mb-3 ml-3 list-disc list-outside">
        <li>
          Once the food product upc is submitted, the user can tell wheter it is
          a Maryland WIC approved item or not.
        </li>
        <li>Once the camera icon clicked, the upc can be scanned.</li>
      </ul>
      <p class="mb-3">Target users : participants, vendors</p>
      <a
        class="btn btn-primary"
        target="_blank"
        href="https://upc.wicapl.org/
"
        >View Project</a
      >
    </div>
  </div>
  <!-- /.row -->

  <hr />

  <!-- Project Four -->
  <div class="flex flex-col mt-6 md:flex-row">
    <div class="w-full mb-6 mr-6 md:w-3/5 md:mb-0" align="center">
      <a href="#">
        <img
          class="mb-3 rounded shadow-lg img-fluid mb-md-0"
          src="../assets/img/viupc_checker.png"
          alt=""
          width="250px"
        />
      </a>
    </div>
    <div class="w-full ml-0 text-left md:w-1/3 md:ml-3">
      <div class="mb-3 text-2xl font-bold">VI APL Checker</div>
      <p class="mb-3">
        The site has been developed for the following purpose(s).
      </p>
      <ul class="mb-3 ml-3 list-disc list-outside">
        <li>
          Once the food product upc is submitted, the user can tell wheter it is
          a Virgin Islands WIC approved item or not.
        </li>
        <li>Once the camera icon clicked, the upc can be scanned.</li>
      </ul>
      <p class="mb-3">Target users : participants, vendors</p>

      <div
        class="flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2"
      >
        <a
          class="btn btn-primary"
          target="_blank"
          href="https://viupc.wicapl.org/
"
          >View Project</a
        >
      </div>
    </div>
  </div>
  <!-- /.row -->

  <hr />

  <!-- Project Four -->
  <div class="flex flex-col mt-6 md:flex-row">
    <div class="w-full mb-6 mr-6 md:w-3/5 md:mb-0" align="center">
      <a href="#">
        <img
          class="mb-3 rounded shadow-lg img-fluid mb-md-0"
          src="../assets/img/md_apl_checker_app.png"
          alt=""
          width="250px"
        />
      </a>
    </div>

    <div class="w-full ml-0 text-left md:w-1/3 md:ml-3">
      <div class="mb-3 text-2xl font-bold">
        MD APL Check App(for Android)
        <span
          class="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full"
          >Mobile</span
        >
      </div>
      <p class="mb-3">
        The Android phone app to check an upc whether it is a Maryland WIC
        approved item or not
      </p>

      <p class="mb-3">Target users : participants, vendors</p>

      <div
        class="flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2"
      >
        <!--	  <a class="btn btn-warning" target='_blank' href="http://wicapl.org/upc_app/upc_checker.apk">download</a>-->
        <a
          class="btn btn-warning"
          target="_blank"
          href="https://play.google.com/store/apps/details?id=org.wicapl.siwon2024"
          >download</a
        >

        <a
          class="btn btn-danger"
          target="_blank"
          href="https://www.youtube.com/watch?v=IvfvxT6XTso"
          >Video</a
        >
      </div>
    </div>
  </div>
  <!-- /.row -->

  <hr />
  <!-- Project Four -->
  <div class="flex flex-col mt-6 md:flex-row">
    <div class="w-full mb-6 mr-6 md:w-3/5 md:mb-0" align="center">
      <a href="#">
        <img
          class="mb-3 rounded shadow-lg img-fluid mb-md-0"
          src="../assets/img/md_apl_checker_app.png"
          alt=""
          width="250px"
        />
      </a>
    </div>
    <div class="w-full ml-0 text-left md:w-1/3 md:ml-3">
      <div class="mb-3 text-2xl font-bold">
        MD APL Check App(for iOS)
        <span
          class="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full"
          >Mobile</span
        >
      </div>
      <p class="mb-3">
        The iPhone app to check an upc whether it is a Maryland WIC approved
        item or not
      </p>

      <p class="mb-3">Target users : participants, vendors</p>
      <div
        class="flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2"
      >
        <a
          class="btn btn-warning"
          target="_blank"
          href="https://itunes.apple.com/us/app/md-wic-apl-checker/id1455361859?mt=8"
          >download</a
        >
        <a
          class="btn btn-danger"
          target="_blank"
          href="https://www.youtube.com/watch?v=IvfvxT6XTso"
          >Video</a
        >
      </div>
    </div>
  </div>
  <!-- /.row -->

  <hr />
  <!-- Project 9 -->
  <div class="flex flex-col mt-6 md:flex-row">
    <div class="w-full mb-6 mr-6 md:w-3/5 md:mb-0" align="center">
      <a href="#">
        <img
          class="mb-3 rounded shadow-lg img-fluid mb-md-0"
          src="../assets/img/9.png"
          alt=""
        />
      </a>
    </div>
    <div class="w-full ml-0 text-left md:w-1/3 md:ml-3">
      <div class="mb-3 text-2xl font-bold">qWICk</div>
      <p class="mb-3">
        The site has been developed for the following purpose(s).
      </p>
      <ul class="mb-3 ml-3 list-disc list-outside">
        <li>
          Provide online Vehicle reservation system, useful links and the org
          chart
        </li>
      </ul>

      <p class="mb-3">Target users : State WIC Staff</p>
      <a class="btn btn-primary" target="_blank">Project Archived</a>
    </div>
  </div>
  <!-- /.row -->

  <hr />
  <!-- Project 10 -->
  <div class="flex flex-col mt-6 md:flex-row">
    <div class="w-full mb-6 mr-6 md:w-3/5 md:mb-0" align="center">
      <a href="#">
        <img
          class="mb-3 rounded shadow-lg img-fluid mb-md-0"
          src="../assets/img/10.png"
          alt=""
        />
      </a>
    </div>
    <div class="w-full ml-0 text-left md:w-1/3 md:ml-3">
      <div class="mb-3 text-2xl font-bold">
        Local Agency Breastfeeding Support Role Management
      </div>
      <p class="mb-3">
        The site has been developed for the following purpose(s).
      </p>
      <ul class="mb-3 ml-3 list-disc list-outside">
        <li>
          Assign the breastfeeding roles to the staff of the local agencies
        </li>
      </ul>

      <p class="mb-3">
        Target users : Breastfeeding coordinators of WIC Local agencies
      </p>

      <div
        class="flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2"
      >
        <a class="btn btn-primary" target="_blank">Project Archived</a>
        <a
          class="btn btn-info"
          target="_blank"
          href="https://joonspa.com/manuals/bf_roles_20180713.pdf
"
          >Manual</a
        >
        <a
          class="btn btn-danger"
          target="_blank"
          href="https://youtu.be/81kce7Fv4wA?feature=shared
"
          >Video</a
        >
      </div>
    </div>
  </div>
  <!-- /.row -->

  <hr />

  <!-- Project 10 -->
  <div class="flex flex-col mt-6 md:flex-row">
    <div class="w-full mb-6 mr-6 md:w-3/5 md:mb-0" align="center">
      <a href="#">
        <img
          class="mb-3 rounded shadow-lg img-fluid mb-md-0"
          src="../assets/img/tutorial_channel.png"
          alt=""
        />
      </a>
    </div>
    <div class="w-full ml-0 text-left md:w-1/3 md:ml-3">
      <div class="mb-3 text-2xl font-bold">Tutorial Channel</div>
      <p class="mb-3">
        The site contains the tutorial videos of the all the web and mobile
        projects.
      </p>

      <p class="mb-3">
        Target users : All the users of the apps and the programs
      </p>
      <div
        class="flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2"
      >
        <a
          class="btn btn-primary"
          target="_blank"
          href="https://wicapl.org/tutorial/index.php"
          >View Project</a
        >
      </div>
    </div>
  </div>
  <!-- /.row -->
  <hr />

  <!-- Project 10 -->
  <div class="flex flex-col mt-6 md:flex-row">
    <div class="w-full mb-6 mr-6 md:w-3/5 md:mb-0" align="center">
      <!-- carousel start -->
      <div
        id="carouselExampleIndicators_audit"
        class="carousel slide"
        data-ride="carousel"
      >
        <ol class="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators_audit"
            data-slide-to="0"
            class="active"
          ></li>
          <li
            data-target="#carouselExampleIndicators_audit"
            data-slide-to="1"
          ></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              class="w-full rounded shadow-lg d-block img-fluid"
              src="../assets/img/audit_1.png"
              alt="First slide"
            />
          </div>
          <div class="carousel-item">
            <img
              class="w-full rounded shadow-lg d-block img-fluid"
              src="../assets/img/vendor_audit_img.png"
              alt="Second slide"
            />
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleIndicators_audit"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleIndicators_audit"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>

      <!-- carousel end -->

      <!-- <a href="#">
        <img
          class="mb-3 rounded shadow-lg img-fluid mb-md-0"
          src="../assets/img/vendor_audit_img.png"
          alt=""
        />
      </a> -->
    </div>

    <div class="w-full ml-0 text-left md:w-1/3 md:ml-3">
      <div class="mb-3 text-2xl font-bold">
        Inventory Audit App
        <span
          class="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full"
          >Mobile</span
        >
      </div>
      <p class="mb-3">
        <b>The window based tablet app</b> is used to collect and count
        inventory audit items on site. The store owner's(or manager's) signiture
        is required to complete the form. The form is being generated and will
        be transfered to the web-based Inventory Audit Management Site.
      </p>

      <p class="mb-3">Target users : Vendor Unit</p>

      <div
        class="flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2"
      >
        <a
          class="btn btn-info"
          target="_blank"
          href="https://joonspa.com/manuals/manual_inventory_audit.pdf"
          >Manual</a
        >
        <a
          class="btn btn-danger"
          target="_blank"
          href="https://www.youtube.com/watch?v=ol34PBtj2o8"
          >Video</a
        >
      </div>
    </div>
  </div>
  <!-- /.row -->
  <hr />

  <!-- Project 10 -->
  <div class="flex flex-col mt-6 md:flex-row">
    <div class="w-full mb-6 mr-6 md:w-3/5 md:mb-0" align="center">
      <a href="#">
        <img
          class="mb-3 rounded shadow-lg img-fluid mb-md-0"
          src="../assets/img/inventory_audit_management.png"
          alt=""
        />
      </a>
    </div>
    <div class="w-full ml-0 text-left md:w-1/3 md:ml-3">
      <div class="mb-3 text-2xl font-bold">Inventory Audit Management</div>
      <p class="mb-3">you can manage all the inventory audit procedures.</p>

      <p class="mb-3">Target users : Vendor Unit</p>
      <div
        class="flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2"
      >
        <a class="btn btn-primary" target="_blank">Project Archived</a>
      </div>
    </div>
  </div>
  <!-- /.row -->
  <hr />
  <!-- Project 10 -->
  <div class="flex flex-col mt-6 md:flex-row">
    <div class="w-full mb-6 mr-6 md:w-3/5 md:mb-0" align="center">
      <a href="#">
        <img
          class="mb-3 rounded shadow-lg img-fluid mb-md-0"
          src="../assets/img/data_analysis.png"
          alt=""
        />
      </a>
    </div>
    <div class="w-full ml-0 text-left md:w-1/3 md:ml-3">
      <div class="mb-3 text-2xl font-bold">Data Analysis</div>
      <p class="mb-3">
        All the signed inventory audit forms are transfered to the site and
        managed by the staff. The site generates in-depth reports of APL and
        transaction data.
      </p>

      <p class="mb-3">Target users : WIC Staff</p>
      <div
        class="flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2"
      >
        <a class="btn btn-primary" target="_blank">Project Archived</a>
        <a
          class="btn btn-info"
          target="_blank"
          href="http://joonspa.com/manuals/manual_Data_Analysis_20200211.pdf"
          >Manual</a
        >
        <a
          class="btn btn-danger"
          target="_blank"
          href="https://www.youtube.com/watch?v=bTCTqbUcFWk&t=40s"
          >Video</a
        >
      </div>
    </div>
  </div>
  <!-- /.row -->
  <hr />

  <!-- Project 10 -->
  <div class="flex flex-col mt-6 md:flex-row">
    <div class="w-full mb-6 mr-6 md:w-3/5 md:mb-0" align="center">
      <!-- carousel start -->
      <div
        id="carouselExampleIndicators_nupc"
        class="carousel slide"
        data-ride="carousel"
      >
        <ol class="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators_nupc"
            data-slide-to="0"
            class="active"
          ></li>
          <li
            data-target="#carouselExampleIndicators_nupc"
            data-slide-to="1"
          ></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              class="w-full rounded shadow-lg d-block img-fluid"
              src="../assets/img/nupc-1.png"
              alt="First slide"
            />
          </div>
          <div class="carousel-item">
            <img
              class="w-full rounded shadow-lg d-block img-fluid"
              src="../assets/img/nupc-2.png"
              alt="Second slide"
            />
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleIndicators_nupc"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleIndicators_nupc"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>

      <!-- carousel end -->
    </div>
    <!-- 
      <a href="#">
        <img
          class="mb-3 rounded shadow-lg img-fluid mb-md-0"
          src="../assets/img/dexcom1.png"
          alt=""
        />
      </a>
     -->

    <div class="w-full ml-0 text-left md:w-1/3 md:ml-3">
      <div class="mb-3 text-2xl font-bold">Nationwide APL Checker</div>
      <p class="mb-3">
        WIC APL Checker is the PWA on nationwide WIC APL(Currently, as of
        5/1/2024, 23 states' APLs have been collected and used as the search
        data source ). The user can check whether the food item is WIC approved
        or not. The item's upc can be typed into the text input field or scanned
        by the camera byclicking the camera button.
      </p>

      <p class="mb-3">Target users : Public use</p>
      <div
        class="flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2"
      >
        <a
          class="btn btn-primary"
          target="_blank"
          href="http://nupc.joonspa.com"
          >View Project</a
        >

        <a
          class="btn btn-danger"
          target="_blank"
          href="https://github.com/siwonlee/apl_all"
          >github</a
        >
      </div>
    </div>
  </div>
  <!-- /.row -->
  <hr />
  <div class="flex flex-col mt-6 md:flex-row">
    <div class="w-full mb-6 mr-6 md:w-3/5 md:mb-0" align="center">
      <!-- carousel start -->
      <div
        id="carouselExampleIndicators_dexcom"
        class="carousel slide"
        data-ride="carousel"
      >
        <ol class="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators_dexcom"
            data-slide-to="0"
            class="active"
          ></li>
          <li
            data-target="#carouselExampleIndicators_dexcom"
            data-slide-to="1"
          ></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              class="w-full rounded shadow-lg d-block img-fluid"
              src="../assets/img/dexcom1.png"
              alt="First slide"
            />
          </div>
          <div class="carousel-item">
            <img
              class="w-full rounded shadow-lg d-block img-fluid"
              src="../assets/img/dexcom2.png"
              alt="Second slide"
            />
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleIndicators_dexcom"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleIndicators_dexcom"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>

      <!-- carousel end -->
    </div>
    <!-- 
      <a href="#">
        <img
          class="mb-3 rounded shadow-lg img-fluid mb-md-0"
          src="../assets/img/dexcom1.png"
          alt=""
        />
      </a>
     -->

    <div class="w-full ml-0 text-left md:w-1/3 md:ml-3">
      <div class="mb-3 text-2xl font-bold">CGM(Dexcom) realtime display</div>
      <p class="mb-3">
        Realtime glucose level display on the web for the Dexcom user.
      </p>

      <p class="mb-3">Target users : Personal use</p>
      <div
        class="flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2"
      >
        <a
          class="btn btn-primary"
          target="_blank"
          href="http://joonspa.com/dexcom"
          >View Project</a
        >

      <a class="btn btn-danger" target="_blank" href="https://github.com/siwonlee/dexcom_web">github</a>
    </div>
  </div>
  <!-- /.row -->
</template>

<style scoped>
  .btn {
    @apply py-2 px-4 rounded mr-1;
  }
  .btn-primary {
    @apply bg-blue-500 text-white;
  }
  .btn-primary:hover {
    @apply bg-blue-700;
  }

  .btn-info {
    @apply bg-green-500 text-white;
  }
  .btn-info:hover {
    @apply bg-green-700;
  }

  .btn-danger {
    @apply bg-red-500 text-white;
  }
  .btn-danger:hover {
    @apply bg-red-700;
  }

  .btn-warning {
    @apply bg-yellow-500 text-white;
  }
  .btn-warning:hover {
    @apply bg-yellow-700;
  }
</style>

<script>
  export default {
    name: "Portfolio",
  };

  $(".carouselExampleIndicators").carousel();
  $(".carouselExampleIndicators_dexcom").carousel();
  $(".carouselExampleIndicators_nupc").carousel();
  $(".carouselExampleIndicators_audit").carousel();
  $(".carouselExampleIndicators_collect").carousel();
  $(".carouselExampleIndicators_collect_vi").carousel();
</script>
