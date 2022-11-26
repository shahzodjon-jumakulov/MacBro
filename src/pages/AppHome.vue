<template>
  <app-hero></app-hero>
  <products-carousel></products-carousel>
  <hero-banner
    source="https://cdn.macbro.uz/macbro/8edef17b-e87b-4ac4-94e6-4bb822b94817"
  ></hero-banner>
  <the-section :section="sections.apple">Apple</the-section>
  <the-section :section="sections.akustika">Akustika</the-section>
  <hero-banner
    source="https://cdn.macbro.uz/macbro/1bfffc3a-bc1d-4336-a80a-efc2bd3fee73"
  ></hero-banner>
  <the-section :section="sections.aksessuarlar">Aksessuarlar</the-section>
  <the-section :section="sections.smartfonlar">Smartfonlar</the-section>
  <hero-banner
    source="https://cdn.macbro.uz/macbro/41506fdb-2979-4d12-bdb9-9bde4dc1e055"
  ></hero-banner>
  <the-section :section="sections.samsung">Samsung</the-section>
  <hero-banner
    source="https://cdn.macbro.uz/macbro/ddcc0457-3c72-47bf-8e23-64f1f0fc304d"
  ></hero-banner>
  <the-section :section="sections.xiaomi">Xiaomi</the-section>
  <the-section :section="sections.button">Tugmachali telefonlar</the-section>
  <the-section :section="sections.used">Ishlatilgan gadjetlar</the-section>
</template>

<script>
import AppHero from "../components/AppHero.vue";
import ProductsCarousel from "../components/ProductsCarousel.vue";
import HeroBanner from "../components/HeroBanner.vue";
import TheSection from "../components/TheSection.vue";

export default {
  components: {
    AppHero,
    ProductsCarousel,
    HeroBanner,
    TheSection,
  },
  data() {
    return {
      sections: {
        apple: [
          {
            name: "Mac",
            src: "https://cdn.macbro.uz/macbro/38f5c97f-48a9-4582-b508-df528b6faf4d",
          },
          {
            name: "iPhone",
            src: "https://cdn.macbro.uz/macbro/74f8a955-bba9-400c-92b2-4b30d01761e0",
          },
          {
            name: "iPad",
            src: "https://cdn.macbro.uz/macbro/3ae993dd-8c51-40e1-800e-b9b24bea91f8",
          },
          {
            name: "Watch",
            src: "https://cdn.macbro.uz/macbro/16737fa4-faf4-49fc-a74d-b117e036a86c",
          },
          {
            name: "AirPods",
            src: "https://cdn.macbro.uz/macbro/ac271b93-ed5a-449e-bf2a-2fb7350068ee",
          },
        ],
        akustika: [
          {
            name: "HomePod",
            src: "https://cdn.macbro.uz/macbro/5812a727-4861-4435-91f5-e6d5c2591086",
          },
          {
            name: "Beats",
            src: "https://cdn.macbro.uz/macbro/0bf07409-34f8-49fa-b0d4-0420a8d9dde9",
          },
          {
            name: "JBL",
            src: "https://cdn.macbro.uz/macbro/634f4ed4-7842-4fd5-9815-7afa2588680a",
          },
          {
            name: "Harmon Kardon",
            src: "https://cdn.macbro.uz/macbro/b4851fae-aaf4-4935-a715-9d717c3fb135",
          },
          {
            name: "Marshall",
            src: "https://cdn.macbro.uz/macbro/e4c853fe-e82c-41dc-900f-ef940a81c044",
          },
          {
            name: "Nillkin",
            src: "https://cdn.macbro.uz/macbro/6d82d572-fa12-4db5-853a-115b916537f5",
          },
          {
            name: "Yandex",
            src: "https://cdn.macbro.uz/macbro/1f693a8a-48d6-4d6a-b78a-9ee9f0b9f15d",
          },
          {
            name: "2E",
            src: "https://cdn.macbro.uz/macbro/65b1fac2-06c0-4f04-86cd-b669c232b440",
          },
        ],
        aksessuarlar: [
          {
            name: "G'ilof va himoya oynalari",
            src: "https://cdn.macbro.uz/macbro/a45d049f-57d7-4bff-8948-1d5d0d41a386",
          },
          {
            name: "Zaryadlovchi qurilmalar",
            src: "https://cdn.macbro.uz/macbro/2f6a6ba0-1bcc-470a-9983-9f32c6f87b7a",
          },
          {
            name: "Boshqa aksessuarlar",
            src: "https://cdn.macbro.uz/macbro/6b1ef09a-d67b-4072-922d-f7d1e1a8ae0d",
          },
          {
            name: "Apple aksessuarlari",
            src: "https://cdn.macbro.uz/macbro/c90e40ab-c68f-4ccc-89ea-c7c0bed9fe60",
          },
          {
            name: "Noutbuklar uchun sumkalar",
            src: "https://cdn.macbro.uz/macbro/bdfc7746-6549-4e55-b6b8-7efdaa3aac96",
          },
          {
            name: "Watch tasmalar",
            src: "https://cdn.macbro.uz/macbro/eececf7d-5811-4dc4-97ee-1f4a46c269d6",
          },
        ],
        smartfonlar: [
          {
            name: "MI",
            src: "https://cdn.macbro.uz/macbro/acef728d-2cd5-4f4a-bfc9-fc2006c99963",
          },
          {
            name: "Google Pixel",
            src: "https://cdn.macbro.uz/macbro/9e5b6ad5-4b79-47a2-97d4-2add4e629d7e",
          },
        ],
        samsung: [
          {
            name: "Galaxy Series Note",
            src: "https://cdn.macbro.uz/macbro/4b06f2c8-140e-4a3c-a526-c623f00c7ea3",
          },
          {
            name: "Galaxy Series S",
            src: "https://cdn.macbro.uz/macbro/610ee12c-ce8c-4ca2-a102-234bebab98f5",
          },
          {
            name: "Galaxy Series A",
            src: "https://cdn.macbro.uz/macbro/009811b0-d2aa-4233-96b8-a02127faa544",
          },
          {
            name: "Galaxy Series Z",
            src: "https://cdn.macbro.uz/macbro/1feec1cd-71f4-434f-9fc8-2b1d4a485cb8",
          },
          {
            name: "Galaxy Series M",
            src: "https://cdn.macbro.uz/macbro/56f7a258-dc99-418b-a96d-c4b76071e364",
          },
          {
            name: "Galaxy Tab",
            src: "https://cdn.macbro.uz/macbro/d33a56a9-0804-4c5e-b02b-310f0f85bb12",
          },
          {
            name: "Galaxy Buds",
            src: "https://cdn.macbro.uz/macbro/50a9410d-e3d0-405a-92bc-8079ae7b23e2",
          },
          {
            name: "Galaxy Watch",
            src: "https://cdn.macbro.uz/macbro/03149a6f-49ac-4ad0-918d-8c3e4cb70f21",
          },
          {
            name: "Gusto",
            src: "https://cdn.macbro.uz/macbro/84ab5b47-0507-4c60-9079-74e2913759de",
          },
          {
            name: "Others",
            src: "https://cdn.macbro.uz/macbro/38b7c3e9-c836-41df-9665-a9fd5f81619e",
          },
        ],
        xiaomi: [
          {
            name: "Redmi Series",
            src: "https://cdn.macbro.uz/macbro/a1781283-c2ef-4e95-b410-d45867e4119f",
          },
          {
            name: "Poco",
            src: "https://cdn.macbro.uz/macbro/0da9583a-9e0d-466e-930b-da2be5f2b516",
          },
          {
            name: "Redmi Note Series",
            src: "https://cdn.macbro.uz/macbro/4d6b8f70-79b4-4dd9-a306-e1659cfd0a02",
          },
          {
            name: "Watch",
            src: "https://cdn.macbro.uz/macbro/7e33d1c4-bae9-43fa-b1a3-172460f1d145",
          },
          {
            name: "EarBuds",
            src: "https://cdn.macbro.uz/macbro/51ef914c-2680-45e4-9285-394703c1e57f",
          },
          {
            name: "Others",
            src: "https://cdn.macbro.uz/macbro/0449eb75-b0e2-46a3-9b9c-fdc3668dbd92",
          },
        ],
        button: [
          {
            name: "Tugmachali telefonlar",
            src: "https://cdn.macbro.uz/macbro/3f4862cf-4a6f-47d0-bc13-50ab90bf6908",
          },
        ],
        used: [
          {
            name: "Ishlatilgan gadjetlar",
            src: "https://cdn.macbro.uz/macbro/a14e00df-3404-4544-a5a6-4bec3cae3b38",
          },
        ],
      },
    };
  },
};
</script>