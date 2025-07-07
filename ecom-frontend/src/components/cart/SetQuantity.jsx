
const btnStyles = "border-[1.2px] border-slate-800 px-3 py-1 rounded-sm";
const SetQuantity = ({
    quantity,
    cardCounter,
    handeQtyIncrease,
    handleQtyDecrease,
}) => {
   return (
   <div className="flex gap-8 items-center">
        {cardCounter ? null : <div className="font-semibold">QUANTITY</div>}
        <div className="flex md:flex-row flex-col gap-4 items-center lg:text-[22px] text-sm">
            <button
                disabled={quantity<=1}
                className={btnStyles}
                onClick={handleQtyDecrease}>
                -
            </button>
                <div className="text-red-500">{quantity}</div>
            <button
                className={btnStyles}
                onClick={handeQtyIncrease}>
                +
            </button>
        </div>
    </div>
   );
};

export default SetQuantity;