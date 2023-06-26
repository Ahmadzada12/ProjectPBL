import AddNewPost from "../components/Atoms/AddNewPost";
import Navbar from "../components/Atoms/Navbar";
import Sidebar from "../components/Atoms/Sidebar";
const EditPost = () => (
    <div>
      <Navbar namapaage={"Edit Post"} />
      <Sidebar >
      <AddNewPost/>
      </Sidebar>
    </div>
  );
  
  export default EditPost;