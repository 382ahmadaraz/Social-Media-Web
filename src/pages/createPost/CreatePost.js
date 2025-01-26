import Hero from '../../components/heroHeader/Hero'
import NewPost from '../../components/newpost/NewPost'
import Preview from '../../components/previewPost/Preview'
import Sidebar from '../../components/sidebar/Sidebar'

export default function CreatePost() {
  return (
     <div>
         <div className="md:flex flex-row ">
          <Sidebar />
          <div className="w-[100%] ">
            <Hero title="Create Post"  descryption="Create new post for yoursocial medias accounts.  " />
            <div className='flex flex-row justify-evenly'>
              <NewPost/>
              <Preview/>    
            </div>            
          </div>
        </div>
          <p className="text-gray-400 w-[70%] text-center mt-8 mb-4">Social Medias Developed by Ahmad Raza &copy; 2022</p>
    </div>
  )
}
