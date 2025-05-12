import { ProductCounter } from "@/components/product-counter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Helmet } from "react-helmet-async";
import Bank from "../../../assets/icon/bank.svg";
import CreditCard from "../../../assets/icon/credit-card.svg";
import Dollar from "../../../assets/icon/dollar.svg";
import LocateOutlineIcon from "../../../assets/icon/location-outline.svg";
import Money from "../../../assets/icon/money.svg";
import Trash from "../../../assets/icon/trash.svg";
import ExpressoTradicional from "../../../assets/img/expresso-tradicional.svg";

export function Orders() {
    return (
        <>
            <Helmet title="Pedidos" />
            <main className="grid grid-cols-2 gap-4">
                <section>
                    <h2 className="mb-6 text-xl font-bold text-[var(--base-subtitle)]">
                        Complete seu pedido
                    </h2>

                    <div className="flex flex-col gap-4">
                        <div className="bg-[var(--base-background)] p-10">
                            <div className="flex flex-row items-center justify-start gap-2">
                                <img src={LocateOutlineIcon} alt="Locate" className="w-5 h-5" />
                                <h5 className="text-base text-[var(--base-subtitle)]">Endereço de Entrega</h5>
                            </div>
                            <p className="ml-7 text-sm text-[var(--base-text)]">
                                Informe o endereço onde deseja receber seu pedido
                            </p>
                            <div className="mt-10 flex flex-col gap-3">
                                <Input
                                    placeholder="CEP"
                                    className="rounded-none h-12 placeholder:text-[var(--base-label)] font-medium"
                                />
                                <Input
                                    placeholder="Rua"
                                    className="rounded-none h-12 placeholder:text-[var(--base-label)] font-medium"
                                />
                                <div className="flex flex-row gap-3">
                                    <Input
                                        placeholder="Número"
                                        className="rounded-none h-12 placeholder:text-[var(--base-label)] font-medium"
                                    />
                                    <Input
                                        placeholder="Complemento"
                                        className="rounded-none h-12 placeholder:text-[var(--base-label)] font-medium"
                                    />
                                </div>
                                <div className="flex flex-row gap-3">
                                    <Input
                                        placeholder="Bairro"
                                        className="rounded-none h-12 placeholder:text-[var(--base-label)] font-medium"
                                    />
                                    <Input
                                        placeholder="Cidade"
                                        className="rounded-none h-12 placeholder:text-[var(--base-label)] font-medium"
                                    />
                                    <Input
                                        placeholder="UF"
                                        className="rounded-none h-12 placeholder:text-[var(--base-label)] font-medium"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="bg-[var(--base-background)] p-10">
                            <div className="flex flex-row items-center justify-start gap-2">
                                <img src={Dollar} alt="Dollar" className="w-5 h-5" />
                                <h5 className="text-base text-[var(--base-subtitle)]">Pagamento</h5>
                            </div>
                            <p className="ml-7 text-sm text-[var(--base-text)]">
                                O pagamento é feito na entrega. Escolha a forma que deseja pagar
                            </p>
                            <div className="mt-8 flex flex-row flex-wrap justify-evenly gap-2">
                                <Button className="bg-[var(--base-card)] hover:bg-[var(--base-hover)] text-[var(--base-text)] rounded-xs p-8">
                                    <img src={CreditCard} alt="Credit Card" className="w-4 h-4" />
                                    <span className="text-base font-light text-[var(--base-text)]">CARTÃO DE CRÉDITO</span>
                                </Button>
                                <Button className="bg-[var(--base-card)] hover:bg-[var(--base-hover)] text-[var(--base-text)] rounded-xs p-8">
                                    <img src={Bank} alt="Bank" className="w-4 h-4" />
                                    <span className="text-base font-light text-[var(--base-text)]">CARTÃO DE DÉBITO</span>
                                </Button>
                                <Button className="bg-[var(--base-card)] hover:bg-[var(--base-hover)] text-[var(--base-text)] rounded-xs p-8">
                                    <img src={Money} alt="Money" className="w-4 h-4" />
                                    <span className="text-base font-light text-[var(--base-text)]">DINHEIRO</span>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="mb-6 text-xl font-bold text-[var(--base-subtitle)]">
                        Cafés selecionados
                    </h2>

                    <div className="bg-[var(--base-background)] rounded-tr-4xl rounded-bl-4xl p-10">
                        <div className="flex flex-row flex-wrap justify-between items-start">
                            <div>
                                <img src={ExpressoTradicional} alt="Expresso Tradicional" className="h-16 w-16" />
                            </div>
                            <div>
                                <h5 className="text-base text-[var(--base-subtitle)]">Expresso Tradicional</h5>
                                <div className="mt-2 flex flex-row gap-3">
                                    <ProductCounter countProduct={0} />
                                    <Button className="bg-[var(--base-button)] hover:bg-[var(--base-hover)] text-[var(--base-text)] rounded-xs h-10">
                                        <img src={Trash} alt="Trash" className="w-4 h-4" />
                                        DINHEIRO
                                    </Button>
                                </div>
                            </div>
                            <div className="flex flex-row items-center">
                                <h4>R$ 9,90</h4>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}