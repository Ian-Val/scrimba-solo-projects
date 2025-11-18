type PaymentModelProps = {
  cancelPayment: () => void;
  confirmPayment: () => void;
};

export default function PaymentModal({
  cancelPayment,
  confirmPayment,
}: PaymentModelProps) {
  return (
    <section className="z-50 fixed flex w-full h-full bg-black/20">
      <form
        onSubmit={(e) => {
          const form = e.currentTarget;

          if (!form.checkValidity()) {
            e.preventDefault();
            form.reportValidity();
            return;
          }

          e.preventDefault();
          confirmPayment();
        }}
        className="bg-white m-8 my-auto p-4 rounded shadow-2xl"
      >
        <h2 className="text-center text-lg font-bold mb-5">
          Enter Card Details
        </h2>
        <input
          aria-label="Enter You Full Name."
          placeholder="Jane Smith"
          type="text"
          name="name"
          id="name"
          required={true}
          className="border border-neutral-400 p-2 mb-4 w-full rounded"
        />
        <input
          aria-label="Enter Card Number."
          placeholder="4207 4207 4207 4207"
          type="number"
          name="card-number"
          id="card-number"
          required={true}
          className="border border-neutral-400 p-2 mb-4 w-full rounded"
        />
        <input
          aria-label="Enter CVV."
          placeholder="123"
          type="number"
          name="cvv"
          id="cvv"
          required={true}
          className="border border-neutral-400 p-2 mb-4 w-full rounded"
        />
        <button className="uppercase tracking-widest active:bg-emerald-300 hover:bg-emerald-500 bg-emerald-400 text-white w-full mt-5 py-2 rounded">
          Pay
        </button>
        <button
          onClick={cancelPayment}
          className="active:text-neutral-800 hover:text-neutral-400 uppercase text-sm tracking-widest text-center block w-full underline underline-offset-4 text-neutral-500 mt-4 mb-2"
        >
          Cancel
        </button>
      </form>
    </section>
  );
}
