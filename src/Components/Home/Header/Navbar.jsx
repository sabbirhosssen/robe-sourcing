import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
//BellIcon
import { Link } from "react-router-dom";
// import logo from "./../../Images/logo-removebg-preview.png";
import logo from "./../../Image/logo-removebg-preview.png";
//css

import "./../Footer/footer.css";
export const Navbar = () => {
  const navigation = [
    { name: "Home", href: "/", current: false },
    { name: "About Us", href: "about", current: false },
    { name: "Service", href: "service", current: false },
    { name: "Projects", href: "projects", current: false },
    { name: "Contacts", href: "contacts", current: false },
  ];

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <Disclosure as="nav" className="bg_back ">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 md:px-4 lg:px-8">
            <div className="relative flex h-16 items-center justify-evenly">
              <div className="absolute inset-y-0 left-0  flex items-center md:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch md:justify-between">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="block h-8 w-auto lg:hidden"
                    src={logo}
                    alt="Your Company"
                  />
                  <img
                    className="hidden h-8 w-auto lg:block"
                    src={logo}
                    alt="Your Company"
                  />

                  <h1 className="inline-block  text-[16px] sm:text-[20px] md:text-[20px] lg:text-[24px] font-serif  text-white">
                    ROBE SOURCING INTERNATIONAL LTD
                  </h1>
                </div>
                <div className="hidden sm:ml-6 md:ml-1 lg:ml-6  md:block">
                  <div className="flex  space-x-4 sm:space-x-0 md:space-x-0 lg:space-x-3 xl:space-x-5 2xl:space-x-5  justify-center justify-items-center">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={classNames(
                          item.current
                            ? "bg-gray-900  text-white "
                            : "text-gray-300  focus:bg-gray-900 hover:bg-gray-700 hover:text-white",
                          "px-3 md:px-2  py-2 rounded-md text-sm  md:text-md  font-medium "
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="space-y-1 px-6 pt-2 pb-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="Link"
                  to={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900  text-white"
                      : "text-gray-300 focus:bg-gray-900 hover:bg-gray-700 hover:text-white",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};
