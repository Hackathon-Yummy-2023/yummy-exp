import Image from "next/image"

export default function PaymentPage() {
    return(
        <main className="bg-[#bb92d4] h-full px-6 py-6 flex flex-col justify-start items-center gap-y-10">
            <h1 className="text-3xl font-bold text-white self-start">🎉 Pago éxitoso 🎉</h1>
            <Image width={186} height={186} src="/images/qr-code.svg" alt="Código QR" title="Código QR" className="bg-white w-full h-auto " />
        </main>
    )
}