import { Button } from "@/components/ui/button";
import ShopCartWhite from "../../../assets/icon/shop-cart-white.svg"
import { Product } from "@/types/products";
import { ProductCounter } from "@/components/product-counter";

interface CatalogItemsProps {
    products: Product[];
}

export function Catalog({ products }: CatalogItemsProps) {
    return (
        <>
            {products.map((product) => (
                <div className="bg-[var(--base-card)] rounded-tr-4xl rounded-bl-4xl mt-14 p-4">
                    <div className="flex flex-col items-center justify-center gap-4 text-center">
                        <img src={product.image} alt="Expresso Tradicional" className="-mt-10" />
                        <div className="flex gap-1 justify-center">
                            {product.features.map((feature, index) => (
                                <span key={index} className="bg-[var(--product-yellow-light)] px-2 py-1 rounded-lg">
                                    <h5 className="text-xs font-bold text-[var(--product-yellow-dark)] uppercase">{feature}</h5>
                                </span>
                            ))}
                        </div>
                        <h3 className="text-base font-bold text-[var(--base-title)]">{product.title}</h3>
                        <p className="text-sm text-[var(--base-label)] mb-4">{product.description}</p>
                        <div className="flex flex-row items-center justify-center gap-3">
                            <div className="flex flex-row items-center gap-1">
                                <h5 className="text-sm text-[var(--base-title)]">R$</h5>
                                <h3 className="text-xl font-bold text-[var(--base-title)]">{product.price}</h3>
                            </div>
                            <ProductCounter countProduct={0} />
                            <Button className="bg-[var(--product-purple-dark)] hover:bg-[var(--product-purple)] py-4 px-3 flex flex-row items-center justify-center rounded-md">
                                <img src={ShopCartWhite} alt="Shop Cart" className="w-5 h-5" />
                            </Button>
                        </div>
                    </div>
                </div>
            ))}

        </>
    );
}