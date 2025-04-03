import ShopCartWhite from "../assets/icon/shop-cart-white.svg";
import Timer from "../assets/icon/timer.svg";
import Package from "../assets/icon/package.svg";
import Coffee from "../assets/icon/coffee.svg";
import BodyCoffee from "../assets/img/body-coffee.svg";

import { ServiceFeatures } from "../types/serviceFeatures";

export const serviceFeaturesData: ServiceFeatures = {
    shopCart: {
        image: ShopCartWhite,
        alt: "Carrinho de compras",
        text: "Compra simples e segura",
    },
    timer: {
        image: Timer,
        alt: "Relógio",
        text: "Entrega rápida e rastreada",
    },
    package: {
        image: Package,
        alt: "Pacote",
        text: "Embalagem mantém o café intacto",
    },
    coffee: {
        image: Coffee,
        alt: "Café",
        text: "O café chega fresquinho até você",
    },
    bodyImage: {
        image: BodyCoffee,
        alt: "Ilustração de café",
    },
};
