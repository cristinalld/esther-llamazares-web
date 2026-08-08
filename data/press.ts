import { sitePath } from "@/lib/sitePath";
import autoPress from "@/data/press-auto.json";
type AutoPressItem = {
  id: string;
  medio: string;
  fecha: string;
  publishedAt: string;
  titular: string;
  resumen: string;
  imagen: string;
  url: string;
};

export const approvedPress = autoPress as AutoPressItem[];
export const press = approvedPress.map((item) => ({
  ...item,
  imagen: sitePath(item.imagen),
}));
