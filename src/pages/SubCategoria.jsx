import { useParams } from "react-router-dom";
import ListPosts from "../Components/ListPost";


const SubCategoria = ()=>{
    const {subcategoria} = useParams();
    return(
        <ListPosts url= {`/posts?categoria=${subcategoria}`} />
    )
}

export default SubCategoria