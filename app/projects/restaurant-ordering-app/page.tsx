import Header from "./components/Header";
import MenuItem from "./components/MenuItem";
import menudata from "@/src/data/menu.json";
import type { MenuItem as MenuItemType } from "./types/MenuItem";

export default function RestaurantPage() {
  return (
    <main>
      <Header />
      {menudata.map((item: MenuItemType) => (
        <MenuItem key={item.id} itemData={item} />
      ))}
    </main>
  );
}
