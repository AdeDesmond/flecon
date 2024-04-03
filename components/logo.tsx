import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  width?: number;
  height?: number;
}

export const Logo = ({ width, height }: LogoProps) => {
  return (
    <div className="text-white cursor-pointer">
      <Link href={"/"}>
        <Image
          src="/logo/logo.svg"
          alt="logo"
          width={width ? width : 100}
          height={height ? height : 100}
          className="object-cover rounded-md"
        />
      </Link>
    </div>
  );
};
