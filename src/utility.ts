// utility types

type Product = {
    id: number;
    name:string;
    price:string;
    stock: number;
    color?:string;
};

// manual approach
// type ProductSummary = {
//      id: number;
//      name:string;
//      price:string;
// };



// to add one or more itmes   type=Pick
type ProductSummary = Pick <Product , 'id' | 'name' | 'price'> ;

// to remove one or more items type=Omit
type ProductWithOutStockandColor = Omit<Product , "stock" | "color">;


// to make an individual product required    type= Required
type ProductWithColor = Required <Product>;
const product1 : ProductWithColor = {
    id: 222,
    name: 'Mouse',
    price: '700',
    stock: 100,
    color: "black",
};


// to make all the key optional  type=Partial
type OptionalProduct = Partial <Product>;


// to make all the key read only   type=Readonly
type ProductReadOnly = Readonly<Product>;

const emptyObj : Record <string , unknown >= {};


const product2 = {
    id: 222,
    name: 'Mouse',
    price: '700',
};

