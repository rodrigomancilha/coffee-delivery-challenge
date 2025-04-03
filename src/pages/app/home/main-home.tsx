import { ServiceFeatures } from "@/types/serviceFeatures";

interface MainHomeProps {
    title: string;
    generalDescription: string;
    serviceFeatures: ServiceFeatures;
}

export function MainHome({ title, generalDescription, serviceFeatures }: MainHomeProps) {
    return (
        <main className="grid grid-cols-2 gap-4">
            <section className="py-10">
                <div className="flex flex-col gap-4">
                    <h1 className="text-4xl font-bold text-[var(--base-title)]">
                        {title}
                    </h1>
                    <p className="flex text-base text-[var(--base-subtitle)]">
                        {generalDescription}
                    </p>
                </div>
                <div className="mt-16 grid grid-cols-2 gap-4">
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-3">
                            <span className="bg-[var(--product-yellow-dark)] rounded-full h-6 w-6 flex items-center justify-center">
                                <img src={serviceFeatures.shopCart.image} alt={serviceFeatures.shopCart.alt} className="w-3 h-3" />
                            </span>
                            <p className="text-sm text-[var(--base-subtitle)]">{serviceFeatures.shopCart.text}</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="bg-[var(--product-yellow)] rounded-full h-6 w-6 flex items-center justify-center">
                                <img src={serviceFeatures.timer.image} alt={serviceFeatures.timer.alt} className="w-3 h-3" />
                            </span>
                            <p className="text-sm text-[var(--base-subtitle)]">{serviceFeatures.timer.text}</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-3">
                            <span className="bg-[var(--base-text)] rounded-full h-6 w-6 flex items-center justify-center">
                                <img src={serviceFeatures.package.image} alt={serviceFeatures.package.alt} className="w-3 h-3" />
                            </span>
                            <p className="text-sm text-[var(--base-subtitle)]">{serviceFeatures.package.text}</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="bg-[var(--product-purple)] rounded-full h-6 w-6 flex items-center justify-center">
                                <img src={serviceFeatures.coffee.image} alt={serviceFeatures.coffee.alt} className="w-3 h-3" />
                            </span>
                            <p className="text-sm text-[var(--base-subtitle)]">{serviceFeatures.coffee.text}</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="flex justify-end">
                <img src={serviceFeatures.bodyImage.image} alt={serviceFeatures.bodyImage.alt} className="min-w-11/12 max-h-7/10" />
            </section>
        </main>
    );
}