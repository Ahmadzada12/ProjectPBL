import AddNewPost from "../components/Atoms/AddNewPost";
import Navbar from "../components/Atoms/Navbar";
import Sidebar from "../components/Atoms/Sidebar";
const NewPost = () => (
    <div>
      <Navbar namapaage={"Add new post"} />
      <Sidebar >
      <AddNewPost/>
      </Sidebar>
    </div>
  );
  
  export default NewPost;