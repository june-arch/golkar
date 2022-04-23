import Link from 'next/link';
import React from 'react'

type Props = {
    href: string;
    children: string;
    className?: string;
}

const MyLink = (props: Props) => {
    const { href, children } = props;
    return (
        <Link href={href}>
            <a>{children}</a> 
        </Link>
    )
}

export default MyLink