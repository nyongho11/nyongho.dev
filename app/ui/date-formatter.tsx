import { format, parseISO } from "date-fns";

type Props = {
    dateString: string;
}

const DateFormatter: React.FunctionComponent<Props> = ({ dateString }) => {
    const date = parseISO(dateString);
    return <time className="text-sm text-gray-500" dateTime={dateString}>{format(date, "LLLL d, yyyy")}</time>
}

export default DateFormatter;