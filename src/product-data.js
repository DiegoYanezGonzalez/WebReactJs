const products = [
  {
    id: 1,
    name: "Gorro Negro",
    productType: "Caps",
    price: 5990,
    rating: 4,
    image:
      " http://moonstomp.fr/2806-large/gorro-negro.jpg ",
    description:
    "Lorem ipsum dolor sit amet consectetur adipiscing elit etiam gravida venenatis metus, lacinia enim ullamcorper fermentum conubia lacus at dignissisemper netus. Aptent sociosqu natoque mollis mi consequat varius purus pretium eu, aliquam ultricies fames vehicula praesent suscipit odio tempus elementum conubia, sapien tristiqu eget lacinia ac condimentum rhoncus nostra. Pellentesque sociosqu nulla eros platea montesfames, varius faucibus viverra laoreet gravida, quam erat mi himenaeos ornare. Mus euismod tincidunt nibh malesuada penatibus litora mauris, fusce bibendum integer auctor faucibus nisi vitae proin, curae blandit at rutrum mi imperdiet.",
  },
  {
    id: 2,
    name: "Gorro Blanco",
    productType: "Caps White",
    price: 10990,
    rating: 4,
    image:
      "https://m.media-amazon.com/images/I/7118EvUfqML.jpg  ",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit etiam gravida venenatis metus, lacinia enim ullamcorper fermentum conubia lacus at dignissisemper netus. Aptent sociosqu natoque mollis mi consequat varius purus pretium eu, aliquam ultricies fames vehicula praesent suscipit odio tempus elementum conubia, sapien tristiqu eget lacinia ac condimentum rhoncus nostra. Pellentesque sociosqu nulla eros platea montesfames, varius faucibus viverra laoreet gravida, quam erat mi himenaeos ornare. Mus euismod tincidunt nibh malesuada penatibus litora mauris, fusce bibendum integer auctor faucibus nisi vitae proin, curae blandit at rutrum mi imperdiet.",
  },
  {
    id: 3,
    name: "Jockey Plomo",
    productType: "Caps",
    price: 14990,
    rating: 3,
    image:
      " https://mpe-s1-p.mlstatic.com/338025-MPE25368082082_022017-O.jpg ",
    description:
    "Lorem ipsum dolor sit amet consectetur adipiscing elit etiam gravida venenatis metus, lacinia enim ullamcorper fermentum conubia lacus at dignissisemper netus. Aptent sociosqu natoque mollis mi consequat varius purus pretium eu, aliquam ultricies fames vehicula praesent suscipit odio tempus elementum conubia, sapien tristiqu eget lacinia ac condimentum rhoncus nostra. Pellentesque sociosqu nulla eros platea montesfames, varius faucibus viverra laoreet gravida, quam erat mi himenaeos ornare. Mus euismod tincidunt nibh malesuada penatibus litora mauris, fusce bibendum integer auctor faucibus nisi vitae proin, curae blandit at rutrum mi imperdiet.",
  },
  {
    id: 4,
    name: "Gorro Rojo",
    productType: "Caps Red",
    price: 19990,
    rating: 5,
    image:
       " https://ripleycl.imgix.net/https%3A%2F%2Fs3-sa-east-1.amazonaws.com%2Fcentryproduction%2Fbelanit-inventario%2Fproducts%2F5e6456719c20110331bed5cd%2Fimage%2F5e6456719c20110331bed5cd%2Foriginal%2Fopen-uri20200308-817-i6qzip.?w=750&h=555&ch=Width&auto=format&cs=strip&bg=FFFFFF&q=60&trimcolor=FFFFFF&trim=color&fit=fillmax&ixlib=js-1.1.0&s=e795ae329019305f2d0742bdb45f63ce ",
    description:
    "Lorem ipsum dolor sit amet consectetur adipiscing elit etiam gravida venenatis metus, lacinia enim ullamcorper fermentum conubia lacus at dignissisemper netus. Aptent sociosqu natoque mollis mi consequat varius purus pretium eu, aliquam ultricies fames vehicula praesent suscipit odio tempus elementum conubia, sapien tristiqu eget lacinia ac condimentum rhoncus nostra. Pellentesque sociosqu nulla eros platea montesfames, varius faucibus viverra laoreet gravida, quam erat mi himenaeos ornare. Mus euismod tincidunt nibh malesuada penatibus litora mauris, fusce bibendum integer auctor faucibus nisi vitae proin, curae blandit at rutrum mi imperdiet.",
  },
  {
    id: 1,
    name: "Gorro Negro",
    productType: "Caps",
    price: 5990,
    rating: 4,
    image:
      " http://moonstomp.fr/2806-large/gorro-negro.jpg ",
    description:
    "Lorem ipsum dolor sit amet consectetur adipiscing elit etiam gravida venenatis metus, lacinia enim ullamcorper fermentum conubia lacus at dignissisemper netus. Aptent sociosqu natoque mollis mi consequat varius purus pretium eu, aliquam ultricies fames vehicula praesent suscipit odio tempus elementum conubia, sapien tristiqu eget lacinia ac condimentum rhoncus nostra. Pellentesque sociosqu nulla eros platea montesfames, varius faucibus viverra laoreet gravida, quam erat mi himenaeos ornare. Mus euismod tincidunt nibh malesuada penatibus litora mauris, fusce bibendum integer auctor faucibus nisi vitae proin, curae blandit at rutrum mi imperdiet.",
  },
  {
    id: 2,
    name: "Gorro Blanco",
    productType: "Caps White",
    price: 10990,
    rating: 4,
    image:
      "https://m.media-amazon.com/images/I/7118EvUfqML.jpg  ",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit etiam gravida venenatis metus, lacinia enim ullamcorper fermentum conubia lacus at dignissisemper netus. Aptent sociosqu natoque mollis mi consequat varius purus pretium eu, aliquam ultricies fames vehicula praesent suscipit odio tempus elementum conubia, sapien tristiqu eget lacinia ac condimentum rhoncus nostra. Pellentesque sociosqu nulla eros platea montesfames, varius faucibus viverra laoreet gravida, quam erat mi himenaeos ornare. Mus euismod tincidunt nibh malesuada penatibus litora mauris, fusce bibendum integer auctor faucibus nisi vitae proin, curae blandit at rutrum mi imperdiet.",
  },
  {
    id: 3,
    name: "Jockey Plomo",
    productType: "Caps",
    price: 14990,
    rating: 3,
    image:
      " https://mpe-s1-p.mlstatic.com/338025-MPE25368082082_022017-O.jpg ",
    description:
    "Lorem ipsum dolor sit amet consectetur adipiscing elit etiam gravida venenatis metus, lacinia enim ullamcorper fermentum conubia lacus at dignissisemper netus. Aptent sociosqu natoque mollis mi consequat varius purus pretium eu, aliquam ultricies fames vehicula praesent suscipit odio tempus elementum conubia, sapien tristiqu eget lacinia ac condimentum rhoncus nostra. Pellentesque sociosqu nulla eros platea montesfames, varius faucibus viverra laoreet gravida, quam erat mi himenaeos ornare. Mus euismod tincidunt nibh malesuada penatibus litora mauris, fusce bibendum integer auctor faucibus nisi vitae proin, curae blandit at rutrum mi imperdiet.",
  },
  {
    id: 4,
    name: "Gorro Rojo",
    productType: "Caps Red",
    price: 19990,
    rating: 5,
    image:
       " https://ripleycl.imgix.net/https%3A%2F%2Fs3-sa-east-1.amazonaws.com%2Fcentryproduction%2Fbelanit-inventario%2Fproducts%2F5e6456719c20110331bed5cd%2Fimage%2F5e6456719c20110331bed5cd%2Foriginal%2Fopen-uri20200308-817-i6qzip.?w=750&h=555&ch=Width&auto=format&cs=strip&bg=FFFFFF&q=60&trimcolor=FFFFFF&trim=color&fit=fillmax&ixlib=js-1.1.0&s=e795ae329019305f2d0742bdb45f63ce ",
    description:
    "Lorem ipsum dolor sit amet consectetur adipiscing elit etiam gravida venenatis metus, lacinia enim ullamcorper fermentum conubia lacus at dignissisemper netus. Aptent sociosqu natoque mollis mi consequat varius purus pretium eu, aliquam ultricies fames vehicula praesent suscipit odio tempus elementum conubia, sapien tristiqu eget lacinia ac condimentum rhoncus nostra. Pellentesque sociosqu nulla eros platea montesfames, varius faucibus viverra laoreet gravida, quam erat mi himenaeos ornare. Mus euismod tincidunt nibh malesuada penatibus litora mauris, fusce bibendum integer auctor faucibus nisi vitae proin, curae blandit at rutrum mi imperdiet.",
  },
  {
    id: 1,
    name: "Gorro Negro",
    productType: "Caps",
    price: 5990,
    rating: 4,
    image:
      " http://moonstomp.fr/2806-large/gorro-negro.jpg ",
    description:
    "Lorem ipsum dolor sit amet consectetur adipiscing elit etiam gravida venenatis metus, lacinia enim ullamcorper fermentum conubia lacus at dignissisemper netus. Aptent sociosqu natoque mollis mi consequat varius purus pretium eu, aliquam ultricies fames vehicula praesent suscipit odio tempus elementum conubia, sapien tristiqu eget lacinia ac condimentum rhoncus nostra. Pellentesque sociosqu nulla eros platea montesfames, varius faucibus viverra laoreet gravida, quam erat mi himenaeos ornare. Mus euismod tincidunt nibh malesuada penatibus litora mauris, fusce bibendum integer auctor faucibus nisi vitae proin, curae blandit at rutrum mi imperdiet.",
  },
  {
    id: 2,
    name: "Gorro Blanco",
    productType: "Caps White",
    price: 10990,
    rating: 4,
    image:
      "https://m.media-amazon.com/images/I/7118EvUfqML.jpg  ",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit etiam gravida venenatis metus, lacinia enim ullamcorper fermentum conubia lacus at dignissisemper netus. Aptent sociosqu natoque mollis mi consequat varius purus pretium eu, aliquam ultricies fames vehicula praesent suscipit odio tempus elementum conubia, sapien tristiqu eget lacinia ac condimentum rhoncus nostra. Pellentesque sociosqu nulla eros platea montesfames, varius faucibus viverra laoreet gravida, quam erat mi himenaeos ornare. Mus euismod tincidunt nibh malesuada penatibus litora mauris, fusce bibendum integer auctor faucibus nisi vitae proin, curae blandit at rutrum mi imperdiet.",
  },
  {
    id: 3,
    name: "Jockey Plomo",
    productType: "Caps",
    price: 14990,
    rating: 3,
    image:
      " https://mpe-s1-p.mlstatic.com/338025-MPE25368082082_022017-O.jpg ",
    description:
    "Lorem ipsum dolor sit amet consectetur adipiscing elit etiam gravida venenatis metus, lacinia enim ullamcorper fermentum conubia lacus at dignissisemper netus. Aptent sociosqu natoque mollis mi consequat varius purus pretium eu, aliquam ultricies fames vehicula praesent suscipit odio tempus elementum conubia, sapien tristiqu eget lacinia ac condimentum rhoncus nostra. Pellentesque sociosqu nulla eros platea montesfames, varius faucibus viverra laoreet gravida, quam erat mi himenaeos ornare. Mus euismod tincidunt nibh malesuada penatibus litora mauris, fusce bibendum integer auctor faucibus nisi vitae proin, curae blandit at rutrum mi imperdiet.",
  },
  {
    id: 4,
    name: "Gorro Rojo",
    productType: "Caps Red",
    price: 19990,
    rating: 5,
    image:
       " https://ripleycl.imgix.net/https%3A%2F%2Fs3-sa-east-1.amazonaws.com%2Fcentryproduction%2Fbelanit-inventario%2Fproducts%2F5e6456719c20110331bed5cd%2Fimage%2F5e6456719c20110331bed5cd%2Foriginal%2Fopen-uri20200308-817-i6qzip.?w=750&h=555&ch=Width&auto=format&cs=strip&bg=FFFFFF&q=60&trimcolor=FFFFFF&trim=color&fit=fillmax&ixlib=js-1.1.0&s=e795ae329019305f2d0742bdb45f63ce ",
    description:
    "Lorem ipsum dolor sit amet consectetur adipiscing elit etiam gravida venenatis metus, lacinia enim ullamcorper fermentum conubia lacus at dignissisemper netus. Aptent sociosqu natoque mollis mi consequat varius purus pretium eu, aliquam ultricies fames vehicula praesent suscipit odio tempus elementum conubia, sapien tristiqu eget lacinia ac condimentum rhoncus nostra. Pellentesque sociosqu nulla eros platea montesfames, varius faucibus viverra laoreet gravida, quam erat mi himenaeos ornare. Mus euismod tincidunt nibh malesuada penatibus litora mauris, fusce bibendum integer auctor faucibus nisi vitae proin, curae blandit at rutrum mi imperdiet.",
  },
];

export default products;