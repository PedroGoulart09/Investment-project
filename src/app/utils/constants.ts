import * as Yup from 'yup';

export const investmentComponents: { title: string; href: string; description: string }[] = [
    {
      title: "CDB (Certificado de Depósito Bancário)",
      href: "https://www.infomoney.com.br/guias/cdb/",
      description:
        "O CDB é um título de renda fixa emitido por bancos para captar recursos, remunerando o investidor com juros ao longo do tempo.",
    },
    {
      title: "CDI (Certificado de Depósito Interbancário)",
      href: "https://blog.hurst.capital/blog/cdi-o-que-e-como-funciona-e-como-utilizar-essa-taxa-ao-fazer-investimentos/?utm_term=&utm_campaign=%5BS%5D+-+Institucional&utm_source=adwords&utm_medium=cpc&hsa_acc=2645488982&hsa_cam=12199345152&hsa_grp=130512847587&hsa_ad=691062118031&hsa_src=g&hsa_tgt=dsa-394948857085&hsa_kw=&hsa_mt=&hsa_net=adwords&hsa_ver=3&gad_source=1&gclid=CjwKCAiAopuvBhBCEiwAm8jaMfsJHJ5wAVAFOAJ3TIXAKCqfS2xA48aa9PMNIsx7i6ri98zWUuKTRhoCoBUQAvD_BwE",
      description:
        "O CDI é uma taxa referencial para as operações interbancárias no Brasil e serve como base para diversas aplicações financeiras.",
    },
    {
      title: "LCI (Letra de Crédito Imobiliário)",
      href: "https://riconnect.rico.com.vc/blog/lci-e-lca/?campaignid=316171546&adgroupid=55392294370&feeditemid=&targetid=aud-1413340266915:dsa-19959388920&loc_interest_ms=&loc_physical_ms=1001720&matchtype=&network=g&device=c&devicemodel=&ifmobile=&ifmobile=0&ifsearch=1&ifsearch=&ifcontent=0&ifcontent=&creative=340508776298&keyword=&placement=&target=&utm_source=google&utm_medium=cpc&utm_term=&utm_campaign=GGLE_PESQ_DSA&hsa_tgt=aud-1413340266915:dsa-19959388920&hsa_net=adwords&hsa_kw=&hsa_grp=55392294370&hsa_acc=7134496929&hsa_ver=3&hsa_ad=340508776298&hsa_cam=316171546&hsa_mt=&hsa_src=g&gclid=CjwKCAiAopuvBhBCEiwAm8jaMd8w6pOeyLds8zN9h2ndZBSyzY5u-FqEzlHYz-52iYysUrhSHpM5IRoCVRYQAvD_BwE",
      description:
        "A LCI é um título de renda fixa lastreado em financiamentos do setor imobiliário, oferecendo isenção de imposto de renda para pessoas físicas.",
    },
    {
      title: "LCA (Letra de Crédito do Agronegócio)",
      href: "https://riconnect.rico.com.vc/blog/lci-e-lca/?campaignid=316171546&adgroupid=55392294370&feeditemid=&targetid=aud-1413340266915:dsa-19959388920&loc_interest_ms=&loc_physical_ms=1001720&matchtype=&network=g&device=c&devicemodel=&ifmobile=&ifmobile=0&ifsearch=1&ifsearch=&ifcontent=0&ifcontent=&creative=340508776298&keyword=&placement=&target=&utm_source=google&utm_medium=cpc&utm_term=&utm_campaign=GGLE_PESQ_DSA&hsa_tgt=aud-1413340266915:dsa-19959388920&hsa_net=adwords&hsa_kw=&hsa_grp=55392294370&hsa_acc=7134496929&hsa_ver=3&hsa_ad=340508776298&hsa_cam=316171546&hsa_mt=&hsa_src=g&gclid=CjwKCAiAopuvBhBCEiwAm8jaMd8w6pOeyLds8zN9h2ndZBSyzY5u-FqEzlHYz-52iYysUrhSHpM5IRoCVRYQAvD_BwE",
      description:
        "A LCA é um título de renda fixa lastreado em operações do agronegócio, proporcionando ao investidor participação no desenvolvimento do setor.",
    },
    {
      title: "CRA (Certificado de Recebíveis do Agronegócio)",
      href: "https://atendimento.rico.com.vc/artigo/900-o-que-e-cra-e-cri?campaignid=316171546&adgroupid=55392294370&feeditemid=&targetid=aud-1413340266915:dsa-19959388920&loc_interest_ms=&loc_physical_ms=1001720&matchtype=&network=g&device=c&devicemodel=&ifmobile=&ifmobile=0&ifsearch=1&ifsearch=&ifcontent=0&ifcontent=&creative=340508776298&keyword=&placement=&target=&utm_source=google&utm_medium=cpc&utm_term=&utm_campaign=GGLE_PESQ_DSA&hsa_tgt=aud-1413340266915:dsa-19959388920&hsa_net=adwords&hsa_kw=&hsa_grp=55392294370&hsa_acc=7134496929&hsa_ver=3&hsa_ad=340508776298&hsa_cam=316171546&hsa_mt=&hsa_src=g&gclid=CjwKCAiAopuvBhBCEiwAm8jaMeKPU0OZzSVTb7oT_HR-Xotj2dURp2flcfPUzogHxSn0J6w6vCAbmRoC1X4QAvD_BwE",
      description:
        "O CRA é um título de renda fixa lastreado em recebíveis do agronegócio, contribuindo para o financiamento de atividades rurais.",
    },
    {
      title: "Ações",
      href: "https://riconnect.rico.com.vc/analises/o-que-sao-acoes-e-como-investir/?campaignid=316171546&adgroupid=55392294370&feeditemid=&targetid=aud-1413340266915:dsa-19959388920&loc_interest_ms=&loc_physical_ms=1001720&matchtype=&network=g&device=c&devicemodel=&ifmobile=&ifmobile=0&ifsearch=1&ifsearch=&ifcontent=0&ifcontent=&creative=340508776298&keyword=&placement=&target=&utm_source=google&utm_medium=cpc&utm_term=&utm_campaign=GGLE_PESQ_DSA&hsa_tgt=aud-1413340266915:dsa-19959388920&hsa_net=adwords&hsa_kw=&hsa_grp=55392294370&hsa_acc=7134496929&hsa_ver=3&hsa_ad=340508776298&hsa_cam=316171546&hsa_mt=&hsa_src=g&gclid=CjwKCAiAopuvBhBCEiwAm8jaMT_x8LNuxo9Kv2l1DVLX_O0GQJh74CMYcQ9-Dj7pQRDyFMkJc3io9BoCIDYQAvD_BwE",
      description:
        "As ações representam a fração do capital social de uma empresa e são negociadas no mercado de ações, oferecendo a possibilidade de participação nos lucros e prejuízos da empresa.",
    },
  ];

  export const data = [
    {
        name: 'Jan',
        Petrobras: getRandomValue(),
        Tesla: getRandomValue(),
        Facebook: getRandomValue(),
        McDonalds: getRandomValue(),
        BancoDoBrasil: getRandomValue(),
        Itau: getRandomValue(),
    },
    {
        name: 'Feb',
        Petrobras: getRandomValue(),
        Tesla: getRandomValue(),
        Facebook: getRandomValue(),
        McDonalds: getRandomValue(),
        BancoDoBrasil: getRandomValue(),
        Itau: getRandomValue(),
    },
    {
        name: 'Mar',
        Petrobras: getRandomValue(),
        Tesla: getRandomValue(),
        Facebook: getRandomValue(),
        McDonalds: getRandomValue(),
        BancoDoBrasil: getRandomValue(),
        Itau: getRandomValue(),
    },
    {
        name: 'Apr',
        Petrobras: getRandomValue(),
        Tesla: getRandomValue(),
        Facebook: getRandomValue(),
        McDonalds: getRandomValue(),
        BancoDoBrasil: getRandomValue(),
        Itau: getRandomValue(),
    },
    {
        name: 'May',
        Petrobras: getRandomValue(),
        Tesla: getRandomValue(),
        Facebook: getRandomValue(),
        McDonalds: getRandomValue(),
        BancoDoBrasil: getRandomValue(),
        Itau: getRandomValue(),
    },
    {
        name: 'Jun',
        Petrobras: getRandomValue(),
        Tesla: getRandomValue(),
        Facebook: getRandomValue(),
        McDonalds: getRandomValue(),
        BancoDoBrasil: getRandomValue(),
        Itau: getRandomValue(),
    },
    {
        name: 'Jul',
        Petrobras: getRandomValue(),
        Tesla: getRandomValue(),
        Facebook: getRandomValue(),
        McDonalds: getRandomValue(),
        BancoDoBrasil: getRandomValue(),
        Itau: getRandomValue(),
    },
    {
        name: 'Aug',
        Petrobras: getRandomValue(),
        Tesla: getRandomValue(),
        Facebook: getRandomValue(),
        McDonalds: getRandomValue(),
        BancoDoBrasil: getRandomValue(),
        Itau: getRandomValue(),
    },
    {
        name: 'Sep',
        Petrobras: getRandomValue(),
        Tesla: getRandomValue(),
        Facebook: getRandomValue(),
        McDonalds: getRandomValue(),
        BancoDoBrasil: getRandomValue(),
        Itau: getRandomValue(),
    },
    {
        name: 'Oct',
        Petrobras: getRandomValue(),
        Tesla: getRandomValue(),
        Facebook: getRandomValue(),
        McDonalds: getRandomValue(),
        BancoDoBrasil: getRandomValue(),
        Itau: getRandomValue(),
    },
    {
        name: 'Nov',
        Petrobras: getRandomValue(),
        Tesla: getRandomValue(),
        Facebook: getRandomValue(),
        McDonalds: getRandomValue(),
        BancoDoBrasil: getRandomValue(),
        Itau: getRandomValue(),
    }
];

function getRandomValue() {
    return Math.floor(Math.random() * 5000) + 1000;
}

export const SignupSchemaSignin = Yup.object().shape({
    email: Yup.string().required('Preencha o campo para continuar'),
    password: Yup.string().min(6, 'Minimo 6 caracteres').required('Preencha o campo para continuar'),
    name: Yup.string().required('Preencha o campo para continuar')
});

export const SignupSchemaLogin = Yup.object().shape({
    email: Yup.string().required('Preencha o campo para continuar'),
    password: Yup.string().min(6, 'Minimo 6 caracteres').required('Preencha o campo para continuar'),
});

const colors = ["#06b6d4", "#3b82f6", "#6366f1"];
export const sampleArcs = [
  {
    order: 1,
    startLat: -19.885592,
    startLng: -43.951191,
    endLat: -22.9068,
    endLng: -43.1729,
    arcAlt: 0.1,
    color: colors[Math.floor(Math.random() * colors.length)],
  },
  {
    order: 1,
    startLat: 28.6139,
    startLng: 77.209,
    endLat: 3.139,
    endLng: 101.6869,
    arcAlt: 0.2,
    color: colors[Math.floor(Math.random() * colors.length)],
  },
  {
    order: 1,
    startLat: -19.885592,
    startLng: -43.951191,
    endLat: -1.303396,
    endLng: 36.852443,
    arcAlt: 0.5,
    color: colors[Math.floor(Math.random() * colors.length)],
  },
  {
    order: 2,
    startLat: 1.3521,
    startLng: 103.8198,
    endLat: 35.6762,
    endLng: 139.6503,
    arcAlt: 0.2,
    color: colors[Math.floor(Math.random() * colors.length)],
  },
  {
    order: 2,
    startLat: 51.5072,
    startLng: -0.1276,
    endLat: 3.139,
    endLng: 101.6869,
    arcAlt: 0.3,
    color: colors[Math.floor(Math.random() * colors.length)],
  },
  {
    order: 2,
    startLat: -15.785493,
    startLng: -47.909029,
    endLat: 36.162809,
    endLng: -115.119411,
    arcAlt: 0.3,
    color: colors[Math.floor(Math.random() * colors.length)],
  },
  {
    order: 3,
    startLat: -33.8688,
    startLng: 151.2093,
    endLat: 22.3193,
    endLng: 114.1694,
    arcAlt: 0.3,
    color: colors[Math.floor(Math.random() * colors.length)],
  },
  {
    order: 3,
    startLat: 21.3099,
    startLng: -157.8581,
    endLat: 40.7128,
    endLng: -74.006,
    arcAlt: 0.3,
    color: colors[Math.floor(Math.random() * colors.length)],
  },
  {
    order: 3,
    startLat: -6.2088,
    startLng: 106.8456,
    endLat: 51.5072,
    endLng: -0.1276,
    arcAlt: 0.3,
    color: colors[Math.floor(Math.random() * colors.length)],
  },
  {
    order: 4,
    startLat: 11.986597,
    startLng: 8.571831,
    endLat: -15.595412,
    endLng: -56.05918,
    arcAlt: 0.5,
    color: colors[Math.floor(Math.random() * colors.length)],
  },
  {
    order: 4,
    startLat: -34.6037,
    startLng: -58.3816,
    endLat: 22.3193,
    endLng: 114.1694,
    arcAlt: 0.7,
    color: colors[Math.floor(Math.random() * colors.length)],
  },
  {
    order: 4,
    startLat: 51.5072,
    startLng: -0.1276,
    endLat: 48.8566,
    endLng: -2.3522,
    arcAlt: 0.1,
    color: colors[Math.floor(Math.random() * colors.length)],
  },
  {
    order: 5,
    startLat: 14.5995,
    startLng: 120.9842,
    endLat: 51.5072,
    endLng: -0.1276,
    arcAlt: 0.3,
    color: colors[Math.floor(Math.random() * colors.length)],
  },
  {
    order: 5,
    startLat: 1.3521,
    startLng: 103.8198,
    endLat: -33.8688,
    endLng: 151.2093,
    arcAlt: 0.2,
    color: colors[Math.floor(Math.random() * colors.length)],
  },
  {
    order: 5,
    startLat: 34.0522,
    startLng: -118.2437,
    endLat: 48.8566,
    endLng: -2.3522,
    arcAlt: 0.2,
    color: colors[Math.floor(Math.random() * colors.length)],
  },
  {
    order: 6,
    startLat: -15.432563,
    startLng: 28.315853,
    endLat: 1.094136,
    endLng: -63.34546,
    arcAlt: 0.7,
    color: colors[Math.floor(Math.random() * colors.length)],
  },
  {
    order: 6,
    startLat: 37.5665,
    startLng: 126.978,
    endLat: 35.6762,
    endLng: 139.6503,
    arcAlt: 0.1,
    color: colors[Math.floor(Math.random() * colors.length)],
  },
  {
    order: 6,
    startLat: 22.3193,
    startLng: 114.1694,
    endLat: 51.5072,
    endLng: -0.1276,
    arcAlt: 0.3,
    color: colors[Math.floor(Math.random() * colors.length)],
  },
  {
    order: 7,
    startLat: -19.885592,
    startLng: -43.951191,
    endLat: -15.595412,
    endLng: -56.05918,
    arcAlt: 0.1,
    color: colors[Math.floor(Math.random() * colors.length)],
  },
  {
    order: 7,
    startLat: 48.8566,
    startLng: -2.3522,
    endLat: 52.52,
    endLng: 13.405,
    arcAlt: 0.1,
    color: colors[Math.floor(Math.random() * colors.length)],
  },
  {
    order: 7,
    startLat: 52.52,
    startLng: 13.405,
    endLat: 34.0522,
    endLng: -118.2437,
    arcAlt: 0.2,
    color: colors[Math.floor(Math.random() * colors.length)],
  },
  {
    order: 8,
    startLat: -8.833221,
    startLng: 13.264837,
    endLat: -33.936138,
    endLng: 18.436529,
    arcAlt: 0.2,
    color: colors[Math.floor(Math.random() * colors.length)],
  },
  {
    order: 8,
    startLat: 49.2827,
    startLng: -123.1207,
    endLat: 52.3676,
    endLng: 4.9041,
    arcAlt: 0.2,
    color: colors[Math.floor(Math.random() * colors.length)],
  },
  {
    order: 8,
    startLat: 1.3521,
    startLng: 103.8198,
    endLat: 40.7128,
    endLng: -74.006,
    arcAlt: 0.5,
    color: colors[Math.floor(Math.random() * colors.length)],
  },
  {
    order: 9,
    startLat: 51.5072,
    startLng: -0.1276,
    endLat: 34.0522,
    endLng: -118.2437,
    arcAlt: 0.2,
    color: colors[Math.floor(Math.random() * colors.length)],
  },
  {
    order: 9,
    startLat: 22.3193,
    startLng: 114.1694,
    endLat: -22.9068,
    endLng: -43.1729,
    arcAlt: 0.7,
    color: colors[Math.floor(Math.random() * colors.length)],
  },
  {
    order: 9,
    startLat: 1.3521,
    startLng: 103.8198,
    endLat: -34.6037,
    endLng: -58.3816,
    arcAlt: 0.5,
    color: colors[Math.floor(Math.random() * colors.length)],
  },
  {
    order: 10,
    startLat: -22.9068,
    startLng: -43.1729,
    endLat: 28.6139,
    endLng: 77.209,
    arcAlt: 0.7,
    color: colors[Math.floor(Math.random() * colors.length)],
  },
  {
    order: 10,
    startLat: 34.0522,
    startLng: -118.2437,
    endLat: 31.2304,
    endLng: 121.4737,
    arcAlt: 0.3,
    color: colors[Math.floor(Math.random() * colors.length)],
  },
  {
    order: 10,
    startLat: -6.2088,
    startLng: 106.8456,
    endLat: 52.3676,
    endLng: 4.9041,
    arcAlt: 0.3,
    color: colors[Math.floor(Math.random() * colors.length)],
  },
  {
    order: 11,
    startLat: 41.9028,
    startLng: 12.4964,
    endLat: 34.0522,
    endLng: -118.2437,
    arcAlt: 0.2,
    color: colors[Math.floor(Math.random() * colors.length)],
  },
  {
    order: 11,
    startLat: -6.2088,
    startLng: 106.8456,
    endLat: 31.2304,
    endLng: 121.4737,
    arcAlt: 0.2,
    color: colors[Math.floor(Math.random() * colors.length)],
  },
  {
    order: 11,
    startLat: 22.3193,
    startLng: 114.1694,
    endLat: 1.3521,
    endLng: 103.8198,
    arcAlt: 0.2,
    color: colors[Math.floor(Math.random() * colors.length)],
  },
  {
    order: 12,
    startLat: 34.0522,
    startLng: -118.2437,
    endLat: 37.7749,
    endLng: -122.4194,
    arcAlt: 0.1,
    color: colors[Math.floor(Math.random() * colors.length)],
  },
  {
    order: 12,
    startLat: 35.6762,
    startLng: 139.6503,
    endLat: 22.3193,
    endLng: 114.1694,
    arcAlt: 0.2,
    color: colors[Math.floor(Math.random() * colors.length)],
  },
  {
    order: 12,
    startLat: 22.3193,
    startLng: 114.1694,
    endLat: 34.0522,
    endLng: -118.2437,
    arcAlt: 0.3,
    color: colors[Math.floor(Math.random() * colors.length)],
  },
  {
    order: 13,
    startLat: 52.52,
    startLng: 13.405,
    endLat: 22.3193,
    endLng: 114.1694,
    arcAlt: 0.3,
    color: colors[Math.floor(Math.random() * colors.length)],
  },
  {
    order: 13,
    startLat: 11.986597,
    startLng: 8.571831,
    endLat: 35.6762,
    endLng: 139.6503,
    arcAlt: 0.3,
    color: colors[Math.floor(Math.random() * colors.length)],
  },
  {
    order: 13,
    startLat: -22.9068,
    startLng: -43.1729,
    endLat: -34.6037,
    endLng: -58.3816,
    arcAlt: 0.1,
    color: colors[Math.floor(Math.random() * colors.length)],
  },
  {
    order: 14,
    startLat: -33.936138,
    startLng: 18.436529,
    endLat: 21.395643,
    endLng: 39.883798,
    arcAlt: 0.3,
    color: colors[Math.floor(Math.random() * colors.length)],
  },
];
export const globeConfig = {
    pointSize: 4,
    globeColor: "#062056",
    showAtmosphere: true,
    atmosphereColor: "#FFFFFF40",
    atmosphereAltitude: 0.1,
    emissive: "#062056",
    emissiveIntensity: 0.1,
    shininess: 0.9,
    polygonColor: "rgba(255,255,255,0.7)",
    ambientLight: "#38bdf8",
    directionalLeftLight: "#ffffff",
    directionalTopLight: "#ffffff",
    pointLight: "#ffffff",
    arcTime: 1000,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
    initialPosition: { lat: 22.3193, lng: 114.1694 },
    autoRotate: true,
    autoRotateSpeed: 0.5,
  };

  export const products = [
    {
      title: "LCA",
      link: "https://www.osmelhoresinvestimentos.com.br/renda-fixa/lca/",
      thumbnail:
        "https://www.osmelhoresinvestimentos.com.br/wp-content/uploads/2018/12/LCA-Os-Melhores-Investimentos.jpg",
    },
    {
      title: "CRA",
      link: "https://www.linkedin.com/pulse/cra-uma-op%C3%A7%C3%A3o-para-investir-agroneg%C3%B3cio-alta-vista-investimentos/",
      thumbnail:
        "https://media.licdn.com/dms/image/C4D12AQFtIiLsF8w0NA/article-cover_image-shrink_720_1280/0/1629390227010?e=2147483647&v=beta&t=KmynH2n5if68XvUe9RvuBA_1Qwtq-SwUovz6csm9TKE",
    },
    {
      title: "CRI",
      link: "https://www.melver.com.br/blog/cri-e-cra-como-nascem-para-que-servem-e-como-investir/",
      thumbnail: "https://i.ytimg.com/vi/092zrc4KsY0/hqdefault.jpg",
    },
  
    {
      title: "LCI",
      link: "https://www.comoaplicarnabolsa.com.br/informacoes-importantes/renda-fixa-lci-lca-letra-de-credito-imobiliario-outros/",
      thumbnail:
        "https://www.comoaplicarnabolsa.com.br/wp-content/uploads/2012/07/Lci2.png",
    },
    {
      title: "Aprenda a investir",
      link: "https://www.infomoney.com.br/guias/como-comecar-a-investir/",
      thumbnail: "https://i.ytimg.com/vi/CavgqHrvX-o/maxresdefault.jpg",
    },
    {
      title: "Renda fixa",
      link: "https://www.infomoney.com.br/guias/renda-fixa/",
      thumbnail:
        "https://www.infomoney.com.br/wp-content/uploads/2020/10/Renda-Fixa.jpg?fit=1920%2C1080&quality=50&strip=all",
    },
    {
      title: "Ações",
      link: "https://www.infomoney.com.br/guias/como-investir-em-acoes/",
      thumbnail:
        "data:image/jpeg;base64,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",
    },
    {
      title: "Renda variável",
      link: "https://www.infomoney.com.br/guias/renda-variavel/",
      thumbnail:
        "https://www.infomoney.com.br/wp-content/uploads/2020/11/Renda-Variavel.jpg?fit=1920%2C1080&quality=50&strip=all",
    },
  ];
