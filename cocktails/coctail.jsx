const cocktails = [
  {
    nom: "Gin Tonic",
    description: "Un Cocktail très désaltérant qui se boit très frais.",
    alcools: [
      { nom: "Gin", quantite: 4 },
      { nom: "Tonic", quantite: 12 }
    ],
    jus: [{ nom: "Citron vert", quantite: 1 }],
    decorations: [{ nom: "Rondelle de citron" }],
    glacons: [{ type: "plein", quantite: 4 }],
    contenance: 16
  },
  {
    nom: "Cuba Libre",
    description: "Un Cocktail classique qui se boit facilement.",
    alcools: [
      { nom: "Rhum", quantite: 6 },
      { nom: "Coca cola", quantite: 14 }
    ],
    jus: [{ nom: "Citron vert", quantite: 1 }],
    decorations: [{ nom: "Rondelle de citron vert" }],
    glacons: [{ type: "plein", quantite: 4 }],
    contenance: 20
  },
  {
    nom: "Bloody Mary",
    description: "Un Cocktail au bon goût de tomate légèrement relevé.",
    alcools: [{ nom: "Vodka", quantite: 4 }],
    jus: [
      { nom: "Jus de tomate", quantite: 8 },
      { nom: "Jus de citron jaune", quantite: 1 }
    ],
    epices: [
      { nom: "Sel de cèleri", quantite: 0.5 },
      { nom: "Sauce Worcestershire", quantite: 0.5 },
      { nom: "Tabasco", quantite: 0.5 }
    ],
    decorations: [{ nom: "Rondelle de citron jaune" }],
    glacons: [{ type: "plein", quantite: 4 }],
    contenance: 18
  },
  {
    nom: "Mojito",
    description: "Un Cocktail traditionnel qui fait toujours son effet.",
    alcools: [
      { nom: "Rhum", quantite: 4 }
    ],
    jus: [{ nom: "Citron vert", quantite: 1 }],
    herbes: [{ nom: "Feuilles de menthe", quantite: 6 }],
    sirops: [{ nom: "Sirop simple", quantite: 2 }],
    sodas: [{ nom: "Perrier", quantite: 8 }],
    decorations: [{ nom: "Tête de menthe" }],
    glacons: [{ type: "pilé", quantite: "complet" }],
    contenance: 10
  },  ]
  const menu = {
  classic: [
    {
      name: "Moscow Mule",
      description: "Un Cocktail aux saveurs de gingembre relevé grâce au citron.",
      decoration: "Rondelle de citron.",
      preparation: "Préparation au shaker, servie dans un verre type Collins avec de la glace pilée.",
      quantity: "14 cl.",
      ingredients: ["Vodka", "Jus d'ananas", "Jus de cranberry", "Crème de pêche", "Crème de framboise"]
    }
  ],
  creations: [
    {
      name: "Exotic Vacation",
      description: "Un Cocktail aux saveurs exotiques qui rappelle les vacances.",
      decoration: "Tranche d'ananas.",
      preparation: "Préparation au shaker, servie dans un verre type Collins avec des glaçons pleins.",
      quantity: "18 cl.",
      ingredients: ["Vodka", "Ginger beer", "Citron vert"]
    },
    {
      name: "Campari Tonic",
      description: "Un Cocktail pétillant avec une pointe d'amertume.",
      decoration: "Tranche d'orange.",
      preparation: "Préparation au verre, servie dans un verre type Collins avec des glaçons pleins.",
      quantity: "18 cl.",
      ingredients: ["Campari", "Prosecco", "Tonic"]
    },
    {
      name: "Your Favorite",
      description: "Votre Cocktail préféré n'est pas sur notre carte... Pas de souci ! Demandez nous et nous le ferons !",
      decoration: "",
      preparation: "",
      quantity: "",
      ingredients: ["Chartreuse verte", "Limoncello", "Citron vert", "Top perrier"]
    },
    {
      name: "Strawberry Colada",
      description: "Un Cocktail au goût de fraise prononcé souligné par une saveur à la coco.",
      decoration: "Tranche d'orange.",
      preparation: "Préparation au verre, servie dans un verre type Collins avec des glaçons pleins.",
      quantity: "18 cl.",
      ingredients: ["Malibu", "Jus de banane", "Jus de fraise", "Citron jaune"]
    },
    {
      name: "Vanilla Mojito",
      description: "Un Cocktail type Mojito sublimé par une liqueur gourmande à la vanille.",
      decoration: "Tête de menthe.",
      preparation: "Préparation au verre, servie dans un verre type Mojito avec de la glace pilée.",
      quantity: "18 cl.",
      ingredients: ["Liqueur de vanille Tsiky", "Citron vert", "Feuille de menthe", "Rhum blanc", "Perrier"]
    },
    {
      name: "Fruity Vodka",
      description: "Un Cocktail fruité cachant la force de la Vodka.",
      decoration: "Tranche de pomme.",
      preparation: "Préparation au shaker, servie dans un verre type Collins avec des glaçons pleins.",
      quantity: "20 cl.",
      ingredients: ["Vodka", "Jus de goyave", "Jus de pomme", "Curaçao"]
    }
  ]
};
  const cocktail1 = {
nom: "Cocktail type Mojito sublimé par une liqueur gourmande à la vanille",
decoration: "Tête de menthe",
preparation: "au verre, servie dans un verre type Mojito avec de la glace pilée",
quantite: "18 cl",
ingredients: [
{ingredient: "Liqueur de vanille Tsiky", quantite: "2 cl"},
{ingredient: "Citron vert", quantite: "1/2"},
{ingredient: "Feuille de menthe", quantite: "8"},
{ingredient: "Rhum blanc", quantite: "4 cl"},
{ingredient: "Perrier", quantite: "12 cl"}
]
};

const mocktail1 = {
nom: "Mocktail au bon goût de pomme rappelant le fameux Mojito",
decoration: "Tête de menthe",
preparation: "au verre, servie dans un verre type mojito avec de la glace pilée",
quantite: "18 cl",
ingredients: [
{ingredient: "Jus de pomme", quantite: "10 cl"},
{ingredient: "Citron vert", quantite: "1/2"},
{ingredient: "Sirop simple", quantite: "2 cl"},
{ingredient: "Menthe", quantite: "6 feuilles"},
{ingredient: "Tonic", quantite: "4 cl"}
]
};

const mocktail2 = {
nom: "Mocktail aux saveurs exotiques",
decoration: "Tranche d'ananas",
preparation: "au shaker, servie dans un verre type Tumbler avec des glaçons pleins",
quantite: "18 cl",
ingredients: [
{ingredient: "Jus d'ananas", quantite: "6 cl"},
{ingredient: "Jus de passion", quantite: "6 cl"},
{ingredient: "Sirop de grenadine", quantite: "2 cl"},
{ingredient: "Citron jaune", quantite: "1/2"}
]
};

const mocktail3 = {
nom: "Mocktail aux couleurs et saveurs alléchantes",
decoration: "Rondelle citron jaune",
preparation: "au shaker, servie dans un verre type Collins avec des glaçons pleins",
quantite: "18 cl",
ingredients: [
{ingredient: "Jus de pamplemousse", quantite: "8 cl"},
{ingredient: "Schweppes", quantite: "8 cl"},
{ingredient: "Sirop de curaçao", quantite: "2 cl"}
]
};

const mocktail4 = {
nom: "Mocktail aux saveurs exotiques qui rappelle les vacances",
decoration: "Tranche d'ananas",
preparation: "au shaker, servie dans un verre type Collins avec des glaçons pleins",
quantite: "18 cl",
ingredients: [
{ingredient: "Lait de coco", quantite: "6 cl"},
{ingredient: "Sirop simple", quantite: "2 cl"},
{ingredient: "Jus d'ananas", quantite: "8 cl"}
]
};


const cocktails = [
{
name: "Liqueur de vanille Tsiky Mojito",
description: "Un Cocktail type Mojito sublimé par une liqueur gourmande à la vanille.",
decoration: "Tête de menthe.",
preparation: "Préparation au verre, servie dans un verre type Mojito avec de la glace pilée.",
ingredients: [
"Liqueur de vanille Tsiky",
"Citron vert",
"Feuille de menthe",
"Rhum blanc",
"Perrier",
"Glace pilée"
],
quantity: "18 cl"
},
{
name: "Jus de pomme Mojito",
description: "Un Mocktail au bon goût de pomme rappelant le fameux Mojito.",
decoration: "Tête de menthe.",
preparation: "Préparation au verre, servie dans un verre type Mojito avec de la glace pilée.",
ingredients: [
"Jus de pomme",
"Citron vert",
"Sirop simple",
"Menthe",
"Tonic",
"Glace pilée"
],
quantity: "18 cl"
},
{
name: "Jus exotique",
description: "Un Mocktail aux saveurs exotiques.",
decoration: "Tranche d'ananas.",
preparation: "Préparation au shaker, servie dans un verre type Tumbler avec des glaçons pleins.",
ingredients: [
"Jus d'ananas",
"Jus de passion",
"Sirop de grenadine",
"Citron jaune",
"Glaçons pleins"
],
quantity: "18 cl"
},
{
name: "Curaçao Mojito",
description: "Un Mocktail aux couleurs et saveurs alléchantes.",
decoration: "Rondelle citron jaune.",
preparation: "Préparation au shaker, servie dans un verre type Collins avec des glaçons plein.",
ingredients: [
"Jus de pamplemousse",
"Schweppes",
"Sirop de curaçao",
"Glaçons pleins"
],
quantity: "18 cl"
},
{
name: "Lait de coco Mojito",
description: "Un Mocktail aux saveurs exotiques qui rappelle les vacances.",
decoration: "Tranche d'ananas.",
preparation: "Préparation au shaker, servie dans un verre type Collins avec des glaçons pleins.",
ingredients: [
"Lait de coco",
"Sirop simple",
"Jus d'ananas",
"Glaçons pleins"
],
quantity: "18 cl"
},
{
name: "Fruité Mojito",
description: "Un Mocktail très fruité.",
decoration: "Tranche d'ananas.",
preparation: "Préparation au shaker, servie dans un verre type Collins avec des glaçons pleins.",
ingredients: [
"Jus d'orange",
"Jus d'ananas",
"Sirop de framboise",
"Glaçons pleins"
],
quantity: "18 cl"
},]

const mocktail1 = {
  nom: "Mocktail pétillant fraise-basilic",
  ingredients: [
    { nom: "jus de fraise", quantite: "4 cl" },
    { nom: "sirop de basilic", quantite: "2 cl" },
    { nom: "jus de citron jaune", quantite: "1 cl" },
    { nom: "eau pétillante", quantite: "11 cl" }
  ],
  decoration: "rondelle de citron",
  preparation: "Préparation au shaker, servie dans un verre type Collins avec des glaçons pleins.",
  quantite: "18 cl"
};

const mocktail2 = {
  nom: "Mocktail fruité",
  ingredients: [
    { nom: "jus de framboise", quantite: "3 cl" },
    { nom: "jus de fraise", quantite: "3 cl" },
    { nom: "jus d'orange", quantite: "6 cl" },
    { nom: "jus de pomme", quantite: "6 cl" }
  ],
  decoration: "tranche d'ananas",
  preparation: "Préparation au shaker, servie dans un verre type Collins avec des glaçons pleins.",
  quantite: "18 cl"
};
  
