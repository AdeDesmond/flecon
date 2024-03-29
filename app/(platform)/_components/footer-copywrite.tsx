import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  MessageCircleIcon,
} from "lucide-react";
import Link from "next/link";

export const FooterCopywrite = () => {
  const date = new Date();
  return (
    <div className="w-full h-20 bg-[#12182B] flex items-center justify-between p-4">
      <div className="text-white">
        All Copywrites @{date.getFullYear()} are reserved by Flecon Company Ltd.
      </div>
      <div className="hidden  lg:flex md:flex items-center gap-x-2">
        <Link href="/">
          <MessageCircleIcon className="h-4 w-4 text-white" />
        </Link>
        <Link href="/">
          <InstagramIcon className="h-4 w-4 text-white" />
        </Link>
        <Link href="/">
          <FacebookIcon className="h-4 w-4 text-white" />
        </Link>
        <Link href="/">
          <LinkedinIcon className="h-4 w-4 text-white" />
        </Link>
      </div>
    </div>
  );
};
