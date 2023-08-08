import { logoUrl, footerInfo, paymentMethod } from "@/lib/constant";
import { FooterInfoProps } from "@/types";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    // Destructuring Payment Methid
    const [{ title }, { paymentCard }] = paymentMethod;
    return (
        // The Entire Footer Container
        <footer className=" mt-8 bg-gray-200">
            {/* Container for the entire div */}
            <div className="flex flex-wrap px-4 dt:container dt:px-0">
                <div className="flex w-full py-4 ">
                    <div className="flex w-full min-w-fit flex-col gap-4 dt:flex-row">
                        <div className="flex-none px-6 py-1">
                            <Link href={logoUrl[0].link}>
                                <Image
                                    src={logoUrl[0].url}
                                    height={100}
                                    width={100}
                                    alt={logoUrl[0].title}
                                />
                            </Link>
                        </div>
                        {/* Looped for cont us company and help */}
                        {footerInfo.map(({ title, info }) => (
                            <div key={title} className="grow">
                                <span className="font-semibold">{title}</span>
                                {info.map(
                                    ({ title, info }: FooterInfoProps) => (
                                        <p
                                            key={title}
                                            className=" tb:leading-7">
                                            {title} {info}
                                        </p>
                                    )
                                )}
                            </div>
                        ))}
                    </div>
                </div>
                {/* Payment Methdd Container */}
                <div className="relative flex w-full items-center justify-center gap-x-2 pb-2 ">
                    {/* Payment Method Acceptable */}
                    <div>
                        <span className="font-semibold">{title}</span>
                    </div>
                    {/* Payment Methods Logos */}
                    <div className="flex gap-4">
                        {paymentCard?.map(({ title, imageUrl }) => (
                            <div key={title}>
                                <Image
                                    src={imageUrl}
                                    width={50}
                                    height={50}
                                    alt={title}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* Copyright information */}
            <div className="bg-blue-950 ">
                <p className="px-4 py-2 text-center text-white">
                    COPYRIGHT © 2023. COMPUTECH COMPANY. C. R. NO. 4030079509
                    VAT ID 311079231900003. ALL RIGHTS RESERVED.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
