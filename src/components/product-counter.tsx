import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";
import { useEffect, useState } from "react";

interface ProductCounterProps {
    countProduct: number;
}

const NUMBER_ONE = 1;
const NUMBER_ZERO = 0;

export function ProductCounter({ countProduct }: ProductCounterProps) {
    const [count, setCount] = useState<number>(countProduct);

    function handleAddClick() {
        setCount(count + NUMBER_ONE);
    }

    function handleMinusClick() {
        if (count > NUMBER_ZERO) {
            setCount(count - NUMBER_ONE);
        }
    }

    useEffect(() => {
        setCount(countProduct);
    }, [countProduct])

    return (
        <div className="bg-[var(--base-button)] flex flex-row items-center justify-center rounded-md">
            <Button variant="ghost" onClick={handleMinusClick} className="hover:bg-[var(--base-hover)]">
                <Minus className="text-[var(--product-purple)] w-5 h-5" />
            </Button>
            <span className="text-base text-[var(--base-title)]">{count}</span>
            <Button variant="ghost" onClick={handleAddClick} className="hover:bg-[var(--base-hover)]">
                <Plus className="text-[var(--product-purple)] w-5 h-5" />
            </Button>
        </div>
    );
}