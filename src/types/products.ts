export type ProducFeature =
    | 'Tradicional'
    | 'Com Leite'
    | 'Gelado'
    | 'Especial'
    | 'Alcoólico';

export interface Product {
    id: number;
    image: string;
    features: ProducFeature[];
    title: string;
    description: string;
    price: string;
}