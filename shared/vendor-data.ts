export type DeviceCategory = "Laptop" | "Tablet";

export type VendorDevice = {
  id: string;
  name: string;
  model: string;
  image: string;
  imageAlt: string;
  price: number | null;
  currency: string;
  ram: string;
  storage: string;
  processor: string;
  condition: string;
  availability: string;
  workDeviceStatus: string;
  description: string;
  category: DeviceCategory;
};

export const trustedVendorEmail = "support@yourdomain.com";

export const vendorDevices: VendorDevice[] = [
  {
    id: "macbook-air-13-m2",
    name: "MacBook Air 13-inch",
    model: "M2 Chip",
    image: "https://images.pexels.com/photos/196647/pexels-photo-196647.jpeg?auto=compress&cs=tinysrgb&w=1200",
    imageAlt: "MacBook Air on a clean workspace beside a tablet",
    price: 1099,
    currency: "USD",
    ram: "8GB RAM",
    storage: "256GB SSD",
    processor: "Apple M2",
    condition: "Excellent",
    availability: "Available",
    workDeviceStatus: "Amazon Work Device",
    description: "A lightweight, reliable work device for contributor assignments, communication, and everyday productivity.",
    category: "Laptop",
  },
  {
    id: "macbook-pro-14-m3",
    name: "MacBook Pro 14-inch",
    model: "M3 Pro Chip",
    image: "https://images.pexels.com/photos/6135908/pexels-photo-6135908.jpeg?auto=compress&cs=tinysrgb&w=1200",
    imageAlt: "MacBook Pro displaying a professional creative workspace",
    price: 1999,
    currency: "USD",
    ram: "18GB RAM",
    storage: "512GB SSD",
    processor: "Apple M3 Pro",
    condition: "Excellent",
    availability: "Available",
    workDeviceStatus: "Amazon Work Device",
    description: "A high-performance laptop for demanding contributor workflows, research, and multi-application work.",
    category: "Laptop",
  },
  {
    id: "windows-laptop-i7",
    name: "Windows Laptop 15-inch",
    model: "Professional Series",
    image: "https://images.pexels.com/photos/7947638/pexels-photo-7947638.jpeg?auto=compress&cs=tinysrgb&w=1200",
    imageAlt: "Professional Windows laptop used in a modern business setting",
    price: 899,
    currency: "USD",
    ram: "16GB RAM",
    storage: "512GB SSD",
    processor: "Intel Core i7",
    condition: "Very Good",
    availability: "Available",
    workDeviceStatus: "Amazon Work Device",
    description: "A capable Windows option with dependable performance for contributor tools and browser-based assignments.",
    category: "Laptop",
  },
  {
    id: "business-laptop-t14",
    name: "Business Laptop 14-inch",
    model: "ThinkPad T14 Gen 4",
    image: "https://images.pexels.com/photos/34124/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1200",
    imageAlt: "Business laptop on a bright office desk",
    price: 1199,
    currency: "USD",
    ram: "16GB RAM",
    storage: "512GB SSD",
    processor: "Intel Core i7 vPro",
    condition: "Excellent",
    availability: "Available",
    workDeviceStatus: "Amazon Work Device",
    description: "A durable business-class laptop designed for secure, consistent work across the contributor platform.",
    category: "Laptop",
  },
  {
    id: "workstation-laptop-precision",
    name: "Workstation Laptop 16-inch",
    model: "Precision Professional",
    image: "https://images.pexels.com/photos/10843995/pexels-photo-10843995.jpeg?auto=compress&cs=tinysrgb&w=1200",
    imageAlt: "Premium workstation laptop in a professional workspace",
    price: null,
    currency: "USD",
    ram: "32GB RAM",
    storage: "1TB SSD",
    processor: "Intel Core i9",
    condition: "Excellent",
    availability: "Limited availability",
    workDeviceStatus: "Amazon Work Device",
    description: "A powerful workstation for contributors who need additional capacity for complex research and production tasks.",
    category: "Laptop",
  },
  {
    id: "supported-tablet-ipad-air",
    name: "Supported Tablet 11-inch",
    model: "iPad Air",
    image: "https://images.pexels.com/photos/286565/pexels-photo-286565.jpeg?auto=compress&cs=tinysrgb&w=1200",
    imageAlt: "Tablet on a clean professional desk",
    price: 699,
    currency: "USD",
    ram: "8GB RAM",
    storage: "256GB",
    processor: "Apple M2",
    condition: "Excellent",
    availability: "Available",
    workDeviceStatus: "Amazon Work Device",
    description: "A portable supported tablet for approved contributor workflows that benefit from a flexible mobile form factor.",
    category: "Tablet",
  },
];
