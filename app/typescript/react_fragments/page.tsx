import FragmentChild from "./fragmentChild"
import ParentComponent from "./parentComponent"

const ReactFragments = () =>{
    return(
        <div >
            <ParentComponent>
                <FragmentChild />
            </ParentComponent>
        </div>

    )
}

export default ReactFragments