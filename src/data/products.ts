import domeImage from "@/assets/cctv-dome.jpg";
import bulletImage from "@/assets/cctv-bullet.jpg";
import ptzImage from "@/assets/cctv-ptz.jpg";

export interface Product {
  id: string;
  name: string;
  category: string;
  price: string;
  originalPrice?: string;
  image: string;
  features: string[];
  specs: {
    resolution: string;
    viewing_angle: string;
    night_vision: string;
    storage: string;
    connectivity: string;
  };
  description: string;
  whatsappMessage: string;
}

export const products: Product[] = [
  {
    id: "dome-4k-pro",
    name: "SecureVision Dome 4K Pro",
    category: "Indoor CCTV",
    price: "Rp 2.850.000",
    originalPrice: "Rp 3.200.000",
    image: domeImage,
    features: [
      "Resolusi 4K Ultra HD",
      "Night Vision hingga 30m",
      "AI Motion Detection",
      "Audio Recording",
      "Cloud Storage Ready",
      "Mobile App Control"
    ],
    specs: {
      resolution: "4K (3840x2160)",
      viewing_angle: "110° Wide Angle",
      night_vision: "30 meter IR Range",
      storage: "Cloud + Local SD Card",
      connectivity: "WiFi + Ethernet"
    },
    description: "Kamera dome premium dengan teknologi AI terdepan untuk pengawasan indoor yang optimal. Dilengkapi dengan fitur deteksi gerakan cerdas dan kualitas video 4K yang jernih.",
    whatsappMessage: "Halo, saya tertarik dengan SecureVision Dome 4K Pro seharga Rp 2.850.000. Bisakah Anda berikan informasi lebih lengkap?"
  },
  {
    id: "bullet-outdoor-ultra",
    name: "SecureVision Bullet Outdoor Ultra",
    category: "Outdoor CCTV",
    price: "Rp 3.250.000",
    originalPrice: "Rp 3.650.000",
    image: bulletImage,
    features: [
      "Weather Resistant IP67",
      "4K Night Vision",
      "Smart Motion Tracking",
      "Two-Way Audio",
      "Solar Panel Compatible",
      "Advanced Analytics"
    ],
    specs: {
      resolution: "4K (3840x2160)",
      viewing_angle: "90° Fixed Focus",
      night_vision: "50 meter Smart IR",
      storage: "NVR + Cloud Backup",
      connectivity: "PoE + WiFi"
    },
    description: "Kamera bullet outdoor tahan cuaca dengan teknologi night vision terdepan. Ideal untuk pengawasan perimeter dan area outdoor yang membutuhkan keamanan maksimal.",
    whatsappMessage: "Halo, saya ingin menanyakan tentang SecureVision Bullet Outdoor Ultra seharga Rp 3.250.000. Apakah ada paket instalasi?"
  },
  {
    id: "ptz-smart-360",
    name: "SecureVision PTZ Smart 360",
    category: "PTZ Camera",
    price: "Rp 8.500.000",
    originalPrice: "Rp 9.500.000",
    image: ptzImage,
    features: [
      "360° Pan & Tilt",
      "30x Optical Zoom",
      "Auto Tracking",
      "Preset Positions",
      "Smart Analytics",
      "Remote Control"
    ],
    specs: {
      resolution: "4K (3840x2160)",
      viewing_angle: "360° Full Coverage",
      night_vision: "100 meter IR Range",
      storage: "Enterprise NVR",
      connectivity: "Fiber Optic + Ethernet"
    },
    description: "Kamera PTZ premium dengan kontrol penuh 360 derajat dan zoom optical 30x. Solusi ultimate untuk pengawasan area luas dengan coverage maksimal.",
    whatsappMessage: "Halo, saya berminat dengan SecureVision PTZ Smart 360 seharga Rp 8.500.000. Bisakah saya mendapat demo produk?"
  },
  {
    id: "dome-basic-hd",
    name: "SecureVision Dome Basic HD",
    category: "Indoor CCTV",
    price: "Rp 1.250.000",
    image: domeImage,
    features: [
      "Full HD 1080p",
      "Night Vision 20m",
      "Motion Detection",
      "Mobile Viewing",
      "Easy Installation",
      "1 Year Warranty"
    ],
    specs: {
      resolution: "Full HD (1920x1080)",
      viewing_angle: "85° Wide Angle",
      night_vision: "20 meter IR Range",
      storage: "Local SD Card",
      connectivity: "WiFi"
    },
    description: "Solusi CCTV ekonomis dengan kualitas Full HD untuk pengawasan indoor. Mudah dipasang dan dioperasikan, cocok untuk rumah dan kantor kecil.",
    whatsappMessage: "Halo, saya tertarik dengan SecureVision Dome Basic HD seharga Rp 1.250.000. Apakah ada promo khusus?"
  },
  {
    id: "bullet-night-vision",
    name: "SecureVision Bullet Night Vision",
    category: "Outdoor CCTV",
    price: "Rp 1.850.000",
    image: bulletImage,
    features: [
      "Full HD Resolution",
      "Advanced Night Vision",
      "Weather Proof",
      "Motion Alerts",
      "Remote Access",
      "Professional Grade"
    ],
    specs: {
      resolution: "Full HD (1920x1080)",
      viewing_angle: "75° Fixed Focus",
      night_vision: "40 meter Smart IR",
      storage: "DVR + Mobile App",
      connectivity: "BNC + WiFi"
    },
    description: "Kamera bullet outdoor dengan teknologi night vision canggih. Tahan cuaca dan memberikan gambar jernih bahkan dalam kondisi gelap total.",
    whatsappMessage: "Halo, saya ingin tahu lebih lanjut tentang SecureVision Bullet Night Vision seharga Rp 1.850.000. Apakah cocok untuk area parkir?"
  },
  {
    id: "ptz-compact-zoom",
    name: "SecureVision PTZ Compact Zoom",
    category: "PTZ Camera",
    price: "Rp 4.750.000",
    image: ptzImage,
    features: [
      "180° Pan Range",
      "10x Digital Zoom",
      "Smart Tracking",
      "Preset Tours",
      "Mobile Control",
      "Professional Install"
    ],
    specs: {
      resolution: "Full HD (1920x1080)",
      viewing_angle: "180° Pan Coverage",
      night_vision: "60 meter IR Range",
      storage: "NVR System",
      connectivity: "PoE + Control Cable"
    },
    description: "Kamera PTZ kompak dengan fitur zoom dan tracking cerdas. Ideal untuk pengawasan area medium dengan kebutuhan kontrol dan monitoring fleksibel.",
    whatsappMessage: "Halo, saya tertarik dengan SecureVision PTZ Compact Zoom seharga Rp 4.750.000. Bisakah dijelaskan fitur smart tracking-nya?"
  }
];

export const categories = [
  { id: "all", name: "Semua Produk" },
  { id: "Indoor CCTV", name: "Indoor CCTV" },
  { id: "Outdoor CCTV", name: "Outdoor CCTV" },
  { id: "PTZ Camera", name: "PTZ Camera" }
];