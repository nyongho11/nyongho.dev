type Props = {
    children: React.ReactNode;
}

const Container = ({ children }: Props) => {
    return <div className="container px-4 pt-8">{children}</div>
}

export default Container;