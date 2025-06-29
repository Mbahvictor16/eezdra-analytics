import React from 'react'

type Props = {
    children: React.JSX.Element;
    title: string;
    description: string;
}

export default function FeatureCard({ children, title, description }: Props) {
    return (
        <div className='h-fit py-12 px-8 rounded-md shadow-lg'>
            {children}
            <h3 className='my-4 font-bold text-xl'>{title}</h3>
            <p className='text-sm md:text-base text-muted'><small>{description}</small></p>
        </div>
    )
}