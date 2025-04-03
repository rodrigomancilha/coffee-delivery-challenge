import ExpressoTradional from "../assets/img/expresso-tradicional.svg";
import ExpressoAmericano from "../assets/img/expresso-americano.svg";
import ExpressoCremoso from "../assets/img/expresso-cremoso.svg";
import ExpressoGelado from "../assets/img/expresso-gelado.svg";
import CafeComLeite from "../assets/img/cafe-com-leite.svg";
import Latte from "../assets/img/latte.svg";
import Capuccino from "../assets/img/capuccino.svg";
import Macchiato from "../assets/img/macchiato.svg";
import Mocaccino from "../assets/img/mochaccino.svg";
import ChocolateQuente from "../assets/img/chocolate-quente.svg";
import Cubano from "../assets/img/cubano.svg";
import Havaiano from "../assets/img/havaiano.svg";
import Arabe from "../assets/img/arabe.svg";
import Irlandes from "../assets/img/irlandes.svg";
import { Product } from "@/types/products";

export const productsData: Product[] = [
    {
        id: 1,
        image: ExpressoTradional,
        features: ['Tradicional'],
        title: "Expresso Tradicional",
        description: "O tradicional café feito com água quente e grãos moídos",
        price: "6,00"
    },
    {
        id: 2,
        image: ExpressoAmericano,
        features: ['Tradicional'],
        title: "Expresso Americano",
        description: "Expresso diluído, menos intenso que o tradicional",
        price: "6,50"
    },
    {
        id: 3,
        image: ExpressoCremoso,
        features: ['Tradicional'],
        title: "Expresso Cremoso",
        description: "Café expresso tradicional com espuma cremosa",
        price: "7,00"
    },
    {
        id: 4,
        image: ExpressoGelado,
        features: ['Tradicional', 'Gelado'],
        title: "Expresso Gelado",
        description: "Bebida Preparada com café expresso e cubos de gelo",
        price: "8,00"
    },
    {
        id: 5,
        image: CafeComLeite,
        features: ['Tradicional', 'Com Leite'],
        title: "Café com Leite",
        description: "Meio a meio de expresso tradicional com leite vaporizado",
        price: "8,50"
    },
    {
        id: 6,
        image: Latte,
        features: ['Tradicional', 'Com Leite'],
        title: "Latte",
        description: "Uma dose de café expresso com o dobro de leite e espuma cremosa",
        price: "9,00"
    },
    {
        id: 7,
        image: Capuccino,
        features: ['Tradicional', 'Com Leite'],
        title: "Capuccino",
        description: "Bebida com canela feita de doses iguais de café, leite e espuma",
        price: "9,50"
    },
    {
        id: 8,
        image: Macchiato,
        features: ['Tradicional', 'Com Leite'],
        title: "Macchiato",
        description: "Café expresso misturado com um pouco de leite quente e espuma",
        price: "8,00"
    },
    {
        id: 9,
        image: Mocaccino,
        features: ['Tradicional', 'Com Leite'],
        title: "Mocaccino",
        description: "Café expresso com calda de chocolate, pouco leite e espuma",
        price: "10,00"
    },
    {
        id: 10,
        image: ChocolateQuente,
        features: ['Especial', 'Com Leite'],
        title: "Chocolate Quente",
        description: "Bebida feita com chocolate dissolvido no leite quente e café",
        price: "10,00"
    },
    {
        id: 11,
        image: Cubano,
        features: ['Especial', 'Alcoólico', 'Gelado'],
        title: "Cubano",
        description: "Drink gelado de café expresso com rum, creme de leite e hortelã",
        price: "13,00"
    },
    {
        id: 12,
        image: Havaiano,
        features: ['Especial'],
        title: "Havaiano",
        description: "Bebida adocicada preparada com café e leite de coco",
        price: "11,00"
    },
    {
        id: 13,
        image: Arabe,
        features: ['Especial'],
        title: "Árabe",
        description: "Bebida preparada com grãos de café árabe e especiarias",
        price: "10,50"
    },
    {
        id: 14,
        image: Irlandes,
        features: ['Especial', 'Alcoólico'],
        title: "Irlandês",
        description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
        price: "14,00"
    }
]