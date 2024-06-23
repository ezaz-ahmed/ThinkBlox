import { User, Heart, ShoppingCart, SearchIcon } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Input } from '~/components/ui/input';
import MaxWidthWrapper from '~/components/common/MaxWidthWrapper';
import { Button } from '../ui/button';
import logo from '~/assets/logo.png';

const Navbar = () => {
  return (
    <nav className=" h-16 sticky z-[100] inset-x-0 top-0 w-full bg-white border-b border-gray-200 shadow-sm bg-white/75 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className=" grid grid-cols-3 gap-4 h-16">
          <div className="flex justify-start items-center">
            <Link
              href="/mens"
              className="text-gray-600 mr-3 text-md hover:text-gray-800 font-semibold hover:font-bold border-b-2 border-transparent hover:border-gray-800"
            >
              MENS
            </Link>

            <Link
              href="/womens"
              className="text-gray-600 mx-3 text-md hover:text-gray-800 font-semibold hover:font-bold border-b-2 border-transparent hover:border-gray-800"
            >
              WOMENS
            </Link>

            <Link
              href="/kids"
              className="text-gray-600 mx-3 text-md hover:text-gray-800 font-semibold hover:font-bold border-b-2 border-transparent hover:border-gray-800"
            >
              KIDS
            </Link>
          </div>

          <Link href="/" className=" flex justify-center items-center gap-2">
            <Image src={logo} alt="bagvaly logo" className=" h-10 w-10" />
            <span className=" flex z-40 font-semibold text-2xl text-gray-900">
              Bagvaly
            </span>
          </Link>

          <div className=" flex justify-end items-center">
            <div className="flex items-center space-x-4">
              <Input type="text" startIcon={<SearchIcon />} />
              <Link href="#" className="text-gray-600 hover:text-gray-800">
                <User className="h-6 w-6" />
              </Link>
              <Link
                href="/favorite"
                className="text-gray-600 hover:text-gray-800"
              >
                <Heart className="h-6 w-6" />
              </Link>
              <a href="#" className="text-gray-600 hover:text-gray-800">
                <ShoppingCart className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
