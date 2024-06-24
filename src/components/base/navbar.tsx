import { User, Heart, ShoppingCart, SearchIcon, MenuIcon } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Input } from '~/components/ui/input';
import { Button } from '~/components/ui/button';
import MaxWidthWrapper from '~/components/common/MaxWidthWrapper';
import logo from '~/assets/logo.png';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '~/components/ui/sheet';

const Navbar = () => {
  return (
    <nav className="h-16 sticky z-40 inset-x-0 top-0 w-full bg-white border-b border-gray-200 shadow-sm bg-white/75 backdrop-blur-lg transition-all dark:bg-gray-900 dark:border-gray-700 dark:shadow-gray-700">
      <MaxWidthWrapper>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 h-16">
          <div className="md:flex justify-start items-center hidden ">
            <Link
              href="/mens"
              className="text-gray-600 dark:text-gray-300 mr-3 text-md hover:text-gray-800 dark:hover:text-gray-100 font-semibold hover:font-bold border-b-2 border-transparent hover:border-gray-800 dark:hover:border-gray-100"
            >
              MENS
            </Link>

            <Link
              href="/womens"
              className="text-gray-600 dark:text-gray-300 mx-3 text-md hover:text-gray-800 dark:hover:text-gray-100 font-semibold hover:font-bold border-b-2 border-transparent hover:border-gray-800 dark:hover:border-gray-100"
            >
              WOMENS
            </Link>

            <Link
              href="/kids"
              className="text-gray-600 dark:text-gray-300 mx-3 text-md hover:text-gray-800 dark:hover:text-gray-100 font-semibold hover:font-bold border-b-2 border-transparent hover:border-gray-800 dark:hover:border-gray-100"
            >
              KIDS
            </Link>
          </div>

          <Link
            href="/"
            className="flex justify-start md:justify-center items-center gap-2"
          >
            <Image src={logo} alt="bagvaly logo" className="h-10 w-10" />
            <span className="flex z-40 font-semibold text-2xl text-gray-900 dark:text-gray-100">
              Bagvaly
            </span>
          </Link>

          <div className="flex justify-end items-center">
            <div className="flex items-center space-x-4">
              <Input type="text" startIcon={<SearchIcon />} />

              <div className="hidden md:flex items-center space-x-4">
                <Link
                  href="#"
                  className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100"
                >
                  <User className="h-6 w-6" />
                </Link>
                <Link
                  href="/favorite"
                  className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100"
                >
                  <Heart className="h-6 w-6" />
                </Link>
                <Link
                  href=""
                  className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100"
                >
                  <ShoppingCart className="h-6 w-6" />
                </Link>
              </div>

              <Sheet>
                <SheetTrigger asChild>
                  <Button
                    className="md:hidden"
                    variant="outline"
                    aria-label="side-bar"
                  >
                    <MenuIcon />
                  </Button>
                </SheetTrigger>
                <SheetContent className="z-50 dark:bg-gray-800">
                  <SheetHeader>
                    <SheetTitle>
                      <Link
                        href="/"
                        className="flex justify-start md:justify-center items-center gap-2"
                      >
                        <Image
                          src={logo}
                          alt="bagvaly logo"
                          className="h-10 w-10"
                        />
                        <span className="flex z-40 font-semibold text-2xl text-gray-900 dark:text-gray-100">
                          Bagvaly
                        </span>
                      </Link>
                    </SheetTitle>
                  </SheetHeader>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
