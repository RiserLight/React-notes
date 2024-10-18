import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const menus = [
  {
    label: "Dashboard",
    icon: <i className="ri-dashboard-3-line mr-2"></i>,
    link: "/admin/dashboard",
  },
  {
    label: "Products",
    icon: <i className="ri-shopping-cart-line mr-2"></i>,
    link: "/admin/products",
  },
  {
    label: "Customers",
    icon: <i className="ri-user-3-line mr-2"></i>,
    link: "/admin/customers",
  },
  {
    label: "Orders",
    icon: <i className="ri-shape-line mr-2"></i>,
    link: "/admin/orders",
  },
  {
    label: "Payments",
    icon: <i className="ri-money-dollar-circle-line mr-2"></i>,
    link: "/admin/payments",
  },
  {
    label: "Settings",
    icon: <i className="ri-settings-3-line mr-2"></i>,
    link: "/admin/settings",
  },
];

const Layout = ({ children }) => {
  const [size, setSize] = useState(280);
  const location = useLocation();
  const [accountMenu, setAccountMenu] = useState(false);

  return (
    <>
      <div className="md:block hidden">
        <aside
          className="bg-indigo-600 fixed top-0 left-0 h-full overflow-hidden"
          style={{
            width: size,
            transition: "0.3s",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            {menus.length > 0 &&
              menus.map((menu, index) => (
                <Link
                  key={menu.label}
                  to={menu.link}
                  className="px-4 py-3 text-gray-50 text-[17.5px] hover:bg-rose-600 hover:text-white"
                  style={{
                    backgroundColor:
                      location.pathname === menu.link ? "red" : "transparent",
                  }}
                >
                  {menu.icon} {menu.label}
                </Link>
              ))}
          </div>
          <button className="text-left px-4 py-3 text-gray-50 text-[17.5px] hover:bg-rose-600 hover:text-white">
            <i className="ri-logout-circle-r-line mr-2"></i>
            Logout
          </button>
        </aside>
        <section
          className="bg-gray-100 h-screen"
          style={{
            marginLeft: size,
          }}
        >
          <nav className="bg-white p-6 shadow flex items-center justify-between sticky top-0 left-0">
            <div className="flex gap-4 items-center">
              <button
                className="bg-gray-50 hover:bg-indigo-600 hover:text-white w-8 h-8"
                onClick={() => setSize(size === 280 ? 0 : 280)}
              >
                <i className="ri-menu-2-line text-xl"></i>
              </button>
              <h1 className="text-md font-semibold"> Shopcode</h1>
            </div>
            <div>
              <button className="relative">
                <img
                  src="/images/avt.avif"
                  className="w-10 h-10 rounded-full"
                  onClick={() => setAccountMenu(!accountMenu)}
                />
                {accountMenu && (
                  <div className="absolute top-18 right-0 bg-white w-[200px] p-6 shadow-lg">
                    <div>
                      <h1 className="text-lg font-semibold">Rahul</h1>
                      <p className="text-gray-500">example@gmail.com</p>
                      <div className="h-px bg-gray-200 my-4" />
                      <button>
                        <i className="ri-logout-circle-r-line mr-2"></i>
                        Logout
                      </button>
                    </div>
                  </div>
                )}
              </button>
            </div>
          </nav>
          <div className="p-6">{children}</div>
        </section>
      </div>
    </>
  );
};

export default Layout;
