import { format } from "date-fns";

type Props = {
    title: string;
    description: string;
    date: string;
    readTime: string;
}

const PostPreview: React.FunctionComponent<Props> = ({ title, description, date, readTime }) => {
    return (
        <div className="flex flex-col gap-5">
            <div className="flex gap-2 items-center">
                <div className="text-xl font-semibold">{title}</div>
                <div className="flex gap-2">
                    <span className="text-sm opacity-50">{format(date, "LLLL d")}</span>
                    <span className="text-sm opacity-50">{readTime}</span>
                </div>
            </div>
            <p className="text-sm ">
                {description}
            </p>
        </div>
    )
}

export default PostPreview;