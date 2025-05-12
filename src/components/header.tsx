import LocationSolid from "../assets/icon/location-solid.svg";
import ShopCart from "../assets/icon/shop-cart.svg";
import Logo from "../assets/logo/logo.svg";

export function Header() {
    return (
        <header>
            <div className="px-44 py-16 flex flex-row justify-between items-center">
                <section>
                    <img src={Logo} alt="Logo" />
                </section>
                <section>
                    <div className="flex flex-row items-center gap-4">
                        <div className="bg-[var(--product-purple-light)] py-2 px-4 flex flex-row items-center gap-2">
                            <img src={LocationSolid} alt="Location Solid" className="w-4 h-4" />
                            <h3 className="text-sm text-[var(--product-purple-dark)]">Recife, PE</h3>
                        </div>
                        <div className="bg-[var(--product-yellow-light)] py-2 px-4">
                            <img src={ShopCart} alt="Shop Cart" className="w-5 h-5" />
                        </div>
                    </div>
                </section>
            </div>
        </header>
    );
}