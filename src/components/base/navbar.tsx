import { User, Heart, ShoppingCart, SearchIcon, Search } from 'lucide-react';
import Link from 'next/link';
import { Input } from '~/components/ui/input';
import MaxWidthWrapper from '~/components/common/MaxWidthWrapper';
import { Button } from '../ui/button';

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm">
      <MaxWidthWrapper>
        <div className="flex justify-between items-center h-16">
          <div className="flex">
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

          <div></div>

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
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
