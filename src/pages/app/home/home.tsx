import { Helmet } from "react-helmet-async";
import { MainHome } from "./main-home";
import { serviceFeaturesData } from "@/data/serviceFeatures";
import { Catalog } from "./catalog";
import { productsData } from "@/data/products";

export function Home() {
    return (
        <>
            <Helmet title="Home" />
            <div>
                <MainHome
                    title="Encontre o café perfeito para qualquer hora do dia"
                    generalDescription="Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora"
                    serviceFeatures={serviceFeaturesData}
                />
                <nav className="mb-20">
                    <div className="mb-20 text-4xl font-bold text-[var(--base-title)]">
                        <h1>Nossos cafés</h1>
                    </div>
                    <section className="grid grid-cols-4 gap-6">
                        <Catalog products={productsData} />
                    </section>
                </nav>
            </div>
        </>
    );
}