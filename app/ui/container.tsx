type Props = {
    children: React.ReactNode;
}

const Container = ({ children }: Props) => {
    return <div className="prose dark:prose-invert container px-4 py-20">{children}</div>
}

export default Container;