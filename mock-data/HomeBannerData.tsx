interface slidersType {
  id: number;
  path: string;
  link: string;
  target: 0 | 1;
  title: string;
}

export interface HomeStepBuyDataType {
  id: number;
  title: string;
  image: string;
}

export interface HomeBannerData {
  id: number;
  banner: string;
  link: string;
  text: string;
  target: boolean;
}

export interface HomeCategoryData {
  id: number;
  images: string;
  link: string;
  alt: string;
  text: string;
}

export interface homeBlogDataType {
  title: string;
  image: {
    path: string;
    caption: string;
  };
  slug: string;
  excerpt: string;
  created_by: string;
  created_at: string;
  seo: {
    title: string;
    description: string;
    keyword: string | null;
  };
}

export interface advantageType {
  id: number;
  img: string;
  title: string;
}

export interface consultantType {
  id: number;
  image: string;
  name: string;
  job: string;
  phoneNumber: string;
  mobileNumber: string;
}

interface BannerDataType {
  homeBlog: homeBlogDataType[];
  sliders: slidersType[];
  advantage: advantageType[];
  consultant: consultantType[];
  HomeStepBuy: HomeStepBuyDataType[];
  homeBanner: HomeBannerData[];
  homeCategory: HomeCategoryData[];
}

export const BannerData: BannerDataType = {
  sliders: [
    {
      id: 1,
      path: "/assets/images/home/home-banner.jpg",
      link: "/amazon",
      target: 0,
      title: "",
    },
    {
      id: 2,
      path: "/assets/images/home/home-banner.jpg",
      link: "/amazon",
      target: 0,
      title: "",
    },
    {
      id: 3,
      path: "/assets/images/home/home-banner.jpg",
      link: "/amazon",
      target: 0,
      title: "",
    },
  ],
  advantage: [
    {
      id: 1,
      img: "/assets/images/home/adv1.png",
      title: "خرید بصورت آنلاین و حضوری",
    },
    {
      id: 2,
      img: "/assets/images/home/adv2.png",
      title: "مشاوره فنی توسط مهندسین مجرب",
    },
    {
      id: 3,
      img: "/assets/images/home/adv3.png",
      title: "قیمت به صرفه",
    },
    {
      id: 4,
      img: "/assets/images/home/adv4.png",
      title: "صرفه جویی در زمان",
    },
  ],
  consultant: [
    {
      id: 1,
      image: "/assets/images/home/moshaver1.jpg",
      name: "مریم محمودی",
      job: "کارشناس فروش",
      phoneNumber: "02188885720",
      mobileNumber: "09199190802",
    },
    // {
    //   id: 2,
    //   image: "/assets/images/home/moshaver-ex.jpg",
    //   name: "رضا محمدی",
    //   job: "کارشناس فروش میلگرد",
    //   phoneNumber: "02188885720",
    //   mobileNumber: "09121212121",
    // },
    // {
    //   id: 3,
    //   image: "/assets/images/home/moshaver-ex.jpg",
    //   name: "رضا محمدی",
    //   job: "کارشناس فروش میلگرد",
    //   phoneNumber: "02188885720",
    //   mobileNumber: "09121212121",
    // },
    // {
    //   id: 4,
    //   image: "/assets/images/home/moshaver-ex.jpg",
    //   name: "رضا محمدی",
    //   job: "کارشناس فروش میلگرد",
    //   phoneNumber: "02188885720",
    //   mobileNumber: "09121212121",
    // },
    // {
    //   id: 5,
    //   image: "/assets/images/home/moshaver-ex.jpg",
    //   name: "رضا محمدی",
    //   job: "کارشناس فروش میلگرد",
    //   phoneNumber: "02188885720",
    //   mobileNumber: "09121212121",
    // },
    // {
    //   id: 6,
    //   image: "/assets/images/home/moshaver-ex.jpg",
    //   name: "رضا محمدی",
    //   job: "کارشناس فروش میلگرد",
    //   phoneNumber: "02188885720",
    //   mobileNumber: "09121212121",
    // },
    // {
    //   id: 7,
    //   image: "/assets/images/home/moshaver-ex.jpg",
    //   name: "رضا محمدی",
    //   job: "کارشناس فروش میلگرد",
    //   phoneNumber: "02188885720",
    //   mobileNumber: "09121212121",
    // },
    // {
    //   id: 8,
    //   image: "/assets/images/home/moshaver-ex.jpg",
    //   name: "رضا محمدی",
    //   job: "کارشناس فروش میلگرد",
    //   phoneNumber: "02188885720",
    //   mobileNumber: "09121212121",
    // },
  ],
  homeBlog: [
    {
      title: "پیشنهاد خرید هدیه روز مرد و کادوی روز پدر از خارج در ایران",
      slug: "fathers-day",
      excerpt:
        "داستانی که در ادامه می‌‌خوانید با اجازه یکی از مشتریان نکته سنج چارسوقی که از تجربه خرید روز پدر از چارسوق با ما به اشتراک گذاشته بود، منتشر شده و امیدواریم برایتان مفید باشد.",
      image: {
        path: "https://panel.charsooq.com/storage/01HMG82QXMAVNTC6M7CNKVXRS1.webp",
        caption:
          "category image: پیشنهاد خرید هدیه روز مرد و کادوی روز پدر از خارج در ایران",
      },
      created_by: "ادمین مقالات ",
      created_at: "1402-10-20 14:56:43",
      seo: {
        title: "تجربه خرید روز پدر از آمازون در ایران",
        description:
          "داستانی که در ادامه می‌‌خوانید با اجازه یکی از مشتریان نکته سنج چارسوقی که از تجربه خرید روز پدر از چارسوق با ما به اشتراک گذاشته بود، منتشر شده و امیدواریم برایتان مفید باشد.",
        keyword: null,
      },
    },
    {
      title: "تخفیف ویژه روز زن و مادر همراه با چارسوق",
      slug: "womens-day",
      excerpt:
        "به مناسبت تولد حضرت فاطمه روز زن و روز مادر، سایت چارسوق به عنوان یکی از معتبرترین وب‌سایت‌های تخفیف و خرید آنلاین، تخفیفات فوق‌العاده‌ای در سایت‌های معروف همچون امازون و ترندیول ترتیب داده است.",
      image: {
        path: "https://panel.charsooq.com/storage/01HJXEDANA2ZR4PDK8E3QKWXVN.webp",
        caption: "category image: تخفیف ویژه روز زن و مادر همراه با چارسوق",
      },
      created_by: "ادمین مقالات ",
      created_at: "1402-10-09 16:55:28",
      seo: {
        title: "تخفیف ویژه روز زن و روز مادر همراه با چارسوق",
        description:
          "به مناسبت تولد حضرت فاطمه روز زن و روز مادر، سایت چارسوق به عنوان یکی از معتبرترین وب‌سایت‌های تخفیف و خرید آنلاین، تخفیفات فوق‌العاده‌ای در سایت‌های معروف همچون امازون و ترندیول ترتیب داده است.",
        keyword: null,
      },
    },
    {
      title: "تخفیف های کریسمسی آمازون با چارسوق",
      slug: "amazon-christmas",
      excerpt:
        "چارسوق با سیستم خرید آنلاین راحت و سریع از آمازون، به شما این امکان را می‌دهد تا به سادگی و با اطمینان، هدایای کریسمس خود را سفارش دهید.",
      image: {
        path: "https://panel.charsooq.com/storage/01HJH6PYKR5C40ERYYEEVFQJKV.webp",
        caption: "category image: تخفیف های کریسمسی آمازون با چارسوق",
      },
      created_by: "ادمین مقالات ",
      created_at: "1402-10-04 22:50:02",
      seo: {
        title: "تخفیف های کریسمسی آمازون با چارسوق",
        description:
          "چارسوق با سیستم خرید آنلاین راحت و سریع از آمازون، به شما این امکان را می‌دهد تا به سادگی و با اطمینان، هدایای کریسمس خود را سفارش دهید.",
        keyword: null,
      },
    },
    {
      title: "تخفیف های شب یلدا با چارسوق از ترکیه تا آمازون",
      slug: "yalda",
      excerpt:
        "شب یلدا با تخفیفات ۲۰ درصدی چارسوق از ترکیه تا سایت‌های خارجی مانند آمازون، فرصتی مناسب برای تجربه یک خرید ارزان و لذت‌بخش را برای شما به ارمغان می‌آورد.",
      image: {
        path: "https://panel.charsooq.com/storage/01HJ43XJTM4JDWQ51W2PWCE6TM.webp",
        caption:
          "category image: تخفیف های شب یلدا با چارسوق از ترکیه تا آمازون",
      },
      created_by: "ادمین مقالات ",
      created_at: "1402-09-29 20:51:05",
      seo: {
        title: "تخفیف های شب یلدا با چارسوق از ترکیه تا آمازون",
        description:
          "شب یلدا با تخفیفات ۲۰ درصدی چارسوق از ترکیه تا سایت‌های خارجی مانند آمازون، فرصتی مناسب برای تجربه یک خرید ارزان و لذت‌بخش را برای شما به ارمغان می‌آورد.",
        keyword: null,
      },
    },
  ],
  HomeStepBuy: [
    {
      id: 1,
      title: "دریافت اطلاعات از کارشناسان و ثبت سفارش",
      image: "/assets/images/home/step1.png",
    },
    { id: 2, title: "صدور پیش فاکتور", image: "/assets/images/home/step2.png" },
    {
      id: 3,
      title: "پرداخت مبلغ بیعانه",
      image: "/assets/images/home/step3.png",
    },
    { id: 4, title: "بارگیری و حمل", image: "/assets/images/home/step4.png" },
    {
      id: 5,
      title: "تسویه حساب نهایی",
      image: "/assets/images/home/step5.png",
    },
  ],
  homeBanner: [
    {
      id: 1,
      banner: "/assets/images/home/banner4.gif",
      link: "/category/میلگرد",
      text: "قیمت روز میلگرد نبشی ورق از آسن",
      target: false,
    },
    {
      id: 2,
      banner: "/assets/images/home/banner3.jpg",
      link: "https://telegram.me/Assen_iron/",
      text: "قیمت روز میلگرد نبشی ورق از آسن",
      target: true,
    },
  ],
  homeCategory: [
    {
      id: 1,
      images: "@/assets/images/milgerd-category.png",
      link: "/category/میلگرد",
      alt: "دسته بندی میلگرد",
      text: "میلگرد",
    },
    {
      id: 2,
      images: "@/assets/images/nabshi-category.png",
      link: "/category/نبشی",
      alt: "دسته بندی نبشی",
      text: "نبشی",
    },
    {
      id: 3,
      images: "@/assets/images/varagh-category.png",
      link: "/category/ورق-سیاه",
      alt: "دسته بندی ورق سیاه",
      text: "ورق سیاه",
    },
  ],
};
