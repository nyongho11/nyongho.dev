import { Post } from "@/interfaces/post";
import { format } from "date-fns";

type Props = Omit<Post, 'slug' | 'content'>;

const PostPreview: React.FunctionComponent<Props> = ({
  title,
  description,
  date,
  readTime,
}) => {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex flex-col sm:flex-row gap-2 items-start sm:items-center">
        <div className="text-xl font-semibold">{title}</div>
        <div className="flex gap-1">
          <span className="text-sm opacity-50">
            {format(date, "LLLL d, yyyy")}
          </span>
          <span className="text-sm opacity-50">·</span>
          <span className="text-sm opacity-50">{readTime}</span>
        </div>
      </div>
      <p className="text-sm opacity-70">{description}</p>
    </div>
  );
};

export default PostPreview;
