// Menu Item component

import Link from "next/link";

const MenuItem = ({ item }) => {
	return (
		<Link className={'bg-hcblue text-slate-50 px-8 py-4 rounded-md'} href={ item.href } >
			{ item.title }
		</Link>
	)
}

export default MenuItem