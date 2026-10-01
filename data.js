export const defaultSettings = {
  businessName: "SM Guppy Empire",
  whatsapp: "7603882711",
  phone: "9080827248",
  instagram: "sm_guppyempire",
  location: "Dharmapuri, Coimbatore",
  deliveryNotice: "Live fish delivery availability depends on location, weather, travel conditions and safe transportation. Please confirm delivery availability with SM Guppy Empire before payment.",
  freeDeliveryMinimum: 1500
};

export const categories = [
  ["Guppy Fish","Healthy guppies for aquariums","🐟"],
  ["Guppy Fry","Young guppies for growing","🫧"],
  ["Fancy Guppies","Colorful premium varieties","✨"],
  ["Male Guppies","Bright male guppies","🌈"],
  ["Female Guppies","Healthy females","💙"],
  ["Breeding Pairs","Selected pairs for breeders","💕"],

];

export const defaultProducts = [
  {id:"P001",name:"Dumbo Ear Guppy White",category:"Fancy Guppies",variety:"Dumbo Ear ",price:120,stock:200,size:"2–3 cm",age:"Juvenile",breeding:true,care:"Easy",description:"Deep  coloration and active swimming.",image:"https://i.pinimg.com/736x/8d/f4/b1/8df4b1cf1915bf05f2802f18099fa151.jpg",featured:true},
  {id:"P002",name:"Dumbo Ear Guppy Blue",category:"Fancy Guppies",variety:"Dumbo Ear ",price:120,stock:8,size:"2–3 cm",age:"Juvenile",breeding:true,care:"Easy",description:"Vibrant  patterned guppy for planted aquariums.",image:"https://www.lincsaquatics.com/images/woodthorpe-hall-aquatics-neon-blue-guppy-poecilia-reticulata-p18870-31408_thumb.jpg",featured:true},
  {id:"P003",name:"Dumbo Ear Guppy Male 1",category:"Male Guppies",variety:"Dumbo Ear",price:60,stock:15,size:"2–3 cm",age:"Juvenile",breeding:true,care:"Easy",description:"Bright  male guppy with strong coloration.",image:"https://i.pinimg.com/1200x/e7/47/b6/e747b6f895df5fe2b1e2de8d1c55be96.jpg",featured:false},
  {id:"P004",name:"Leopard Guppy",category:"Fancy Guppies",variety:"Cobra",price:100,stock:6,size:"2–3 cm",age:"Juvenile",breeding:true,care:"Easy",description:"Distinctive pattern and lively personality.",image:"https://i.pinimg.com/1200x/2b/26/55/2b2655b4ced8cfd9c499dc623716d144.jpg",featured:true},
  {id:"P005",name:"The Common Guppy Poecilia reticulata",category:"Fancy Guppies",variety:"Galaxy",price:250,stock:5,size:"2–3 cm",age:"Juvenile",breeding:true,care:"Medium",description:"Eye-catching galaxy pattern for display tanks.",image:"https://i.pinimg.com/736x/da/65/df/da65dfa0c2bcab81fc53994b74fc5864.jpg",featured:true},
  {id:"P006",name:"Guppy Gold Bar",category:"Fancy Guppies",variety:"Guppy Gold Bar",price:200,stock:4,size:"2–3 cm",age:"Juvenile",breeding:true,care:"Medium",description:"Large pectoral fins with a graceful appearance.",image:"https://i.pinimg.com/1200x/09/34/fa/0934fa690be0dc8c6b3673e31e61d687.jpg",featured:false},
  {id:"P007",name:"Poecilla reticulata Guppy",category:"Fancy Guppies",variety:"Mixed Fancy",price:60,stock:20,size:"2–3 cm",age:"Juvenile",breeding:true,care:"Easy",description:"Colorful fancy guppies selected from healthy stock.",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHoRgmVXcJvfRtTrzYpaqgiU10Yii5JoUl5mUxYd185TFS3I3h2bJJubo&s=10",featured:false},
  {id:"P008",name:"Male Guppy",category:"Male Guppies",variety:"Mixed Male",price:100,stock:25,size:"2–3 cm",age:"Juvenile",breeding:true,care:"Easy",description:"Healthy active males for community aquariums.",image:"https://i.pinimg.com/736x/f6/41/a6/f641a6bcb98a2626dcfd3d4b9651e321.jpg",featured:false},
  {id:"P009",name:"Female Guppy",category:"Female Guppies",variety:"Mixed Female",price:60,stock:24,size:"2–3 cm",age:"Juvenile",breeding:true,care:"Easy",description:"Healthy females suitable for breeding groups.",image:"https://i.pinimg.com/736x/db/b2/50/dbb250cabd16fa78b44d936e7de14d94.jpg",featured:false},
  {id:"P010",name:"Guppy Fry 2Months",category:"Guppy Fry",variety:"Mixed Fry",price:40,stock:50,size:"1–1.5 cm",age:"Fry",breeding:false,care:"Medium",description:"Healthy young fry for hobbyists and grow-out tanks.",image:"https://media.invisioncic.com/b300999/monthly_2021_02/VID_122640318_041839_409_2.gif.0999130006d3f2c4403959a0e3cb74de.gif",featured:true},
  {id:"P011",name:"Guppy Fry 1Months",category:"Breeding Pairs",variety:"Selected Pair",price:350,stock:7,size:"3–4 cm",age:"Adult",breeding:true,care:"Easy",description:"One healthy male and female selected for breeding.",image:"https://buyguppy.com/cdn/shop/collections/minifishfry.jpg?crop=center&height=1200&v=1722735618&width=1200",featured:true}
];

export const defaultDeliveryAreas = [
  {id:"D001",district:"Dharmapuri",state:"Tamil Nadu",pinCodes:["635303"],available:true,deliveryCharge:100,freeDeliveryMinimum:1500,minimumOrder:500,estimatedDelivery:"1–2 Days",deliveryType:"Local Delivery",notes:"Live fish delivery after confirmation.",active:true},
  {id:"D002",district:"Coimbatore",state:"Tamil Nadu",pinCodes:["641004"],available:true,deliveryCharge:120,freeDeliveryMinimum:1500,minimumOrder:500,estimatedDelivery:"1–2 Days",deliveryType:"Local Delivery",notes:"Confirm weather and travel conditions.",active:true},
 
];

export function load(key, fallback){
  try { const v=localStorage.getItem(key); return v ? JSON.parse(v) : fallback; } catch { return fallback; }
}
export function save(key,value){ localStorage.setItem(key, JSON.stringify(value)); }