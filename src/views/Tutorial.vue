<template>
  <span class="pt-10 mt-10 mb-6 text-3xl font-bold text-center">
    Project Tutorial Videos
  </span>

  <div
    class="px-4 py-3 mt-5 mb-5 text-teal-900 bg-teal-100 border-t-4 border-teal-500 rounded-b shadow-md"
  >
    <h1 class="text-xl font-bold">
      APL Management
      <small> </small>
    </h1>
  </div>

  <div class="grid grid-cols-3 gap-2 mx-auto">
    <div
      class="w-full max-w-sm overflow-hidden rounded shadow-lg"
      v-for="v in data"
      :key="v.id"
    >
      <div v-show="v.pid == 1">
        <a :href="v.youtube" target="_blank">
          <img class="" :src="'img/' + v.img" />
        </a>
        <div class="px-6 py-4">
          <h3 class="mb-2 text-xl font-bold">
            <a :href="v.youtube" target="_blank">{{ v.title }}</a>
          </h3>
          <p class="text-base text-gray-700">{{ v.description }}</p>
        </div>

        <div class="px-6 pt-4 pb-2">
          <small class="mb-2 mr-2 text-sm text-gray-700"
            >Uploaded on {{ v.uploaddate }}
          </small>
        </div>
      </div>
    </div>
  </div>

  <div
    class="px-4 py-3 mt-5 mb-5 text-teal-900 bg-teal-100 border-t-4 border-teal-500 rounded-b shadow-md"
  >
    <h1 class="text-xl font-bold">
      UPC Collector
      <small> </small>
    </h1>
  </div>

  <div class="grid grid-cols-3 gap-2 mx-auto">
    <div
      class="w-full max-w-sm overflow-hidden rounded shadow-lg"
      v-for="v in data2"
      :key="v.id"
    >
      <div v-show="v.pid == 2">
        <a :href="v.youtube" target="_blank">
          <img class="" :src="'img/' + v.img" />
        </a>
        <div class="px-6 py-4">
          <h3 class="mb-2 text-xl font-bold">
            <a :href="v.youtube" target="_blank">{{ v.title }}</a>
          </h3>
          <p class="text-base text-gray-700">{{ v.description }}</p>
        </div>

        <div class="px-6 pt-4 pb-2">
          <small class="mb-2 mr-2 text-sm text-gray-700"
            >Uploaded on {{ v.uploaddate }}
          </small>
        </div>
      </div>
    </div>
  </div>

  <div
    class="px-4 py-3 mt-5 mb-5 text-teal-900 bg-teal-100 border-t-4 border-teal-500 rounded-b shadow-md"
  >
    <h1 class="text-xl font-bold">
      UPC Upload
      <small> </small>
    </h1>
  </div>

  <div class="grid grid-cols-3 gap-2 mx-auto">
    <div
      class="w-full max-w-sm overflow-hidden rounded shadow-lg"
      v-for="v in data3"
      :key="v.id"
    >
      <div v-show="v.pid == 3">
        <a :href="v.youtube" target="_blank">
          <img class="" :src="'img/' + v.img" />
        </a>
        <div class="px-6 py-4">
          <h3 class="mb-2 text-xl font-bold">
            <a :href="v.youtube" target="_blank">{{ v.title }}</a>
          </h3>
          <p class="text-base text-gray-700">{{ v.description }}</p>
        </div>

        <div class="px-6 pt-4 pb-2">
          <small class="mb-2 mr-2 text-sm text-gray-700"
            >Uploaded on {{ v.uploaddate }}
          </small>
        </div>
      </div>
    </div>
  </div>
  <div
    class="px-4 py-3 mt-5 mb-5 text-teal-900 bg-teal-100 border-t-4 border-teal-500 rounded-b shadow-md"
  >
    <h1 class="text-xl font-bold">
      Other projects
      <small> </small>
    </h1>
  </div>
  <div class="grid grid-cols-3 gap-2 mx-auto">
    <div
      class="w-full max-w-sm overflow-hidden rounded shadow-lg"
      v-for="v in data4"
      :key="v.id"
    >
      <a :href="v.youtube" target="_blank">
        <img class="" :src="'img/' + v.img" />
      </a>
      <div class="px-6 py-4">
        <h3 class="mb-2 text-xl font-bold">
          <a :href="v.youtube" target="_blank">{{ v.title }}</a>
        </h3>
        <p class="text-base text-gray-700">{{ v.description }}</p>
      </div>

      <div class="px-6 pt-4 pb-2">
        <small class="mb-2 mr-2 text-sm text-gray-700"
          >Uploaded on {{ v.uploaddate }}
        </small>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Tutorial",
    data() {
      return {
        test: "test1",
        data: [
          {
            id: "1",
            pid: "1",
            project: "APL Management",
            youtube: "https://youtu.be/ZB2mhe3YCKE",
            img: "verification.png",
            title: "How to Use",
            description:
              "It explains how to use UPC verification site in general.",
            uploaddate: "04/19/2016",
          },
          {
            id: "2",
            pid: "1",
            project: "APL Management",
            youtube: "https://youtu.be/OAujT90xqfA",
            img: "edit_button.png",
            title: "Drag & Drop of the edit area",
            description:
              "It explains how to use drag and drop feature of the editing window.",
            uploaddate: "04/27/2016",
          },
          {
            id: "3",
            pid: "1",
            project: "APL Management",
            youtube: "https://youtu.be/MMfJjy8RlZw",
            img: "new_features.png",
            title: "Add UPC / Vendor Uploads",
            description:
              "It explains how to use add upc and vendor uploads features.",
            uploaddate: "11/04/2016",
          },
          {
            id: "4",
            pid: "1",
            project: "APL Management",
            youtube: "https://youtu.be/3s-3kaNBciI",
            img: "incompletedata.png",
            title: "Incomplete DATA",
            description:
              "It explains how to correct the errors of the upc data.",
            uploaddate: "01/19/2017",
          },
          {
            id: "5",
            pid: "1",
            project: "APL Management",
            youtube: "https://youtu.be/jeV4nrLELY0",
            img: "apl_compare_youtube.png",
            title: "APL Comparison",
            description: "It explains how to use the APL Comparison page.",
            uploaddate: "03/01/2018",
          },
          {
            id: "6",
            pid: "1",
            project: "APL Management",
            youtube: "https://youtu.be/Y5vI8WCjAzE",
            img: "apl_future_deny_youtube.png",
            title: "Future Deny",
            description: "It explains how to deny upcs in future.",
            uploaddate: "08/13/2018",
          },
          {
            id: "7",
            pid: "1",
            project: "APL Management",
            youtube: "https://youtu.be/3VOw3hzTh5o",
            img: "upc_collector_file.png",
            title: "Store collections",
            description:
              "It explains how to process the store collected upcs with the UPC Collector.",
            uploaddate: "12/31/2018",
          },
        ],

        data2: [
          {
            id: "9",
            pid: "2",
            project: "UPC Collector",
            youtube: "https://youtu.be/yNs67qeCHW8",
            img: "collector.png",
            title: "How to Use(software)",
            description: "It explains how to use UPC Collector in general.",
            uploaddate: "04/07/2016",
          },
          {
            id: "10",
            pid: "2",
            project: "UPC Collector",
            youtube: "https://youtu.be/ZjkXpYSzwXM",
            img: "component.png",
            title: "Components(hardware)",
            description: "It explains what UPC Collector componets are.",
            uploaddate: "04/22/2016",
          },
          {
            id: "11",
            pid: "2",
            project: "UPC Collector",
            youtube: "https://youtu.be/JqILNo1AnLE",
            img: "update.png",
            title: "How to Update",
            description:
              "It explains how to update UPC Collector with update files.",
            uploaddate: "04/05/2016",
          },
          {
            id: "12",
            pid: "2",
            project: "UPC Collector",
            youtube: "https://youtu.be/3VOw3hzTh5o",
            img: "upc_collector_file.png",
            title: "How to save & upload",
            description:
              "It explains how to save you collections into a file and upload it online for the main server update.",
            uploaddate: "12/31/2018",
          },
          {
            id: "13",
            pid: "2",
            project: "UPC Collector",
            youtube: "https://youtu.be/CneWaTwMCw8",
            img: "bluetooth.png",
            title: "How to connect the scanner with Bluetooth",
            description:
              "It explains how to connect the scanner with Bluetooth.",
            uploaddate: "04/26/2016",
          },
        ],

        data3: [
          {
            id: "14",
            pid: "3",
            project: "UPC Upload",
            youtube: "https://youtu.be/h3WiOUCeOKA",
            img: "upc_upload.png",
            title: "How to upload your new upc to the APL",
            description: "It explains how to use the Vendor UPC Uploads",
            uploaddate: "10/07/2016",
          },
          {
            id: "15",
            pid: "3",
            project: "UPC Upload",
            youtube: "https://youtu.be/vSQQXwPzJ3I",
            img: "upc_upload_new.png",
            title: "New features of the Vendor Uploads",
            description: "It explains how to use the new features of the site.",
            uploaddate: "10/07/2016",
          },
        ],

        data4: [
          {
            id: "16",
            pid: "4",
            project: "Product Submission",
            youtube: "https://youtu.be/8uiyJHUgHVI",
            img: "submission.png",
            title: "How to use",
            description: "It explains how to use the Product submission site.",
            uploaddate: "01/26/2018",
          },
          {
            id: "17",
            pid: "5",
            project: "Assign Breastfeeding Role",
            youtube: "https://youtu.be/81kce7Fv4wA",
            img: "bf_role.png",
            title: "How to assign roles",
            description: "It explains how to use the BF Role site.",
            uploaddate: "07/12/2018",
          },
          {
            id: "18",
            pid: "6",
            project: "Inventory App",
            youtube: "https://youtu.be/ol34PBtj2o8",
            img: "inventoryapp.png",
            title: "Inventory Audit App",
            description: "It explains how to use the Vendor Inventory App.",
            uploaddate: "08/29/2019",
          },
          {
            id: "8",
            pid: "7",
            project: "MD APL Checker",
            youtube: "https://youtu.be/IvfvxT6XTso",
            img: "aplchecker.png",
            title: "APL Checker",
            description: "It explains how to use the phone app of APL Checker.",
            uploaddate: "03/07/2019",
          },
          {
            id: "19",
            pid: "8",
            project: "Data Analysis",
            youtube: "https://youtu.be/bTCTqbUcFWk",
            img: "dataanalysis.png",
            title: "Data Analysis",
            description: "It explains how to use the Data Analysis site.",
            uploaddate: "02/14/2020",
          },
        ],
      };
    },
  };
</script>
