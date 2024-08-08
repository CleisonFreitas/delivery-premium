import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "../ui/navigation-menu"

type BrowserMenuType = {
    menu: string;
    url?: string;
    items?: BrowserMenuType[];
}
export const BrowserMenu = ({ menu, url, items }: BrowserMenuType) => {
    return (
        <NavigationMenu className="bg-white hover:bg-white focus:outline-none focus:ring-0">
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger className="capitalize">{menu}</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <NavigationMenuLink>
                            <ul className="flex items-center flex-col gap-2 min-h-14 min-w-16">
                                {
                                    items?.map((item) =>
                                        <li className="border-b border-gray-400" key={item.menu}>{item.menu}</li>
                                    )
                                }
                            </ul>
                        </NavigationMenuLink>
                    </NavigationMenuContent>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}
