type Props = {
    readTime: string;
}

const ReadTimeFormatter: React.FunctionComponent<Props> = ({ readTime }) => {
    return (
        <div className="text-sm text-gray-800">
            {readTime}
        </div>
    )
}

export default ReadTimeFormatter;