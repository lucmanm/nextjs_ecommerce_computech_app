import Image from "next/image";
import Link from "next/link";

const Logo = () => {
    return ( 
        <div>
        <Link href="/">
          <Image
            src="/computech-landscape-logo.png"
            width={150}
            height={0}
            alt="computech logo"
            className="hidden lg:block"
          />
          <Image
            src="/logo-2x2.png"
            width={42}
            height={0}
            alt="computech logo"
            className="lg:hidden"
          />
        </Link>
      </div>
     );
}
 
export default Logo;