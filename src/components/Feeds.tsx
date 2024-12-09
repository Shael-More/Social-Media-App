import Posts from "./Posts"
import Share from "./Share"
import { PostData } from "../Constant"

const Feeds = () => {
  return (
    <div className="w-2/3 ">
      <div className="p-5 space-y-3 ">
        <Share />
        {PostData.map(post => (
          <Posts key={post.id} post = {post}/>
        ))}
      </div>
    </div>
  )
}

export default Feeds