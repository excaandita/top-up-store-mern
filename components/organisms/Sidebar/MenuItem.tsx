import Image from "next/image";
import cx from "classnames";
import Link from "next/link";

interface MenuItemProps {
    title: string,
    icon: 'ic-menu-overview' | 'ic-menu-transaction' | 'ic-menu-reward' | 'ic-menu-messages' | 'ic-menu-card' | 'ic-menu-settings' | 'ic-menu-logout' ,
    href: string,
    active?: boolean,
}

export default function MenuItem(props: Partial<MenuItemProps>) {
    const { title, icon, href, active } = props;
    const classItem = cx({
        'item': true,
        'mb-30': true,
        active,
    })
    return (
        <>
            <div className={classItem}>
                <div className="me-3">
                    <Image src={`/icon/${icon}.svg`} alt='ic-menu-overview' width={25} height={25}/>
                </div>
                <p className="item-title m-0">
                    <Link href={`${href}`} legacyBehavior>
                        <a className="text-lg text-decoration-none">{title}</a>
                    </Link>
                </p>
            </div>
        </>
        
    )
}
